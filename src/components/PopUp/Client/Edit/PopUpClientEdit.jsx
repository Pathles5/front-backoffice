// import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
export default function PopUpClientEdit() {
    return (
        <>
            <Popup trigger=
                {
                    <button type="button" id="buttonEdit" className="buttonTable">
                        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" fill="#ffffff" /><path d="M0 0h48v48h-48z" fill="none"/></svg>
                    </button>
                }
                position="left center">
                <div>GeeksforGeeks</div>
                <button>Guardar</button>
                <button>Cancelar</button>
            </Popup>
        </>
    );
}