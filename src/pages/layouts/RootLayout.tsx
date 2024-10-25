import { HtmlHTMLAttributes } from "react"
import { Outlet } from "react-router-dom"
import { cn } from "../../utils/cn"
import Header from "../../components/shared/Header"
import Footer from "../../components/shared/Footer"

interface RootLayoutProps extends HtmlHTMLAttributes<HTMLDivElement> { }

const RootLayout = ({ className, ...props }: RootLayoutProps) => {
    return (
        <div className={cn("w-full h-dvh max-w-[1440px] mx-auto grid grid-rows-[auto_1fr_auto] py-3", className)} {...props}>
            <Header />
            <main className="w-full mt-16 h-[100%_-_56px] ">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout