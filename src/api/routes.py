"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['POST'])
def add_user():
    if request.method == 'POST':
        body = request.json
        email = body.get('email', None)
        password = body.get('password', None)
        if email is None or password is None:
            return jsonify('All fields are required'), 400
        else:
            request_user = User(email=email, password=password, salt="12345") ##se podria hacer con el metodo init
            db.session.add(request_user)

            try:
                db.session.commit()
                return jsonify('Registed'), 201
            except Exception as error:
                db.session.rollback() ##### preguntar cual es la funcion de esto. 
                print(error.args)
                return jsonify('registry error'), 500
                
@api.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        body = request.json
        email = body.get('email', None)
        password = body.get('password', None)

        login_user = User.query.filter_by(email=email, password=password).one_or_none() ### este metodo es para traer un solo usuario. 

        if login_user:
            print('tiene persmiso')
            ##crear eltoken aqui
            return jsonify('esta logeado'),200
        else:
            return jsonify('bad credential'),400

    return jsonify('todobien'),201
