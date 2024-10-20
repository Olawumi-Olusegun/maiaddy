

import { createContext, HtmlHTMLAttributes, PropsWithChildren, useContext } from 'react'
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';


interface ActionCardProviderProps extends HtmlHTMLAttributes<HTMLDivElement> { }

interface ActionCardContextProps {
    title: string;
    href?: string;
    onClick?: () => void;
}

interface ActionLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const ActionCardContext = createContext<ActionCardContextProps | undefined>(undefined);


export const useActionCard = () => {
    const context = useContext(ActionCardContext);
    if (!context) {
        throw new Error('useSection must be used within a SectionProvider');
    }
    return context;
}

export const ActionCard = ({ children, className, ...props }: ActionCardProviderProps) => {
    return <ActionCardContext.Provider value={{ title: "" }}>
        <section className={cn("w-full bg-white ", className)} {...props}>
            {children}
        </section>
    </ActionCardContext.Provider>
}

const Body = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className="py-16 px-4 sm:px-6 lg:px-8 text-center w-full md:max-w-[768px] mx-auto" {...props}>
                {children}
            </div>
        </>
    )
}

const Title = ({ children }: PropsWithChildren) => {
    return <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-90">{children}</h2>
}


const SubTitle = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLParagraphElement>) => {
    return <p className={cn("mt-3 text-neutral-90 text-base md:text-xl", className)} {...props}>{children}</p>
}



const ActionButtons = ({ children, className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) => {
    return (
        <>
            <div className={cn("mt-8 flex flex-wrap justify-center gap-4 ", className)} {...props}>
                {children}
            </div>
        </>
    )
}

const ActionLink = ({ children, to, className, onClick }: ActionLinkProps) => {
    return (
        <>
            <Link to={to} onClick={onClick} className={cn("inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-primary-90 hover:bg-primary-90/80 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-90", className)}>
                {children}
            </Link>
        </>
    )
}



ActionCard.Body = Body;
ActionCard.Title = Title;
ActionCard.SubTitle = SubTitle;
ActionCard.ActionButtons = ActionButtons;
ActionCard.ActionLink = ActionLink;

export default ActionCard