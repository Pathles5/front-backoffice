import {NavLink as NavLinkReactRouter} from 'react-router-dom'
import PropTypes from 'prop-types';

export const NavLink = ({to,children,...props})=>{
    return (
      <NavLinkReactRouter
        {...props}
        className={({isActive})=>{
          return isActive? 'is-active':undefined
        }}
        to= {to}>
          {children}
      </NavLinkReactRouter>
    );
  };


NavLink.propTypes = {
  to: PropTypes.any.isRequired,
  children: PropTypes.any
};