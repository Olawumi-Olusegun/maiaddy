import { Check } from "lucide-react";
import { HtmlHTMLAttributes, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

interface LinkHrefProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}


const PageHero = ({ children }: PropsWithChildren) => {
    return (
        <div className="text-start w-full flex flex-col gap-y-10 mb-7 ">
            {children}
        </div>
    )
}

const Title = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => {
    return (
        <>
            <h3 className={cn("text-4xl md:text-5xl font-semibold text-primary-90 w-full lg:max-w-[783px]", className)} {...props}>{children}</h3>
        </>
    )
}
const BreadCrumbTitle = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLHeadingElement>) => {
    return (
        <>
            <h4 className={cn("text-2xl font-semibold text-primary-90 w-full", className)} {...props}>{children}</h4>
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
            <h3 className={cn("text-neutral-90 text-base lg:text-xl w-full lg:max-w-[794px]", className)} {...props}>{children}</h3>
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

const ActionLink = ({ children, to, className, onClick }: LinkHrefProps) => {
    return (
        <>
            <Link to={to} onClick={onClick} className={cn("inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-primary-90 hover:bg-primary-90/80 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-90", className)}>
                {children}
            </Link>
        </>
    )
}

const HeroList = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLUListElement>) => {
    return (
        <>
            <ul className={cn("flex flex-col gap-3", className)} {...props}>
                {children}
            </ul>
        </>
    )
}
const HeroListItem = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLLIElement>) => {
    return (
        <>
            <li className={cn("flex items-center gap-1 relative", className)} {...props}>
                <Check size={14} className="text-primary-90 shrink-0 absolute left-0 top-2" />
                <span className="pl-5 text-xl text-neutral-90">{children}</span>
            </li>
        </>
    )
}

PageHero.Body = Body;
PageHero.Title = Title;
PageHero.BreadCrumbTitle = BreadCrumbTitle;
PageHero.Description = Description;
PageHero.ActionButtons = ActionButtons;
PageHero.ActionLink = ActionLink;
PageHero.HeroList = HeroList;
PageHero.HeroListItem = HeroListItem;

export default PageHero