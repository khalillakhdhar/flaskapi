
from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from flask_cors import CORS, cross_origin
from model.products import Product,ProductSchema
from routes.routing  import *
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost:3306/demoflask'
db = SQLAlchemy(app)
@app.route('/products', methods = ['GET'])
@cross_origin()
def affiche():
    index()

if __name__ == "__main__":
    app.run(debug=True)
