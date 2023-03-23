import PropTypes from 'prop-types';

import { Btn } from './Button.styled';



export const Button = ({
  children,
  color,
  type,
  design,
  onClick,
  onSubmit,
  disabled,
}) => (
  <Btn
    type={type}
    color={color}
    design={design}
    onClick={onClick}
    onSubmit={onSubmit}
    disabled={disabled}
  >
    {children}
  </Btn>
);

Button.propTypes = {
  color: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  design: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
};