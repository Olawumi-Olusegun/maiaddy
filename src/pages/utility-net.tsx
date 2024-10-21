import Container from "../components/Container"
import ActionCard from "../components/ui/ActionCard"
import FeatureCard from "../components/ui/FeatureCard"
import PageHero from "../components/ui/PageHero"
import Pricing from "../components/ui/Pricing"
import { DropdownContent, Sidebar, SidebarButton, SidebarLink, SidebarProvider, SidebarTitle } from "../components/ui/Sidebar"

const UtilityNet = () => {
    return (
        <>
            <section className="w-full grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 ">
                <SidebarProvider>
                    <Sidebar>
                        <SidebarTitle to="#">Overview</SidebarTitle>
                        <SidebarButton id={1} title="Features" />
                        <DropdownContent id={1}>
                            <SidebarLink to="#">Service Address Verification</SidebarLink>
                            <SidebarLink to="#">Infrastructure Planning</SidebarLink>
                            <SidebarLink to="#">Outage Response Optimization</SidebarLink>
                        </DropdownContent>

                        <SidebarButton id={2} title="Why Choose UtilityNet?" />
                        <DropdownContent id={2}>
                            <SidebarLink to="#">Operational Efficiency</SidebarLink>
                            <SidebarLink to="#">Customer Satisfaction</SidebarLink>
                            <SidebarLink to="#">Cost Reduction</SidebarLink>
                        </DropdownContent>

                        <SidebarTitle to="#">Use Cases</SidebarTitle>
                        <SidebarTitle to="#">Pricing</SidebarTitle>
                        <SidebarTitle to="#">Documentation</SidebarTitle>
                    </Sidebar>
                </SidebarProvider>


                <Container>
                    <PageHero>
                        <PageHero.Body>
                            <PageHero.BreadCrumbTitle>UtilityNet</PageHero.BreadCrumbTitle>
                            <PageHero.Title> Optimizing Utility Services with Precision</PageHero.Title>
                            <PageHero.Description className="">
                                For utility companies, accuracy and efficiency are crucial. UtilityNet is the specialized API service that empowers utility providers to optimize their infrastructure, plan maintenance, and respond to outages with precision. Utilizing the T2AL-Geo postcode system, UtilityNet ensures that every aspect of your utility operations is informed by the most accurate location data available.
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
                                        <FeatureCard.Title>Service Address Verification</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            Ensure that every service address is correct, reducing errors and improving customer satisfaction.
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/verification.png" alt="verification" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                                <FeatureCard.Divider />
                            </FeatureCard.Body>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Infrastructure Planning</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            Use precise geospatial data to plan and optimize the placement of utility infrastructure, from power lines to water pipes.
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/verification.png" alt="verification" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                                <FeatureCard.Divider />
                            </FeatureCard.Body>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Outage Response Optimization</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            Respond to outages faster with precise location data, improving response times and reducing downtime for customers.
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/verification.png" alt="verification" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                                <FeatureCard.Divider />
                            </FeatureCard.Body>
                        </FeatureCard>


                        <div className="py-8">
                            <h2 className="text-gray-800 mb-8 font-bold">WHY CHOOOSE UTILITYNET?</h2>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl" >Operational Efficiency</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Improve the efficiency of your utility operations with accurate location data and optimized planning.</p>
                                </div>
                                <div className="flex items-start flex-wrap  lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Customer Satisfaction</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Enhance customer satisfaction by ensuring services are delivered accurately and outages are resolved quickly.</p>
                                </div>
                                <div className="flex items-start flex-wrap  lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Cost Reduction</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Reduce operational costs through efficient infrastructure planning and maintenance.</p>
                                </div>
                            </div>
                        </div>

                        {/* Use Cases */}
                        <FeatureCard>
                            <FeatureCard.MainTitle className="text-lg font-semibold  text-primary-70 mb-5">Use Cases</FeatureCard.MainTitle>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle className="md:col-span-7">
                                        <FeatureCard.Description>
                                            <ul className="list-disc">
                                                <li className="text-neutral-80 text-xl">Advertising agencies looking to enhance the precision of their geo-targeted campaigns.</li>
                                                <li className="text-neutral-80 text-xl">Marketing firms aiming to improve customer segmentation and ad relevance.</li>
                                                <li className="text-neutral-80 text-xl">Brands seeking to optimize out-of-home advertising for maximum visibility and impact.</li>
                                            </ul>
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image className="md:col-span-5">
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/billboard.png" alt="billboard" />
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
                                            Explore UtilityNet's capabilities and see how it can improve their utility service delivery before subscribing to a paid plan.
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
                                                <span className="text-sm text-neutral-70 font-normal ">1,000 requests per day.</span>
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
                                                <span className="text-sm text-neutral-70 font-normal ">Basic geolocation features (LGA and District data).</span>
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

                                        <Pricing.ActionButtons>
                                            <Pricing.ActionLink to="/">
                                                Get Started
                                            </Pricing.ActionLink>
                                        </Pricing.ActionButtons>
                                    </Pricing.HeadContent>
                                    <Pricing.Price>
                                        <sup className="font-semibold text-2xl">N</sup>
                                        <span className="font-semibold text-5xl">50,000</span>
                                        <sub>per month</sub>
                                    </Pricing.Price>
                                </Pricing.Head>
                                <Pricing.Grid className="xl:grid-cols-12">
                                    <Pricing.GridCard className="xl:col-span-7">
                                        <Pricing.GridCardTitle>What's included now</Pricing.GridCardTitle>
                                        <Pricing.GridCardList className="lg:max-w-full">
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">10,000 requests per day.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Ensure accurate service address verification for your pay-as-you-go customers, preventing misdelivery of utility services or billing errors.</span>
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
                                                <span className="text-sm text-neutral-70 font-normal ">Provides detailed geographic information, including state, LGA, and district data, to help utility providers understand where their customers are located.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Convert traditional addresses to Loccodes and vice versa, making customer and service location management easier.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Organize customers by type (commercial & industrial, mini grids, or energy systems) based on location data, ensuring that services and billing models are tailored to each group.
                                                </span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Email support and access to an online knowledge base.
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

                                    <Pricing.GridCard className="xl:col-span-5">
                                        <Pricing.GridCardTitle>Available add-ons</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Additional API requests can be purchased at discounted rates for businesses that exceed their daily request limits.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Generate custom location and service reports based on locational data for auditing, optimization, or compliance purposes.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Comprehensive training sessions to help utility providers and their teams fully understand and implement UtilityNet's capabilities into their workflows.</span>
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
                                            For larger delivery networks and businesses that require advanced route management and scalability.
                                        </Pricing.Description>
                                        <Pricing.ActionButtons>
                                            <Pricing.ActionLink to="/">
                                                Get Started
                                            </Pricing.ActionLink>
                                        </Pricing.ActionButtons>
                                    </Pricing.HeadContent>
                                    <Pricing.Price>
                                        <sup className="font-semibold text-2xl">N</sup>
                                        <span className="font-semibold text-5xl">200,000</span>
                                        <sub>per month</sub>
                                    </Pricing.Price>
                                </Pricing.Head>
                                <Pricing.Grid className="xl:grid-cols-12">
                                    <Pricing.GridCard className="xl:col-span-7">
                                        <Pricing.GridCardTitle>What's included now</Pricing.GridCardTitle>
                                        <Pricing.GridCardList className="lg:max-w-full">
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">50,000 requests per day.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">All Essential Tier Features</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Access to advanced geocoding services for more detailed customer management and infrastructure planning. Convert both addresses to Loccodes and Loccodes back to traditional addresses with ease.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Leverage precise geographic data to plan the placement and management of utility assets such as mini grids, energy systems, and distribution networks.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Improve your response to utility outages by accurately pinpointing locations and restoring services quickly. This feature is critical for minimizing downtime, especially in areas relying on pay-as-you-go services.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Segment your customer base into categories like commercial & industrial, mini grids, and energy systems, and analyze their consumption patterns to optimize billing and service offerings.
                                                </span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Visualize location data, customer distribution, and service efficiency using a comprehensive dashboard for better decision-making.
                                                </span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Priority email support and chat-based assistance during business hours.
                                                </span>
                                            </Pricing.GridCardListItem>

                                        </Pricing.GridCardList>
                                    </Pricing.GridCard>

                                    <Pricing.GridCard className="xl:col-span-5">
                                        <Pricing.GridCardTitle>Available add-ons</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Additional API requests can be purchased at discounted rates for businesses that exceed their daily request limits.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Generate custom location and service reports based on locational data for auditing, optimization, or compliance purposes.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Comprehensive training sessions to help utility providers and their teams fully understand and implement UtilityNet's capabilities into their workflows.</span>
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
                                        <Pricing.ActionButtons>
                                            <Pricing.ActionLink to="/">
                                                Get Started
                                            </Pricing.ActionLink>
                                        </Pricing.ActionButtons>
                                    </Pricing.HeadContent>
                                    <Pricing.Price>
                                        <sup className="font-semibold text-2xl">N</sup>
                                        <span className="font-semibold text-5xl">500,000</span>
                                        <sub>per month</sub>
                                    </Pricing.Price>
                                </Pricing.Head>
                                <Pricing.Grid className="xl:grid-cols-12">
                                    <Pricing.GridCard className="xl:col-span-7">
                                        <Pricing.GridCardTitle>What's included now</Pricing.GridCardTitle>
                                        <Pricing.GridCardList className="lg:max-w-full">
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal "> 200,000 requests per day.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">All Professional Tier Features.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Tailored API endpoints for large enterprises providing utility services on a national scale, enabling seamless integration into existing infrastructure and billing systems.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Real-time geofencing capabilities allow utilities to create virtual boundaries around areas served by mini grids, energy systems, or commercial & industrial sectors, ensuring accurate service allocation.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Advanced location intelligence to track, predict, and optimize service delivery for pay-as-you-go customers across different regions. This tool helps in managing fluctuating demand and optimizing asset utilization.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Add custom data points to the API, allowing utility providers to track infrastructure, customer clusters, and service regions with greater accuracy.
                                                </span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">For utility providers operating in insecure regions, UtilityNet provides location-based insights that help monitor service areas, ensuring infrastructure is safe and operational in volatile zones.
                                                </span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">24/7 premium support with a dedicated account manager and full integration assistance.
                                                </span>
                                            </Pricing.GridCardListItem>
                                        </Pricing.GridCardList>
                                    </Pricing.GridCard>

                                    <Pricing.GridCard className="xl:col-span-5">
                                        <Pricing.GridCardTitle>Available add-ons</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Additional API requests can be purchased at discounted rates for businesses that exceed their daily request limits.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Generate custom location and service reports based on locational data for auditing, optimization, or compliance purposes.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Comprehensive training sessions to help utility providers and their teams fully understand and implement UtilityNet's capabilities into their workflows.</span>
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
                                Get Started with UtilityNet
                            </ActionCard.Title>
                            <ActionCard.SubTitle>
                                Optimize your utility services with the power of accurate location data. Contact us today to integrate UtilityNet into your infrastructure planning and service delivery processes
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

export default UtilityNet