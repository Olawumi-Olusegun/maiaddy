import { useState, createContext, ReactNode, FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

// Create context to handle dropdown state
interface SidebarContextType {
    openDropdown: number | null;
    toggleDropdown: (id: number) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Sidebar Provider to manage state
const SidebarProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const toggleDropdown = (id: number) => {
        setOpenDropdown((prevId) => (prevId === id ? null : id));
    };

    return (
        <SidebarContext.Provider value={{ openDropdown, toggleDropdown }}>
            {children}
        </SidebarContext.Provider>
    );
};

// Reusable Sidebar component
const Sidebar: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <aside className="hidden fixed top-0 left-0 p-4 min-h-dvh text-black bg-appBg md:translate-x-0 transform transition-transform duration-300 ease-in-out md:static md:flex flex-col gap-2 w-[278px] z-50 lg:translate-x-0">
            {children}
        </aside>
    );
};

// Reusable Button for each section
const SidebarButton: FC<{ id: number; title: string }> = ({ id, title }) => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("SidebarButton must be used within a SidebarProvider");
    }

    const { toggleDropdown } = context;

    return (
        <button
            className="border border-transparent text-neutral-60 hover:text-primary-90 hover:border-primary-90 hover:bg-primary-10 duration-300 flex items-center justify-between text-lg font-semibold w-full px-4 py-2 rounded-xl"
            onClick={() => toggleDropdown(id)}
        >
            {title}
        </button>
    );
};

// Dropdown content
const DropdownContent: FC<{ id: number; children: ReactNode }> = ({ children }) => {

    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("DropdownContent must be used within a SidebarProvider");
    }

    // const { openDropdown } = context;

    return (
        <>
            {/* grid duration-300 border-l ml-4 ${openDropdown === id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} */}
            <ul className={`grid duration-300 border-l ml-4 grid-rows-[1fr]`}>
                <div className="w-full duration-300 overflow-hidden space-y-3">{children}</div>
            </ul>
        </>
    );
};

// Sidebar Links
const SidebarLink: FC<{ to: string; children: ReactNode }> = ({ to, children }) => {
    return (
        <Link
            to={to}
            className=" block px-4 py-2 text-[15px] text-neutral-60 hover:bg-white/5 rounded-md"
        >
            {children}
        </Link>
    );
};

const SidebarTitle: FC<{ to: string; className?: string; children: ReactNode }> = ({ to, className, children }) => {
    return (
        <Link
            to={to}
            className={cn("border border-transparent hover:border-primary-90 hover:bg-primary-10 duration-300 block px-4 py-2 text-lg text-primary-90 rounded-xl", className)}
        >
            {children}
        </Link>
    );
};

export { SidebarProvider, Sidebar, SidebarButton, DropdownContent, SidebarLink, SidebarTitle };
