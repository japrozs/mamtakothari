import React from "react";
import Head from "next/head";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/Footer";

interface LegalProps {}

const Legal: React.FC<LegalProps> = ({}) => {
    return (
        <div>
            <Head>
                <title>Mamta Kothari - Legal</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="p-7">
                <img
                    className="mx-auto"
                    src="https://sunitashekhawat.com/skin/frontend/flamingo/default//images/pattern-img5.png"
                />
                <p className="text-xl pfr text-center text-purple my-3">
                    LEGAL TERMS
                </p>
                <div className="max-w-5xl mx-auto">
                    <p className="text-purple got my-6 text-sm uppercase font-medium">
                        VISITORS TO THIS WEBSITE ARE BOUND BY THE FOLLOWING
                        TERMS AND CONDITIONS ("TERMS"). PLEASE READ THESE
                        CAREFULLY BEFORE CONTINUING TO USE THIS SITE. IF YOU DO
                        NOT AGREE WITH ANY OF THESE TERMS, PLEASE DO NOT USE
                        THIS SITE. IF YOU HAVE ANY QUESTIONS ABOUT THESE TERMS,
                        PLEASE CONTACT us at info@mamtakothari.com
                    </p>
                    <p className="got text-sm text-purple">
                        The domain name <b>www.mamtakothari.com</b> (hereinafter
                        referred to as "Website") is owned by Midas Signature
                        Jewellery Pvt. Ltd., a company incorporated under the
                        Companies Act, 1956 with its registered office at
                        following address - B-6b, Prithviraj Road, C-Scheme,
                        Jaipur. (Hereinafter referred to as "Company")
                    </p>
                    <div>
                        <p className="text-purple pfr mt-7 text-xl font-medium">
                            1. INTELLECTUAL PROPERTY RIGHTS
                        </p>
                        <p
                            className="p-4 got text-sm text-purple"
                            style={{ lineHeight: "1.7" }}
                        >
                            All the designs and other content displayed on this
                            website is the intellectual property of the Company.
                            Nothing contained within the website should be
                            construed as granting any license or the right to
                            use any trademark/trade name/design/copyright/patent
                            without the prior written consent of the owner of
                            the website.
                            <br /> Any misuse of the intellectual property at
                            the website will not be permitted and will be dealt
                            as per the applicable laws of India. You acknowledge
                            that your use of the content on this Website is for
                            personal, non- commercial use. Any links to
                            third-party websites are provided solely as a
                            convenience to you. We do not endorse the contents
                            on any such third-party websites. We are not
                            responsible for the content of or any damage that
                            may result from your access to or reliance on these
                            third-party websites. If you link to third-party
                            websites, you do so at your own risk.
                            <br /> Except as expressly provided in these Terms
                            of Use, no part of the Website and no Content may be
                            copied, reproduced, republished, uploaded, posted,
                            publicly displayed, encoded, translated, transmitted
                            or distributed in any way (including "mirroring") to
                            any other computer, server, Website or other medium
                            for publication or distribution or for any
                            commercial enterprise, without the Company’s express
                            prior written consent. Without the prior written
                            consent of the owner, modification of the materials,
                            use of the materials on any other web site or
                            networked computer environment or use of the
                            materials for any purpose other than personal,
                            non-commercial use is prohibited.
                        </p>
                    </div>
                    <div>
                        <p className="text-purple pfr mt-7 text-xl font-medium">
                            2. SECURITY AND PRIVACY POLICY
                        </p>
                        <div className="p-4 pb-0">
                            <p className="text-purple pfr mt-2 text-lg font-medium">
                                INFORMATION WE COLLECT
                            </p>
                            <p
                                className="p-4 pb-0 got text-sm text-purple"
                                style={{ lineHeight: "1.7" }}
                            >
                                We may disclose personal information if required
                                to do so by law or in the good faith belief that
                                such disclosure is reasonably necessary to
                                respond to subpoenas, court orders, or other
                                legal process. We may disclose personal
                                information to law enforcement offices, third
                                party rights owners, or others in the good faith
                                belief that such disclosure is reasonably
                                necessary to: enforce our Terms or Privacy
                                Policy; respond to claims that an advertisement,
                                posting or other content violates the rights of
                                a third party; or protect the rights, property
                                or personal safety of our users or the general
                                public.
                                <br /> Cookie Policy: A cookie is a small text
                                file that we place on your mobile device to
                                enable various features of the Website "Cookies"
                                are used to store user preferences and to track
                                user trends, so as to enhance your interactive
                                experience and generally improve our Services to
                                you. You can change your cookie settings to
                                accept or not accept cookies in your browser
                                settings. If you do accept a "cookie", you
                                thereby agree to our use of any Personal
                                Information collected by us using that Cookie.
                                If you do accept a "cookie", you thereby agree
                                to our use of any Personal Information collected
                                by us using that Cookie.
                            </p>
                        </div>
                        <div className="p-4 pb-0">
                            <p className="text-purple pfr mt-2 text-lg font-medium">
                                USE OF YOUR PERSONAL INFORMATION
                            </p>
                            <p
                                className="p-4 pb-0 got text-sm text-purple"
                                style={{ lineHeight: "1.7" }}
                            >
                                We reserve the right to use and share your
                                information in the event we believe doing so is
                                necessary to operate this website or where such
                                disclosure may be required by law, or to protect
                                our right or the rights of others. We shall use
                                information as otherwise permitted by law.
                            </p>
                        </div>
                        <div className="p-4">
                            <p className="text-purple pfr mt-2 text-lg font-medium">
                                UPDATES OF THIS POLICY
                            </p>
                            <p
                                className="p-4 got text-sm text-purple"
                                style={{ lineHeight: "1.7" }}
                            >
                                From time to time we may change our privacy
                                practices. We may update this privacy policy by
                                posting a new version on this website from time
                                to time. You must check this page occasionally
                                to ensure you are familiar with any changes in
                                the policy. We will notify you of any material
                                changes to this policy as required by law. We
                                will also post an updated copy on our website.
                                Please check our site periodically for updates.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-purple pfr mt-7 text-xl font-medium">
                            3. COMMUNICATIONS
                        </p>
                        <p
                            className="p-4 got text-sm text-purple"
                            style={{ lineHeight: "1.7" }}
                        >
                            When you send e-mails to us, you are communicating
                            with us electronically. You will be required to
                            provide a valid phone number while placing an order
                            with us. We may communicate with you by email, SMS
                            or a phone call. For contractual purposes, you
                            consent to receive communications including SMS,
                            e-mails or phone calls from us with respect to your
                            order.
                        </p>
                    </div>
                    <div>
                        <p className="text-purple pfr mt-7 text-xl font-medium">
                            4. DISCLAIMER OF WARRANTIES
                        </p>
                        <p
                            className="p-4 got text-sm text-purple"
                            style={{ lineHeight: "1.7" }}
                        >
                            While efforts are made to keep the information on
                            this site accurate and timely, Company does not
                            guarantee or endorse the content, accuracy or
                            completeness of the information, text, graphics,
                            hyperlinks and other items contained herein or on
                            any other server. This site and the materials,
                            information, and references to services and products
                            if any herein, including without limitations, text,
                            graphics and links, are provided "as is" without
                            representations or warranties of any kind, whether
                            express or implied.
                        </p>
                    </div>
                    <div>
                        <p className="text-purple pfr mt-7 text-xl font-medium">
                            5. INDEMNIFICATION
                        </p>
                        <p
                            className="p-4 got text-sm text-purple"
                            style={{ lineHeight: "1.7" }}
                        >
                            You will release, indemnify, defend and hold
                            harmless the Company and any of its contractors,
                            agents, employees, officers, directors,
                            shareholders, affiliates and assigns from all
                            liabilities, claims, damages, costs and expenses,
                            including reasonable attorneys' fees and expenses,
                            of third parties relating to or arising out of (1)
                            this Agreement or the breach of your warranties,
                            representations and obligations under this
                            Agreement; (2) the Website content or your use of
                            the Website content; (3) the Products or your use of
                            the Products (including Trial Products); (4) any
                            intellectual property or other proprietary right of
                            any person or entity; (5) your violation of any
                            provision of this Agreement; or (6) any information
                            or data you supplied to the Company when it is
                            threatened with suit or sued by a third party.
                            <br /> The terms of this provision will survive any
                            termination or cancellation of this Agreement or
                            your use of the Website or Products.
                        </p>
                    </div>
                    <div>
                        <p className="text-purple pfr mt-7 text-xl font-medium">
                            6. LIMITATION OF LIABILITY
                        </p>
                        <p
                            className="p-4 got text-sm text-purple"
                            style={{ lineHeight: "1.7" }}
                        >
                            The Company will not be liable for any direct,
                            indirect, incidental, special or consequential
                            damages in connection with this agreement or the
                            products in any manner, including liabilities
                            resulting from (1) the use or the inability to use
                            the website content or products; (2) the cost of
                            procuring substitute products or content; (3) any
                            products purchased or obtained or transactions
                            entered into through the website; or (4) any lost
                            profits you allege.
                            <br /> Some jurisdictions do not allow the
                            limitation or exclusion of liability for incidental
                            or consequential damages so some of the above
                            limitations may not apply to you
                        </p>
                    </div>
                    <div>
                        <p className="text-purple pfr mt-7 text-xl font-medium">
                            7. QUERIES
                        </p>
                        <p
                            className="p-4 got text-sm text-purple"
                            style={{ lineHeight: "1.7" }}
                        >
                            If you have any questions about this Policy or other
                            queries, you can also email us at
                            <b>info@mamtakothari.com</b>
                        </p>
                    </div>
                    <div>
                        <p className="text-purple pfr mt-7 text-xl font-medium">
                            8. GOVERNING LAW AND JURISDICTION
                        </p>
                        <p
                            className="p-4 got text-sm text-purple"
                            style={{ lineHeight: "1.7" }}
                        >
                            Terms of Use shall be governed by and interpreted
                            and construed in accordance with the laws of India.
                            The place of jurisdiction shall be exclusively in
                            New Delhi.
                        </p>
                    </div>
                    <div>
                        <p className="text-purple pfr mt-7 text-xl font-medium">
                            9. BREACH
                        </p>
                        <p
                            className="p-4 got text-sm text-purple"
                            style={{ lineHeight: "1.7" }}
                        >
                            In the event of a breach of the Terms of Use or
                            other ruler and policies by You, we reserve the
                            right to recover any amounts due and owing by You to
                            us and to take strict legal action including but not
                            limited to a referral to the appropriate police or
                            other authorities for initiating criminal or other
                            proceedings against You.
                        </p>
                    </div>
                    <p className="text-purple got my-6 text-sm font-medium">
                        We will not be held responsible for any delay or failure
                        to comply with our obligations under these conditions if
                        the delay or failure arises from any cause which is
                        beyond our reasonable control. This condition does not
                        affect your statutory rights.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Legal;
