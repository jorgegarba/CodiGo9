import React, { Component, Fragment } from 'react';
import videoLogin from '../assets/video.mp4';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            correo:'',
            password:''
        }
    }
    actualizarState= e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    iniciarSesion= (e)=>{
        e.preventDefault();
        this.props.datosUsuario({...this.state});
    }

    render() {
        return (
            <Fragment>
                <video src={videoLogin} autoPlay loop style={
                    {
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        minWidth: '100vw',
                        minHeight: '100vh',

                    }
                } muted>
                </video>
                <main className="container">
                    <div className="row align-items-center justify-content-center"
                        style={{ height: '100vh' }}>
                        <div className="col-6">
                            <form style={{
                                backgroundColor: 'rgba(50,50,50,0.5)',
                                padding: '50px',
                                borderRadius: '20px'
                            }} className="text-white" onSubmit={this.iniciarSesion}>
                                <div className="form-group">
                                    <label htmlFor="">Email:</label>
                                    <input type="email" className="form-control"
                                        placeholder="Ingrese su correo" name="correo" onChange={this.actualizarState}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password:</label>
                                    <input type="password" className="form-control"
                                        placeholder="Ingrese su contraseña" name="password" onChange={this.actualizarState}
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-primary btn-block" onClick={this.iniciarSesion}>
                                        Iniciar Sesión
                </button>
                                    <button type="button" className="btn btn-warning btn-block" onClick={this.iniciarSesion}>
                                        Registrarse
                </button>
                                    <button type="button" className="btn btn-danger btn-block" onClick={this.iniciarSesion}>
                                        Olvide mi Contraseña
                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </Fragment>
        );
    }
}

