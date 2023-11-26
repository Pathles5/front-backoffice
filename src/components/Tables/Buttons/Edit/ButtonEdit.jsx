import './ButtonEdit.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import PropTypes from 'prop-types';
import ClientForm from '../../../PopUp/Client/Form/ClientForm';

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
                        <>
                            <ClientForm client={client} reason='edit' />
                            <button className="button-save" onClick=
                                {() => close()}>
                                    Guardar
                            </button>
                            <button className="button-print" onClick=
                                {() => close()}>
                                    Imprimir
                            </button>

                            <button className="button-cancel" onClick=
                                {() => close()}>
                                    Cancelar
                            </button>
                        </>
                    )
                }
            </Popup>
        </>
    );
}

ButtonEdit.propTypes = {
    client: PropTypes.any.isRequired,
};