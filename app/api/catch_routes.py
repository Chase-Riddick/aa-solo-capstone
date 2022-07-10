from cgi import print_environ
import imp
from flask import Blueprint, jsonify, session, request
from sqlalchemy import null
from app.models import db, User, Catch, Subpost, Condition
from app.forms.catch_form import CreateCatch, UpdateCatch
from app.utils import upload, format_errors
from flask_login import login_required
from sqlalchemy.orm import joinedload
import requests

catch_routes = Blueprint('catches', __name__)


@catch_routes.route("", methods=["GET"])
def get_catches():
    catches = Catch.query.options(joinedload('condition'), joinedload('subposts')).all()
    return {catch.id: catch.to_dict(condition = catch.condition, subposts = catch.subposts) for catch in catches}

@login_required
@catch_routes.route("", methods=["PUT"])
def put_catch():
    print('******************A************')



    # AWS Upload
    img = None
    img_url = None


    if request.files:
        img = request.files["img"]
        img_url = upload(img)

    form = UpdateCatch()
    print('******************A************')
    print(form.data)
    form['csrf_token'].data = request.cookies['csrf_token']
#
    if form.validate_on_submit():
        print('******************B************')
        target_catch = Catch.query.get(form.data['id'])
        target_catch.fish = form.data['fish']
        target_catch.description = form.data['description']
        target_catch.length = form.data['length']
        target_catch.weight = form.data['weight']
        target_catch.bait = form.data['bait']
        target_catch.lure = form.data['lure']
        target_catch.long = form.data['long']
        target_catch.lat = form.data['lat']
        if img_url != None:
            target_catch.img_url = img_url

        db.session.commit()

    #         const getWeather = async () => {
    #   console.log('This also hit')
    #   const response = await fetch('https://api.weatherapi.com/v1/history.json?key=9724b547848d4baf884180226220907&q=London&dt=2022-07-06');
    #   console.log('This also hit too')
    #   if (response.ok) {
    #       const data = await response.json();
    #       console.log('-----------------------------------------')
    #       console.log(data)
    #       }
    # }


        updated_single_catch = Catch.query.options(joinedload('condition'), joinedload('subposts')).get(target_catch.id)
        return updated_single_catch.to_dict(condition = updated_single_catch.condition, subposts = updated_single_catch.subposts)
    return {'errors': format_errors(form.errors)}


@login_required
@catch_routes.route("", methods=["POST"])
def post_catch():
    img = request.files["img"]
    img_url = upload(img)

    form = CreateCatch()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

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

        db.session.add(new_catch)
        db.session.commit()

        new_condition = Condition(
            catch_id = new_catch.id
        )
        db.session.add(new_condition)
        db.session.commit()

        res = requests.get('https://api.weatherapi.com/v1/history.json?key=9724b547848d4baf884180226220907&q=London&dt=2022-07-06')
        print("************************")
        print(res.text)

        new_single_catch = Catch.query.options(joinedload('condition'), joinedload('subposts')).get(new_catch.id)
        return new_single_catch.to_dict(condition = new_single_catch.condition, subposts=new_single_catch.subposts)
    return {'errors': format_errors(form.errors)}


@login_required
@catch_routes.route('/<int:id>', methods=["DELETE"])
def delete_catch(id):
        target_catch = Catch.query.get(id)
        db.session.delete(target_catch)
        db.session.commit()
        return {'id': id}
