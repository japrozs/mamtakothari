import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <div className="p-5">
            <img
                className="w-28 h-auto mx-auto"
                src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/pattern-img4.png"
            />
            <div
                className="flex items-center justify-center my-5 border-t border-b border-gold pt-4 pb-3"
                style={{
                    borderImage:
                        "linear-gradient(35deg, transparent, #a29560,transparent) 1",
                }}
            >
                <a
                    href={"/legal"}
                    className="text-gold got ls-2 font-medium hover:underline hover:cursor-pointer mx-4"
                    style={{ fontSize: "11px" }}
                >
                    LEGAL
                </a>
                <a
                    href={"/contact"}
                    className="text-gold got ls-2 font-medium hover:underline hover:cursor-pointer mx-4"
                    style={{ fontSize: "11px" }}
                >
                    CONTACT US
                </a>
            </div>
            <div className="flex items-center justify-center p-3">
                <p className="text-gold got text-xs text-center font-medium mt-2 mx-2">
                    &copy; MAMTA KOTHARI 2019. ALL RIGHTS RESERVED
                </p>
                <a href="https://facebook.com" target={"_blank"}>
                    <BsFacebook className="mx-2 text-2xl text-gold cursor-pointer" />
                </a>
                <a href="https://instagram.com" target={"_blank"}>
                    <AiOutlineInstagram className="mx-2 text-3xl text-gold cursor-pointer" />
                </a>
            </div>
        </div>
    );
};
