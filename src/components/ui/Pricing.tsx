import { HtmlHTMLAttributes, PropsWithChildren } from "react"
import { cn } from "../../utils/cn"
import { Link } from "react-router-dom"


interface LinkHrefProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Pricing = ({ children }: PropsWithChildren) => {
    return (
        <div className="mb-5">
            {children}
        </div>
    )
}

const MainTitle = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => {
    return (
        <>
            <h3 className={cn("font-semibold text-primary-70 text-lg py-5", className)} {...props}>{children}</h3>
        </>
    )
}

const Title = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => {
    return (
        <>
            <h3 className={cn("text-4xl md:text-5xl lg:text-6xl font-bold text-primary-90 w-full lg:max-w-[729px]", className)} {...props}>{children}</h3>
        </>
    )
}
const Type = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => {
    return (
        <>
            <h3 className={cn("font-semibold text-2xl", className)} {...props}>{children}</h3>
        </>
    )
}


const Grid = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className={cn("grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[370px_1fr_1fr] gap-6 ", className)} {...props}>{children}</div>
        </>
    )
}
const GridCard = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className={cn(className)} {...props}>{children}</div>
        </>
    )
}

const GridCardTitle = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => {
    return (
        <>
            <h3 className={cn("font-semibold text-lg my-3", className)} {...props}>{children}</h3>
        </>
    )
}

const GridCardList = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLUListElement>) => {
    return (
        <>
            <ul className={cn("space-y-5 spacex-3 w-full lg:max-w-[370px]", className)} {...props}>{children}</ul>
        </>
    )
}
const GridCardListItem = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLLIElement>) => {
    return (
        <>
            <li className={cn("relative flex items-start gap-2", className)} {...props}>
                {children}
            </li>

        </>
    )
}
const Icon = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => {
    return (
        <>
            <div className={cn("shrink-0 bg-primary-10 rounded-full p-1 size-6 flex items-center justify-center ", className)} {...props}>
                {children}
            </div>
        </>
    )
}

const Description = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => {
    return (
        <>
            <p className={cn("text-neutral-70 text-base", className)} {...props}>{children}</p>
        </>
    )
}

const Price = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className="lg:ml-auto">
                {children}
            </div>
        </>
    )
}
const Head = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className="relative w-full rounded-md flex flex-col lg:flex-row flex-wrap items-start gap-y-6">
                {children}
            </div>
        </>
    )
}
const HeadContent = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className="flex flex-col gap-1.5 w-full lg:max-w-[70%]">
                {children}
            </div>
        </>
    )
}

const ActionButtons = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className={cn("flex justify-start gap-4 flex-wrap my-3", className)} {...props}>
                {children}
            </div>
        </>
    )
}

const Content = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className={cn("relative bg-white p-5 rounded-md flex flex-col lg:flex-row flex-wrap items-start gap-y-6", className)} {...props}>
                {children}
            </div>
        </>
    )
}

const ActionLink = ({ children, to, className, onClick }: LinkHrefProps) => {
    return (
        <>
            <Link to={to} onClick={onClick} className={cn("flex justify-center items-center px-4 py-2 border border-transparent w-fit md:w-[315px] text-center text-base font-medium rounded-xl shadow-sm text-white bg-primary-90 hover:bg-primary-90/80 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-90", className)}>
                {children}
            </Link>
        </>
    )
}


Pricing.MainTitle = MainTitle;
Pricing.Content = Content;
Pricing.Title = Title;
Pricing.Grid = Grid;
Pricing.Title = Title;
Pricing.Type = Type;
Pricing.ActionButtons = ActionButtons;
Pricing.Description = Description;
Pricing.ActionLink = ActionLink;
Pricing.Head = Head;
Pricing.HeadContent = HeadContent;
Pricing.Price = Price;
Pricing.GridCard = GridCard;
Pricing.GridCardTitle = GridCardTitle;
Pricing.GridCardList = GridCardList;
Pricing.GridCardListItem = GridCardListItem;
Pricing.Icon = Icon;

export default Pricing