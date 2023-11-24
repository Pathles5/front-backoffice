import './ClientFormRead.css';
import { InputMask } from 'primereact/inputmask';
import PropTypes from 'prop-types';

export default function ClientFormRead(props) {
    const {client} = props;
    return (
        <div className="clienRead card p-fluid flex flex-wrap gap-3">
            <div className="flex-auto">
                <label htmlFor="name" className="font-bold block mb-2">Nombre</label>
                <InputMask id="name" placeholder={client.name} disabled></InputMask>
            </div>

            <div className="flex-auto">
                <label htmlFor="last_name" className="font-bold block mb-2">Apellidos</label>
                <InputMask id="last_name" placeholder={client.last_name} disabled></InputMask>
            </div>

            <div className="flex-auto">
                <label htmlFor="phone" className="font-bold block mb-2">Teléfono</label>
                <InputMask id="phone" placeholder={client.phone} disabled></InputMask>
            </div>
            
            <div className="flex-auto">
                <label htmlFor="phone2" className="font-bold block mb-2">Teléfono 2</label>
                <InputMask id="phone2" placeholder={client.phone2??''} disabled></InputMask>
            </div>
            
            <div className="flex-auto">
                <label htmlFor="email" >E-Mail</label>
                <InputMask id="email" placeholder={client.email} disabled></InputMask>
            </div>

            <div className="flex-auto">
                <label htmlFor="born_date" className="font-bold block mb-2">Fecha Nacimiento</label>
                <InputMask id="born_date" placeholder={client.born_date} disabled></InputMask>
            </div>

            <div className="flex-auto">
                <label htmlFor="document_id" className="font-bold block mb-2">DNI/NIF</label>
                <InputMask id="document_id" placeholder={client.document_id} disabled></InputMask>
            </div>

            <div className="flex-auto">
                <label htmlFor="ldpd" className="font-bold block mb-2">LDPD</label>
                <InputMask id="ldpd" placeholder={client.ldpd?'firmado':'no'} disabled></InputMask>
            </div>

            <div className="flex-auto">
                <label htmlFor="type" className="font-bold block mb-2">Tipo cliente:</label>
                <InputMask id="type" placeholder={client.type} disabled></InputMask>
            </div>

            <div>
                Direccion: 
                <div>
                    <div className="flex-auto">
                        <label htmlFor="street_name" className="font-bold block mb-2">Calle</label>
                        <InputMask id="street_name" placeholder={client.address.street_name} disabled></InputMask>
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="street_number" className="font-bold block mb-2">Número</label>
                        <InputMask id="street_number" placeholder={client.address.street_number} disabled></InputMask>
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="street_number" className="font-bold block mb-2">Número</label>
                        <InputMask id="street_number" placeholder={client.address.street_number} disabled></InputMask>
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="city" className="font-bold block mb-2">Municipio</label>
                        <InputMask id="city" placeholder={client.address.city} disabled></InputMask>
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="postal_code" className="font-bold block mb-2">Código Postal</label>
                        <InputMask id="postal_code" placeholder={client.address.postal_code} disabled></InputMask>
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="province" className="font-bold block mb-2">Provincia</label>
                        <InputMask id="province" placeholder={client.address.province} disabled></InputMask>
                    </div>
                </div>
            </div>
        </div>
    );
}


ClientFormRead.propTypes = {
    client: PropTypes.any.isRequired,
};