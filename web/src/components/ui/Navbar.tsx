import React, { useState } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
    const [open, setOpen] = useState(false);
    const links = [
        { url: "/worldofss", text: "WORLD OF SUNITA SHEKHAWAT" },
        { url: "worldofss/", text: "FINE JEWELLERY" },
        { url: "worldofss/", text: "EVENTS & NEWS" },
        { url: "/campaigns", text: "CAMPAIGNS" },
        { url: "/stores", text: "STORES" },
    ];
    return (
        <div className="w-full">
            <div className="hidden md:block p-5 border-b border-gray-300">
                <div className="">
                    <a href="/">
                        <img
                            className="h-16 w-auto mx-auto"
                            src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/logo.png"
                        />
                    </a>
                </div>
                <div className="flex items-center justify-center mx-auto pt-4">
                    <a href="/worldofss" className="nav-item">
                        WORLD OF SUNITA SHEKHAWAT
                    </a>
                    <a className="nav-item">FINE JEWELLERY</a>
                    <a className="nav-item">EVENTS {"&"} NEWS</a>
                    <a href={"/campaigns"} className="nav-item">
                        CAMPAIGNS
                    </a>
                    <a href={"/stores"} className="nav-item">
                        STORES
                    </a>
                </div>
            </div>
            <div className="block border-b border-gray-300 md:hidden">
                {open ? (
                    <>
                        <div className="flex items-center p-2.5 bg-cream border-b border-gray-300">
                            <VscClose
                                onClick={() => setOpen(false)}
                                className="text-2xl cursor-pointer"
                                color="#A39660"
                            />
                            <img
                                className="h-16 w-auto mx-auto"
                                src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/logo.png"
                            />
                        </div>
                        <div className="flex flex-col mx-auto px-3">
                            {links.map((link) => (
                                <a
                                    href={link.url}
                                    className="text-gold got text-sm font-medium py-2.5 mt-0.5 cursor-pointer"
                                >
                                    {link.text}
                                </a>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="flex items-center p-2.5 bg-cream">
                        <VscMenu
                            onClick={() => setOpen(true)}
                            className="text-2xl cursor-pointer"
                            color="#A39660"
                        />
                        <img
                            className="h-16 w-auto mx-auto"
                            src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/logo.png"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
