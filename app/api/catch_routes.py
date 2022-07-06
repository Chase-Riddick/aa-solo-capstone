from flask import Blueprint, jsonify, session, request
from app.models import db, User, Catch, Subpost, Condition
from app.forms.catch_form import CreateCatch, UpdateCatch
from app.utils import upload, format_errors
from flask_login import login_required
from sqlalchemy.orm import joinedload

catch_routes = Blueprint('catches', __name__)


@catch_routes.route("", methods=["GET"])
def get_catches():
    print('********************* This Hits *********************')
    catches = Catch.query.options(joinedload('condition'), joinedload('subposts')).all()
    print('********************* Catches *********************', catches)
    return {catch.id: catch.to_dict(condition=catch.condition, subposts=catch.subposts) for catch in catches}

@login_required
@catch_routes.route("", methods=["POST"])
def post_catch():
    pass

@login_required
@catch_routes.route("", methods=["PUT"])
def put_catch():
    pass

@login_required
@catch_routes.route("", methods=["DELETE"])
def delete_catch():
    pass
