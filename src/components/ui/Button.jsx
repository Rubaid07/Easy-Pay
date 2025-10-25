import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'filled',
  disabled = false,
  className = '',
  ...props
}) => {

  const baseStyles = 'font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50';

  const sizeAndRoundedStyles = 'rounded-full px-6 py-3 text-base cursor-pointer'; 

  const variantStyles = {
    filled: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg focus:ring-blue-500',
    
    outlined: 'bg-transparent border-2 border-white hover:bg-white/10 text-white focus:ring-white/50',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';


  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${sizeAndRoundedStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;