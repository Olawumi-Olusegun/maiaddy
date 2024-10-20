import Container from "../components/Container"
import ActionCard from "../components/ui/ActionCard"


const About = () => {
    return (
        <section className="w-full">
            <Container>

                <div className="flex flex-col gap-3 items-start my-10">
                    <h2 className="text-3xl font-bold text-prmary-90 ">About Us</h2>
                    <p className="text-neutral-70 text-2xl">Learn more about Maiaddy and our mission to unlock African growth with location intelligence.</p>
                </div>

                <div className="w-full max-w-[720px] mx-auto flex flex-col gap-8 my-10 ">
                    <div className="w-full">
                        <h4 className="mb-4 text-2xl font-bold text-primary-90">Vision</h4>
                        <p className=" text-neutral-70 text-2xl">
                            To become the global leader in location intelligence, revolutionizing the way businesses and individuals navigate their environments.
                        </p>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-4 text-2xl font-bold text-primary-90">Mision</h4>
                        <p className=" text-neutral-70 text-2xl">
                            To illuminate the world with location intelligence.
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-[1174.79px] mx-auto flex flex-col md:flex-row items-center gap-20 my-24 ">
                    <div className="w-full relative">
                        <img src="./assets/images/core-values.png" alt="core-values-image" className="pointer-events-none" />
                    </div>
                    <div className="w-full">
                        <h4 className="mb-4 font-bold w-full lg:max-w-[381px] text-6xl text-primary-90">Our Core Values</h4>
                        <p className="text-lg lg:max-w-[478px] text-neutral-70">
                            At Maiaddy, our mission is to illuminate the world with location intelligence. We believe that our success is built on a foundation of guiding principles that inspire everything we do. These values shape how we approach challenges, serve our clients, and innovate for the future.
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-[720px] mx-auto flex flex-col gap-8 my-10 ">
                    <div className="w-full">
                        <h4 className="mb-4 text-primary-90 text-xl font-bold">Innovation</h4>
                        <p className="text-lg text-neutral-70 ">
                            We are pioneers at heart, always exploring new ways to push the boundaries of location intelligence. By embracing cutting-edge technologies and fresh ideas, we continuously deliver groundbreaking solutions that redefine what's possible.
                        </p>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-4 text-primary-90 text-xl font-bold">Excellence</h4>
                        <p className="text-lg text-neutral-70 ">
                            We are committed to the highest standards of quality in every aspect of our work. From the accuracy of our data to the impact of our insights, we strive for excellence to ensure that our products and services deliver unparalleled value to our customers.
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-[1174.79px] mx-auto flex flex-col md:flex-row items-center gap-20 my-24 ">
                    <div className="w-full relative">
                        <img src="./assets/images/maquee-images.png" alt="maquee-images" className="pointer-events-none" />
                    </div>

                </div>

                <div className="w-full max-w-[720px] mx-auto flex flex-col gap-8 my-10 ">
                    <div className="w-full">
                        <h4 className="mb-4 text-primary-90 text-xl font-bold">Agility</h4>
                        <p className="text-lg text-neutral-70 ">
                            In a fast-paced, ever-changing world, flexibility is key. We pride ourselves on our ability to quickly adapt to new trends, challenges, and customer needs. Our agile approach allows us to stay ahead of the curve and deliver results that keep our clients moving forward.
                        </p>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-4 text-primary-90 text-xl font-bold">Collaboration</h4>
                        <p className="text-lg text-neutral-70 ">
                            Great things happen when we work together. By fostering a culture of teamwork, we unlock the full potential of our people, partners, and clients. We believe that through open communication and strong partnerships, we can create innovative, effective solutions that benefit everyone.
                        </p>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-4 text-primary-90 text-xl font-bold">Accuracy</h4>
                        <p className="text-lg text-neutral-70 ">
                            Precision is at the core of everything we do. We understand that the power of location intelligence lies in the details, and we are dedicated to providing data and insights that are reliable, precise, and actionable. Accuracy builds trust, and trust is what drives long-term success.
                        </p>
                    </div>
                </div>
            </Container>
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


        </section>
    )
}

export default About