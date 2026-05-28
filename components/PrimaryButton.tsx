import React from 'react';

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function PrimaryButton({
  children,
  icon,
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button className={`btn-primary ${className}`} {...props}>
      {children}
      {icon && <span>{icon}</span>}
    </button>
  );
}
