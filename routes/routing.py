from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from flask_cors import CORS, cross_origin
from model.products import Product,ProductSchema
app = Flask(__name__)
cors = CORS(app)
#@app.route('/products', methods = ['GET'])
#@cross_origin()
def index():
    get_products = Product.query.all()
    product_schema = ProductSchema(many=True)
    products = product_schema.dump(get_products)
    return make_response(jsonify(products))
#@app.route('/products/<id>', methods = ['GET'])
#@cross_origin()
def get_product_by_id(id):
    get_product = Product.query.get(id)
    product_schema = ProductSchema()
    product = product_schema.dump(get_product)
    return make_response(jsonify({product}))
#@app.route('/products/<id>', methods = ['PUT'])
#@cross_origin()
def update_product_by_id(id):
    data = request.get_json()
    get_product = Product.query.get(id)
    if data.get('title'):
        get_product.title = data['title']
    if data.get('productDescription'):
        get_product.productDescription = data['productDescription']
    if data.get('productBrand'):
        get_product.productBrand = data['productBrand']
    if data.get('price'):
        get_product.price= data['price']    
        
    db.session.add(get_product)
    db.session.commit()
    product_schema = ProductSchema(only=['id', 'title', 'productDescription','productBrand','price'])
    product = product_schema.dump(get_product)
    return make_response(jsonify(product))
#@app.route('/products/<id>', methods = ['DELETE'])
#@cross_origin(origin='localhost:4200',headers=['Content- Type','Authorization'])
def delete_product_by_id(id):
    get_product = Product.query.get(id)
    db.session.delete(get_product)
    db.session.commit()
    return make_response("",204)
#@app.route('/products', methods = ['POST'])
#@cross_origin()
def create_product():
    data = request.get_json()
    product_schema = ProductSchema()
    product = product_schema.load(data)
    result = product_schema.dump(product.create())
    return make_response(jsonify({"product": result}),200)