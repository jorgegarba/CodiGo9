import React from 'react'

export default function Input({message, sendMessage, setMessage}) {
    return (
        <form className="row">
            <input
                className="form-control col-9"
                type="text"
                placeholder="Escriba su mensaje..."
                value={message}
                onChange={(e) => { setMessage(e.target.value)}}
                onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null}
            />
            <button 
                className="btn btn-primary col-3" 
                onClick={e => sendMessage(e)}
            >
                Enviar
            </button>
        </form>
    )
}
