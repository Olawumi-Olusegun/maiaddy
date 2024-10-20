import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full py-4 px-3">
            <nav className="h-[80px] px-6 bg-white flex items-center justify-between gap-3 rounded-[59px] max-w-7xl mx-auto">
                {/* logo */}
                <Link to={"/"} className="flex items-center">
                    <svg width="103" height="62" viewBox="0 0 103 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.53031 36.8377C1.72726 36.8377 1.25487 36.3464 1.25487 35.5056V24.6786C1.25487 23.5259 1.93511 22.8363 3.09717 22.8363C4.08917 22.8363 4.63714 23.252 5.05284 24.3101L8.4351 32.6902H8.51069L11.8835 24.3101C12.2992 23.2614 12.8566 22.8363 13.8581 22.8363C15.0107 22.8363 15.6909 23.5165 15.6909 24.6786V35.5056C15.6909 36.3464 15.2185 36.8377 14.4155 36.8377C13.6124 36.8377 13.1495 36.3464 13.1495 35.5056V27.4562H13.0739L9.70109 35.704C9.45545 36.3086 9.07755 36.5732 8.48234 36.5732C7.87769 36.5732 7.48089 36.2992 7.2447 35.7134L3.87188 27.4562H3.7963V35.5056C3.7963 36.3464 3.33336 36.8377 2.53031 36.8377ZM18.9787 36.8377C18.0906 36.8377 17.5332 36.3181 17.5332 35.4961C17.5332 35.2599 17.5994 34.9387 17.7222 34.5892L21.4446 24.4518C21.8414 23.3464 22.5122 22.8363 23.5892 22.8363C24.704 22.8363 25.3654 23.3275 25.7716 24.4424L29.5129 34.5892C29.6452 34.9576 29.6924 35.2127 29.6924 35.4961C29.6924 36.2803 29.0972 36.8377 28.2658 36.8377C27.4627 36.8377 27.0376 36.4692 26.7825 35.5812L26.0645 33.4271H21.1422L20.4242 35.5528C20.1597 36.4598 19.7345 36.8377 18.9787 36.8377ZM21.7658 31.2163H25.4031L23.5986 25.6328H23.5325L21.7658 31.2163ZM32.9708 36.8377C32.0732 36.8377 31.5442 36.2897 31.5442 35.3544V24.329C31.5442 23.3842 32.0732 22.8363 32.9708 22.8363C33.8683 22.8363 34.3974 23.3842 34.3974 24.329V35.3544C34.3974 36.2897 33.8683 36.8377 32.9708 36.8377Z" fill="#336699" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.4936 17.8962V14.8568C54.0193 15.3097 56.3668 16.5242 58.2062 18.3636C60.5788 20.7362 61.9117 23.9541 61.9117 27.3094C61.9117 32.8685 58.8409 37.6764 55.9651 40.9837C54.5089 42.6582 53.0566 44.0012 51.9687 44.926C51.8015 45.068 51.6427 45.2004 51.4936 45.3229V41.3515C52.1948 40.6851 52.9574 39.906 53.7188 39.0304C56.4243 35.9191 58.9349 31.7967 58.9349 27.3094C58.9349 24.7436 57.9157 22.2828 56.1014 20.4685C54.8232 19.1903 53.2241 18.3067 51.4936 17.8962ZM50.0052 46.4586V46.2336L49.2642 45.1751C49.6853 45.7767 49.8979 46.0801 50.0052 46.2331V42.6881C49.7274 42.9235 49.4767 43.1283 49.2605 43.3006C49.0351 43.121 48.7722 42.906 48.4803 42.6579C47.4752 41.8036 46.1368 40.5652 44.8023 39.0304C44.0085 38.1176 43.2315 37.1178 42.5298 36.0472H44.6777C46.347 33.8223 48.0574 31.6466 50.3734 30.2198C50.7419 31.1873 51.1103 32.1548 51.4786 33.1223L51.4823 33.1319C51.8523 34.1037 52.2223 35.0755 52.5925 36.0472H54.6877C54.2491 34.8777 53.8108 33.7081 53.3724 32.5386L53.361 32.5082C52.9188 31.3281 52.4765 30.1481 52.034 28.9681C53.4791 27.988 55.0516 27.5492 56.6398 27.1752C51.1296 27.6526 46.3064 30.3204 42.3564 35.7788C40.7547 33.2623 39.5861 30.3708 39.5861 27.3094C39.5861 24.7436 40.6054 22.2828 42.4197 20.4685C44.234 18.6542 46.6947 17.6349 49.2605 17.6349C49.5099 17.6349 49.7583 17.6446 50.0052 17.6636V14.6801C49.7579 14.6655 49.5096 14.6582 49.2605 14.6582C45.9052 14.6582 42.6874 15.9911 40.3148 18.3636C37.9423 20.7362 36.6094 23.9541 36.6094 27.3094C36.6094 32.8685 39.6801 37.6764 42.556 40.9837C44.0121 42.6582 45.4644 44.0012 46.5524 44.926C47.0974 45.3892 47.5537 45.7499 47.8771 45.997C48.0388 46.1206 48.1675 46.216 48.2576 46.2818C48.3027 46.3147 48.3381 46.3402 48.3632 46.3581L48.3931 46.3794L48.4021 46.3857L48.405 46.3878L48.4062 46.3886C48.4066 46.3889 48.407 46.3892 49.2605 45.1698L48.407 46.3892C48.884 46.723 49.5079 46.7462 50.0052 46.4586ZM48.7583 24.9784L49.4721 27.2298C48.7347 27.4689 48.1361 27.7641 47.6082 28.0948L48.7583 24.9793V24.9784ZM50.9704 26.6709L48.7574 20.69L44.1089 32.0525C48.2513 28.7993 52.371 27.0448 56.6399 26.9621C54.7716 26.6423 52.8518 26.3924 50.9704 26.6719V26.6709Z" fill="#336699" />
                        <path d="M65.353 37.207C64.4555 37.207 63.9264 36.6591 63.9264 35.7143V25.0573C63.9264 24.122 64.4555 23.574 65.353 23.574H69.1321C73.2229 23.574 75.6321 26.0115 75.6321 30.3386C75.6321 34.6656 73.2229 37.207 69.1321 37.207H65.353ZM66.7796 34.8451H68.792C71.3428 34.8451 72.7222 33.2957 72.7222 30.348C72.7222 27.4948 71.305 25.9265 68.792 25.9265H66.7796V34.8451ZM79.0144 37.207C78.1168 37.207 77.5878 36.6591 77.5878 35.7143V25.0573C77.5878 24.122 78.1168 23.574 79.0144 23.574H82.7934C86.8843 23.574 89.2934 26.0115 89.2934 30.3386C89.2934 34.6656 86.8843 37.207 82.7934 37.207H79.0144ZM80.441 34.8451H82.4533C85.0042 34.8451 86.3835 33.2957 86.3835 30.348C86.3835 27.4948 84.9664 25.9265 82.4533 25.9265H80.441V34.8451ZM95.7368 37.3865C94.8392 37.3865 94.3102 36.8386 94.3102 35.9033V32.1147L90.1532 25.6903C89.9453 25.3691 89.8603 25.0479 89.8603 24.7267C89.8603 23.9519 90.465 23.3851 91.2869 23.3851C91.901 23.3851 92.2317 23.6118 92.6096 24.2637L95.7273 29.3938H95.7935L98.9206 24.2637C99.2796 23.6402 99.6481 23.3851 100.215 23.3851C101.018 23.3851 101.623 23.9519 101.623 24.7078C101.623 25.0384 101.528 25.3502 101.32 25.6809L97.1634 32.1147V35.9033C97.1634 36.8386 96.6343 37.3865 95.7368 37.3865Z" fill="#336699" />
                    </svg>
                </Link>

                {/* Hamburger Icon for mobile */}
                <button
                    onClick={toggleMenu}
                    className="block lg:hidden text-2xl"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                                isMenuOpen
                                    ? "M6 18L18 6M6 6l12 12" // Close icon
                                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                            }
                        />
                    </svg>
                </button>

                {/* Desktop nav list */}
                <ul className="hidden lg:flex items-center gap-3">
                    <li className="text-neutral-700 text-base font-medium">
                        <Link to={"/about"}>About Us</Link>
                    </li>
                    <li className="text-neutral-700 text-base font-medium">
                        <Link to={"/about"}>Solutions</Link>
                    </li>
                    <li className="text-neutral-700 text-base font-medium">
                        <Link to={"/careers"}>Careers</Link>
                    </li>
                    <li className="text-neutral-700 text-base font-medium">
                        <Link to={"/privacy-policy"}>Privacy Policy</Link>
                    </li>
                    <li className="text-neutral-700 text-base font-medium">
                        <Link to={"/contact-us"}>Contact Us</Link>
                    </li>
                    <li className="text-neutral-700 text-base font-medium">
                        <Link to={"/terms-of-use"} onClick={toggleMenu}>Terms of Use</Link>
                    </li>
                </ul>

                <Link
                    to={"/"}
                    className="hidden lg:block bg-primary-90 text-white hover:bg-primary-90/80 duration-300 rounded-xl px-4 py-2"
                >
                    Start Free
                </Link>

                {/* Mobile menu */}
                <div
                    className={`fixed z-20 flex flex-col gap-5 inset-y-0 left-0 w-64 bg-white p-6 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}>
                    <Link to={"/"} onClick={toggleMenu} className="flex items-center">
                        <svg width="103" height="62" viewBox="0 0 103 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.53031 36.8377C1.72726 36.8377 1.25487 36.3464 1.25487 35.5056V24.6786C1.25487 23.5259 1.93511 22.8363 3.09717 22.8363C4.08917 22.8363 4.63714 23.252 5.05284 24.3101L8.4351 32.6902H8.51069L11.8835 24.3101C12.2992 23.2614 12.8566 22.8363 13.8581 22.8363C15.0107 22.8363 15.6909 23.5165 15.6909 24.6786V35.5056C15.6909 36.3464 15.2185 36.8377 14.4155 36.8377C13.6124 36.8377 13.1495 36.3464 13.1495 35.5056V27.4562H13.0739L9.70109 35.704C9.45545 36.3086 9.07755 36.5732 8.48234 36.5732C7.87769 36.5732 7.48089 36.2992 7.2447 35.7134L3.87188 27.4562H3.7963V35.5056C3.7963 36.3464 3.33336 36.8377 2.53031 36.8377ZM18.9787 36.8377C18.0906 36.8377 17.5332 36.3181 17.5332 35.4961C17.5332 35.2599 17.5994 34.9387 17.7222 34.5892L21.4446 24.4518C21.8414 23.3464 22.5122 22.8363 23.5892 22.8363C24.704 22.8363 25.3654 23.3275 25.7716 24.4424L29.5129 34.5892C29.6452 34.9576 29.6924 35.2127 29.6924 35.4961C29.6924 36.2803 29.0972 36.8377 28.2658 36.8377C27.4627 36.8377 27.0376 36.4692 26.7825 35.5812L26.0645 33.4271H21.1422L20.4242 35.5528C20.1597 36.4598 19.7345 36.8377 18.9787 36.8377ZM21.7658 31.2163H25.4031L23.5986 25.6328H23.5325L21.7658 31.2163ZM32.9708 36.8377C32.0732 36.8377 31.5442 36.2897 31.5442 35.3544V24.329C31.5442 23.3842 32.0732 22.8363 32.9708 22.8363C33.8683 22.8363 34.3974 23.3842 34.3974 24.329V35.3544C34.3974 36.2897 33.8683 36.8377 32.9708 36.8377Z" fill="#336699" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M51.4936 17.8962V14.8568C54.0193 15.3097 56.3668 16.5242 58.2062 18.3636C60.5788 20.7362 61.9117 23.9541 61.9117 27.3094C61.9117 32.8685 58.8409 37.6764 55.9651 40.9837C54.5089 42.6582 53.0566 44.0012 51.9687 44.926C51.8015 45.068 51.6427 45.2004 51.4936 45.3229V41.3515C52.1948 40.6851 52.9574 39.906 53.7188 39.0304C56.4243 35.9191 58.9349 31.7967 58.9349 27.3094C58.9349 24.7436 57.9157 22.2828 56.1014 20.4685C54.8232 19.1903 53.2241 18.3067 51.4936 17.8962ZM50.0052 46.4586V46.2336L49.2642 45.1751C49.6853 45.7767 49.8979 46.0801 50.0052 46.2331V42.6881C49.7274 42.9235 49.4767 43.1283 49.2605 43.3006C49.0351 43.121 48.7722 42.906 48.4803 42.6579C47.4752 41.8036 46.1368 40.5652 44.8023 39.0304C44.0085 38.1176 43.2315 37.1178 42.5298 36.0472H44.6777C46.347 33.8223 48.0574 31.6466 50.3734 30.2198C50.7419 31.1873 51.1103 32.1548 51.4786 33.1223L51.4823 33.1319C51.8523 34.1037 52.2223 35.0755 52.5925 36.0472H54.6877C54.2491 34.8777 53.8108 33.7081 53.3724 32.5386L53.361 32.5082C52.9188 31.3281 52.4765 30.1481 52.034 28.9681C53.4791 27.988 55.0516 27.5492 56.6398 27.1752C51.1296 27.6526 46.3064 30.3204 42.3564 35.7788C40.7547 33.2623 39.5861 30.3708 39.5861 27.3094C39.5861 24.7436 40.6054 22.2828 42.4197 20.4685C44.234 18.6542 46.6947 17.6349 49.2605 17.6349C49.5099 17.6349 49.7583 17.6446 50.0052 17.6636V14.6801C49.7579 14.6655 49.5096 14.6582 49.2605 14.6582C45.9052 14.6582 42.6874 15.9911 40.3148 18.3636C37.9423 20.7362 36.6094 23.9541 36.6094 27.3094C36.6094 32.8685 39.6801 37.6764 42.556 40.9837C44.0121 42.6582 45.4644 44.0012 46.5524 44.926C47.0974 45.3892 47.5537 45.7499 47.8771 45.997C48.0388 46.1206 48.1675 46.216 48.2576 46.2818C48.3027 46.3147 48.3381 46.3402 48.3632 46.3581L48.3931 46.3794L48.4021 46.3857L48.405 46.3878L48.4062 46.3886C48.4066 46.3889 48.407 46.3892 49.2605 45.1698L48.407 46.3892C48.884 46.723 49.5079 46.7462 50.0052 46.4586ZM48.7583 24.9784L49.4721 27.2298C48.7347 27.4689 48.1361 27.7641 47.6082 28.0948L48.7583 24.9793V24.9784ZM50.9704 26.6709L48.7574 20.69L44.1089 32.0525C48.2513 28.7993 52.371 27.0448 56.6399 26.9621C54.7716 26.6423 52.8518 26.3924 50.9704 26.6719V26.6709Z" fill="#336699" />
                            <path d="M65.353 37.207C64.4555 37.207 63.9264 36.6591 63.9264 35.7143V25.0573C63.9264 24.122 64.4555 23.574 65.353 23.574H69.1321C73.2229 23.574 75.6321 26.0115 75.6321 30.3386C75.6321 34.6656 73.2229 37.207 69.1321 37.207H65.353ZM66.7796 34.8451H68.792C71.3428 34.8451 72.7222 33.2957 72.7222 30.348C72.7222 27.4948 71.305 25.9265 68.792 25.9265H66.7796V34.8451ZM79.0144 37.207C78.1168 37.207 77.5878 36.6591 77.5878 35.7143V25.0573C77.5878 24.122 78.1168 23.574 79.0144 23.574H82.7934C86.8843 23.574 89.2934 26.0115 89.2934 30.3386C89.2934 34.6656 86.8843 37.207 82.7934 37.207H79.0144ZM80.441 34.8451H82.4533C85.0042 34.8451 86.3835 33.2957 86.3835 30.348C86.3835 27.4948 84.9664 25.9265 82.4533 25.9265H80.441V34.8451ZM95.7368 37.3865C94.8392 37.3865 94.3102 36.8386 94.3102 35.9033V32.1147L90.1532 25.6903C89.9453 25.3691 89.8603 25.0479 89.8603 24.7267C89.8603 23.9519 90.465 23.3851 91.2869 23.3851C91.901 23.3851 92.2317 23.6118 92.6096 24.2637L95.7273 29.3938H95.7935L98.9206 24.2637C99.2796 23.6402 99.6481 23.3851 100.215 23.3851C101.018 23.3851 101.623 23.9519 101.623 24.7078C101.623 25.0384 101.528 25.3502 101.32 25.6809L97.1634 32.1147V35.9033C97.1634 36.8386 96.6343 37.3865 95.7368 37.3865Z" fill="#336699" />
                        </svg>
                    </Link>
                    <ul className="flex flex-col space-y-5">
                        <li className="text-neutral-700 text-base font-medium">
                            <Link to={"/about"} onClick={toggleMenu}>About Us</Link>
                        </li>
                        <li className="text-neutral-700 text-base font-medium">
                            <Link to={"/solutions"} onClick={toggleMenu}>Solutions</Link>
                        </li>
                        <li className="text-neutral-700 text-base font-medium">
                            <Link to={"/careers"} onClick={toggleMenu}>Careers</Link>
                        </li>
                        <li className="text-neutral-700 text-base font-medium">
                            <Link to={"/privacy-policy"} onClick={toggleMenu}>Privacy Policy</Link>
                        </li>
                        <li className="text-neutral-700 text-base font-medium">
                            <Link to={"/contact"} onClick={toggleMenu}>Contact Us</Link>
                        </li>

                        <li className="text-neutral-700 text-base font-medium">
                            <Link to={"/"}
                                className="bg-primary-90 text-white hover:bg-primary-90/80 duration-300 rounded-xl px-3 py-1.5"
                                onClick={toggleMenu}>
                                Start Free
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
