import { createRef, useEffect } from "react";
import Head from "next/head";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/Footer";

const Home = () => {
    const contentRef = createRef<HTMLDivElement>();
    const anotherContentRef = createRef<HTMLDivElement>();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                contentRef.current?.style.setProperty("opacity", "100");
            }
        }, {});

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }
        return () => {
            if (contentRef.current) {
                observer.unobserve(contentRef.current);
            }
        };
    }, [contentRef]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                anotherContentRef.current?.style.setProperty("opacity", "100");
            }
        }, {});

        if (anotherContentRef.current) {
            observer.observe(anotherContentRef.current);
        }
        return () => {
            if (anotherContentRef.current) {
                observer.unobserve(anotherContentRef.current);
            }
        };
    }, [anotherContentRef]);

    return (
        <div>
            <Head>
                <title>Sunita Shekhawat</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="flex flex-col md:flex-row items-center">
                <img
                    className="md:w-8/12 mb-2 md:mb-0"
                    src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/home-banner1.jpg"
                />
                <div className="w-4/12 text-center">
                    <p className="md:text-4xl text-2xl pfr text-purple">
                        THE
                        <br />
                        MODERN
                        <br />
                        MEENAKAR
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-stretch px-8 py-12">
                <div className="hidden lg:block w-full flex flex-col text-right p-10">
                    <p className="my-auto text-3xl pfr text-purple">
                        THE
                        <br />
                        MODERN
                        <br />
                        MEENAKAR
                    </p>
                    <button className="ml-auto mr-10 mt-7 border transition duration-auto got text-purple border-purple max-w-max text-sm p-2.5 font-semibold hover:bg-purple hover:text-white">
                        ABOUT MAMTA KOTHARI
                    </button>
                </div>
                <div className="w-full">
                    <img
                        className="mx-auto mb-6 lg:mb-0 h-72 md:h-96 w-auto"
                        src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/ss-img.jpg"
                    />
                </div>
                <div className="w-full pfr text-purple italic text-md md:text-xl">
                    Born in a Rajput family in Osian Thikana, a small village
                    near Jodhpur, Rajasthan, the daughter of an Indian air force
                    officer, Sunita Shekhawat had the opportunity to travel
                    across India - From Jodhpur to Bengaluru to Chandigarh to
                    Delhi, absorbing the various cultures all along. The colours
                    and contrasts of the life in Rajasthan, however, had the
                    most profound impact on her.
                </div>
            </div>
            <div
                ref={contentRef}
                style={{
                    opacity: "0",
                    transition: "opacity 0.9s ease-in-out",
                }}
                className="transition duration-75 h-96 p-0 lg:p-10"
            >
                <div
                    className="mx-auto pt-32 max-w-3xl w-full h-96 text-center"
                    style={{
                        backgroundImage:
                            'url("https://sunitashekhawat.com/skin/frontend/flamingo/default/images/pattern-img2.png")',
                        backgroundSize: "cover",
                    }}
                >
                    <p className="text-sm font-bold text-purple">COLLECTION</p>
                    <p className="text-purple pfr text-3xl md:text-4xl pt-2">
                        THE 'PADMAPRIYA'
                    </p>
                    <p className="px-5 md:px-14 text-purple pfr text-md md:text-xl pt-4">
                        Padmapriya collection, set in 22 kt gold, combines the
                        aspect of tradition and modern. Highlighting the
                        dazzling and delectables with Polki diamonds, south -
                        sea pearls and green and pink Meenakari.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full items-stretch justify-center px-14 py-16 space-y-6 md:space-y-0">
                <div className="w-full text-center">
                    <p className="text-sm font-bold text-purple">EARRINGS</p>
                    <img
                        className="mx-auto h-52 md:h-64 w-auto"
                        src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/home-padmapriya-earrings.png"
                    />
                </div>
                <div className="w-full text-center">
                    <p className="text-sm font-bold text-purple">NECKLACE</p>
                    <img
                        className="mx-auto h-72 md:h-80 w-auto"
                        src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/necklace-img.png"
                    />
                </div>
                <div className="w-full text-center">
                    <p className="text-sm font-bold text-purple">MAANGTIKA</p>
                    <img
                        className="mx-auto h-52 md:h-64 w-auto"
                        src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/home-padmapriya-maangtika.png"
                    />
                </div>
            </div>
            <div
                ref={anotherContentRef}
                style={{
                    opacity: "0",
                    transition: "opacity 0.9s ease-in-out",
                }}
                className="transition duration-75 h-96 p-0 lg:p-10 mb-9"
            >
                <div
                    className="mx-auto pt-32 max-w-3xl w-full text-center"
                    style={{
                        height: "24rem",
                        backgroundImage:
                            'url("https://sunitashekhawat.com/skin/frontend/flamingo/default/images/pattern-img3.png")',
                        backgroundSize: "cover",
                    }}
                >
                    <p className="text-sm font-bold text-purple">
                        THE DESIGNER
                    </p>
                    <p className="text-purple pfr text-3xl md:text-4xl pt-2">
                        THE ART
                        <br />
                        ON MEENAKARI
                    </p>
                    <p className="px-5 md:px-14 text-purple pfr text-md md:text-xl pt-4">
                        '' We create timeless masterpieces based on traditional
                        practices of Meenakari ''
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
