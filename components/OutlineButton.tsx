import React from 'react';

interface OutlineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'dark' | 'light';
}

export function OutlineButton({
  children,
  icon,
  variant = 'dark',
  className = "",
  ...props
}: OutlineButtonProps) {
  const variantClass = variant === 'light' ? 'btn-outline-white' : 'btn-outline';
  
  return (
    <button className={`${variantClass} ${className}`} {...props}>
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}
