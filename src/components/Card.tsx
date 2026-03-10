import React from 'react';

type CardStyle = 'elevated' | 'outlined';

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    cardStyle?: CardStyle;
    imageSrc?: string;
    imageAlt?: string;
    title?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
    cardStyle = 'elevated',
    imageSrc,
    imageAlt = '',
    title,
    footer,
    children,
    className = '',
    ...props
}) => {
    const baseClasses = 'flex flex-col bg-surface dark:bg-slate-800 rounded-lg overflow-hidden transition-all duration-300';

    const styleClasses: Record<CardStyle, string> = {
        elevated: 'shadow-md dark:shadow-slate-900/50 hover:shadow-lg dark:hover:shadow-blue-900/20 hover:-translate-y-1',
        outlined: 'border border-border dark:border-slate-700'
    };

    return (
        <article className={`${baseClasses} ${styleClasses[cardStyle]} ${className}`} {...props}>
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-48 object-cover"
                />
            )}

            <div className="p-6 flex flex-col grow">
                {title && (
                    <h3 className="text-xl font-bold mb-3 text-text dark:text-white">
                        {title}
                    </h3>
                )}

                <div className="text-muted dark:text-gray-400 grow">
                    {children}
                </div>

                {footer && (
                    <div className="mt-6 pt-4 border-t border-border dark:border-slate-700">
                        {footer}
                    </div>
                )}
            </div>
        </article>
    );
};
