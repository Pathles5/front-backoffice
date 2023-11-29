import { useState } from "react";
import { transformFormClient } from "../utils/clients";

export default function useForm(/* {additionalData}*/) {
    const [status, setStatus] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e,method) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        const finalFormEndpoint = e.target.action;
        console.log('Buscando el metodo');
        console.log(e.target);
        console.log(e.target.action);
        console.log(e.target.method);
        console.log(method);
        const data = Array.from(e.target.elements)
            .filter(element => element.id)
            .reduce((obj, element) => Object.assign(obj, { [element.id]: element.value }), {});
        
        const body = transformFormClient(data);

        console.log('body');
        console.log(body);
        // if (additionalData) {
        //     Object.assign(body,additionalData);
        // }

        console.log('body');
        console.log(body);
        // const client = Array.from(e.target.elements)
        //     .filter((input) => input.id)
        //     .reduce((obj, input) => Object.assign(obj, { [input.id]: input.value }), {});

        fetch(finalFormEndpoint, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then(response => {
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            return response.json();
        }).catch((err)=>{
            setMessage(err.toString());
            setStatus('error');
        });
    }
    return { handleSubmit, status, message };
}