import { HtmlHTMLAttributes, PropsWithChildren } from "react"
import { Link } from "react-router-dom"
import { cn } from "../../utils/cn"



const ServicesCard = ({ children }: PropsWithChildren) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 w-full mx-auto">
            {children}
        </div>
    )
}

interface LinkHrefProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}


const Card = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className={cn("rounded-lg flex flex-col gap-4 items-start mb-5 lg:mb-10", className)} {...props}>
                {children}
            </div>
        </>
    )
}
const Icon = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className={cn("bg-primary-10 flex items-center justify-center  size-12 border border-primary-5 rounded-full p-1 ", className)} {...props}>
                <div className="p-1.5 rounded-full">{children}</div>
            </div>
        </>
    )
}

const Title = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLParagraphElement>) => {
    return (
        <>
            <h3 className={cn("text-2xl font-bold text-gray-800 truncate", className)} {...props}>{children}</h3>
        </>
    )
}
const Body = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className={cn("flex flex-col gap-3", className)} {...props}>{children}</div>
        </>
    )
}
const Description = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => {
    return (
        <>
            <h3 className={cn("text-neutral-90 text-base line-clamp-2", className)} {...props}>{children}</h3>
        </>
    )
}

const LinkHref = ({ children, to, className, onClick }: LinkHrefProps) => {
    return (
        <>
            <Link to={to} onClick={onClick} className={cn("group flex items-center gap-2 text-primary-70 hover:text-primary-70/80", className)}>{children}
                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                </svg>
            </Link>
        </>
    )
}


ServicesCard.Card = Card;
ServicesCard.Body = Body;
ServicesCard.Icon = Icon;
ServicesCard.Title = Title;
ServicesCard.Description = Description;
ServicesCard.LinkHref = LinkHref;
export default ServicesCard