import React, { useState } from "react";
import Link from "next/link";
import { VscMenu, VscClose } from "react-icons/vsc";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
    const [open, setOpen] = useState(false);
    const links = [
        { url: "/worldofss", text: "WORLD OF SUNITA SHEKHAWAT" },
        { url: "worldofss/", text: "FINE JEWELLERY" },
        { url: "/collections", text: "COLLECTIONS" },
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
                    {links.map((link, i) => (
                        <a
                            key={i}
                            href={link.url}
                            className="nav-item got ls-2"
                            style={{ fontSize: "11px" }}
                        >
                            {link.text}
                        </a>
                    ))}
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
                            {links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    style={{ fontSize: "11px" }}
                                    className="text-gold got ls-2 text-sm font-medium py-2.5 mt-0.5 cursor-pointer"
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
                        <Link href={"/"}>
                            <img
                                className="h-16 w-auto mx-auto"
                                src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/logo.png"
                            />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};
