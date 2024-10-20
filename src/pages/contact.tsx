import Container from "../components/Container"

const Contact = () => {
    return (
        <section className="w-full">
            <Container>

                <div className="flex flex-col gap-3 items-start my-10">
                    <h2 className="text-3xl font-bold text-primary-90 ">Contact Us</h2>
                    <p className="text-neutral-70 text-2xl">Get in touch with our team to discuss your needs and how we can help.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto ">
                    <div className="rounded-lg p-6">
                        <div className="mb-4 bg-blue-100 rounded-full p-2 w-fit">
                            <svg className="w-6 h-6 text-primary-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                        <p className="text-gray-600 mb-4">Our friendly team is here to help.</p>
                        <a href="mailto:contact@agenpo.com" className="text-primary-90 font-semibold">admin@maiaddy.com</a>
                    </div>
                    <div className="rounded-lg p-6">
                        <div className="mb-4 bg-blue-100 rounded-full p-2 w-fit">
                            <svg className="w-6 h-6 text-primary-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns=" http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 01.502-.79l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                        <p className="text-gray-600 mb-4">Mon-Fri from 8am to 5pm.</p>
                        <a href="tel:+44-755-116-4250" className="text-primary-90 font-semibold">+2348175843995</a>
                    </div>

                </div>

            </Container>


            {/* <img src="https://i.imgur.com/G48R5iB.png" alt="Maiddy Logo" className="w-48 h-48 mx-auto mb-8"></img> */}
        </section>
    )
}

export default Contact