import Container from "../components/Container"

const PrivacyPolicy = () => {
    return (
        <section className="w-full">
            <Container>
                <div className="flex flex-col gap-3 items-start my-10">
                    <h2 className="text-3xl font-bold text-primary-90 ">Privacy Policy</h2>
                    <p className="text-neutral-70 text-2xl">Understand how we protect your data and ensure compliance with local laws.</p>
                </div>

                <div className="w-full max-w-[720px] mx-auto flex flex-col gap-8 my-10 ">
                    <div className="w-full">
                        <h4 className="mb-4 text-neutral-90 ">Last Updated: September 16, 2024</h4>
                        <p className="text-neutral-70 text-xl">
                            At Maiaddy Ltd, we are committed to safeguarding the privacy and security of our clients' data and the data of their end users. This Privacy Policy outlines how we collect, use, disclose, and protect information when you use our location intelligence APIs, powered by Loccode, in your business operations.
                        </p>
                    </div>

                    <div className="w-full">
                        <h4 className="mb-4 text-primary-90 text-xl font-bold">What information do we collect?</h4>
                        <p className="text-neutral-70 text-xl mb-3">
                            We may collect the following types of information from our clients and their end users
                        </p>
                        <ul className="list-disc spacey-3 text-neutral-70 text-xl">
                            <li>Location Data: Geographical coordinates, address details, and other location-related data used to generate accurate and reliable postcodes and location insights through our Loccode system.</li>
                            <li>API Usage Data: Information about how our APIs are accessed and used, including request logs, timestamps, IP addresses, and performance metrics.</li>
                            <li>Client Information: Contact details, company information, and billing details provided by our clients during account creation, subscription, or payment processes.</li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-4 text-primary-90 text-xl font-bold">How do we use your information?</h4>
                        <p className="text-neutral-70 text-xl mb-3"> Maiaddy Ltd uses the information we collect to: </p>
                        <ul className="list-disc spacey-3 text-neutral-70 text-xl">
                            <li>Provide and maintain our location intelligence API services.</li>
                            <li> Enhance and optimize the performance of our Loccode system and related services.</li>
                            <li>Ensure compliance with legal and regulatory requirements.</li>
                            <li>Analyze API usage to improve our services and develop new features.</li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-4 text-primary-90 text-xl font-bold">Data Sharing and Disclosure</h4>
                        <p className="text-neutral-70 text-xl mb-3"> We understand the importance of confidentiality and take steps to protect our clients' data. We do not sell or rent any data to third parties. However, we may share information with: </p>
                        <ul className="list-disc spacey-3 text-neutral-70 text-xl">
                            <li>Service Providers: Trusted third-party vendors who assist us in operating our services, provided they adhere to strict data protection agreements.</li>
                            <li>Legal Compliance: Authorities or other entities if required by law or in response to valid legal requests such as subpoenas, court orders, or government regulations.</li>
                            <li>Business Transfers: In the event of a merger, acquisition, or sale of all or a portion of our assets, client information may be transferred as part of that transaction</li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-4 text-primary-90 text-xl font-bold">Data Security</h4>
                        <p className="text-neutral-70 text-xl">Maiaddy Ltd employs industry-standard security measures to protect against unauthorized access, alteration, disclosure, or destruction of data. These measures include encryption, access control, and regular security audits. Despite our best efforts, no method of data transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security.</p>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-4 text-primary-90 text-xl font-bold">Data Retention</h4>
                        <p className="text-neutral-70 text-xl">We retain client data for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Upon termination of services, we will securely delete or anonymize data in accordance with our data retention policies, unless a longer retention period is required by law.</p>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-4 text-primary-90 text-xl font-bold">Client Responsibilities</h4>
                        <p className="text-neutral-70 text-xl mb-3">As a client of Maiaddy Ltd, you are responsible for:</p>
                        <ul className="list-disc space-y-3 text-neutral-70 text-xl">
                            <li>Ensuring the lawful collection and use of your end users' data when using our APIs.</li>
                            <li>Complying with all applicable data protection laws and regulations.</li>
                            <li>Informing your end users about the data collected through your use of our services and how it will be processed.</li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-4 text-primary-90 text-xl font-bold">Your Rights</h4>
                        <p className="text-neutral-70 text-xl">You have the right to access, correct, update, or delete your personal information at any time. To exercise these rights, please contact us at [insert contact email]. We will respond to your request within a reasonable timeframe and in accordance with applicable laws.</p>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-4 text-primary-90 text-xl font-bold">Changes to This Policy</h4>
                        <p className="text-neutral-70 text-xl">We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify clients of any significant changes by posting the new policy on our website and updating the “Last Updated” date.</p>
                    </div>
                    <div className="w-full">
                        <h4 className="mb-4 text-primary-90 text-xl font-bold">Contact Us</h4>
                        <p className="text-neutral-70 text-xl">If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at contact@Maiaddy.com</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PrivacyPolicy