import './ClientForm.css';
import PropTypes from 'prop-types';
import { InputTextCustom } from '../../../../components-aux/InputTextCustom';
import { CheckboxCustom } from '../../../../components-aux/CheckboxCustom';
import useClientPOST from '../../../../hooks/useClient';
// import { useState } from 'react';

export default function ClientForm(props) {
    const {client, reason} = props; 
    // const [state, setState] = useState('')
    const { handleSubmit, status, message } = useClientPOST();
    
    if (status === "success") {
    return (
        <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">{message}</div>
        </>
    );
    }

    if (status === "error") {
    return (
        <>
        <div className="text-2xl">Something bad happened!</div>
        <div className="text-md">{message}</div>
        </>
    );
    }
    
    return (
        <div className="client-form">
            {/* <form 
            className="client-form"
            action={`https://3j0l1da1ib.execute-api.eu-west-1.amazonaws.com/dev/api/v1/client/id/${client.id}`}
            onSubmit={ handleSubmit }
            method="post"> */}
                <InputTextCustom id="name" name='Nombre' text={client.name} reason={reason} />

                <InputTextCustom id="last_name" name='Apellidos' text={client.last_name} reason={reason} />

                <InputTextCustom id="phone" name='Teléfono' text={client.phone} reason={reason} />
                
                <InputTextCustom id="phone2" name='Teléfono 2' text={client.phone2} reason={reason} />
                
                <InputTextCustom id="email" name='E-Mail' text={client.email} reason={reason} />

                <InputTextCustom id="born_date" name='Fecha Nacimiento' text={client.born_date} reason={reason} />

                <InputTextCustom id="document_id" name='DNI/NIF' text={client.document_id} reason={reason} />

                <CheckboxCustom id="ldpd" name='LDPD' value={client.ldpd} reason={reason} />

                <InputTextCustom id="type" name='Tipo cliente' text={client.type} reason={reason} />

                <div className="box-address">
                    Direccion: 
                    <div className='client-form box-address-2'>
                        <InputTextCustom id="street_name" name='Calle' text={client.address.street_name} reason={reason} />

                        <InputTextCustom id="street_number" name='Número' text={client.address.street_number} reason={reason} />

                        <InputTextCustom id="city" name='Municipio' text={client.address.city} reason={reason} />

                        <InputTextCustom id="postal_code" name='Código Postal' text={client.address.postal_code} reason={reason} />

                        <InputTextCustom id="province" name='Provincia' text={client.address.province} reason={reason} />
                    </div>
                </div>
            {/* </form> */}
        </div>
    );
}


ClientForm.propTypes = {
    client: PropTypes.any.isRequired,
    reason: PropTypes.oneOf(['read','edit']),
};