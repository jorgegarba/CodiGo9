import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import Populares from './components/Populares';
import Cargando from './components/Cargando';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      cargando: true
    }
  }

  getPeliculasPopulares = async () => {
    let url = "https://api.themoviedb.org/3/discover/movie?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-PE&sort_by=popularity.desc&include_adult=false&page=2";
    let response = await fetch(url);
    let json = await response.json();
    this.setState({
      peliculas: json.results,
      cargando: false
    })
  }

  componentDidMount() {
    this.getPeliculasPopulares();
  }

  render() {
    return (
      <Fragment>
        <Header />
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
