import Container from "../components/Container"
import ActionCard from "../components/ui/ActionCard"
import FeatureCard from "../components/ui/FeatureCard"
import PageHero from "../components/ui/PageHero"
import Pricing from "../components/ui/Pricing"
import { DropdownContent, Sidebar, SidebarButton, SidebarLink, SidebarProvider, SidebarTitle } from "../components/ui/Sidebar"


const NavOptix = () => {
    return (
        <>
            <section className="w-full grid grid-cols-1 lg:grid-cols-[auto_1fr]  gap-6 ">
                <SidebarProvider>
                    <Sidebar>
                        <SidebarTitle to="#">Overview</SidebarTitle>
                        <SidebarButton id={1} title="Features" />
                        <DropdownContent id={1}>
                            <SidebarLink to="#">Advanced Geocoding and Address Verification</SidebarLink>
                            <SidebarLink to="#">Dynamic Route Optimization</SidebarLink>
                            <SidebarLink to="#">Accurate ETA Calculations</SidebarLink>
                            <SidebarLink to="#">Precise Pick-Up and Drop-Off Navigation</SidebarLink>
                            <SidebarLink to="#">Scalable Integration</SidebarLink>
                        </DropdownContent>

                        <SidebarButton id={2} title="Why Choose NavOptix?" />
                        <DropdownContent id={2}>
                            <SidebarLink to="#">Unified Solution</SidebarLink>
                            <SidebarLink to="#">Enhanced Accuracy</SidebarLink>
                            <SidebarLink to="#">Increased Efficiency</SidebarLink>
                            <SidebarLink to="#">Superior Customer Satisfaction</SidebarLink>
                        </DropdownContent>

                        <SidebarButton id={3} title="Use Cases" />
                        <DropdownContent id={3}>
                            <SidebarLink to="#">E-Commerce and Delivery Services</SidebarLink>
                            <SidebarLink to="#">Ride-Hailing Services</SidebarLink>
                            <SidebarLink to="#">Logistics and Fleet Management</SidebarLink>
                        </DropdownContent>

                        <SidebarTitle to="#" className="font-semibold">Pricing</SidebarTitle>
                        <SidebarTitle to="#" className="font-semibold">Documentation</SidebarTitle>
                    </Sidebar>
                </SidebarProvider>
                <Container>
                    <PageHero>
                        <PageHero.Body>
                            <PageHero.BreadCrumbTitle>NavOptix</PageHero.BreadCrumbTitle>
                            <PageHero.Title> Precision Navigation and Route Optimization in One Powerful API</PageHero.Title>
                            <PageHero.Description className="">
                                Whether you're managing a vast delivery network or coordinating a fleet of ride-hailing vehicles, NavOptix seamlessly integrates into your existing systems, providing real-time solutions that drive accuracy, reduce costs, and boost customer satisfaction.
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
                                        <FeatureCard.Title>Advanced Geocoding and Address Verification</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            Ensure that every journey starts on the right foot with NavOptix's real-time address verification. By instantly validating and geocoding customer addresses, NavOptix minimizes the risk of delivery errors and missed pick-ups, keeping your operations smooth and reliable.
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/site-selection.png" alt="site-selection-image" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                                <FeatureCard.Divider />
                            </FeatureCard.Body>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Dynamic Route Optimization</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            Optimize your routes on the fly with NavOptix's powerful dynamic route optimization engine. Our technology adapts to real-time traffic conditions, road closures, and delivery demands, ensuring your drivers take the most efficient and cost-effective paths, every time.
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/optimization.png" alt="optimization-image" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                                <FeatureCard.Divider />
                            </FeatureCard.Body>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Accurate ETA Calculations</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            Enhance customer experience with precise Estimated Time of Arrival (ETA) calculations. NavOptix uses real-time data to provide your customers with accurate ETAs, building trust and satisfaction through reliable service delivery.
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/eta-calculation.png" alt="eta-calculation-image" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                                <FeatureCard.Divider />
                            </FeatureCard.Body>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Precise Pick-Up and Drop-Off Navigation</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            NavOptix guides your drivers to the exact pick-up and drop-off locations, minimizing delays and enhancing the overall efficiency of your operations. This feature is particularly vital for ride-hailing services where timing is everything.
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/pickup-location.png" alt="pickup-location-image" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                                <FeatureCard.Divider />
                            </FeatureCard.Body>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Scalable Integration</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            Whether you're a startup or an established enterprise, NavOptix scales with your business. Our API is designed for easy integration, allowing you to effortlessly expand your operations without worrying about the complexities of logistics management.
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/integration.png" alt="integration-image" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                                <FeatureCard.Divider />
                            </FeatureCard.Body>
                        </FeatureCard>


                        <div className="py-8">
                            <h2 className="text-gray-800 mb-8 font-bold">WHY CHOOOSE NAVOPTIX?</h2>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-start flex-wrap lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Unified Solution</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">NavOptix brings together the best of delivery route optimization and ride-hailing navigation into a single, powerful API. No need for multiple tools—NavOptix does it all.</p>
                                </div>
                                <div className="flex items-start flex-wrap  lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Enhanced Accuracy</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">With advanced geocoding and real-time data, NavOptix ensures that your operations are as precise and error-free as possible, reducing the chances of costly mistakes.</p>
                                </div>
                                <div className="flex items-start flex-wrap  lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Increased Efficiency</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">By optimizing routes and providing accurate ETAs, NavOptix helps you save time, fuel, and operational costs, driving higher margins and profitability.</p>
                                </div>
                                <div className="flex items-start flex-wrap  lg:gap-10">
                                    <h1 className="font-semibold w-full md:w-[212px] text-xl">Superior Customer Satisfaction</h1>
                                    <p className="w-full md:max-w-[700px] text-xl">Deliver on time, every time. NavOptix's accurate navigation and timing features ensure your customers enjoy a seamless experience, leading to repeat business and long-term loyalty.</p>
                                </div>
                            </div>
                        </div>

                        {/* Use Cases */}
                        <FeatureCard>
                            <FeatureCard.MainTitle>Use Cases</FeatureCard.MainTitle>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>E-Commerce and Delivery Services</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            Streamline your delivery processes with NavOptix's real-time address verification and dynamic route optimization, reducing operational costs while enhancing delivery accuracy and speed.
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/verification.png" alt="verification-image" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                            </FeatureCard.Body>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Ride-Hailing Services</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            Improve driver efficiency and customer satisfaction with precise navigation to pick-up and drop-off points, coupled with accurate ETAs that keep your customers informed and happy.
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/ride-hailing.png" alt="ride-hailing-image" />
                                    </FeatureCard.Image>
                                </FeatureCard.Grid>
                            </FeatureCard.Body>
                        </FeatureCard>

                        <FeatureCard>
                            <FeatureCard.Body>
                                <FeatureCard.Grid>
                                    <FeatureCard.GridArticle>
                                        <FeatureCard.Title>Logistics and Fleet Management</FeatureCard.Title>
                                        <FeatureCard.Description>
                                            Optimize the performance of your entire fleet with NavOptix’s scalable solutions, ensuring that your logistics operations run smoothly no matter how complex or extensive your network becomes.
                                        </FeatureCard.Description>
                                    </FeatureCard.GridArticle>
                                    <FeatureCard.Image>
                                        <img className="w-full h-[200px] object-cover pointer-events-none rounded-lg" src="./assets/images/delivery-optimization.png" alt="delivery-optimization-image" />
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
                                        <Pricing.Type>Free Tier</Pricing.Type>
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
                                        <Pricing.GridCardTitle>What's included</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Access to basic geocoding and address verification (limited to 500 requests per month).</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Static route optimization for up to 3 routes/day.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Access to basic API documentation and integration support.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
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
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Clients can upgrade from one tier to the next at any time to unlock additional features as their business scales.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
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
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.598 7.38967L10.438 14.2997L8.53797 12.2697C8.18797 11.9397 7.63797 11.9197 7.23797 12.1997C6.84797 12.4897 6.73797 12.9997 6.97797 13.4097L9.22797 17.0697C9.44797 17.4097 9.82797 17.6197 10.258 17.6197C10.668 17.6197 11.058 17.4097 11.278 17.0697C11.638 16.5997 18.508 8.40967 18.508 8.40967C19.408 7.48967 18.318 6.67967 17.598 7.37967V7.38967Z" fill="#FD7E14" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">No dynamic traffic updates or advanced route optimization.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon className="bg-warning-10">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" width="24" height="24" rx="12" fill="#FFF4E6" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.598 7.38967L10.438 14.2997L8.53797 12.2697C8.18797 11.9397 7.63797 11.9197 7.23797 12.1997C6.84797 12.4897 6.73797 12.9997 6.97797 13.4097L9.22797 17.0697C9.44797 17.4097 9.82797 17.6197 10.258 17.6197C10.668 17.6197 11.058 17.4097 11.278 17.0697C11.638 16.5997 18.508 8.40967 18.508 8.40967C19.408 7.48967 18.318 6.67967 17.598 7.37967V7.38967Z" fill="#FD7E14" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Limited customer support (email only, 2-day response time).</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon className="bg-warning-10">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" width="24" height="24" rx="12" fill="#FFF4E6" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.598 7.38967L10.438 14.2997L8.53797 12.2697C8.18797 11.9397 7.63797 11.9197 7.23797 12.1997C6.84797 12.4897 6.73797 12.9997 6.97797 13.4097L9.22797 17.0697C9.44797 17.4097 9.82797 17.6197 10.258 17.6197C10.668 17.6197 11.058 17.4097 11.278 17.0697C11.638 16.5997 18.508 8.40967 18.508 8.40967C19.408 7.48967 18.318 6.67967 17.598 7.37967V7.38967Z" fill="#FD7E14" />
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
                                        <Pricing.GridCardTitle>What's included</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Access to real-time geocoding and address verification (up to 10,000 requests/month).</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Dynamic route optimization for up to 50 routes/day.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Accurate ETA calculations based on real-time traffic and road conditions.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Pick-up and drop-off navigation for delivery drivers.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Geocoded district and neighborhood search using Loccode data, enabling more precise address identification.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Access to advanced API documentation and integration assistance.
                                                </span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
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
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Clients can upgrade from one tier to the next at any time to unlock additional features as their business scales.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
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
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.598 7.38967L10.438 14.2997L8.53797 12.2697C8.18797 11.9397 7.63797 11.9197 7.23797 12.1997C6.84797 12.4897 6.73797 12.9997 6.97797 13.4097L9.22797 17.0697C9.44797 17.4097 9.82797 17.6197 10.258 17.6197C10.668 17.6197 11.058 17.4097 11.278 17.0697C11.638 16.5997 18.508 8.40967 18.508 8.40967C19.408 7.48967 18.318 6.67967 17.598 7.37967V7.38967Z" fill="#FD7E14" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Limited to 5 active users.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon className="bg-warning-10">
                                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect x="0.5" width="24" height="24" rx="12" fill="#FFF4E6" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.598 7.38967L10.438 14.2997L8.53797 12.2697C8.18797 11.9397 7.63797 11.9197 7.23797 12.1997C6.84797 12.4897 6.73797 12.9997 6.97797 13.4097L9.22797 17.0697C9.44797 17.4097 9.82797 17.6197 10.258 17.6197C10.668 17.6197 11.058 17.4097 11.278 17.0697C11.638 16.5997 18.508 8.40967 18.508 8.40967C19.408 7.48967 18.318 6.67967 17.598 7.37967V7.38967Z" fill="#FD7E14" />
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
                                        <span className="font-semibold text-5xl">100,000</span>
                                        <sub>per month</sub>
                                    </Pricing.Price>
                                </Pricing.Head>
                                <Pricing.Grid>
                                    <Pricing.GridCard>
                                        <Pricing.GridCardTitle>What's included</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Unlimited geocoding and address verification requests.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Dynamic route optimization for up to 500 routes/day, with on-the-fly updates based on real-time traffic and delivery demands.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Accurate ETA calculations with full integration of real-time data, ensuring precise ETAs at scale.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Full district and neighborhood identification using Loccode system for more granular delivery accuracy.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Real-time navigation with exact pick-up and drop-off guidance for drivers.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Scalable integration, allowing the business to manage larger fleets and more complex delivery networks.
                                                </span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Advanced analytics and reporting tools (e.g., route efficiency, driver performance).
                                                </span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Priority customer support (phone, email, live chat, same-day response).
                                                </span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
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
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Clients can upgrade from one tier to the next at any time to unlock additional features as their business scales.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
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
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M17.598 7.38967L10.438 14.2997L8.53797 12.2697C8.18797 11.9397 7.63797 11.9197 7.23797 12.1997C6.84797 12.4897 6.73797 12.9997 6.97797 13.4097L9.22797 17.0697C9.44797 17.4097 9.82797 17.6197 10.258 17.6197C10.668 17.6197 11.058 17.4097 11.278 17.0697C11.638 16.5997 18.508 8.40967 18.508 8.40967C19.408 7.48967 18.318 6.67967 17.598 7.37967V7.38967Z" fill="#FD7E14" />
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
                                                Contact Sales
                                            </Pricing.ActionLink>
                                        </Pricing.ActionButtons>
                                    </Pricing.HeadContent>

                                </Pricing.Head>
                                <Pricing.Grid>
                                    <Pricing.GridCard>
                                        <Pricing.GridCardTitle>What's included</Pricing.GridCardTitle>
                                        <Pricing.GridCardList>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Unlimited geocoding, address verification, and route optimization requests.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Full access to all NavOptix features, including custom API development for highly specific use cases.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Custom route optimization algorithms tailored to the client's business.</span>
                                            </Pricing.GridCardListItem>

                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">In-depth analytics and machine learning tools to predict and optimize delivery routes and times.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
                                                    </svg>
                                                </Pricing.Icon>
                                                <span className="text-sm text-neutral-70 font-normal ">Dedicated account manager and 24/7 premium support.</span>
                                            </Pricing.GridCardListItem>
                                            <Pricing.GridCardListItem>
                                                <Pricing.Icon>
                                                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.098 0.389671L3.93797 7.29967L2.03797 5.26967C1.68797 4.93967 1.13797 4.91967 0.737968 5.19967C0.347968 5.48967 0.237968 5.99967 0.477968 6.40967L2.72797 10.0697C2.94797 10.4097 3.32797 10.6197 3.75797 10.6197C4.16797 10.6197 4.55797 10.4097 4.77797 10.0697C5.13797 9.59967 12.008 1.40967 12.008 1.40967C12.908 0.489671 11.818 -0.320329 11.098 0.379671V0.389671Z" fill="#336699" />
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
                                Get Started with NavOptix
                            </ActionCard.Title>
                            <ActionCard.SubTitle>
                                Ready to take your logistics or ride-hailing service to the next level? NavOptix is your go-to API for combining precision navigation with cutting-edge route optimization. Contact us today to integrate NavOptix into your platform and start experiencing the benefits of a unified, efficient, and scalable solution.
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

export default NavOptix