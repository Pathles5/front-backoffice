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
        const data = Array.from(e.target.elements)
            .filter(element => element.id)
            .reduce((obj, element) => Object.assign(obj, { [element.id]: element.value }), {});
        
        const body = transformFormClient(data);

        // if (additionalData) {
        //     Object.assign(body,additionalData);
        // }

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
            setStatus('success')
            setMessage('success')
            if (response.status !== 200) {
                setStatus('error')
                setMessage('success')
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