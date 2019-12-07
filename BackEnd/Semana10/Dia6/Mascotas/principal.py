from controladores import Mascota, Propietario
from flask_restful import Api
from app import app


api = Api(app)
api.add_resource(Mascota,'/mascota','/mascota/<int:id>')
api.add_resource(Propietario,'/propietario','/propietario/<int:id>')

if __name__=="__main__":
    app.run(debug=True)