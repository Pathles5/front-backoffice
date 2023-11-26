// import './ClientFormRead.css';
// import { InputMask } from 'primereact/inputmask';
// import { Checkbox } from 'primereact/checkbox';
// import PropTypes from 'prop-types';
// // import { InputCustom } from '../../../../components-aux/InputCustom';

// export default function ClientFormRead(props) {
//     const {client} = props;
//     return (
//         <div className="clientRead">
//             <div className="box-input">
//                 <label htmlFor="name">Nombre</label><br />
//                 <InputMask id="name" placeholder={client.name} disabled></InputMask>
//             </div>

//             {/* <InputCustom id="name" name='Nombre' value={client.name} disabled></InputCustom> */}


//             <div className="box-input">
//                 <label htmlFor="last_name">Apellidos</label><br />
//                 <InputMask id="last_name" placeholder={client.last_name} disabled></InputMask>
//             </div>
//             {/* <InputCustom id="last_name" name='Apellidos' value={client.last_name} disabled></InputCustom> */}


//             <div className="box-input">
//                 <label htmlFor="phone">Teléfono</label><br />
//                 <InputMask id="phone" placeholder={client.phone} disabled></InputMask>
//             </div>
            
//             <div className="box-input">
//                 <label htmlFor="phone2">Teléfono 2</label><br />
//                 <InputMask id="phone2" placeholder={client.phone2??''} disabled></InputMask>
//             </div>
            
//             <div className="box-input">
//                 <label htmlFor="email" >E-Mail</label><br />
//                 <InputMask id="email" placeholder={client.email} disabled></InputMask>
//             </div>

//             <div className="box-input">
//                 <label htmlFor="born_date">Fecha Nacimiento</label><br />
//                 <InputMask id="born_date" placeholder={client.born_date} disabled></InputMask>
//             </div>

//             <div className="box-input">
//                 <label htmlFor="document_id" >DNI/NIF</label><br />
//                 <InputMask id="document_id" placeholder={client.document_id} disabled></InputMask>
//             </div>

//             <div className="box-input">
//                 <label htmlFor="ldpd" >LDPD</label><br />
//                 <Checkbox inputId="ldpd" name="ldpd"  checked={client.ldpd} className='check-box-ldpd' disabled/>
//             </div>

//             <div className="box-input">
//                 <label htmlFor="type" >Tipo cliente:</label><br />
//                 <InputMask id="type" placeholder={client.type} disabled></InputMask>
//             </div>

//             <div className="box-address">
//                 Direccion: 
//                 <div className='clientRead box-address-2'>
//                     <div className="box-input box-street-name">
//                         <label htmlFor="street_name">Calle</label>
//                         <InputMask id="street_name" placeholder={client.address.street_name} disabled></InputMask>
//                     </div>
//                     <div className="box-input box-street-number">
//                         <label htmlFor="street_number">Número</label>
//                         <InputMask id="street_number" placeholder={client.address.street_number} disabled></InputMask>
//                     </div>
//                     <div className="box-input box-city">
//                         <label htmlFor="city">Municipio</label>
//                         <InputMask id="city" placeholder={client.address.city} disabled></InputMask>
//                     </div>
//                     <div className="box-input boxA-posta-code">
//                         <label htmlFor="postal_code">Código Postal</label>
//                         <InputMask id="postal_code" placeholder={client.address.postal_code} disabled></InputMask>
//                     </div>
//                     <div className="box-input box-province">
//                         <label htmlFor="province">Provincia</label>
//                         <InputMask id="province" placeholder={client.address.province} disabled></InputMask>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// ClientFormRead.propTypes = {
//     client: PropTypes.any.isRequired,
// };