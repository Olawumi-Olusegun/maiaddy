import Container from "../components/Container"
import ActionCard from "../components/ui/ActionCard"
import ServicesCard from "../components/ui/ServiceCard"
import PageHero from "../components/ui/PageHero"

const HomePage = () => {
    return (
        <>
            <section className="w-full">
                <Container>
                    <PageHero>
                        <PageHero.Body>
                            <PageHero.Title>Deliver better, faster with location intelligence</PageHero.Title>
                            <PageHero.HeroList>
                                <PageHero.HeroListItem>Our APIs are built to integrate effortlessly with your existing systems.</PageHero.HeroListItem>
                                <PageHero.HeroListItem>Benefit from lightning-fast response times and reliable performance to enhance user experience.</PageHero.HeroListItem>
                                <PageHero.HeroListItem>Handle increasing user loads with confidence, knowing our API is built for growth.</PageHero.HeroListItem>
                            </PageHero.HeroList>
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

                </Container>
            </section>


            <section className="w-full ">
                <Container>
                    <div className="flex flex-col gap-1.5">
                        <h4 className="text-center text-sm text-primary-70">Solutions</h4>
                        <h2 className="text-center font-semibold text-3xl lg:text-4xl text-primary-90">Unlock Growth with Location Intelligence</h2>
                    </div>
                    <ServicesCard>

                        <ServicesCard.Card>
                            <ServicesCard.Body>
                                <ServicesCard.Icon>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 18H20V20H0V18ZM2 10H4V17H2V10ZM7 10H9V17H7V10ZM11 10H13V17H11V10ZM16 10H18V17H16V10ZM0 5L10 0L20 5V9H0V5ZM2 6.236V7H18V6.236L10 2.236L2 6.236ZM10 6C9.73478 6 9.48043 5.89464 9.29289 5.70711C9.10536 5.51957 9 5.26522 9 5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4C10.2652 4 10.5196 4.10536 10.7071 4.29289C10.8946 4.48043 11 4.73478 11 5C11 5.26522 10.8946 5.51957 10.7071 5.70711C10.5196 5.89464 10.2652 6 10 6Z" fill="#336699" />
                                    </svg>
                                </ServicesCard.Icon>
                                <ServicesCard.Title>Insurance</ServicesCard.Title>
                                <ServicesCard.Description>Use location intelligence for financial security with SecureSite.</ServicesCard.Description>
                                <ServicesCard.LinkHref to="#">
                                    Learn more
                                </ServicesCard.LinkHref>
                            </ServicesCard.Body>
                        </ServicesCard.Card>

                        <ServicesCard.Card>
                            <ServicesCard.Body>
                                <ServicesCard.Icon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 9C5.26522 9 5.51957 9.10536 5.70711 9.29289C5.89464 9.48043 6 9.73478 6 10C7.57114 9.99769 9.09698 10.5263 10.33 11.5H12.5C13.833 11.5 15.03 12.08 15.854 13H19C19.9453 12.9997 20.8712 13.2674 21.6705 13.772C22.4698 14.2767 23.1097 14.9975 23.516 15.851C21.151 18.972 17.322 21 13 21C10.21 21 7.85 20.397 5.94 19.342C5.87004 19.5351 5.74224 19.7018 5.57402 19.8196C5.40579 19.9374 5.20534 20.0003 5 20H2C1.73478 20 1.48043 19.8946 1.29289 19.7071C1.10536 19.5196 1 19.2652 1 19V10C1 9.73478 1.10536 9.48043 1.29289 9.29289C1.48043 9.10536 1.73478 9 2 9H5ZM6.001 12L6 17.022L6.045 17.054C7.84 18.314 10.178 19 13 19C16.004 19 18.799 17.844 20.835 15.87L20.968 15.737L20.848 15.637C20.3758 15.2672 19.8034 15.0477 19.205 15.007L19 15H16.889C16.961 15.322 17 15.656 17 16V17H8V15L14.79 14.999L14.756 14.921C14.5644 14.5205 14.2696 14.1783 13.9019 13.9295C13.5343 13.6806 13.107 13.5341 12.664 13.505L12.5 13.5H9.57C9.10531 13.0247 8.55027 12.6472 7.93752 12.3896C7.32477 12.132 6.66669 11.9995 6.002 12H6.001ZM4 11H3V18H4V11ZM18 5C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8C21 8.79565 20.6839 9.55871 20.1213 10.1213C19.5587 10.6839 18.7956 11 18 11C17.2044 11 16.4413 10.6839 15.8787 10.1213C15.3161 9.55871 15 8.79565 15 8C15 7.20435 15.3161 6.44129 15.8787 5.87868C16.4413 5.31607 17.2044 5 18 5ZM18 7C17.7348 7 17.4804 7.10536 17.2929 7.29289C17.1054 7.48043 17 7.73478 17 8C17 8.26522 17.1054 8.51957 17.2929 8.70711C17.4804 8.89464 17.7348 9 18 9C18.2652 9 18.5196 8.89464 18.7071 8.70711C18.8946 8.51957 19 8.26522 19 8C19 7.73478 18.8946 7.48043 18.7071 7.29289C18.5196 7.10536 18.2652 7 18 7ZM11 2C11.7956 2 12.5587 2.31607 13.1213 2.87868C13.6839 3.44129 14 4.20435 14 5C14 5.79565 13.6839 6.55871 13.1213 7.12132C12.5587 7.68393 11.7956 8 11 8C10.2044 8 9.44129 7.68393 8.87868 7.12132C8.31607 6.55871 8 5.79565 8 5C8 4.20435 8.31607 3.44129 8.87868 2.87868C9.44129 2.31607 10.2044 2 11 2ZM11 4C10.7348 4 10.4804 4.10536 10.2929 4.29289C10.1054 4.48043 10 4.73478 10 5C10 5.26522 10.1054 5.51957 10.2929 5.70711C10.4804 5.89464 10.7348 6 11 6C11.2652 6 11.5196 5.89464 11.7071 5.70711C11.8946 5.51957 12 5.26522 12 5C12 4.73478 11.8946 4.48043 11.7071 4.29289C11.5196 4.10536 11.2652 4 11 4Z" fill="#336699" />
                                    </svg>

                                </ServicesCard.Icon>
                                <ServicesCard.Title>Insurance</ServicesCard.Title>
                                <ServicesCard.Description>Get advanced location intelligence for risk assessment with InsurSight.</ServicesCard.Description>
                                <ServicesCard.LinkHref to="#">
                                    Learn more
                                </ServicesCard.LinkHref>
                            </ServicesCard.Body>
                        </ServicesCard.Card>

                        <ServicesCard.Card>
                            <ServicesCard.Body>
                                <ServicesCard.Icon>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.366 7.682C7.30434 9.33048 8.66952 10.6957 10.318 11.634L11.202 10.396C11.3442 10.1969 11.5543 10.0569 11.7928 10.0023C12.0313 9.94779 12.2814 9.98254 12.496 10.1C13.9103 10.8729 15.4722 11.3378 17.079 11.464C17.3298 11.4839 17.5638 11.5975 17.7345 11.7823C17.9052 11.9671 18 12.2094 18 12.461V16.923C18.0001 17.1706 17.9083 17.4094 17.7424 17.5932C17.5765 17.777 17.3483 17.8927 17.102 17.918C16.572 17.973 16.038 18 15.5 18C6.94 18 0 11.06 0 2.5C0 1.962 0.027 1.428 0.082 0.898C0.107255 0.651697 0.222984 0.423521 0.40679 0.257634C0.590595 0.0917472 0.829406 -5.33578e-05 1.077 2.32673e-08H5.539C5.79056 -3.15185e-05 6.0329 0.0947515 6.21768 0.265451C6.40247 0.43615 6.51613 0.670224 6.536 0.921C6.66222 2.52779 7.12708 4.08968 7.9 5.504C8.01746 5.71856 8.05221 5.96874 7.99767 6.2072C7.94312 6.44565 7.80306 6.65584 7.604 6.798L6.366 7.682ZM3.844 7.025L5.744 5.668C5.20478 4.50409 4.83535 3.26884 4.647 2H2.01C2.004 2.166 2.001 2.333 2.001 2.5C2 9.956 8.044 16 15.5 16C15.667 16 15.834 15.997 16 15.99V13.353C14.7312 13.1646 13.4959 12.7952 12.332 12.256L10.975 14.156C10.4287 13.9437 9.89801 13.6931 9.387 13.406L9.329 13.373C7.36758 12.2567 5.74328 10.6324 4.627 8.671L4.594 8.613C4.30691 8.10199 4.05628 7.57134 3.844 7.025Z" fill="#336699" />
                                    </svg>
                                </ServicesCard.Icon>
                                <ServicesCard.Title>Telecoms</ServicesCard.Title>
                                <ServicesCard.Description>Infuse precision planning into Telecoms with CellGrid.</ServicesCard.Description>
                                <ServicesCard.LinkHref to="#">
                                    Learn more
                                </ServicesCard.LinkHref>
                            </ServicesCard.Body>
                        </ServicesCard.Card>

                        <ServicesCard.Card>
                            <ServicesCard.Body>
                                <ServicesCard.Icon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 20V14H16V20H19V4H5V20H8ZM10 20H14V16H10V20ZM21 20H23V22H1V20H3V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V20ZM11 8V6H13V8H15V10H13V12H11V10H9V8H11Z" fill="#336699" />
                                    </svg>
                                </ServicesCard.Icon>
                                <ServicesCard.Title>Health</ServicesCard.Title>
                                <ServicesCard.Description>Deliver Healthcare with Precision LocationIntelligence using HealthLoc.</ServicesCard.Description>
                                <ServicesCard.LinkHref to="#">
                                    Learn more
                                </ServicesCard.LinkHref>
                            </ServicesCard.Body>
                        </ServicesCard.Card>

                        <ServicesCard.Card>
                            <ServicesCard.Body>
                                <ServicesCard.Icon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 3C9.49 3 12.383 5.554 12.913 8.895C14.088 7.724 15.71 7 17.5 7H22V9.5C22 13.09 19.09 16 15.5 16H13V21H11V13H9C5.134 13 2 9.866 2 6V3H6ZM20 9H17.5C15.015 9 13 11.015 13 13.5V14H15.5C17.985 14 20 11.985 20 9.5V9ZM6 5H4V6C4 8.761 6.239 11 9 11H11V10C11 7.239 8.761 5 6 5Z" fill="#336699" />
                                    </svg>
                                </ServicesCard.Icon>
                                <ServicesCard.Title>Agriculture</ServicesCard.Title>
                                <ServicesCard.Description>Elevate your agricultural solutions with AgriZone</ServicesCard.Description>
                                <ServicesCard.LinkHref to="#">
                                    Learn more
                                </ServicesCard.LinkHref>
                            </ServicesCard.Body>
                        </ServicesCard.Card>

                        <ServicesCard.Card>
                            <ServicesCard.Body>
                                <ServicesCard.Icon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 13.242V20H22V22H2V20H3V13.242C2.38437 12.8311 1.87971 12.2745 1.53082 11.6218C1.18193 10.969 0.999592 10.2402 1 9.5C1 8.673 1.224 7.876 1.633 7.197L4.345 2.5C4.43277 2.34798 4.559 2.22175 4.71101 2.13398C4.86303 2.04621 5.03547 2 5.211 2H18.79C18.9655 2 19.138 2.04621 19.29 2.13398C19.442 2.22175 19.5682 2.34798 19.656 2.5L22.358 7.182C22.9546 8.17287 23.1463 9.35553 22.8934 10.4841C22.6405 11.6127 21.9624 12.6005 21 13.242ZM19 13.972C18.3124 14.0491 17.6163 13.9665 16.9659 13.7307C16.3155 13.4948 15.7283 13.1119 15.25 12.612C14.8302 13.0511 14.3258 13.4005 13.7672 13.6393C13.2086 13.878 12.6075 14.001 12 14.001C11.3927 14.0013 10.7916 13.8786 10.233 13.6402C9.67445 13.4018 9.16996 13.0527 8.75 12.614C8.27163 13.1138 7.68437 13.4964 7.03395 13.7321C6.38353 13.9678 5.68749 14.0503 5 13.973V20H19V13.973V13.972ZM5.789 4L3.356 8.213C3.11958 8.79714 3.11248 9.44903 3.33613 10.0382C3.55978 10.6273 3.99768 11.1103 4.56218 11.3904C5.12668 11.6705 5.77614 11.7271 6.38058 11.5488C6.98502 11.3706 7.49984 10.9706 7.822 10.429C8.157 9.592 9.342 9.592 9.678 10.429C9.8633 10.8934 10.1836 11.2916 10.5975 11.5721C11.0115 11.8526 11.5 12.0025 12 12.0025C12.5 12.0025 12.9885 11.8526 13.4025 11.5721C13.8164 11.2916 14.1367 10.8934 14.322 10.429C14.657 9.592 15.842 9.592 16.178 10.429C16.3078 10.7484 16.5022 11.0376 16.7491 11.2783C16.996 11.519 17.2901 11.706 17.6127 11.8275C17.9354 11.9491 18.2797 12.0026 18.6241 11.9847C18.9684 11.9668 19.3053 11.8778 19.6136 11.7234C19.9219 11.569 20.1949 11.3525 20.4155 11.0875C20.6361 10.8225 20.7995 10.5148 20.8955 10.1836C20.9914 9.85238 21.0178 9.50493 20.973 9.16305C20.9281 8.82118 20.8131 8.49227 20.635 8.197L18.21 4H5.79H5.789Z" fill="#336699" />
                                    </svg>
                                </ServicesCard.Icon>
                                <ServicesCard.Title>Retail</ServicesCard.Title>
                                <ServicesCard.Description>Attain retail success with strategic location planning using ShopSpot.</ServicesCard.Description>
                                <ServicesCard.LinkHref to="#">
                                    Learn more
                                </ServicesCard.LinkHref>
                            </ServicesCard.Body>
                        </ServicesCard.Card>

                        <ServicesCard.Card>
                            <ServicesCard.Body>
                                <ServicesCard.Icon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V12.487C1.99998 12.3441 2.03059 12.2029 2.08976 12.0728C2.14892 11.9428 2.23528 11.8269 2.343 11.733L6 8.544V4C6 3.73478 6.10536 3.48043 6.29289 3.29289C6.48043 3.10536 6.73478 3 7 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21ZM9 19H12V12.942L8 9.454L4 12.942V19H7V15H9V19ZM14 19H20V5H8V7.127C8.234 7.127 8.469 7.209 8.657 7.374L13.657 11.733C13.7647 11.8269 13.8511 11.9428 13.9102 12.0728C13.9694 12.2029 14 12.3441 14 12.487V19ZM16 11H18V13H16V11ZM16 15H18V17H16V15ZM16 7H18V9H16V7ZM12 7H14V9H12V7Z" fill="#336699" />
                                    </svg>
                                </ServicesCard.Icon>
                                <ServicesCard.Title>Real Estate</ServicesCard.Title>
                                <ServicesCard.Description>Build real estate success on precision data with RealSight.</ServicesCard.Description>
                                <ServicesCard.LinkHref to="#">
                                    Learn more
                                </ServicesCard.LinkHref>
                            </ServicesCard.Body>
                        </ServicesCard.Card>

                        <ServicesCard.Card>
                            <ServicesCard.Body>
                                <ServicesCard.Icon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.92901 2.92969L6.34301 4.34369C5.59904 5.08576 5.00906 5.96755 4.60697 6.93837C4.20488 7.90919 3.99861 8.9499 4.00001 10.0007C4.00001 12.2107 4.89501 14.2107 6.34301 15.6577L4.93001 17.0707C3.99998 16.1433 3.26237 15.0414 2.75954 13.8281C2.25672 12.6148 1.9986 11.3141 2.00001 10.0007C1.99833 8.68722 2.25623 7.38638 2.75889 6.1729C3.26154 4.95942 3.99904 3.85724 4.92901 2.92969ZM19.071 2.92969C20.001 3.85724 20.7385 4.95942 21.2411 6.1729C21.7438 7.38638 22.0017 8.68722 22 10.0007C22.0017 11.3142 21.7438 12.615 21.2411 13.8285C20.7385 15.042 20.001 16.1441 19.071 17.0717L17.657 15.6577C18.401 14.9156 18.991 14.0338 19.393 13.063C19.7951 12.0922 20.0014 11.0515 20 10.0007C20 7.79069 19.105 5.79069 17.657 4.34369L19.07 2.93069L19.071 2.92969ZM7.75701 5.75769L9.17201 7.17269C8.79997 7.54361 8.50491 7.9844 8.30378 8.46972C8.10264 8.95505 7.99941 9.47534 8.00001 10.0007C8.00001 11.1057 8.44801 12.1057 9.17201 12.8287L7.75701 14.2437C7.19904 13.6871 6.75657 13.0257 6.45504 12.2975C6.15352 11.5694 5.99888 10.7888 6.00001 10.0007C6.00001 8.34369 6.67201 6.84369 7.75701 5.75769ZM16.243 5.75769C16.801 6.31429 17.2434 6.97567 17.545 7.70383C17.8465 8.43199 18.0011 9.21257 18 10.0007C18.0011 10.7888 17.8465 11.5694 17.545 12.2975C17.2434 13.0257 16.801 13.6871 16.243 14.2437L14.828 12.8287C15.2 12.4578 15.4951 12.017 15.6962 11.5317C15.8974 11.0463 16.0006 10.526 16 10.0007C16.0006 9.47534 15.8974 8.95505 15.6962 8.46972C15.4951 7.9844 15.2 7.54361 14.828 7.17269L16.243 5.75769ZM12 12.0007C11.4696 12.0007 10.9609 11.79 10.5858 11.4149C10.2107 11.0398 10 10.5311 10 10.0007C10 9.47025 10.2107 8.96155 10.5858 8.58647C10.9609 8.2114 11.4696 8.00069 12 8.00069C12.5304 8.00069 13.0391 8.2114 13.4142 8.58647C13.7893 8.96155 14 9.47025 14 10.0007C14 10.5311 13.7893 11.0398 13.4142 11.4149C13.0391 11.79 12.5304 12.0007 12 12.0007ZM11 14.0007H13V22.0007H11V14.0007Z" fill="#336699" />
                                    </svg>
                                </ServicesCard.Icon>
                                <ServicesCard.Title>Advertising</ServicesCard.Title>
                                <ServicesCard.Description>Achieve geo -targeted advertising for maximum impact with AdReach.</ServicesCard.Description>
                                <ServicesCard.LinkHref to="#">
                                    Learn more
                                </ServicesCard.LinkHref>
                            </ServicesCard.Body>
                        </ServicesCard.Card>

                        <ServicesCard.Card>
                            <ServicesCard.Body>
                                <ServicesCard.Icon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 1C16.5523 1 17 1.44772 17 2V2.999L22 3V9L19.98 8.999L22.7467 16.5953C22.9105 17.032 23 17.5051 23 17.999C23 20.2082 21.2091 21.999 19 21.999C17.1368 21.999 15.5711 20.7251 15.1265 19.0008L10.8738 19.0008C10.4295 20.7256 8.86357 22 7 22C5.05513 22 3.43445 20.612 3.07453 18.7725C2.43558 18.439 2 17.7704 2 17V4C2 3.44772 2.44772 3 3 3H10C10.5523 3 11 3.44772 11 4V12C11 12.5128 11.386 12.9355 11.8834 12.9933L12 13H14C14.5128 13 14.9355 12.614 14.9933 12.1166L15 12V3H12V1H16ZM7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16ZM19 15.999C17.8954 15.999 17 16.8944 17 17.999C17 19.1036 17.8954 19.999 19 19.999C20.1046 19.999 21 19.1036 21 17.999C21 16.8944 20.1046 15.999 19 15.999ZM17.852 8.999H17V12C17 13.6569 15.6569 15 14 15H12C10.6941 15 9.58312 14.1656 9.17102 13.0009L3.99994 13V15.3542C4.73289 14.5238 5.80528 14 7 14C8.86393 14 10.4301 15.2749 10.874 17.0003H15.1257C15.5693 15.2744 17.1357 13.999 19 13.999C19.2373 13.999 19.4697 14.0197 19.6957 14.0593L17.852 8.999ZM9 8H4V11H9V8ZM20 5H17V7H20V5ZM9 5H4V6H9V5Z" fill="#336699" />
                                    </svg>
                                </ServicesCard.Icon>
                                <ServicesCard.Title>Logistics</ServicesCard.Title>
                                <ServicesCard.Description>Own precision navigation and route optimization with NavOptix</ServicesCard.Description>
                                <ServicesCard.LinkHref to="#">
                                    Learn more
                                </ServicesCard.LinkHref>
                            </ServicesCard.Body>
                        </ServicesCard.Card>

                        <ServicesCard.Card>
                            <ServicesCard.Body>
                                <ServicesCard.Icon>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.75 8.86719H14.25" stroke="#336699" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.525 14.7087L17.4281 5.39934C17.0051 4.98083 16.4341 4.74609 15.8391 4.74609C15.244 4.74609 14.673 4.98083 14.25 5.39934V15.9931" stroke="#336699" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.75156 15.9931V5.39934C9.32856 4.98083 8.75754 4.74609 8.1625 4.74609C7.56746 4.74609 6.99644 4.98083 6.57344 5.39934L2.47656 14.7087" stroke="#336699" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 19.7422C8.07107 19.7422 9.75 18.0633 9.75 15.9922C9.75 13.9211 8.07107 12.2422 6 12.2422C3.92893 12.2422 2.25 13.9211 2.25 15.9922C2.25 18.0633 3.92893 19.7422 6 19.7422Z" stroke="#336699" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18 19.7422C20.0711 19.7422 21.75 18.0633 21.75 15.9922C21.75 13.9211 20.0711 12.2422 18 12.2422C15.9289 12.2422 14.25 13.9211 14.25 15.9922C14.25 18.0633 15.9289 19.7422 18 19.7422Z" stroke="#336699" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </ServicesCard.Icon>
                                <ServicesCard.Title>Tourism</ServicesCard.Title>
                                <ServicesCard.Description>Unlock the potential of tourism with TourMap.</ServicesCard.Description>
                                <ServicesCard.LinkHref to="#">
                                    Learn more
                                </ServicesCard.LinkHref>
                            </ServicesCard.Body>
                        </ServicesCard.Card>

                        <ServicesCard.Card>
                            <ServicesCard.Body>
                                <ServicesCard.Icon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 9H21L11 24V15H4L13 0V9ZM11 11V7.22L7.532 13H13V17.394L17.263 11H11Z" fill="#336699" />
                                    </svg>
                                </ServicesCard.Icon>
                                <ServicesCard.Title>Utilities</ServicesCard.Title>
                                <ServicesCard.Description>Optimize utility services with precision using UtilityNet.</ServicesCard.Description>
                                <ServicesCard.LinkHref to="#">
                                    Learn more
                                </ServicesCard.LinkHref>
                            </ServicesCard.Body>
                        </ServicesCard.Card>

                        <ServicesCard.Card>
                            <ServicesCard.Body>
                                <ServicesCard.Icon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 18H6C5.73478 18 5.48043 18.1054 5.29289 18.2929C5.10536 18.4804 5 18.7348 5 19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H21V22H6C5.20435 22 4.44129 21.6839 3.87868 21.1213C3.31607 20.5587 3 19.7956 3 19V4C3 3.46957 3.21071 2.96086 3.58579 2.58579C3.96086 2.21071 4.46957 2 5 2H21V18ZM5 16.05C5.162 16.017 5.329 16 5.5 16H19V4H5V16.05ZM16 9H8V7H16V9Z" fill="#336699" />
                                    </svg>
                                </ServicesCard.Icon>
                                <ServicesCard.Title>Education</ServicesCard.Title>
                                <ServicesCard.Description>Transform education planning with EduZone.</ServicesCard.Description>
                                <ServicesCard.LinkHref to="#">
                                    Learn more
                                </ServicesCard.LinkHref>
                            </ServicesCard.Body>
                        </ServicesCard.Card>

                        <ServicesCard.Card>
                            <ServicesCard.Body>
                                <ServicesCard.Icon>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 3C9.49 3 12.383 5.554 12.913 8.895C14.088 7.724 15.71 7 17.5 7H22V9.5C22 13.09 19.09 16 15.5 16H13V21H11V13H9C5.134 13 2 9.866 2 6V3H6ZM20 9H17.5C15.015 9 13 11.015 13 13.5V14H15.5C17.985 14 20 11.985 20 9.5V9ZM6 5H4V6C4 8.761 6.239 11 9 11H11V10C11 7.239 8.761 5 6 5Z" fill="#336699" />
                                    </svg>
                                </ServicesCard.Icon>
                                <ServicesCard.Title>Government</ServicesCard.Title>
                                <ServicesCard.Description>Streamline government services with CiviSync.</ServicesCard.Description>
                                <ServicesCard.LinkHref to="#">
                                    Learn more
                                </ServicesCard.LinkHref>
                            </ServicesCard.Body>
                        </ServicesCard.Card>

                    </ServicesCard>



                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  py-10">
      
                        <div className="rounded-lg flex flex-col gap-4 items-start mb-5 lg:mb-10">
                            <div className="bg-blue-100 rounded-full p-3">
                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <h3 className="text-xl font-bold text-gray-800">Financial services</h3>
                                <p className="text-gray-600 text-sm">Use location intelligence for financial security with SecureSite.</p>
                            </div>
                            <Link to="#" className="inline-block text-blue-500 hover:text-blue-700">Learn more →</Link>
                        </div>
                        <div className="rounded-lg flex flex-col gap-4 items-start mb-5 lg:mb-10">
                            <div className="bg-blue-100 rounded-full p-3">
                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <h3 className="text-xl font-bold text-gray-800">Financial services</h3>
                                <p className="text-gray-600 text-sm">Use location intelligence for financial security with SecureSite.</p>
                            </div>
                            <Link to="#" className="inline-block text-blue-500 hover:text-blue-700">Learn more →</Link>
                        </div>
                        <div className="rounded-lg flex flex-col gap-4 items-start mb-5 lg:mb-10">
                            <div className="bg-blue-100 rounded-full p-3">
                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <h3 className="text-xl font-bold text-gray-800">Financial services</h3>
                                <p className="text-gray-600 text-sm">Use location intelligence for financial security with SecureSite.</p>
                            </div>
                            <Link to="#" className="inline-block text-blue-500 hover:text-blue-700">Learn more →</Link>
                        </div>
                        <div className="rounded-lg flex flex-col gap-4 items-start mb-5 lg:mb-10">
                            <div className="bg-blue-100 rounded-full p-3">
                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <h3 className="text-xl font-bold text-gray-800">Financial services</h3>
                                <p className="text-gray-600 text-sm">Use location intelligence for financial security with SecureSite.</p>
                            </div>
                            <Link to="#" className="inline-block text-blue-500 hover:text-blue-700">Learn more →</Link>
                        </div>
                        <div className="rounded-lg flex flex-col gap-4 items-start mb-5 lg:mb-10">
                            <div className="bg-blue-100 rounded-full p-3">
                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <h3 className="text-xl font-bold text-gray-800">Financial services</h3>
                                <p className="text-gray-600 text-sm">Use location intelligence for financial security with SecureSite.</p>
                            </div>
                            <Link to="#" className="inline-block text-blue-500 hover:text-blue-700">Learn more →</Link>
                        </div>
                        <div className="rounded-lg flex flex-col gap-4 items-start mb-5 lg:mb-10">
                            <div className="bg-blue-100 rounded-full p-3">
                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <h3 className="text-xl font-bold text-gray-800">Financial services</h3>
                                <p className="text-gray-600 text-sm">Use location intelligence for financial security with SecureSite.</p>
                            </div>
                            <Link to="#" className="inline-block text-blue-500 hover:text-blue-700">Learn more →</Link>
                        </div>
                        <div className="rounded-lg flex flex-col gap-4 items-start mb-5 lg:mb-10">
                            <div className="bg-blue-100 rounded-full p-3">
                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <h3 className="text-xl font-bold text-gray-800">Financial services</h3>
                                <p className="text-gray-600 text-sm">Use location intelligence for financial security with SecureSite.</p>
                            </div>
                            <Link to="#" className="inline-block text-blue-500 hover:text-blue-700">Learn more →</Link>
                        </div>
                        <div className="rounded-lg flex flex-col gap-4 items-start mb-5 lg:mb-10">
                            <div className="bg-blue-100 rounded-full p-3">
                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="flex flex-col gap-3 ">
                                <h3 className="text-xl font-bold text-gray-800">Financial services</h3>
                                <p className="text-gray-600 text-sm">Use location intelligence for financial security with SecureSite.</p>
                            </div>
                            <Link to="#" className="inline-block text-blue-500 hover:text-blue-700">Learn more →</Link>
                        </div>
                    </div> */}
                </Container>
            </section>

            <ActionCard>
                <ActionCard.Body>
                    <ActionCard.Title>
                        Start your free trial
                    </ActionCard.Title>
                    <ActionCard.SubTitle>
                        Access comprehensive and up-to-date postcode database.
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
        </>
    )
}

export default HomePage