import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none dark:focus:ring-offset-slate-900';

    const variants: Record<ButtonVariant, string> = {
        primary: 'bg-primary text-bg hover:bg-blue-700 focus:ring-primary dark:bg-blue-600 dark:hover:bg-blue-500',
        secondary: 'bg-secondary text-bg hover:bg-blue-600 focus:ring-secondary dark:bg-blue-700 dark:hover:bg-blue-600',
        danger: 'bg-error text-bg hover:bg-red-700 focus:ring-error dark:bg-red-600 dark:hover:bg-red-500',
        ghost: 'bg-transparent text-text hover:bg-slate-100 dark:text-gray-200 dark:hover:bg-slate-800'
    };

    const sizes: Record<ButtonSize, string> = {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 py-2 text-sm',
        lg: 'h-12 px-8 text-base'
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};
