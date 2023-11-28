import './ClientForm.css';
import PropTypes from 'prop-types';
import ClientForm from './ClientForm';
import { transformFormClient } from '../../../../utils/clients';

// Ver 2 con lo aprendido de "Carlos Azaustre"
import { fetchData } from '../../../../utils/generic/fetchData';

export default function ClientFormController(props) {
    const {client, reason} = props; 

    function sendForm(event) {
        console.log('input');
        event.preventDefault();

        const isValid = true;
        if (!isValid){
            return false
        }
        alert(JSON.stringify(event.target.elements));
        const client = Array.from(event.target.elements).filter((input) => input.id).reduce((obj, input) => Object.assign(obj, { [input.id]: input.value }), {});
        const body = transformFormClient(client);
        const dataApi =fetchData(`https://3j0l1da1ib.execute-api.eu-west-1.amazonaws.com/dev/api/v1/client/id/${body.id}`,'PUT',body);
        // const dataApi = fetchData(`https://3j0l1da1ib.execute-api.eu-west-1.amazonaws.com/dev/api/v1/client/list`,'GET'/* ,body */);
        // const dataApi = await fetchPutClient(`https://3j0l1da1ib.execute-api.eu-west-1.amazonaws.com/dev/api/v1/client/list`,'GET'/* ,body */);
        const data = dataApi.read();
        // const data = dataApi;
        // alert(JSON.stringify(data))
    }

    return (
        <form 
        className="client-form"
        // action='http://localhost:5173/clients'
        // action={`https://3j0l1da1ib.execute-api.eu-west-1.amazonaws.com/dev/api/v1/client/id/${client.id}`}
        // action={sendForm}
        // onSubmit={ handleSubmit }
        onSubmit={sendForm}
        // method="post"
        >
            <ClientForm client={client} reason={reason}/>
            <button className="button-save" type='submit'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>
                GuardarFORM
            </button>

        </form>
    );
}

ClientFormController.propTypes = {
    client: PropTypes.any.isRequired,
    reason: PropTypes.oneOf(['read','edit']),
};