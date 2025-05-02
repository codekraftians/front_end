import React, { useEffect, useState } from 'react';
import Button from './buttons/Button';

const Alert = ({
    children,
    icon: Icon,
    variant = 'neutral',
    duration = null,
    closable = false,
    ...props
}) => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (duration) {
            const timer = setTimeout(() =>
                setVisible(false), duration * 1000);

            return () => clearTimeout(timer);
        }
    }, [duration]);

    const baseStyles = 'alert';

    const variants = {
        neutral: '',
        info: 'alert-info',
        success: 'alert-success',
        warning: 'alert-warning',
        error: 'alert-error'
    };

    const variantStyle = variants[variant] || '';

    if (!visible) return null;

    return (
        <div role="alert" className={`${baseStyles} ${variantStyle}`} {...props}>
        {Icon && <Icon />}
        <span>{children}</span>
        {closable && (
            <Button
                onClick={() => setVisible(false)}
                variant="ghost"
                className="btn-sm btn-circle btn-ghost absolute top-2 right-2"
                aria-label="Close alert"
            >
                ✕
            </Button>
        )}
        </div>
    );
};

export default Alert;
