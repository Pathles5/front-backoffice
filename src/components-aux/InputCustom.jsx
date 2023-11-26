import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';

export const InputCustom = ({id,name,value,reason})=>{
    console.log(id,name,value,reason);
    if (reason==='read') {
        return (
            <div >
                <label htmlFor={id}>{name}</label><br />
                <InputText id={id} placeholder={value} disabled />
            </div>
        );
    }// reason=edit
    else {
        return (
            <div >
                <label htmlFor={id}>{name}</label><br />
                <InputText id={id} placeholder={value} value={value} />
            </div>
        );
    }
        
};

InputCustom.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    reason: PropTypes.oneOf(['read','edit']),
};

