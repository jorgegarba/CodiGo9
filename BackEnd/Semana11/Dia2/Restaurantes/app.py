from controllers import app, api, Mesa
api.add_resource(Mesa,'/mesa','/mesa/<int:id>')

if __name__=='__main__':
    app.run(debug=True)