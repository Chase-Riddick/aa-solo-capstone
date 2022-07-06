from flask import Blueprint, jsonify, session, request
from app.models import db, User, Catch, Subpost, Condition
from app.forms.catch_form import CreateCatch, UpdateCatch
from app.utils import upload, format_errors
from flask_login import login_required
from sqlalchemy.orm import joinedload

catch_routes = Blueprint('catches', __name__)


@catch_routes.route("", methods=["GET"])
def get_catches():
    catches = Catch.query.options(joinedload('condition'), joinedload('subposts')).all()
    return {catch.id: catch.to_dict(condition=catch.condition, subposts=catch.subposts) for catch in catches}

@login_required
@catch_routes.route("", methods=["POST"])
def post_catch():
    print('********************* This Hits A *********************')
    img = request.files["img"]
    print('********************* This Hits B1 *********************')
    img_url = upload(img)
    print('********************* This Hits B2 *********************')
    form = CreateCatch()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('********************* This Hits C *********************')
    if form.validate_on_submit():
        print('********************* This Hits D1 *********************')
        new_catch = Catch(
            img_url = img_url,
            fish = form.data['fish'],
            description = form.data['description'],
            length = form.data['length'],
            weight = form.data['weight'],
            bait = form.data['bait'],
            lure = form.data['lure'],
            long = form.data['long'],
            lat = form.data['lat'],
            user_id = form.data['user_id'],
        )
        print('********************* This Hits D2 *********************')
        db.session.add(new_catch)
        db.session.commit()
        print('********************* This Hits D3 *********************')
        new_condition = Condition(
            catch_id = new_catch.id
        )
        db.session.add(new_condition)
        db.session.commit()
        print('********************* This Hits E *********************')
        new_single_catch = Catch.query.options(joinedload('condition'), joinedload('subposts')).get(new_catch.id)
        return new_single_catch.to_dict(condition=new_single_catch.condition, subposts=new_single_catch.subposts)
    return {'errors': format_errors(form.errors)}, 401


@login_required
@catch_routes.route("", methods=["PUT"])
def put_catch():
    pass

@login_required
@catch_routes.route("", methods=["DELETE"])
def delete_catch():
    pass
