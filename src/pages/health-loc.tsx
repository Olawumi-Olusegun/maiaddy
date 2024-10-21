import Container from "../components/Container"
import ActionCard from "../components/ui/ActionCard"
import FeatureCard from "../components/ui/FeatureCard"
import PageHero from "../components/ui/PageHero"
import Pricing from "../components/ui/Pricing"
import { DropdownContent, Sidebar, SidebarButton, SidebarLink, SidebarProvider, SidebarTitle } from "../components/ui/Sidebar"


const HealthLoc = () => {
    return (
        <>
            <section className="w-full grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 ">
                <SidebarProvider>
                    <Sidebar>
                        <SidebarTitle to="#">Overview</SidebarTitle>
                        <SidebarButton id={1} title="Features" />
                        <DropdownContent id={1}>
                            <SidebarLink to="#">Accurate Patient Address Verification</SidebarLink>
                            <SidebarLink to="#">Optimized Emergency Response</SidebarLink>
                            <SidebarLink to="#">Comprehensive Health Service Coverage Analysis</SidebarLink>
                            <SidebarLink to="#">Tailored Solutions for Healthcare Providers</SidebarLink>
                            <SidebarLink to="#">Streamlined Healthcare Operations</SidebarLink>
                        </DropdownContent>

                        <SidebarButton id={2} title="Why Choose HealthLoc?" />
                        <DropdownContent id={2}>
                            <SidebarLink to="#">Unmatched Accuracy</SidebarLink>
                            <SidebarLink to="#">Designed for Healthcare</SidebarLink>
                            <SidebarLink to="#">Seamless Integration</SidebarLink>
                            <SidebarLink to="#">Real-Time Insights</SidebarLink>
                            <SidebarLink to="#">Scalable and Customizable</SidebarLink>
                        </DropdownContent>

                        <SidebarTitle to="#" className="font-semibold">Use Cases</SidebarTitle>
                        <SidebarTitle to="#" className="font-semibold">Pricing</SidebarTitle>
                        <SidebarTitle to="#" className="font-semibold">Documentation</SidebarTitle>
                    </Sidebar>
                </SidebarProvider>
                <Container>
                    <PageHero>
                        <PageHero.Body>
                            <PageHero.BreadCrumbTitle>HealthLoc</PageHero.BreadCrumbTitle>
                            <PageHero.Title> Revolutionizing Healthcare with Precision Location Intelligence</PageHero.Title>
                            <PageHero.Description className="">
                                Welcome to HealthLoc, the cutting-edge solution designed to bring unprecedented accuracy and efficiency to healthcare delivery. In a field where every second counts, precise location data can make the difference between life and death. HealthLoc leverages the innovative T2AL-Geo postcode system to offer healthcare providers, emergency services, and care facilities unparalleled tools for optimizing patient care, planning health service coverage, and responding to emergencies. With HealthLoc, you can ensure that every patient receives the right care, at the right place, at the right time.
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


                    <div className="w-full max-w-[1119px] mx-auto">
                        <FeatureCard>
                            <FeatureCard.MainTitle>Features</FeatureCard.MainTitle>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Accurate Patient Address Verification</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            <ul className="list-disc space-y-3">
                                                <li className="text-neutral-80 text-xl">Enhanced Home Care Services: HealthLoc ensures that patient addresses are accurately verified, reducing the risk of missed appointments and ensuring that healthcare professionals reach the correct location every time.</li>
                                                <li className="text-neutral-80 text-xl">Seamless Integration: Easily integrate HealthLoc's verification tools into your existing patient management systems, improving operational efficiency and reducing administrative overhead.</li>
                                                <li className="text-neutral-80 text-xl">Data Integrity: Maintain the highest standards of data accuracy, helping you comply with regulatory requirements and protect patient privacy.</li>
                                            </ul>
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/verification.png" alt="verification-image" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                                <FeatureCard.Divider />
                            </FeatureCard.Body>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Optimized Emergency Response</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            <ul className="list-disc space-y-3">
                                                <li className="text-neutral-80 text-xl">Real-Time Route Optimization: HealthLoc provides real-time route optimization for emergency vehicles, ensuring the fastest possible response times to critical incidents.</li>
                                                <li className="text-neutral-80 text-xl">Precise Location Data: Utilize precise location data to pinpoint the exact location of patients in need, even in densely populated or rural areas where traditional systems may struggle.</li>
                                                <li className="text-neutral-80 text-xl">Emergency Resource Allocation: Improve the allocation of emergency resources by analyzing location data to identify high-risk areas and optimize the distribution of ambulances and other emergency services.</li>
                                            </ul>
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/emergency-response.png" alt="emergency-response" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                                <FeatureCard.Divider />
                            </FeatureCard.Body>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Comprehensive Health Service Coverage Analysis</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            <ul className="list-disc space-y-3">
                                                <li className="text-neutral-80 text-xl">Health Service Planning: Use HealthLoc to conduct detailed analysis of healthcare service coverage, ensuring that facilities are optimally located to serve communities effectively.</li>
                                                <li className="text-neutral-80 text-xl"> Gap Analysis: Identify areas with insufficient healthcare coverage and make data-driven decisions to expand services where they are most needed.</li>
                                                <li className="text-neutral-80 text-xl"> Resource Optimization: Optimize the deployment of healthcare resources, from medical staff to equipment, based on location-specific data and population health trends.</li>
                                            </ul>
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/health-coverage.png" alt="health-coverage-image" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                                <FeatureCard.Divider />
                            </FeatureCard.Body>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Tailored Solutions for Healthcare Providers</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            <ul className="list-disc space-y-3">
                                                <li className="text-neutral-80 text-xl">Customized Tools: HealthLoc offers a suite of customizable tools that cater to the specific needs of different healthcare providers, whether you're running a large hospital, a small clinic, or an emergency response team.</li>
                                                <li className="text-neutral-80 text-xl">Patient Outreach: Enhance patient outreach programs by using precise location data to target underserved populations and improve healthcare access.</li>
                                                <li className="text-neutral-80 text-xl">Health Risk Mapping: Map and analyze health risks based on geographical data, allowing for proactive management of public health concerns.</li>
                                            </ul>
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/healthcare-providers.png" alt="healthcare-providers-image" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                                <FeatureCard.Divider />
                            </FeatureCard.Body>
                        </FeatureCard>


                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Streamlined Healthcare Operations</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            <ul className="list-disc space-y-3">
                                                <li className="text-neutral-80 text-xl">Operational Efficiency: Streamline your healthcare operations with integrated location services that reduce the time and effort required to manage patient logistics, appointment scheduling, and service delivery.</li>
                                                <li className="text-neutral-80 text-xl">Data-Driven Decision Making: Empower your team with the data needed to make informed, strategic decisions that improve patient outcomes and operational efficiency</li>
                                                <li className="text-neutral-80 text-xl">Scalable Solutions: Whether you're a local clinic or a nationwide healthcare provider, HealthLoc scales to meet your needs, providing reliable and accurate location intelligence at every level</li>
                                            </ul>
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/healthcare-operation.png" alt="healthcare-operation-image" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                                <FeatureCard.Divider />
                            </FeatureCard.Body>
                        </FeatureCard>

                        <div className="py-8">
                            <h2 className="text-gray-800 mb-8 font-bold">WHY CHOOSE HEALTHLOC?</h2>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl" >Unmatched Accuracy</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">HealthLoc is purpose-built for the healthcare sector, addressing the unique challenges of patient care, emergency response, and service coverage with tools specifically designed to meet the needs of healthcare providers.</p>
                                </div>
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl" >Designed for Healthcare</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">HealthLoc is purpose-built for the healthcare sector, addressing the unique challenges of patient care, emergency response, and service coverage with tools specifically designed to meet the needs of healthcare providers.</p>
                                </div>
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl" >Seamless Integration</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Our API is designed for seamless integration with your existing healthcare management systems, ensuring that you can start benefiting from enhanced location intelligence without disrupting your operations.</p>
                                </div>
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Real-Time Insights</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Access real-time data and insights that enable you to respond quickly to emergencies, optimize resource allocation, and make data-driven decisions that enhance patient care and operational efficiency.</p>
                                </div>
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Scalable and Customizable</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Whether you manage a small clinic or a large hospital network, HealthLoc's scalable solutions can be customized to fit your specific needs, ensuring that you have the tools required to deliver exceptional healthcare.</p>
                                </div>
                            </div>
                        </div>

                        <div className="py-8">
                            <h2 className="text-gray-800 mb-8 font-bold">HOW HEALTHLOC WORKS</h2>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl" >Easy Integration</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">HealthLoc's API is designed for easy integration into your existing healthcare management systems. With comprehensive documentation and dedicated support, you can get started quickly and efficiently.</p>
                                </div>
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl" >Customizable Features</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Tailor HealthLoc's features to suit your specific needs, from patient address verification to emergency response optimization, ensuring that you have the tools required to enhance your healthcare delivery.</p>
                                </div>
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl" >Real-Time Data Access</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Benefit from real-time access to location data, enabling your team to make informed decisions, improve response times, and deliver better patient care.</p>
                                </div>
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Continuous Updates</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">HealthLoc is continually updated with new features and improvements, ensuring that your healthcare delivery is always supported by the latest advancements in location intelligence.</p>
                                </div>

                            </div>
                        </div>

                        <FeatureCard>
                            <FeatureCard.MainTitle>Use Cases</FeatureCard.MainTitle>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Home Care Services</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            Improve the efficiency and accuracy of home care visits with precise address verification and optimized routing for healthcare providers
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/homecare-services.png" alt="homecare-services" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                            </FeatureCard.Body>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Emergency Response</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            Reduce response times and improve patient outcomes by leveraging real-time route optimization and precise location data for emergency services.
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/emergency-response.png" alt="emergency-response" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                            </FeatureCard.Body>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Healthcare Service Planning</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            Ensure that healthcare services are strategically located and accessible to all populations by analyzing service coverage and identifying gaps in care.
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/healthcare-planning.png" alt="healthcare-planning" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                            </FeatureCard.Body>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Patient Outreach and Public Health</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            Enhance outreach efforts and public health initiatives by targeting specific areas based on accurate location data and population health trends.
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/healthcare-outreach.png" alt="healthcare-outreach-image" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                            </FeatureCard.Body>
                        </FeatureCard>

                        {/* Free Tier */}
                        <Pricing>
                            <Pricing.MainTitle>PRICING</Pricing.MainTitle>
                            <Pricing.Content>
                                <Pricing.Head>
                                    <Pricing.HeadContent>
                                        <Pricing.Type>Free Tie</Pricing.Type>
                                        <Pricing.Description>
                                            This tier is designed for businesses to test NavOptix and understand how it integrates into their systems.
                                        </Pricing.Description>
                                        <Pricing.ActionButtons>
                                            <Pricing.ActionLink to="/">
                                                Get Started
                                            </Pricing.ActionLink>
                                        </Pricing.ActionButtons>
                                    </Pricing.HeadContent>
                                    <Pricing.Price>
                                        <sup className="font-semibold text-2xl">N</sup>
                                        <span className="font-semibold text-5xl">0</span>
                                        <sub>per month</sub>
                                    </Pricing.Price>
                                </Pricing.Head>
                                <Pricing.Grid>
                                    <Pricing.GridCard>
                                        <Pricing.GridCardTitle>What's included now</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Access to basic geocoding and address verification (limited to 500 requests per month).</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Static route optimization for up to 3 routes/day.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Access to basic API documentation and integration support.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Basic ETA calculations (standard traffic conditions, without real-time updates).</span>
                                            </Pricing.GridCardListItem>
                                        </Pricing.GridCardList>
                                    </Pricing.GridCard>

                                    <Pricing.GridCard>
                                        <Pricing.GridCardTitle>Available add-ons</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Clients can upgrade from one tier to the next at any time to unlock additional features as their business scales.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">NavOptix is optimized for last-mile delivery companies, ensuring that even smaller businesses can enhance their delivery efficiency without needing heavy technological investment.</span>
                                            </Pricing.GridCardListItem>
                                        </Pricing.GridCardList>
                                    </Pricing.GridCard>

                                    <Pricing.GridCard>
                                        <Pricing.GridCardTitle>Limitations</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon className="bg-warning-10">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" width="24" height="24" rx="12" fill="#FFF4E6" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.598 7.38967L10.438 14.2997L8.53797 12.2697C8.18797 11.9397 7.63797 11.9197 7.23797 12.1997C6.84797 12.4897 6.73797 12.9997 6.97797 13.4097L9.22797 17.0697C9.44797 17.4097 9.82797 17.6197 10.258 17.6197C10.668 17.6197 11.058 17.4097 11.278 17.0697C11.638 16.5997 18.508 8.40967 18.508 8.40967C19.408 7.48967 18.318 6.67967 17.598 7.37967V7.38967Z" fill="#FD7E14" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">No dynamic traffic updates or advanced route optimization.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon className="bg-warning-10">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" width="24" height="24" rx="12" fill="#FFF4E6" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.598 7.38967L10.438 14.2997L8.53797 12.2697C8.18797 11.9397 7.63797 11.9197 7.23797 12.1997C6.84797 12.4897 6.73797 12.9997 6.97797 13.4097L9.22797 17.0697C9.44797 17.4097 9.82797 17.6197 10.258 17.6197C10.668 17.6197 11.058 17.4097 11.278 17.0697C11.638 16.5997 18.508 8.40967 18.508 8.40967C19.408 7.48967 18.318 6.67967 17.598 7.37967V7.38967Z" fill="#FD7E14" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Limited customer support (email only, 2-day response time).</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon className="bg-warning-10">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" width="24" height="24" rx="12" fill="#FFF4E6" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.598 7.38967L10.438 14.2997L8.53797 12.2697C8.18797 11.9397 7.63797 11.9197 7.23797 12.1997C6.84797 12.4897 6.73797 12.9997 6.97797 13.4097L9.22797 17.0697C9.44797 17.4097 9.82797 17.6197 10.258 17.6197C10.668 17.6197 11.058 17.4097 11.278 17.0697C11.638 16.5997 18.508 8.40967 18.508 8.40967C19.408 7.48967 18.318 6.67967 17.598 7.37967V7.38967Z" fill="#FD7E14" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Limited to 1 active user.</span>
                                            </Pricing.GridCardListItem>
                                        </Pricing.GridCardList>
                                    </Pricing.GridCard>

                                </Pricing.Grid>

                            </Pricing.Content>
                        </Pricing>

                        {/* Essential Tier */}
                        <Pricing>
                            <Pricing.Content>
                                <Pricing.Head>
                                    <Pricing.HeadContent>
                                        <Pricing.Type>Essential Tier</Pricing.Type>
                                        <Pricing.Description>
                                            For small to mid-sized last-mile delivery companies looking for a more robust solution to optimize operations.
                                        </Pricing.Description>
                                        <Pricing.ActionButtons>
                                            <Pricing.ActionLink to="/">
                                                Get Started
                                            </Pricing.ActionLink>
                                        </Pricing.ActionButtons>
                                    </Pricing.HeadContent>
                                    <Pricing.Price>
                                        <sup className="font-semibold text-2xl">N</sup>
                                        <span className="font-semibold text-5xl">25,000</span>
                                        <sub>per month</sub>
                                    </Pricing.Price>
                                </Pricing.Head>
                                <Pricing.Grid>
                                    <Pricing.GridCard>
                                        <Pricing.GridCardTitle>What's included now</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Access to real-time geocoding and address verification (up to 10,000 requests/month).</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Dynamic route optimization for up to 50 routes/day.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Accurate ETA calculations based on real-time traffic and road conditions.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Pick-up and drop-off navigation for delivery drivers.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Geocoded district and neighborhood search using Loccode data, enabling more precise address identification.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Access to advanced API documentation and integration assistance.
                                                </span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Basic customer support (email, 1-day response time).
                                                </span>
                                            </Pricing.GridCardListItem>
                                        </Pricing.GridCardList>
                                    </Pricing.GridCard>

                                    <Pricing.GridCard>
                                        <Pricing.GridCardTitle>Available add-ons</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Clients can upgrade from one tier to the next at any time to unlock additional features as their business scales.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">NavOptix is optimized for last-mile delivery companies, ensuring that even smaller businesses can enhance their delivery efficiency without needing heavy technological investment.</span>
                                            </Pricing.GridCardListItem>
                                        </Pricing.GridCardList>
                                    </Pricing.GridCard>

                                    <Pricing.GridCard>
                                        <Pricing.GridCardTitle>Limitations</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon className="bg-warning-10">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" width="24" height="24" rx="12" fill="#FFF4E6" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.598 7.38967L10.438 14.2997L8.53797 12.2697C8.18797 11.9397 7.63797 11.9197 7.23797 12.1997C6.84797 12.4897 6.73797 12.9997 6.97797 13.4097L9.22797 17.0697C9.44797 17.4097 9.82797 17.6197 10.258 17.6197C10.668 17.6197 11.058 17.4097 11.278 17.0697C11.638 16.5997 18.508 8.40967 18.508 8.40967C19.408 7.48967 18.318 6.67967 17.598 7.37967V7.38967Z" fill="#FD7E14" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Limited to 5 active users.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon className="bg-warning-10">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" width="24" height="24" rx="12" fill="#FFF4E6" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.598 7.38967L10.438 14.2997L8.53797 12.2697C8.18797 11.9397 7.63797 11.9197 7.23797 12.1997C6.84797 12.4897 6.73797 12.9997 6.97797 13.4097L9.22797 17.0697C9.44797 17.4097 9.82797 17.6197 10.258 17.6197C10.668 17.6197 11.058 17.4097 11.278 17.0697C11.638 16.5997 18.508 8.40967 18.508 8.40967C19.408 7.48967 18.318 6.67967 17.598 7.37967V7.38967Z" fill="#FD7E14" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">No priority support or full traffic analytics.</span>
                                            </Pricing.GridCardListItem>
                                        </Pricing.GridCardList>
                                    </Pricing.GridCard>

                                </Pricing.Grid>
                            </Pricing.Content>
                        </Pricing>

                        {/* Professional Tier */}
                        <Pricing>
                            <Pricing.Content>
                                <Pricing.Head>
                                    <Pricing.HeadContent>
                                        <Pricing.Type>Professional Tier</Pricing.Type>
                                        <Pricing.Description>
                                            This tier is designed for very large companies or businesses with complex logistics needs.
                                        </Pricing.Description>
                                        <Pricing.ActionButtons>
                                            <Pricing.ActionLink to="/">
                                                Get Started
                                            </Pricing.ActionLink>
                                        </Pricing.ActionButtons>
                                    </Pricing.HeadContent>
                                    <Pricing.Price>
                                        <sup className="font-semibold text-2xl">N</sup>
                                        <span className="font-semibold text-5xl">100,000</span>
                                        <sub>per month</sub>
                                    </Pricing.Price>
                                </Pricing.Head>
                                <Pricing.Grid>
                                    <Pricing.GridCard>
                                        <Pricing.GridCardTitle>What's included now</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Full access to all NavOptix features, including custom API development for highly specific use cases.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Dynamic route optimization for up to 500 routes/day, with on-the-fly updates based on real-time traffic and delivery demands.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Accurate ETA calculations with full integration of real-time data, ensuring precise ETAs at scale.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Full district and neighborhood identification using Loccode system for more granular delivery accuracy.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Real-time navigation with exact pick-up and drop-off guidance for drivers.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Scalable integration, allowing the business to manage larger fleets and more complex delivery networks.
                                                </span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Advanced analytics and reporting tools (e.g., route efficiency, driver performance).
                                                </span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Priority customer support (phone, email, live chat, same-day response).
                                                </span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Up to 20 active users.
                                                </span>
                                            </Pricing.GridCardListItem>
                                        </Pricing.GridCardList>
                                    </Pricing.GridCard>

                                    <Pricing.GridCard>
                                        <Pricing.GridCardTitle>Available add-ons</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Clients can upgrade from one tier to the next at any time to unlock additional features as their business scales.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">NavOptix is optimized for last-mile delivery companies, ensuring that even smaller businesses can enhance their delivery efficiency without needing heavy technological investment.</span>
                                            </Pricing.GridCardListItem>
                                        </Pricing.GridCardList>
                                    </Pricing.GridCard>

                                    <Pricing.GridCard>
                                        <Pricing.GridCardTitle>Limitations</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon className="bg-warning-10">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" width="24" height="24" rx="12" fill="#FFF4E6" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.598 7.38967L10.438 14.2997L8.53797 12.2697C8.18797 11.9397 7.63797 11.9197 7.23797 12.1997C6.84797 12.4897 6.73797 12.9997 6.97797 13.4097L9.22797 17.0697C9.44797 17.4097 9.82797 17.6197 10.258 17.6197C10.668 17.6197 11.058 17.4097 11.278 17.0697C11.638 16.5997 18.508 8.40967 18.508 8.40967C19.408 7.48967 18.318 6.67967 17.598 7.37967V7.38967Z" fill="#FD7E14" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Limited to 500 routes/day (custom enterprise solutions can go beyond this).</span>
                                            </Pricing.GridCardListItem>

                                        </Pricing.GridCardList>
                                    </Pricing.GridCard>

                                </Pricing.Grid>
                            </Pricing.Content>
                        </Pricing>

                        {/* Enterprise Tier (Custom Pricing) */}
                        <Pricing>
                            <Pricing.Content>
                                <Pricing.Head>
                                    <Pricing.HeadContent>
                                        <Pricing.Type>Enterprise Tier (Custom Pricing)</Pricing.Type>
                                        <Pricing.Description>
                                            This tier is designed for very large companies or businesses with complex logistics needs.
                                        </Pricing.Description>
                                        <Pricing.ActionButtons>
                                            <Pricing.ActionLink to="/">
                                                Get Started
                                            </Pricing.ActionLink>
                                        </Pricing.ActionButtons>
                                    </Pricing.HeadContent>

                                </Pricing.Head>
                                <Pricing.Grid>
                                    <Pricing.GridCard>
                                        <Pricing.GridCardTitle>What's included now</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Unlimited geocoding and address verification requests.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Full access to all NavOptix features, including custom API development for highly specific use cases.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Custom route optimization algorithms tailored to the client's business.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">In-depth analytics and machine learning tools to predict and optimize delivery routes and times.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Dedicated account manager and 24/7 premium support.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Unlimited users and full organizational scalability.
                                                </span>
                                            </Pricing.GridCardListItem>

                                        </Pricing.GridCardList>
                                    </Pricing.GridCard>

                                </Pricing.Grid>
                            </Pricing.Content>
                        </Pricing>

                    </div>

                    <ActionCard>
                        <ActionCard.Body>
                            <ActionCard.Title>
                                Get Started with HealthLoc
                            </ActionCard.Title>
                            <ActionCard.SubTitle>
                                Transform your healthcare operations with the power of precise location intelligence. Contact us today to learn more about how HealthLoc can enhance your services and help you deliver better care.
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

export default HealthLoc