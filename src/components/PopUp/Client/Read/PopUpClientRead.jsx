// import './PopUpClientRead.css';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import ClientFormRead from '../Form/ClientFormRead';
// import PropTypes from 'prop-types';

// export default function PopUpClientRead(props) {
//     const {client} = props;
//     return (
//         <>
//             <Popup trigger=
//                 {
//                     <button type="button" id="buttonView" className="buttonTable">
//                         <svg version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" fill="#ffffff" /><path fill="#ffffff" d="M19,14c0,0.552-0.448,1-1,1h-3v3c0,0.552-0.448,1-1,1s-1-0.448-1-1v-3h-3c-0.552,0-1-0.448-1-1s0.448-1,1-1  h3v-3c0-0.552,0.448-1,1-1s1,0.448,1,1v3h3C18.552,13,19,13.448,19,14z" /></svg>
//                     </button>
//                 }
//                 className='popup-client-read'
//                 modal nested >
//                 {   
//                     close => (
//                         <>
//                             <ClientFormRead client={client} />
//                             <button className="button-back" onClick=
//                                 {() => close()}>
//                                     Volver
//                             </button>
//                         </>
//                     )
//                 }
//             </Popup>
//         </>
//     );
// }

// PopUpClientRead.propTypes = {
//     client: PropTypes.any.isRequired,
//   };