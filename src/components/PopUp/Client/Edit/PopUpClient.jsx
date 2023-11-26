// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import ClientForm from '../Form/ClientForm';
// import PropTypes from 'prop-types';

// export default function PopUpClient(props) {
//     const {client, reason} = props;
//     return (
//         <>
//             <Popup trigger=
//                 {
//                     // <button type="button" id="buttonView" className="buttonTable">
//                     //     <svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" fill="#ffffff" /><path fill="#ffffff" d="M19,14c0,0.552-0.448,1-1,1h-3v3c0,0.552-0.448,1-1,1s-1-0.448-1-1v-3h-3c-0.552,0-1-0.448-1-1s0.448-1,1-1  h3v-3c0-0.552,0.448-1,1-1s1,0.448,1,1v3h3C18.552,13,19,13.448,19,14z" /></svg>
//                     // </button>

//                     <button type="button" id="buttonEdit" className="buttonTable">
//                         <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" fill="#ffffff" /><path d="M0 0h48v48h-48z" fill="none"/></svg>
//                     </button>
//                 }
//                 className='popup-client-read'
//                 modal nested >
//                 {   
//                     close => (
//                         <>
//                             <ClientForm client={client} reason={reason}/>
//                             <button className="button-save" onClick=
//                                 {() => close()}>
//                                     Guardar
//                             </button>
//                             <button className="button-cancel" onClick=
//                                 {() => close()}>
//                                     Imprimir
//                             </button>

//                             <button className="button-print" onClick=
//                                 {() => close()}>
//                                     Cancelar
//                             </button>
//                         </>
//                     )
//                 }
//             </Popup>
//             {/* <Popup trigger=
//                 {
//                     <button type="button" id="buttonEdit" className="buttonTable">
//                         <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M6 34.5v7.5h7.5l22.13-22.13-7.5-7.5-22.13 22.13zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z" fill="#ffffff" /><path d="M0 0h48v48h-48z" fill="none"/></svg>
//                     </button>
//                 }
//                 position="left center">
//                 <div>GeeksforGeeks</div>
//                 <button>Guardar</button>
//                 <button>Cancelar</button>
//             </Popup> */}
//         </>
//     );
// }

// PopUpClient.propTypes = {
//     client: PropTypes.any.isRequired,
//     reason: PropTypes.oneOf(['read','edit']),
// };