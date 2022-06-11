import React from "react";
import Head from "next/head";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/Footer";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
    return (
        <div>
            <Head>
                <title>Mamta Kothari - Contact</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="p-5">
                <img
                    className="mx-auto"
                    src="https://sunitashekhawat.com/skin/frontend/flamingo/default//images/pattern-img5.png"
                />
                <p className="text-xl pfr text-center text-purple my-3">
                    CONTACT US
                </p>
                <div className="w-full max-w-xl p-3 mx-auto">
                    <div className="flex items-center justify-center space-x-10 mb-6">
                        <input
                            style={{ fontWeight: "500" }}
                            className="bg-transparent focus:outline-none  placeholder-gold placeholder-opacity-70 text-gold uppercase p-2 text-xs border-b border-gold w-64"
                            placeholder="NAME *"
                        />
                        <input
                            style={{ fontWeight: "500" }}
                            className="bg-transparent focus:outline-none placeholder-gold placeholder-opacity-70 text-gold uppercase p-2 text-xs border-b border-gold w-64"
                            placeholder="MOBILE *"
                        />
                    </div>
                    <div className="flex items-center justify-center space-x-10 my-6">
                        <input
                            style={{ fontWeight: "500" }}
                            className="bg-transparent focus:outline-none placeholder-gold placeholder-opacity-70 text-gold uppercase p-2 text-xs border-b border-gold w-64"
                            placeholder="EMAIL ID *"
                        />
                        <input
                            style={{ fontWeight: "500" }}
                            className="bg-transparent focus:outline-none placeholder-gold placeholder-opacity-70 text-gold uppercase p-2 text-xs border-b border-gold w-64"
                            placeholder="NATURE OF INQUIRY *"
                        />
                    </div>
                    <textarea
                        style={{ fontWeight: "500" }}
                        className="bg-transparent focus:outline-none placeholder-gold placeholder-opacity-70 text-gold uppercase p-2 text-xs border-b border-gold w-full"
                        placeholder="MESSAGE"
                    />
                    <button className="mt-6 border transition duration-auto got text-purple border-purple max-w-max text-sm p-2.5 font-semibold hover:bg-purple hover:text-white">
                        SUBMIT
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
