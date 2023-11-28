import './ClientForm.css';
import PropTypes from 'prop-types';
import { InputTextCustom } from '../../../../components-aux/InputTextCustom';
import { CheckboxCustom } from '../../../../components-aux/CheckboxCustom';

export default function ClientForm(props) {
    const {client, reason} = props;  
    return (
        <>
            <input type="hidden" id='id' value={client.id} />
            <InputTextCustom id="name" name='Nombre' text={client.name} reason={reason} />

            <InputTextCustom id="last_name" name='Apellidos' text={client.last_name} reason={reason} />

            <InputTextCustom id="phone" name='Teléfono' text={client.phone} reason={reason} />
            
            <InputTextCustom id="phone2" name='Teléfono 2' text={client.phone2} reason={reason} />
            
            <InputTextCustom id="email" name='E-Mail' text={client.email} reason={reason} />

            <InputTextCustom id="born_date" name='Fecha Nacimiento' text={client.born_date} reason={reason} />

            <InputTextCustom id="document_id" name='DNI/NIF' text={client.document_id} reason={reason} />

            <InputTextCustom id="type" name='Tipo cliente' text={client.type} reason={reason} />

            <CheckboxCustom id="ldpd" name='LDPD' value={client.ldpd} reason={reason} />
            
            <div className="box-address">
                Direccion: 
                <div className='box-address-2'>
                    <InputTextCustom id="street_name" name='Calle' text={client.address.street_name} reason={reason} />

                    <InputTextCustom id="street_number" name='Número' text={client.address.street_number} reason={reason} />

                    <InputTextCustom id="city" name='Municipio' text={client.address.city} reason={reason} />

                    <InputTextCustom id="postal_code" name='Código Postal' text={client.address.postal_code} reason={reason} />

                    <InputTextCustom id="province" name='Provincia' text={client.address.province} reason={reason} />
                </div>
            </div>
        </>
    );
}

ClientForm.propTypes = {
    client: PropTypes.any.isRequired,
    reason: PropTypes.oneOf(['read','edit']),
};