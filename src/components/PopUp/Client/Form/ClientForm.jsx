import './ClientForm.css';
import { Checkbox } from 'primereact/checkbox';
import PropTypes from 'prop-types';
import { InputCustom } from '../../../../components-aux/InputCustom';

export default function ClientForm(props) {
    const {client, reason} = props; 
    return (
        <div className="clientRead">
            <InputCustom id="name" name='Nombre' value={client.name} reason={reason} />

            <InputCustom id="last_name" name='Apellidos' value={client.last_name} reason={reason} />

            <div className="box-input">
                <label htmlFor="last_name">Apellidos</label><br />
                <InputCustom id="last_name" placeholder={client.last_name} disabled></InputCustom>
            </div>

            <div className="box-input">
                <label htmlFor="phone">Teléfono</label><br />
                <InputCustom id="phone" placeholder={client.phone} disabled></InputCustom>
            </div>
            
            <div className="box-input">
                <label htmlFor="phone2">Teléfono 2</label><br />
                <InputCustom id="phone2" placeholder={client.phone2??''} disabled></InputCustom>
            </div>
            
            <div className="box-input">
                <label htmlFor="email" >E-Mail</label><br />
                <InputCustom id="email" placeholder={client.email} disabled></InputCustom>
            </div>

            <div className="box-input">
                <label htmlFor="born_date">Fecha Nacimiento</label><br />
                <InputCustom id="born_date" placeholder={client.born_date} disabled></InputCustom>
            </div>

            <div className="box-input">
                <label htmlFor="document_id" >DNI/NIF</label><br />
                <InputCustom id="document_id" placeholder={client.document_id} disabled></InputCustom>
            </div>

            <div className="box-input">
                <label htmlFor="ldpd" >LDPD</label><br />
                <Checkbox inputId="ldpd" name="ldpd"  checked={client.ldpd} className='check-box-ldpd' disabled/>
            </div>

            <div className="box-input">
                <label htmlFor="type" >Tipo cliente:</label><br />
                <InputCustom id="type" placeholder={client.type} disabled></InputCustom>
            </div>

            <div className="box-address">
                Direccion: 
                <div className='clientRead box-address-2'>
                    <div className="box-input box-street-name">
                        <label htmlFor="street_name">Calle</label>
                        <InputCustom id="street_name" placeholder={client.address.street_name} disabled></InputCustom>
                    </div>
                    <div className="box-input box-street-number">
                        <label htmlFor="street_number">Número</label>
                        <InputCustom id="street_number" placeholder={client.address.street_number} disabled></InputCustom>
                    </div>
                    <div className="box-input box-city">
                        <label htmlFor="city">Municipio</label>
                        <InputCustom id="city" placeholder={client.address.city} disabled></InputCustom>
                    </div>
                    <div className="box-input boxA-posta-code">
                        <label htmlFor="postal_code">Código Postal</label>
                        <InputCustom id="postal_code" placeholder={client.address.postal_code} disabled></InputCustom>
                    </div>
                    <div className="box-input box-province">
                        <label htmlFor="province">Provincia</label>
                        <InputCustom id="province" placeholder={client.address.province} disabled></InputCustom>
                    </div>
                </div>
            </div>
        </div>
    );
}


ClientForm.propTypes = {
    client: PropTypes.any.isRequired,
    reason: PropTypes.oneOf(['read','edit']),
};