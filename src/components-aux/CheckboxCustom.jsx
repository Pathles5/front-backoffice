import { Checkbox } from 'primereact/checkbox';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const CheckboxCustom = ({id,name,value,reason})=>{
    const [check, setCheck] = useState(value)
    if (reason==='read') {
        return (
            <div className="box-input">
                <label htmlFor={id}>{name}</label><br />
                {/* <InputText id={id} placeholder={value} disabled /> */}
                <Checkbox inputId={id} name={id}  checked={value} className='check-box-ldpd' disabled/>
            </div>
        );
    }// reason=edit
    else {
        return (
            <div className="box-input">
                <label htmlFor={id}>{name}</label><br />
                {/* <InputText id={id} placeholder={value} disabled /> */}
                <Checkbox inputId={id} name={id}  checked={check} className='check-box-ldpd'
                onChange={(e)=>setCheck(e.target.checked)}/>
            </div>
        );
    }
};

CheckboxCustom.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
    reason: PropTypes.oneOf(['read','edit']),
};

