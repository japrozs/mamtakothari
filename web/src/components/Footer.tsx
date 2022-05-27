import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <div className="p-5">
            <img
                className="w-28 h-auto mx-auto"
                src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/pattern-img4.png"
            />
            <p className="text-gold got text-xs text-center font-medium mt-6">
                &copy; SUNITA SHEKHAWAT 2019. ALL RIGHTS RESERVED
            </p>
        </div>
    );
};
