import { Link } from "react-router-dom"
import Container from "../components/Container"

const Career = () => {
    return (
        <section className="w-full">
            <Container>
                <div className="flex flex-col gap-3 items-start my-10 mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 ">Careers</h2>
                    <p className="text-neutral-70 text-2xl">Join the Maiaddy team and help shape the future of location services in Africa.</p>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <h4 className="text-center text-sm text-primary-70 font-bold">Open Roles</h4>
                    <h2 className="text-center font-semibold text-3xl text-primary-90">We're looking for talented people</h2>
                </div>
                <div className=" w-full max-w-[1216px] h-[440px] mx-auto overflow-hidden rounded-sm mt-16">
                    <img src="./assets/images/meeting.png" alt="office-meeting image" className="w-full h-full object-cover" />
                </div>

                <div className="w-full">
                    {/* <h1 className="text-3xl font-bold my-8 text-neutral-800">Engineering</h1> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Data Scientist - Machine Learning</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[10] text-neutral-90 ">We are seeking a skilled and driven Data Scientist with deep experience in machine learning and a strong command of Java to develop and implement ML models tailored to our geospatial and location intelligence APIs. The ideal candidate will work closely with our software engineering and product teams to develop data-driven solutions that enhance the capabilities of our APIs. This role requires a blend of strong analytical skills, knowledge of machine learning, and proficiency in Java programming for production-level model deployment.</p>
                            <Link to={"data-scientist"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Growth Lead </h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[10] text-neutral-90 ">We are seeking a dynamic Growth Lead to spearhead our marketing, sales, and business development efforts. This is a unique role for a motivated self-starter who thrives in a fast-paced startup environment and has a proven track record in driving customer acquisition, closing partnerships, and scaling business initiatives. You will be responsible for developing and executing strategies to expand our market presence, generate sales, and foster long-term relationships with partners and clients.</p>
                            <Link to={"growth-lead"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Cybersecurity Analyst</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a Cybersecurity Analyst to join our team and help us protect the integrity of our platform and sensitive data. The ideal candidate will play a critical role in safeguarding our systems, detecting and responding to security incidents, and ensuring compliance with regulatory standards.</p>
                            <Link to={"cybersecurity-analyst"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>

                {/* <div className="w-full">
                    <h1 className="text-3xl font-bold my-8 text-neutral-800">Engineering</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Software Engineer</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Frontend Developer</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Backend Developer</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Full-Stack Developer</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">DevOps Engineer</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Quality Assurance Engineer</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="w-full">
                    <h1 className="text-3xl font-bold my-8">Design</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Graphic Designer</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">UI/UX Designer</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Illustrator</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Product Designer</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Motion Graphics Designer</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Brand Designer</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="w-full">
                    <h1 className="text-3xl font-bold my-8">Corporate</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Legal Assistant</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Operations Manager</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Finance Analyst</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <h1 className="text-3xl font-bold my-8">Data Science & Analytics </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Data Scientist</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Data Analyst</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>


                <div className="w-full">
                    <h1 className="text-3xl font-bold my-8">Marketing </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Marketing Manager</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Digital Marketing Specialist</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Brand Manager</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Public Relations Specialist</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Content Marketing Manager</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="w-full">
                    <h1 className="text-3xl font-bold my-8">Product </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
                        <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4 items-start">
                            <h2 className="text-xl font-bold text-neutral-900 ">Product Manager</h2>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Remote</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Fulltime</span>
                                <span className="bg-primary-5 text-primary-90 text-xs font-semibold px-2 h-[26px] leading-[26px] rounded-full text-center">Lagos state, Africa</span>
                            </div>
                            <p className="text-sm line-clamp-[9] text-neutral-90 ">We are seeking a dynamic and experienced Product Manager to join our team. As a Product Manager, you will play a pivotal role in driving the development and success of our products from inception to launch and beyond. You will collaborate closely with cross-functional teams, including engineering, design, marketing, and customer support, to define product strategy, prioritize features, and deliver exceptional user experiences.</p>
                            <Link to={"#"} className="group flex mt-auto items-center gap-1.5 text-primary-70 py-2 rounded-md">
                                Apply
                                <svg className="group-hover:translate-x-1 duration-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007H4V11.0007H16.172Z" fill="#336699" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div> */}

            </Container>
        </section>
    )
}

export default Career