import { HtmlHTMLAttributes } from "react"
import { cn } from "../../utils/cn"

const FeatureCard = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={cn("py-4", className)} {...props}>
            {children}
        </div>
    )
}

const MainTitle = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLHeadElement>) => {
    return (
        <>
            <h2 className={cn("text-lg font-semibold text-primary-70 mb-5", className)} {...props}>{children}</h2>
        </>
    )
}

const Title = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLHeadElement>) => {
    return (
        <>
            <h3 className={cn("text-xl font-bold text-gray-800 mb-2", className)} {...props}>{children}</h3>
        </>
    )
}
const Description = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLParagraphElement>) => {
    return (
        <>
            <div className={cn("text-gray-600 text-xl", className)} {...props}>{children}</div>
        </>
    )
}

const Body = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className={cn("flex flex-col gap-8", className)} {...props}>
                {children}
            </div>
        </>
    )
}
const Grid = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className={cn("grid grid-cols-12 gap-5", className)} {...props}>
                {children}
            </div>
        </>
    )
}

const GridArticle = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className={cn("col-span-12 md:col-span-6 flex flex-col gap-4 rounded-lg w-full", className)} {...props}>
                {children}
            </div>
        </>
    )
}


const Image = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className={cn("col-span-12 md:col-span-6 w-full lg:max-w-[371px]", className)} {...props}>
                {children}
            </div>
        </>
    )
}

const Divider = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className={cn("border-b", className)} {...props}>
                {children}
            </div>
        </>
    )
}

FeatureCard.MainTitle = MainTitle;
FeatureCard.Title = Title;
FeatureCard.Body = Body;
FeatureCard.Image = Image;
FeatureCard.Grid = Grid;
FeatureCard.Divider = Divider;
FeatureCard.GridArticle = GridArticle;
FeatureCard.Description = Description;

export default FeatureCard