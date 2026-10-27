import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({
  children,
  to,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  icon,
  ...props
}) => {
  const getButtonClass = () => {
    let base = 'btn-hero custom-btn';
    if (variant === 'primary') base = 'btn-hero custom-btn';
    if (variant === 'outline') base = 'btn-hero btn-outline custom-btn';
    if (variant === 'secondary') base = 'tab-btn active custom-btn';
    return `${base} ${className}`.trim();
  };

  if (to) {
    return (
      <Link to={to} className={getButtonClass()} {...props}>
        {children}
        {icon && <i className={`${icon} btn-icon`}></i>}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={getButtonClass()} {...props}>
      {children}
      {icon && <i className={`${icon} btn-icon`}></i>}
    </button>
  );
};

export default Button;
