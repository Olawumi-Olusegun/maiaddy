import { useState } from "react";
import { Link } from "react-router-dom";

const CoreLayoutSidebar = () => {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <>
            <aside className="fixed top-0 left-0 p-4 h-dvh text-black bg-appBg md:translate-x-0 transform transition-transform duration-300 ease-in-out md:static flex flex-col gap-2 w-64 z-50 lg:translate-x-0">
                <button className="border border-transparent hover:border-primary-90 hover:bg-primary-10 duration-300 text-[15px] text-start text-primary-90 font-semibold py-2 px-4 rounded-xl w-full">
                    Overview
                </button>
                <ul className="flex-1 flex flex-col gap-3">
                    {/* Dropdown 1 */}
                    <li className="relative">
                        <button
                            className="border border-transparent text-neutral-70 hover:text-primary-90 hover:border-primary-90 hover:bg-primary-10 duration-300 flex items-center justify-between text-[15px] w-full px-4 py-2 rounded-xl"
                            onClick={() => toggleDropdown(1)}
                        >
                            Why Choose Civisync
                        </button>

                        <ul className={`grid duration-300 border-l ml-4 ${openDropdown === 1 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            }`}
                        >
                            <div className="w-full duration-300 overflow-hidden ">
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-[15px] text-black/80 hover:bg-white/5 rounded-md"
                                    >
                                        Comprehensive Solutions for Every Sector
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-[15px] text-black/80 hover:bg-white/5 rounded-md"
                                    >
                                        Seamless Integration
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-[15px] text-black/80 hover:bg-white/5 rounded-md"
                                    >
                                        Scalable and Customizable
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-[15px] text-black/80 hover:bg-white/5 rounded-md"
                                    >
                                        Robust Data Security
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-[15px] text-black/80 hover:bg-white/5 rounded-md"
                                    >
                                        Enhancing Public Service Delivery
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </li>

                    {/* Dropdown 2 */}
                    <li className="relative">
                        <button
                            className="border border-transparent text-neutral-70 hover:text-primary-90 hover:border-primary-90 hover:bg-primary-10 duration-300 flex items-center justify-between w-full px-4 py-2 rounded-xl"
                            onClick={() => toggleDropdown(2)}
                        >
                            <div className="flex items-center gap-2 text-[15px]">
                                CiviSync API Offerings
                            </div>
                        </button>

                        <ul
                            className={`grid duration-300 border-l ml-4 ${openDropdown === 2 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                }`}
                        >
                            <div className="w-full duration-300 overflow-hidden ">
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-[15px] text-black/80 hover:bg-white/5 rounded-md"
                                    >
                                        Identity Management API
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-[15px] text-black/80 hover:bg-white/5 rounded-md"
                                    >
                                        Address Verification API
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-[15px] text-black/80 hover:bg-white/5 rounded-md"
                                    >
                                        Tax Collection and Revenue Management API
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-[15px] text-black/80 hover:bg-white/5 rounded-md"
                                    >
                                        Public Service Integration API
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </li>

                    {/* Dropdown 3 */}
                    <li className="relative">
                        <button
                            className="border border-transparent text-neutral-70 hover:text-primary-90 hover:border-primary-90 hover:bg-primary-10 duration-300 flex items-center justify-between w-full px-4 py-2 rounded-xl"
                            onClick={() => toggleDropdown(3)}
                        >
                            <div className="flex items-center gap-2 text-[15px]">
                                How Civisync Works
                            </div>
                        </button>

                        <ul
                            className={`grid duration-300 border-l ml-4 ${openDropdown === 3 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                }`}
                        >
                            <div className="w-full duration-300 overflow-hidden ">
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-[15px] text-black/80 rounded-md"
                                    >
                                        Consultation and Customization
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-[15px] text-black/80 hover:bg-white/5 rounded-md"
                                    >
                                        Seamless Deployment
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-[15px] text-black/80 hover:bg-white/5 rounded-md"
                                    >
                                        Tax Collection and Revenue Management API
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="block px-4 py-2 text-[15px] text-black/80 hover:bg-white/5 rounded-md"
                                    >
                                        Public Service Integration API
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </li>

                    <li>
                        <Link
                            to="#"
                            className="border border-transparent text-neutral-70 hover:text-primary-90 hover:border-primary-90 hover:bg-primary-10 duration-300 flex items-center gap-2 px-4 py-2 text-[15px] rounded-xl"
                        >
                            Use Cases
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="border border-transparent text-neutral-70 hover:text-primary-90 hover:border-primary-90 hover:bg-primary-10 duration-300 flex items-center gap-2 px-4 py-2 text-[15px] rounded-xl"
                        >
                            Pricing
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="#"
                            className="border border-transparent text-neutral-70 hover:text-primary-90 hover:border-primary-90 hover:bg-primary-10 duration-300 flex items-center gap-2 px-4 py-2 text-[15px] rounded-xl"
                        >
                            Documentation
                        </Link>
                    </li>
                </ul>

            </aside>
        </>
    );
};

export default CoreLayoutSidebar;
