import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helpText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, helpText, className = '', id, ...props }, ref) => {
        // Generate a unique ID if none provided, useful for linking label and aria-describedby
        const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
        const helpTextId = `${inputId}-help`;
        const errorId = `${inputId}-error`;

        const isInvalid = !!error;
        const isDisabled = props.disabled;

        const baseInputStyle = "w-full px-4 py-2 border rounded-md font-sans text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-slate-900 dark:bg-slate-900";

        // Normal state
        const normalInputStyle = "border-border dark:border-slate-600 text-text dark:text-gray-100 focus:border-primary dark:focus:border-blue-400 focus:ring-primary/30 dark:focus:ring-blue-400/30";

        // Error state
        const errorInputStyle = "border-error dark:border-red-500 text-text dark:text-gray-100 focus:border-error focus:ring-error/30";

        // Disabled state
        const disabledInputStyle = "opacity-60 cursor-not-allowed bg-gray-50 dark:bg-slate-800 text-muted";

        let combinedInputStyle = `${baseInputStyle} ${isInvalid ? errorInputStyle : normalInputStyle} ${isDisabled ? disabledInputStyle : ''} ${className}`;

        return (
            <div className="flex flex-col gap-1 w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className={`text-sm font-semibold ${isDisabled ? 'text-muted' : 'text-text dark:text-gray-300'}`}
                    >
                        {label}
                        {props.required && <span className="text-error ml-1">*</span>}
                    </label>
                )}

                <input
                    ref={ref}
                    id={inputId}
                    className={combinedInputStyle}
                    aria-invalid={isInvalid}
                    aria-describedby={`${helpText ? helpTextId : ''} ${error ? errorId : ''}`.trim() || undefined}
                    {...props}
                />

                {helpText && !error && (
                    <p id={helpTextId} className="text-xs text-muted dark:text-gray-400 mt-1">
                        {helpText}
                    </p>
                )}

                {error && (
                    <p id={errorId} className="text-xs text-error dark:text-red-400 font-medium mt-1">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
