import React from 'react'
import ReactEmoji from "react-emoji";

export default function Message({message:{text, user}, name}) {
    let usuarioActual = false;

    const nombreSinEspacios = name.trim().toLowerCase();

    if(user === nombreSinEspacios){
        usuarioActual = true;
    }

    return usuarioActual ? (
        <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
                <small>{nombreSinEspacios}</small>
                <div className="bg-dark p-1">
                    <p className="text-white">
                        {ReactEmoji.emojify(text)}
                    </p>
                </div>
            </div>
        </div>
    ) : (
        <div className="row">
            <div className="col-6">
                <small>{nombreSinEspacios}</small>
                <div className="bg-secondary p-1">
                    <p className="text-dark">
                        {ReactEmoji.emojify(text)}
                    </p>
                </div>
            </div>
            <div className="col-6"></div>
        </div>
    )
}
