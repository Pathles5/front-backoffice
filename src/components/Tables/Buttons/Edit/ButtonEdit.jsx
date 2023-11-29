import './ButtonEdit.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PropTypes from 'prop-types';
// import ClientForm from '../../../PopUp/Client/Form/ClientForm';
import ClientFormController from '../../../PopUp/Client/Form/ClientFormController';

export default function ButtonEdit(props) {
    const {client} = props;
    return (
        <>
            <Popup trigger=
                {
                    <button type="button" id="buttonEdit" className="buttonTable">
                        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" fill="#ffffff" /><path d="M0 0h48v48h-48z" fill="none"/></svg>
                    </button>
                }
                className='popup-client'
                modal nested >
                {   
                    close => (
                        <div /* className='client-form' */>
                            <ClientFormController client={client} reason='edit' />
                            <div className='buttons-form'>
                                {/* NO TIENE SENTIDO AQUI; NO SE VA A IMPRIMIR UN CLIENTE
                                <button className="button-print" onClick=
                                    {() => close()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-printer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /><path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" /></svg>
                                        <span>
                                            Imprimir
                                        </span>
                                </button>
                                */}

                                <button className="button-cancel" onClick=
                                    {() => close()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 10l4 4m0 -4l-4 4" /></svg>
                                        <span>
                                            Cancelar
                                        </span>
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </>
    );
}

ButtonEdit.propTypes = {
    client: PropTypes.any.isRequired,
};