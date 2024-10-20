import { HtmlHTMLAttributes } from "react"
import { Outlet } from "react-router-dom"
import { cn } from "../../utils/cn"
import CoreLayoutSidebar from "../../components/CoreLayoutSidebar"

interface CoreLayoutProps extends HtmlHTMLAttributes<HTMLDivElement> { }

const CoreLayout = ({ className, ...props }: CoreLayoutProps) => {
    return (
        <>
            <div className={cn('w-full h-full grid lg:grid-cols-[auto_1fr]', className)} {...props}>
                <CoreLayoutSidebar />
                <Outlet />
            </div>
        </>
    )
}

export default CoreLayout