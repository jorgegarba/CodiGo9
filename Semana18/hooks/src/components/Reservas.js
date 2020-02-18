import React from 'react'

export default function Reservas({ reserva }) {
    console.log(reserva);
    return (
        <div>
            <h1>Fecha Inicio: {reserva.res_fechin}</h1>
            <h1>Fecha Fin:{reserva.res_fechfin}</h1>
            <p>Observaciones:{reserva.res_obs}</p>
            <h2>Ambiente: {reserva.ambiente.amb_nro}</h2>
            <h2>Pabellon: {reserva.ambiente.pabellon.pab_nom}</h2>
        </div>
    )
}
