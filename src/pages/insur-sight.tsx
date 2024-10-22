import Container from "../components/Container"
import ActionCard from "../components/ui/ActionCard"
import PageHero from "../components/ui/PageHero"
import Pricing from "../components/ui/Pricing"
import { DropdownContent, Sidebar, SidebarButton, SidebarLink, SidebarProvider, SidebarTitle } from "../components/ui/Sidebar"


const InsurSight = () => {
    return (
        <>
            <section className="w-full grid grid-cols-1 lg:grid-cols-[auto_1fr]  gap-6 ">
                <SidebarProvider>
                    <Sidebar>
                        <SidebarTitle to="#">Overview</SidebarTitle>
                        <SidebarButton id={1} title="Features" />
                        <DropdownContent id={1}>
                            <SidebarLink to="#">Granular Location-Based Risk Profiling</SidebarLink>
                            <SidebarLink to="#">Natural Disaster Risk Assessment</SidebarLink>
                            <SidebarLink to="#">Crime Risk Analysis</SidebarLink>
                            <SidebarLink to="#">Property-Specific Risk Assessment</SidebarLink>
                            <SidebarLink to="#"> Health Risk Mapping</SidebarLink>
                            <SidebarLink to="#">Traffic and Auto Insurance Risk</SidebarLink>
                        </DropdownContent>

                        <SidebarButton id={2} title="Why Choose InsurSight?" />
                        <DropdownContent id={2}>
                            <SidebarLink to="#">Precision and Accuracy</SidebarLink>
                            <SidebarLink to="#">Tailored for the African Market</SidebarLink>
                            <SidebarLink to="#">Seamless Integration</SidebarLink>
                            <SidebarLink to="#">Scalable and Flexible</SidebarLink>
                            <SidebarLink to="#">Comprehensive Risk Intelligence</SidebarLink>
                        </DropdownContent>

                        <SidebarButton id={3} title="How InsurSight Works" />
                        <DropdownContent id={3}>
                            <SidebarLink to="#">Data Integration</SidebarLink>
                            <SidebarLink to="#">Customizable</SidebarLink>
                            <SidebarLink to="#">Real-Time Data Access</SidebarLink>
                            <SidebarLink to="#">Continuous Update</SidebarLink>
                        </DropdownContent>

                        <SidebarTitle to="#" className="font-semibold">Pricing</SidebarTitle>
                        <SidebarTitle to="#" className="font-semibold">Documentation</SidebarTitle>
                    </Sidebar>
                </SidebarProvider>
                <Container>

                    <PageHero>
                        <PageHero.Body>
                            <PageHero.BreadCrumbTitle>InsurSight</PageHero.BreadCrumbTitle>
                            <PageHero.Title>Transforming Location Intelligence into Insurance Excellence</PageHero.Title>
                            <PageHero.Description className="">
                                Welcome to InsurSight, the ultimate location intelligence tool designed specifically for the insurance industry. Built on the precision and accuracy of the T2AL-Geo postcode system, InsurSight delivers unparalleled insights into risk assessment, underwriting, and claims management, tailored to the unique demands of the African market. Whether you're an insurer, reinsurer, or InsurTech firm, InsurSight provides the granular, location-based data you need to make informed, data-driven decisions that drive profitability and customer satisfaction.
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
                            <h2 className="text-gray-800 mb-4">Features</h2>
                            <div className="flex flex-col gap-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-b pb-5">
                                    <div className="flex flex-col gap-4 rounded-lg w-full ">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Natural Disaster Risk Assessment</h3>
                                        <div className="w-full">
                                            <ul className="list-disc space-y-4">
                                                <li className="text-lg">Flood Risk Maps: Utilize topography and historical data to create flood risk maps, helping underwriters and risk assessors make informed decisions.</li>
                                                <li className="text-lg">Natural Disaster Analysis: Get detailed assessments of other natural disasters, including landslides, storms, and more, to accurately evaluate risk.</li>
                                                <li className="text-lg">Real-Time Alerts: Receive real-time alerts for evolving natural disaster risks, allowing for proactive risk management and timely decision-making.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="w-full lg:max-w-[371px]">
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/risk-assessment.png" alt="risk-assessment" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-b pb-5">
                                    <div className="flex flex-col gap-4 rounded-lg w-full ">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Crime Risk Analysis</h3>
                                        <div className="w-full">
                                            <ul className="list-disc space-y-4">
                                                <li className="text-lg">Crime Rate Mapping: Access detailed maps of crime rates by postcode, enabling better assessment of risks associated with theft, vandalism, and other criminal activities.</li>
                                                <li className="text-lg">Predictive Crime Models: Leverage advanced predictive models to forecast future crime patterns, helping to refine underwriting strategies.</li>
                                                <li className="text-lg">Targeted Crime Risk Tools: Use specialized tools to assess specific crime risks, tailored to the needs of property and auto insurers.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="w-full lg:max-w-[371px]">
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/crime-risk-analysis.png" alt="crime-risk-analysis" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-b pb-5">
                                    <div className="flex flex-col gap-4 rounded-lg w-full ">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Property-Specific Risk Assessment</h3>
                                        <div className="w-full">
                                            <ul className="list-disc space-y-4">
                                                <li className="text-lg">Individual Property Risks: Evaluate risks for individual properties based on precise location data, including building materials, construction quality, and more.</li>
                                                <li className="text-lg">Rebuilding Cost Estimates: Access algorithms that provide accurate estimates for rebuilding costs based on location, helping insurers set appropriate coverage limits.</li>
                                                <li className="text-lg">Customized Property Analysis: Tailor property risk assessments to your specific needs, whether it's for residential, commercial, or industrial properties.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="w-full lg:max-w-[371px]">
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/property-risk-assessment.png" alt="property-risk-assessment" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-b pb-5">
                                    <div className="flex flex-col gap-4 rounded-lg w-full ">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2"> Health Risk Mapping</h3>
                                        <div className="w-full">
                                            <ul className="list-disc space-y-4">
                                                <li className="text-lg">Disease Prevalence Maps: Analyze the prevalence of specific diseases by area, helping health insurers assess location-based health risks.</li>
                                                <li className="text-lg">Environmental Health Factors: Access data on environmental health factors, such as air quality and water contamination, that impact insurance risk.</li>
                                                <li className="text-lg">Lifestyle Risk Analysis: Assess lifestyle-related health risks by postcode, offering a deeper understanding of potential health insurance claims.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="w-full lg:max-w-[371px]">
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/health-risk-mapping.png" alt="health-risk-mapping" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border-b pb-5">
                                    <div className="flex flex-col gap-4 rounded-lg w-full ">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Traffic and Auto Insurance Risk</h3>
                                        <div className="w-full">
                                            <ul className="list-disc space-y-4">
                                                <li className="text-lg">Accident Frequency Mapping: Identify accident hotspots and assess the frequency of road accidents by area, helping to refine auto insurance policies.</li>
                                                <li className="text-lg">Road Quality Analysis: Evaluate road infrastructure and quality by location, providing insights into potential auto insurance claims.</li>
                                                <li className="text-lg">Vehicle Theft Risk: Assess vehicle theft risks by postcode, enabling insurers to set premiums and deductibles based on precise location data</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="w-full lg:max-w-[371px]">
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/traffic-auto-insurance-risk.png" alt="traffic-auto-insurance-risk" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="py-8">
                            <h2 className="text-gray-800 mb-8 font-bold">WHY CHOOSE INSURSIGHT?</h2>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl" >Precision and Accuracy</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">InsurSight leverages the powerful T2AL-Geo postcode system to deliver the most accurate and granular location data available. This precision allows you to assess risks with unparalleled accuracy, reducing uncertainties and improving underwriting outcomes.</p>
                                </div>
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl" >Tailored for the African Market</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Understanding the unique challenges of the African insurance market, InsurSight is designed to address specific local conditions, including rapid urbanization, informal settlements, and diverse environmental factors. This localization ensures that the insights provided are relevant and actionable.</p>
                                </div>
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl" >Seamless Integration</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">InsurSight is built for easy integration into your existing platforms and workflows. Whether you're looking to enhance underwriting tools, optimize claims management, or improve fraud detection, InsurSight fits seamlessly into your operations, providing immediate value.</p>
                                </div>
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Scalable and Flexible</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Whether you're a large insurer, a niche underwriter, or an emerging InsurTech firm, InsurSight is scalable to meet your needs. Our API offers a range of services that can be customized to fit different insurance products and market segments.</p>
                                </div>
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Comprehensive Risk Intelligence</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">From natural disasters and crime to health and auto risks, InsurSight provides a comprehensive suite of tools that cover every aspect of location-based risk assessment. This all-in-one solution empowers you to make informed decisions that enhance profitability and customer trust.</p>
                                </div>
                            </div>
                        </div>

                        <div className="py-8">
                            <h2 className="text-gray-800 mb-8 font-bold">HOW INSURSIGHT WORKS</h2>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl" >Data Integration</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Easily integrate InsurSight API into your existing systems through our user-friendly interface and comprehensive documentation.</p>
                                </div>
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Customizable</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Tailor the API's features to suit your specific needs, whether it's for underwriting, claims management, or fraud detection.</p>
                                </div>
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl" >Real-Time Data Access</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Access real-time data and insights directly from the API, allowing you to respond quickly to evolving risks and opportunities.</p>
                                </div>
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Continuous Updates</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Benefit from continuous updates and enhancements, ensuring that you always have the most up-to-date and accurate information at your fingertips.</p>
                                </div>
                            </div>
                        </div>

                        {/* H */}
                        <div className="w-full flex flex-col gap-4 ">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Use Cases</h3>
                            <div className="grid grid-cols-12 gap-5 lg:gap-x-10 py-5">
                                <div className="flex flex-col gap-4 rounded-lg w-full col-span-12 md:col-span-7">
                                    <div className="w-full ">
                                        <div className="flex items-start flex-wrap gap-3">
                                            <h1 className="font-semibold w-full text-xl">Underwriting Excellence</h1>
                                            <p className="w-full md:max-w-[700px] text-xl">Improve underwriting accuracy with precise, location-based risk assessments.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full col-span-12 md:col-span-4">
                                    <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/underwritten-excellence.png" alt="underwritten-excellence" />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-5 lg:gap-x-10 py-5">
                                <div className="flex flex-col gap-4 rounded-lg w-full col-span-12 md:col-span-7">
                                    <div className="w-full">
                                        <div className="flex items-start flex-wrap gap-3">
                                            <h1 className="font-semibold w-full text-xl">Claims Optimization</h1>
                                            <p className="w-full md:max-w-[700px] text-xl">Streamline claims management with detailed risk maps and real-time alerts.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full col-span-12 md:col-span-4">
                                    <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/claims-optimization.png" alt="claims-optimization" />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-5 lg:gap-x-10 py-5">
                                <div className="flex flex-col gap-4 rounded-lg w-full col-span-12 md:col-span-7">
                                    <div className="w-full ">
                                        <div className="flex items-start flex-wrap gap-3">
                                            <h1 className="font-semibold w-full text-xl">Fraud Prevention</h1>
                                            <p className="w-full md:max-w-[700px] text-xl">Enhance fraud detection with advanced tools that analyze location patterns and identify suspicious activities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full col-span-12 md:col-span-4">
                                    <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/fraud-prevention.png" alt="fraud-prevention" />
                                </div>
                            </div>

                            <div className="grid grid-cols-12 gap-5 lg:gap-x-10 py-5">
                                <div className="flex flex-col gap-4 rounded-lg w-full col-span-12 md:col-span-7">
                                    <div className="w-full ">
                                        <div className="flex items-start flex-wrap gap-3">
                                            <h1 className="font-semibold w-full text-xl">Pricing Strategy</h1>
                                            <p className="w-full md:max-w-[700px] text-xl">Optimize premium pricing with insights into location-based risks, ensuring competitive yet profitable offerings.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full col-span-12 md:col-span-4">
                                    <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/pricing-strategy.png" alt="pricing-strategy" />
                                </div>
                            </div>

                        </div>


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
                                Get Started with InsurSight
                            </ActionCard.Title>
                            <ActionCard.SubTitle>
                                Ready to revolutionize your insurance operations with cutting-edge location intelligence? Contact us today to learn more about how InsurSight API can transform your business.
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

export default InsurSight