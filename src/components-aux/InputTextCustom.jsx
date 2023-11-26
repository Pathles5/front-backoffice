import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const InputTextCustom = ({id,name,text,reason})=>{
    const [value, setValue] = useState(text);
    if (reason==='read') {
        return (
            <div className='box-input'>
                <label htmlFor={id}>{name}</label><br />
                <InputText id={id} placeholder={text} disabled />
            </div>
        );
    }// reason=edit
    else {
        return (
            <div className='box-input'>
                <label htmlFor={id}>{name}</label><br />
                <InputText id={id}  placeholder={text} value={value}
                onChange={(e) => setValue(e.target.value)} />
            </div>
        );
    }
};

InputTextCustom.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    reason: PropTypes.oneOf(['read','edit']),
};

