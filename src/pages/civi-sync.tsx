import Container from "../components/Container"
import ActionCard from "../components/ui/ActionCard"
import { InfoRow, InfoSection } from "../components/ui/InfoComponents"
import PageHero from "../components/ui/PageHero"
import { DropdownContent, Sidebar, SidebarButton, SidebarLink, SidebarProvider, SidebarTitle } from "../components/ui/Sidebar"


const CiviSync = () => {
    return (
        <>
            <section className="w-full grid grid-cols-1 lg:grid-cols-[auto_1fr]  gap-6 ">
                <SidebarProvider>
                    <Sidebar>
                        <SidebarTitle to="#">Overview</SidebarTitle>
                        <SidebarButton id={1} title="Why Choose CiviSync?" />
                        <DropdownContent id={1}>
                            <SidebarLink to="#">Comprehensive Solutions for Every Sector</SidebarLink>
                            <SidebarLink to="#">Seamless Integration</SidebarLink>
                            <SidebarLink to="#">Scalable and Customizable</SidebarLink>
                            <SidebarLink to="#">Robust Data Security</SidebarLink>
                        </DropdownContent>

                        <SidebarButton id={2} title="CiviSync API Offerings" />
                        <DropdownContent id={2}>
                            <SidebarLink to="#">Identity Management API</SidebarLink>
                            <SidebarLink to="#">Address Verification API</SidebarLink>
                            <SidebarLink to="#">Tax Collection and Revenue Management API</SidebarLink>
                            <SidebarLink to="#">Public Service Integration API</SidebarLink>
                        </DropdownContent>

                        <SidebarButton id={3} title="How Civisync Works" />
                        <DropdownContent id={3}>
                            <SidebarLink to="#">Consultation and Customization</SidebarLink>
                            <SidebarLink to="#">Seamless Deployment</SidebarLink>
                            <SidebarLink to="#">Continuous Support and Upgrades</SidebarLink>
                        </DropdownContent>

                        <SidebarTitle to="#" className="font-semibold">Pricing</SidebarTitle>
                        <SidebarTitle to="#" className="font-semibold">Documentation</SidebarTitle>
                    </Sidebar>
                </SidebarProvider>
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

                    <div className="w-full max-w-[1107px] mx-auto">

                        <InfoSection title="WHY CHOOSE CIVISYNC?">
                            <InfoRow title="Comprehensive Solutions for Every Sector">
                                CiviSync offers a suite of APIs designed to address the diverse needs of government entities, from national ministries to local municipalities. Whether it's improving tax collection, streamlining identity management, or enhancing public service delivery, CiviSync provides the tools needed to support digital transformation across all sectors.
                            </InfoRow>
                            <InfoRow title="Seamless Integration">
                                Our APIs are built to integrate effortlessly with your existing systems. Whether you're working with legacy databases, national ID systems, or postal services, CiviSync ensures a smooth transition to a more connected and efficient digital ecosystem. We focus on compatibility and ease of use, minimizing disruption while maximizing impact.
                            </InfoRow>
                            <InfoRow title="Robust Data Security">
                                CiviSync places the utmost importance on data security and compliance with local data protection regulations. Our APIs are equipped with advanced security features, ensuring that sensitive government data is protected from breaches, unauthorized access, and other cyber threats.
                            </InfoRow>
                            <InfoRow title="Enhancing Public Service Delivery">
                                Every country is unique, and so are its needs. CiviSync's API solutions are fully customizable to fit the specific requirements of your government or agency. As your nation grows and your digital needs evolve, CiviSync scales with you, ensuring continuous support and adaptability.
                            </InfoRow>
                        </InfoSection>


                        {/* H */}
                        <div className="w-full flex flex-col gap-4 ">
                            <h3 className="text-lg font-semibold text-neutral-80 mb-2">CIVISYNC API OFFERINGS</h3>

                            <div className="grid grid-cols-12 gap-5 lg:gap-x-10 py-5">
                                <div className="flex flex-col gap-4 rounded-lg w-full col-span-12 md:col-span-7">
                                    <div className="flex flex-col gap-4 rounded-lg w-full ">
                                        <h3 className="text-xl font-bold text-neutral-80 mb-2">Identity Management API</h3>
                                        <p className="text-neutral-80 text-xl">Securely manage and authenticate citizens' identities with our advanced Identity Management API. This solution integrates with national ID systems, helping governments maintain accurate, up-to-date citizen records while ensuring privacy and security.</p>
                                    </div>
                                </div>

                                <div className="w-full col-span-12 md:col-span-4">
                                    <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/identity-management-api.png" alt="identity-management-api" />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-5 lg:gap-x-10 py-5">
                                <div className="flex flex-col gap-4 rounded-lg w-full col-span-12 md:col-span-7">
                                    <div className="flex flex-col gap-4 rounded-lg w-full">
                                        <h3 className="text-xl font-bold text-neutral-80 mb-2">Address Verification API</h3>
                                        <p className="text-neutral-80 text-xl">Our Address Verification API streamlines postal services, urban planning, and infrastructure development by providing accurate, real-time address data. Improve the delivery of mail, goods, and services, while supporting better resource allocation and planning.</p>
                                    </div>
                                </div>

                                <div className="w-full col-span-12 md:col-span-4">
                                    <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/address-verification-api.png" alt="address-verification-api" />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-5 lg:gap-x-10 py-5">
                                <div className="flex flex-col gap-4 rounded-lg w-full col-span-12 md:col-span-7">
                                    <div className="flex flex-col gap-4 rounded-lg w-full">
                                        <h3 className="text-xl font-bold text-neutral-80 mb-2">Tax Collection and Revenue Management API</h3>
                                        <p className="text-neutral-80 text-xl">Enhance your government's revenue streams with our Tax Collection API. Automate and optimize tax collection processes, improve compliance, and increase transparency. Our solution integrates with national financial systems to ensure seamless operations and accurate reporting.</p>
                                    </div>
                                </div>

                                <div className="w-full col-span-12 md:col-span-4">
                                    <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/tax-collection-api.png" alt="tax-collection-api" />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-5 lg:gap-x-10 py-5">
                                <div className="flex flex-col gap-4 rounded-lg w-full col-span-12 md:col-span-7">
                                    <div className="flex flex-col gap-4 rounded-lg w-full">
                                        <h3 className="text-xl font-bold text-neutral-80 mb-2">Public Service Integration API</h3>
                                        <p className="text-neutral-80 text-xl">Facilitate collaboration across different government departments with our Public Service Integration API. Connect various public services into a unified system, ensuring citizens receive the assistance they need, when they need it, without unnecessary delays or bureaucratic hurdles.</p>
                                    </div>
                                </div>

                                <div className="w-full col-span-12 md:col-span-4">
                                    <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/public-service-integration-api.png" alt="public-service-integration-api" />
                                </div>
                            </div>

                        </div>


                        <InfoSection title="HOW CIVISYNC WORKS">
                            <InfoRow title="Consultation and Customization">
                                Our team begins by understanding the unique needs of your government or agency. We work closely with you to customize our API solutions, ensuring they align perfectly with your objectives.
                            </InfoRow>
                            <InfoRow title="Seamless Deployment">
                                Once customized, our APIs are deployed with minimal disruption to your existing systems. We provide comprehensive support during the integration phase to ensure a smooth transition.
                            </InfoRow>
                            <InfoRow title="Continuous Support and Upgrades">
                                CiviSync is not just a service provider; we are your partner in digital transformation. We offer ongoing support, regular updates, and continuous improvements to ensure your systems remain at the cutting edge of technology.
                            </InfoRow>
                        </InfoSection>


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