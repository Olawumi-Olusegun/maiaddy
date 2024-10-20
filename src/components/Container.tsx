import { HtmlHTMLAttributes } from 'react'
import { cn } from '../utils/cn'

interface ContainerProps extends HtmlHTMLAttributes<HTMLDivElement> { }

const Container = ({ children, className, ...props }: ContainerProps) => {
    return (
        <div className={cn("w-full max-w-7xl px-6 xl:px-0 mx-auto", className)} {...props}>
            {children}
        </div>
    )
}

export default Container