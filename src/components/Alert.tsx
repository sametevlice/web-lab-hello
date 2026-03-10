import React, { useState } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
    dismissible?: boolean;
    onDismiss?: () => void;
    title?: string;
    children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
    variant = 'info',
    dismissible = false,
    onDismiss,
    title,
    children,
    className = '',
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const baseClasses = 'flex p-4 rounded-md border font-sans text-sm transition-all duration-300';

    const variants: Record<AlertVariant, string> = {
        info: 'bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-800/50',
        success: 'bg-green-50 text-green-900 border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800/50',
        warning: 'bg-yellow-50 text-yellow-900 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-800/50',
        error: 'bg-red-50 text-red-900 border-red-200 dark:bg-red-900/30 dark:text-red-200 dark:border-red-800/50'
    };

    // SVGs for close button based on variant
    const closeButtonColors: Record<AlertVariant, string> = {
        info: 'text-blue-500 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/50 focus:ring-blue-500',
        success: 'text-green-500 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-900/50 focus:ring-green-500',
        warning: 'text-yellow-500 hover:bg-yellow-100 dark:text-yellow-400 dark:hover:bg-yellow-900/50 focus:ring-yellow-500',
        error: 'text-red-500 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900/50 focus:ring-red-500'
    };

    const IconMap: Record<AlertVariant, React.ReactNode> = {
        info: (
            <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
        ),
        success: (
            <svg className="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
        ),
        warning: (
            <svg className="w-5 h-5 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
        ),
        error: (
            <svg className="w-5 h-5 text-red-500 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
        )
    };

    const handleDismiss = () => {
        setIsVisible(false);
        if (onDismiss) {
            onDismiss();
        }
    };

    return (
        <div className={`${baseClasses} ${variants[variant]} ${className}`} role="alert" {...props}>
            <div className="shrink-0 flex items-start">
                {IconMap[variant]}
            </div>

            <div className="ml-3 mt-0.5 grow">
                {title && (
                    <h3 className="text-sm font-semibold mb-1">{title}</h3>
                )}
                <div className="text-sm">
                    {children}
                </div>
            </div>

            {dismissible && (
                <div className="ml-auto pl-3">
                    <button
                        type="button"
                        className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors ${closeButtonColors[variant]}`}
                        onClick={handleDismiss}
                        aria-label="Kapat"
                    >
                        <span className="sr-only">Kapat</span>
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};
