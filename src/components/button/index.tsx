import React from 'react'
import styled from 'styled-components'

export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}


export default function Button({
    primary = false,
    size = 'medium',
    backgroundColor = null,
    label,
    ...props
}: ButtonProps) {

    const sizeProps = (size: String) => {
        switch (size) {
            case 'small':
                return {
                    fontSize: '12px',
                    padding: '10px 16px',
                }
            case 'medium':
                return {
                    fontSize: '14px',
                    padding: '11px 20px',
                }
            case 'large':
                return {
                    fontSize: '16px',
                    padding: '12px 24px',
                }
        }
        
    }

    const Button = styled.button(props => ({
        ...props.theme.typography.text,
        borderRadius: '3em',
        border: '0',
        cursor: 'pointer',
        display: 'inline-block',
        lineHeight: '1',
        color: primary ? 'white' : '#333',
        backgroundColor: backgroundColor ? backgroundColor : primary ? '#1ea7fd' : 'transparent',
        ...sizeProps(size)
    }))

    return (
        <Button
            type="button"
            className="colombo-button"
            {...props}
        >
            {label}
        </Button>
    );
};
