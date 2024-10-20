import React from 'react'
import { cn } from '../utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }


const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button className={cn("rounded-xl px-3 py-2", className)} {...props}>
            {children}
        </button>
    )
}

export default Button