from flask import Blueprint, jsonify, session, request
from app.models import db, User, Catch, Subpost, Condition, subpost
from app.forms.subpost_form import CreateSubpost, UpdateSubpost
from app.utils import format_errors
from flask_login import login_required
from sqlalchemy.orm import joinedload

subpost_routes = Blueprint('subposts', __name__)

@login_required
@subpost_routes.route("", methods=["POST"])
def post_subpost():
    form = CreateSubpost()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data)
    if form.validate_on_submit():
        target_catch_id = form.data["catch_id"]
        new_subpost = Subpost(
            content=form.data["content"],
            user_id=form.data["user_id"],
            catch_id=form.data["catch_id"]
        )

        db.session.add(new_subpost)
        db.session.commit()

        updated_single_catch = Catch.query.options(joinedload('condition'), joinedload('subposts')).get(target_catch_id)
        return updated_single_catch.to_dict(condition = updated_single_catch.condition, subposts = updated_single_catch.subposts)
    return {'errors': format_errors(form.errors)}

@login_required
@subpost_routes.route("", methods=["PUT"])
def put_subpost():
    form = UpdateSubpost()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('*************!!!******************')
    print(form.data)
    if form.validate_on_submit():
        target_catch_id = form.data["catch_id"]
        subpost = Subpost.query.get(form.data['id'])
        subpost.content = form.data['content']
        db.session.commit()

        updated_single_catch = Catch.query.options(joinedload('condition'), joinedload('subposts')).get(target_catch_id)
        return updated_single_catch.to_dict(condition = updated_single_catch.condition, subposts = updated_single_catch.subposts)
    print(format_errors(form.errors))
    return {'errors': format_errors(form.errors)}

@login_required
@subpost_routes.route('/<int:id>', methods=["DELETE"])
def delete_subpost(id):
    subpost = Subpost.query.get(id)
    target_catch_id = subpost.catch_id
    db.session.delete(subpost)
    db.session.commit()

    updated_single_catch = Catch.query.options(joinedload('condition'), joinedload('subposts')).get(target_catch_id)
    return updated_single_catch.to_dict(condition = updated_single_catch.condition, subposts = updated_single_catch.subposts)
