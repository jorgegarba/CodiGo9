import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Populares from './components/Populares';
import Cargando from './components/Cargando';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      cargando: true,
      pagina: 1,
    }
  }

  getPeliculasPopulares = async () => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-PE&sort_by=popularity.desc&include_adult=false&page=${this.state.pagina}`;
    let response = await fetch(url);
    let json = await response.json();

    this.setState({
      peliculas: json.results,
      cargando: false,

    })
  }

  componentDidMount() {
    this.getPeliculasPopulares();
  }

  siguiente = () => {
    let paginaActual = this.state.pagina;
    // La función setState es ASINCRONA
    // de modo que, si colocamos una instrucción luego del
    // setState, es probable que la instrucción no lea los nuevos
    // valores del state.
    // Para ello, todas las instrucciones que se deseen ejecutar
    // luego del setState, se colocan en un callback como segundo
    // parametro de la función mencionada
    this.setState({
      pagina: paginaActual + 1,
      cargando: true
    }, () => {
      this.getPeliculasPopulares();
    });
  }
  anterior = () => {
    let paginaActual = this.state.pagina;
    if (paginaActual > 1) {
      this.setState({
        pagina: paginaActual - 1,
        cargando: true
      }, () => {
        this.getPeliculasPopulares();
      });
    }
  }

  render() {

    let claseLi = this.state.pagina > 1 ? 'page-item' : 'page-item disabled';

    return (
      <Fragment>
        <Header />
        <div className="container mt-4">
          <div className="row">
            <div className="col-12">
              <nav aria-label="...">
                <ul className="pagination">
                  <li className={claseLi}>
                    <button className="page-link" onClick={this.anterior}>Previous</button>
                  </li>

                  <li className="page-item">
                    <button className="page-link" onClick={this.siguiente}>Next</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {
          this.state.cargando === true ?
            <Cargando /> :
            <Populares peliculas={this.state.peliculas} />
        }
      </Fragment>
    );
  }
}

export default App;
