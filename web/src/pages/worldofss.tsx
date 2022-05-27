import React, { createRef, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/ui/Navbar";

interface worldofssProps {}

const Worldofss: React.FC<worldofssProps> = ({}) => {
    const img1Ref = createRef<HTMLImageElement>();
    const img2Ref = createRef<HTMLImageElement>();
    const img3Ref = createRef<HTMLImageElement>();
    const img4Ref = createRef<HTMLImageElement>();

    const arr = [img1Ref, img2Ref, img3Ref, img4Ref];
    arr.forEach((ref) => {
        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    ref.current?.style.setProperty("opacity", "100");
                }
            }, {});

            if (ref.current) {
                observer.observe(ref.current);
            }
            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, [ref]);
    });
    return (
        <div>
            <Navbar />
            <div
                style={{
                    backgroundImage:
                        'url("https://i.ibb.co/31n51TY/image-17.png")',
                    backgroundSize: "cover",
                    height: "600px",
                }}
                className="flex flex-col md:flex-row items-center justify-center p-10 mx-11"
            >
                <div className="w-full">
                    <img
                        className="max-w-xs md:max-w-sm h-auto ml-auto mr-10 mb-10 md:mb-0"
                        src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/world-of-ss-img1.jpg"
                    />
                </div>
                <div className="w-full text-center">
                    <p className="text-purple pfr italic text-xl px-10">
                        Design is not just an art form that I enjoy or a canvas
                        for my creativity, it goes beyond that, to become the
                        medium for my storytelling.
                    </p>
                </div>
            </div>
            <div className="mx-11 my-14">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full">
                        <img
                            style={{
                                opacity: "0",
                                transition: "opacity 0.9s ease-in-out",
                            }}
                            className="transition duration-75 my-6 md:my-0"
                            ref={img1Ref}
                            src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/world-of-ss-img2.jpg"
                        />
                    </div>
                    <div className="w-full text-center">
                        <img
                            className="mx-auto mb-4"
                            src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/pattern-img5.png"
                        />
                        <h1 className="text-purple pfr text-2xl">
                            CRAFTSMANSHIP
                        </h1>
                        <p className="mx-10 mt-2 text-purple">
                            Each luxurious aesthetic in the brand's collections
                            celebrates traditional skills with detailed
                            craftsmanship. Completely handmade, the art of
                            meenakari is a long laborious craft form that
                            involves long man hours to complete one piece of
                            jewellery.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row items-center">
                    <div className="w-full text-center">
                        <img
                            className="mx-auto mb-4"
                            src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/pattern-img5.png"
                        />
                        <h1 className="text-purple pfr text-2xl">
                            TIMELESSNESS
                        </h1>
                        <p className="mx-10 mt-2 text-purple">
                            Sunita Shekhawat's passion and devotion to her craft
                            combined with the use of pure and rare stones
                            manifests in each and every creation, a priceless
                            heirloom, passed on for generations to come. These
                            prized possessions of excellence, have illuminated
                            the bold traditional aesthetics and beauty that lies
                            within every Indian woman.
                        </p>
                    </div>
                    <div className="w-full">
                        <img
                            style={{
                                opacity: "0",
                                transition: "opacity 0.9s ease-in-out",
                            }}
                            className="transition duration-75 my-6 md:my-0"
                            ref={img2Ref}
                            src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/world-of-ss-img3.jpg"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full">
                        <img
                            style={{
                                opacity: "0",
                                transition: "opacity 0.9s ease-in-out",
                            }}
                            className="transition duration-75 my-6 md:my-0"
                            ref={img3Ref}
                            src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/world-of-ss-img4.jpg"
                        />
                    </div>
                    <div className="w-full text-center">
                        <img
                            className="mx-auto mb-4"
                            src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/pattern-img5.png"
                        />
                        <h1 className="text-purple pfr text-2xl">INTRICACY</h1>
                        <p className="mx-10 mt-2 text-purple">
                            These objects of desire pass through many hands as
                            they are sculpted, painted and engraved, every
                            meenakar adds a personal touch to the piece guided
                            by Sunita Shekhawat's perfection and devotion.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row items-center">
                    <div className="w-full text-center">
                        <img
                            className="mx-auto mb-4"
                            src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/pattern-img5.png"
                        />
                        <h1 className="text-purple pfr text-2xl">
                            REVIVAL OF THE ART
                        </h1>
                        <p className="mx-10 mt-2 text-purple">
                            The challenge and conversely the strength of the
                            brand lies in preserving the old world and original
                            charm, while reinventing the sensibility for
                            contemporary time and the future. The brand believes
                            that to be able to design for the future one must
                            learn from and honor the past.
                        </p>
                    </div>
                    <div className="w-full">
                        <img
                            style={{
                                opacity: "0",
                                transition: "opacity 0.9s ease-in-out",
                            }}
                            className="transition duration-75 my-6 md:my-0"
                            ref={img4Ref}
                            src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/world-of-ss-img5.jpg"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Worldofss;
