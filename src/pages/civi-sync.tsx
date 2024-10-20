import Container from "../components/Container"
import ActionCard from "../components/ui/ActionCard"
import PageHero from "../components/ui/PageHero"

const CiviSync = () => {
    return (
        <>
            <section className="w-full xl:px-12">
                <Container>
                    <PageHero>
                        <PageHero.Body>
                            <PageHero.BreadCrumbTitle>CiviSync</PageHero.BreadCrumbTitle>
                            <PageHero.Title> Empowering Digital Transformation for Governments and Public Agencies</PageHero.Title>
                            <PageHero.Description className="">
                                CiviSync is the leading API service tailored specifically for governments and public agencies across Africa. We are committed to enhancing the efficiency, transparency, and effectiveness of government services by providing innovative API solutions that seamlessly integrate with existing infrastructures. Our goal is to help nations across Africa build smarter, more responsive, and more secure public service ecosystems.
                            </PageHero.Description>
                            <PageHero.ActionButtons>
                                <PageHero.ActionLink to="/">
                                    Get Started for free
                                </PageHero.ActionLink>
                                <PageHero.ActionLink to="/contact-us" className="inline-flex items-center px-4 py-2 border  text-base font-medium rounded-xl bg-transparent text-primary-90  border-primary-90 hover:bg-white hover:text-primary-90 shadow-sm duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-90">
                                    Contact Us
                                </PageHero.ActionLink>
                            </PageHero.ActionButtons>
                        </PageHero.Body>
                    </PageHero>

                    <div className="w-full max-w-[1119px] mx-auto ">

                        <div className="py-8">
                            <h2 className="text-gray-800 mb-8 font-bold">WHY CHOOSE CIVISYNC?</h2>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl" >Comprehensive Solutions for Every Sector</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">CiviSync offers a suite of APIs designed to address the diverse needs of government entities, from national ministries to local municipalities. Whether it’s improving tax collection, streamlining identity management, or enhancing public service delivery, CiviSync provides the tools needed to support digital transformation across all sectors.</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-8">
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl" >Seamless Integration</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Our APIs are built to integrate effortlessly with your existing systems. Whether you're working with legacy databases, national ID systems, or postal services, CiviSync ensures a smooth transition to a more connected and efficient digital ecosystem. We focus on compatibility and ease of use, minimizing disruption while maximizing impact.</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-8">
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Robust Data Security</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">CiviSync places the utmost importance on data security and compliance with local data protection regulations. Our APIs are equipped with advanced security features, ensuring that sensitive government data is protected from breaches, unauthorized access, and other cyber threats.</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-8">
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl"> Enhancing Public Service Delivery</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Improve the responsiveness and efficiency of public services with CiviSync. Our APIs enable faster service delivery, more accurate data management, and better communication between government agencies and the citizens they serve. From urban planning to emergency response, CiviSync helps governments serve their people better.</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-8">
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl"> Scalable and Customizable</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Every country is unique, and so are its needs. CiviSync's API solutions are fully customizable to fit the specific requirements of your government or agency. As your nation grows and your digital needs evolve, CiviSync scales with you, ensuring continuous support and adaptability.</p>
                                </div>
                            </div>

                        </div>

                        {/* H */}
                        <div className="w-full flex flex-col gap-4 ">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">CIVISYNC API OFFERINGS</h3>

                            <div className="grid grid-cols-12 gap-5 lg:gap-x-10 py-5">
                                <div className="flex flex-col gap-4 rounded-lg w-full col-span-12 md:col-span-7">
                                    <div className="flex flex-col gap-4 rounded-lg w-full ">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Identity Management API</h3>
                                        <p className="text-gray-600 text-xl">Securely manage and authenticate citizens' identities with our advanced Identity Management API. This solution integrates with national ID systems, helping governments maintain accurate, up-to-date citizen records while ensuring privacy and security.</p>
                                    </div>
                                </div>

                                <div className="w-full col-span-12 md:col-span-4">
                                    <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/ad-01.png" alt="Ad01" />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-5 lg:gap-x-10 py-5">
                                <div className="flex flex-col gap-4 rounded-lg w-full col-span-12 md:col-span-7">
                                    <div className="flex flex-col gap-4 rounded-lg w-full">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Address Verification API</h3>
                                        <p className="text-gray-600 text-xl">Our Address Verification API streamlines postal services, urban planning, and infrastructure development by providing accurate, real-time address data. Improve the delivery of mail, goods, and services, while supporting better resource allocation and planning.</p>
                                    </div>
                                </div>

                                <div className="w-full col-span-12 md:col-span-4">
                                    <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/ad-01.png" alt="Ad01" />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-5 lg:gap-x-10 py-5">
                                <div className="flex flex-col gap-4 rounded-lg w-full col-span-12 md:col-span-7">
                                    <div className="flex flex-col gap-4 rounded-lg w-full">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Tax Collection and Revenue Management API</h3>
                                        <p className="text-gray-600 text-xl">Enhance your government's revenue streams with our Tax Collection API. Automate and optimize tax collection processes, improve compliance, and increase transparency. Our solution integrates with national financial systems to ensure seamless operations and accurate reporting.</p>
                                    </div>
                                </div>

                                <div className="w-full col-span-12 md:col-span-4">
                                    <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/ad-01.png" alt="Ad01" />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-5 lg:gap-x-10 py-5">
                                <div className="flex flex-col gap-4 rounded-lg w-full col-span-12 md:col-span-7">
                                    <div className="flex flex-col gap-4 rounded-lg w-full">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Public Service Integration API</h3>
                                        <p className="text-gray-600 text-xl">Facilitate collaboration across different government departments with our Public Service Integration API. Connect various public services into a unified system, ensuring citizens receive the assistance they need, when they need it, without unnecessary delays or bureaucratic hurdles.</p>
                                    </div>
                                </div>

                                <div className="w-full col-span-12 md:col-span-4">
                                    <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/ad-01.png" alt="Ad01" />
                                </div>
                            </div>

                        </div>

                        {/*  */}

                        <div className="py-8">
                            <h2 className="text-gray-800 mb-8 font-bold">HOW CIVISYNC WORKS</h2>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl"> Consultation and Customization</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Our team begins by understanding the unique needs of your government or agency. We work closely with you to customize our API solutions, ensuring they align perfectly with your objectives.</p>
                                </div>
                                <div className="flex items-start flex-wrap  lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Seamless Deployment</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Once customized, our APIs are deployed with minimal disruption to your existing systems. We provide comprehensive support during the integration phase to ensure a smooth transition.</p>
                                </div>
                                <div className="flex items-start flex-wrap  lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl"> Continuous Support and Upgrades</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">CiviSync is not just a service provider; we are your partner in digital transformation. We offer ongoing support, regular updates, and continuous improvements to ensure your systems remain at the cutting edge of technology.</p>
                                </div>

                            </div>
                        </div>


                    </div>


                    <ActionCard>
                        <ActionCard.Body>
                            <ActionCard.Title>
                                Join the Digital Revolution with CiviSync
                            </ActionCard.Title>
                            <ActionCard.SubTitle>
                                CiviSync is more than just a suite of APIs—it's a pathway to modern, efficient, and responsive governance. Join the many governments and public agencies across Africa that are transforming their operations with CiviSync.
                            </ActionCard.SubTitle>
                            <ActionCard.ActionButtons>
                                <ActionCard.ActionLink to="/">
                                    Get Started
                                </ActionCard.ActionLink>

                                <ActionCard.ActionLink to="/contact-us" className="bg-transparent text-primary-90 border border-primary-90 hover:bg-white hover:text-primary-90">
                                    Contact Us
                                </ActionCard.ActionLink>
                            </ActionCard.ActionButtons>
                        </ActionCard.Body>
                    </ActionCard>
                </Container>

            </section>
        </>
    )
}

export default CiviSync