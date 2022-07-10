from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Catch
from sqlalchemy.orm import joinedload

user_routes = Blueprint('users', __name__)


@user_routes.route('')
def users():
    users = User.query.all()
    return {user.id: user.to_dict() for user in users}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


user_routes.route('/<int:id>/catches')
def user_catches(id):
    # catches = Catch.query.filter(Catch.user_id == id).all()
    catches = Catch.query.filter(Catch.user_id == id).options(joinedload('condition'), joinedload('subposts')).all()
    return {catch.id: catch.to_dict(condition = catch.condition, subposts = catch.subposts) for catch in catches}