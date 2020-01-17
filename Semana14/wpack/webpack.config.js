//Este archivito va a ser más como unas reglas que vamos a configurar, 
//el comando webpack leera este archivo y segun las reglas que esten configuradas generara los archivos que necesito


const path = require('path');

module.exports = {
    //
    entry: {
        home:path.resolve(__dirname, "src/js/index.js"),
        ventas:path.resolve(__dirname, "src/js/ventas.js")
    },
    output:{
        //
        path:path.resolve(__dirname,"dist"),
        filename:'js/[name].js'
    },
    //para cambiar el modo que trabaja webpack, development ó production
    mode: "development",

    //loaders
    module:{
        rules:[
            {
                //expresiones regulares
                //que cualquier archivo css pase por esto
                test: /\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    }
}


