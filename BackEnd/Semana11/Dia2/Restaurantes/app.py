from controllers import app, api, Mesa, Usuario, Login
api.add_resource(Mesa,'/mesa','/mesa/<int:id>')
api.add_resource(Usuario,'/registro')
api.add_resource(Login,'/login')

if __name__=='__main__':
    app.run(debug=True)