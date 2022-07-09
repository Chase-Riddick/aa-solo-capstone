from flask import Blueprint, jsonify, session, request
# from app.models import db, User, Catch, Subpost, Condition
# from app.utils import upload, format_errors
# from sqlalchemy.orm import joinedload
import os

map_routes = Blueprint('map', __name__)
@map_routes.route("/key", methods=["GET"])
def load_map_api_key():
    key = os.environ.get('MAPS_API_KEY')
    return {'googleMapsAPIKey': key}


# @map_routes.route("/key", methods=["GET"])