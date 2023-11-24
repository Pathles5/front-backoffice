import './ClientFormRead.css';
import { InputMask } from 'primereact/inputmask';
import PropTypes from 'prop-types';

export default function ClientFormRead(props) {
    const {client} = props;
    return (
        <div className="clientRead">
            <div className="box-input boxName">
                <label htmlFor="name">Nombre</label><br />
                <InputMask id="name" placeholder={client.name} disabled></InputMask>
            </div>

            <div className="box-input boxLastname">
                <label htmlFor="last_name">Apellidos</label><br />
                <InputMask id="last_name" placeholder={client.last_name} disabled></InputMask>
            </div>

            <div className="box-input boxPhone">
                <label htmlFor="phone">Teléfono</label><br />
                <InputMask id="phone" placeholder={client.phone} disabled></InputMask>
            </div>
            
            <div className="box-input boxPhone2">
                <label htmlFor="phone2">Teléfono 2</label><br />
                <InputMask id="phone2" placeholder={client.phone2??''} disabled></InputMask>
            </div>
            
            <div className="box-input boxEmail">
                <label htmlFor="email" >E-Mail</label><br />
                <InputMask id="email" placeholder={client.email} disabled></InputMask>
            </div>

            <div className="box-input boxBornDate">
                <label htmlFor="born_date">Fecha Nacimiento</label><br />
                <InputMask id="born_date" placeholder={client.born_date} disabled></InputMask>
            </div>

            <div className="box-input boxDocumentId">
                <label htmlFor="document_id" >DNI/NIF</label><br />
                <InputMask id="document_id" placeholder={client.document_id} disabled></InputMask>
            </div>

            <div className="box-input boxLdpd">
                <label htmlFor="ldpd" >LDPD</label><br />
                <InputMask id="ldpd" placeholder={client.ldpd?'firmado':'no'} disabled></InputMask>
            </div>

            <div className="box-input boxType">
                <label htmlFor="type" >Tipo cliente:</label><br />
                <InputMask id="type" placeholder={client.type} disabled></InputMask>
            </div>

            {/* TODO continuar por aqui dejando refachero el popup
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
            </div> */}
        </div>
    );
}


ClientFormRead.propTypes = {
    client: PropTypes.any.isRequired,
};