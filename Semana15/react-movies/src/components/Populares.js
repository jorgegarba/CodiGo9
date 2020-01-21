import React from 'react';

const Populares = ({ peliculas }) => {

  return (
    <main className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card-columns">
            {
              peliculas.map(peli => {
                return (
                  <div className="card">
                    <img src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{peli.title}</h5>
                      <p className="card-text">
                        {peli.overview}
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Fecha de Estreno: <strong>{peli.release_date}</strong>
                        </small>
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export default Populares;
