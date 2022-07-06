from flask import Blueprint, jsonify, session, request
from app.models import db, User, Catch, Subpost, Condition
from app.forms.subpost_form import CreateSubpost, UpdateSubpost
from flask_login import current_user, login_required

subpost_routes = Blueprint('subposts', __name__)

@login_required
@subpost_routes.route("", methods=["POST"])
def post_subpost():
    pass

@login_required
@subpost_routes.route("", methods=["PUT"])
def put_subpost():
    pass

@login_required
@subpost_routes.route("", methods=["DELETE"])
def delete_subpost():
    pass