import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
    return (
        <header className="w-full lg:py-4 px-3">
            <DesktopNav />
            <MobileNav />
        </header>
    );
};

export default Header;
