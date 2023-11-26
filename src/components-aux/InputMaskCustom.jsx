
// import { useState } from "react";
import { InputMask } from "primereact/inputmask";
import PropTypes from 'prop-types';

export default function InputMaskCustom({id,name,invalue,reason}) {
    // const [value, setValue] = useState('');

    if (reason==='read') {
        return (
            <div className='box-input'>
                <label htmlFor={id}>{name}</label><br />
                <InputMask id={id} placeholder={invalue} disabled/>
            </div>
        )
    }// reason=edit
    else{
        return (
            <div className='box-input'>
                <label htmlFor={id}>{name}</label><br />
                <InputMask id={id} value={invalue} /* onChange={(e) => setValue(e.target.value)} */ mask="99-99-9999" placeholder="dd-mm-yyyy"/>
            </div>
        )
    }
}

InputMaskCustom.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    invalue: PropTypes.string.isRequired,
    reason: PropTypes.oneOf(['read','edit']),
};
