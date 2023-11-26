import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';

export const InputTextCustom = ({id,name,value,reason})=>{
    if (reason==='read') {
        return (
            <div className='box-input'>
                <label htmlFor={id}>{name}</label><br />
                <InputText id={id} placeholder={value} disabled />
            </div>
        );
    }// reason=edit
    else {
        return (
            <div className='box-input'>
                <label htmlFor={id}>{name}</label><br />
                <InputText id={id} placeholder={value} value={value} />
            </div>
        );
    }
};

InputTextCustom.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    reason: PropTypes.oneOf(['read','edit']),
};

