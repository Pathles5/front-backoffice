import './ClientForm.css';
import PropTypes from 'prop-types';
import ClientForm from './ClientForm';
import useForm from '../../../../hooks/useForm';

export default function ClientFormController(props) {
    const {client, reason} = props; 
    
    // const additionalData = {
    //     sent: new Date().toISOString(),
    // };
    let url='';
    let method='';
    switch (reason) {
        case 'add':
            url='https://3j0l1da1ib.execute-api.eu-west-1.amazonaws.com/dev/api/v1/client/';
            method='POST';
            break;
        case 'edit':
            url=`https://3j0l1da1ib.execute-api.eu-west-1.amazonaws.com/dev/api/v1/client/id/${client.id}`;
            method='PUT';
            break;
        default:
            break;
    }

   /*  const preHandleSubmit = (event) => {
        if (reason==='add') {
          return handleSubmit(event,'POST');
        }
        return handleSubmit(event,'PUT');
    }; */

    const { handleSubmit, status, message } = useForm(/* {
        additionalData,
    } */);

    if (status === "success") {
        return (
            <>
                <div>Thank you!</div>
                <div>{message}</div>
            </>
        );
    }

    if (status === "error") {
        return (
            <>
                <div>Something bad happened!</div>
                <div>{message}</div>
            </>
        );
    }
    /* if ( reason==='add') {
        return (
            <form 
                className="client-form"
                action={url}
                onSubmit={ (e) => handleSubmit(e,method) }
                method={method}
            >
                <ClientForm client={client} reason={reason}/>
                {status !== "loading" && (
                    <div className='buttons-form'>
                        <button className="button-save" type='submit'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>
                            <span>Guardar</span>
                        </button>
                    </div>
                )}
            </form>
        );
    } */
    return (
        <form 
            className="client-form"
            action={url}
            onSubmit={ (e) => handleSubmit(e,method) }
            method={method}
        >
            <ClientForm client={client} reason={reason}/>
            {status !== "loading" && (
                <div className='buttons-form'>
                    <button className="button-save" type='submit'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-floppy" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>
                        <span>Guardar</span>
                    </button>
                </div>
            )}
        </form>
    );
}

ClientFormController.propTypes = {
    client: PropTypes.any.isRequired,
    reason: PropTypes.oneOf(['read','edit','add']),
};
