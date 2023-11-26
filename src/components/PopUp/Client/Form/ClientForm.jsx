import './ClientForm.css';
import PropTypes from 'prop-types';
import { InputTextCustom } from '../../../../components-aux/InputTextCustom';
// import InputMaskCustom from '../../../../components-aux/InputMaskCustom';
import { CheckboxCustom } from '../../../../components-aux/CheckboxCustom';

export default function ClientForm(props) {
    const {client, reason} = props; 
    return (
        <div className="client-form">
            <InputTextCustom id="name" name='Nombre' value={client.name} reason={reason} />

            <InputTextCustom id="last_name" name='Apellidos' value={client.last_name} reason={reason} />

            <InputTextCustom id="phone" name='Teléfono' value={client.phone} reason={reason} />
            
            <InputTextCustom id="phone2" name='Teléfono 2' value={client.phone2} reason={reason} />
            
            <InputTextCustom id="email" name='E-Mail' value={client.email} reason={reason} />

            <InputTextCustom id="born_date" name='Fecha Nacimiento' value={client.born_date} reason={reason} />
            {/* <InputMaskCustom id="born_date" name='Fecha Nacimiento' invalue={client.born_date} reason={reason} /> */}

            <InputTextCustom id="document_id" name='DNI/NIF' value={client.document_id} reason={reason} />

            {/* <div className="box-input">
                <label htmlFor="ldpd" >LDPD</label><br />
                <Checkbox inputId="ldpd" name="ldpd"  checked={client.ldpd} className='check-box-ldpd' disabled/>
            </div> */}
            <CheckboxCustom id="ldpd" name='LDPD' value={client.ldpd} reason={reason} />

            <InputTextCustom id="type" name='Tipo cliente' value={client.type} reason={reason} />

            <div className="box-address">
                Direccion: 
                <div className='client-form box-address-2'>
                    <InputTextCustom id="street_name" name='Calle' value={client.address.street_name} reason={reason} />

                    <InputTextCustom id="street_number" name='Número' value={client.address.street_number} reason={reason} />

                    <InputTextCustom id="city" name='Municipio' value={client.address.city} reason={reason} />

                    <InputTextCustom id="postal_code" name='Código Postal' value={client.address.postal_code} reason={reason} />

                    <InputTextCustom id="province" name='Provincia' value={client.address.province} reason={reason} />
                </div>
            </div>
        </div>
    );
}


ClientForm.propTypes = {
    client: PropTypes.any.isRequired,
    reason: PropTypes.oneOf(['read','edit']),
};