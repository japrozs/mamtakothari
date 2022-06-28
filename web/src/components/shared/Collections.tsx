import React, { useState, useRef, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FiChevronRight } from "react-icons/fi";

interface CollectionsProps {}

const links = [
    { url: "/collections/neelkamal", text: "NEELKAMAL COLLECTIONS" },
    { url: "/collections/neelkamal", text: "NEELVARNA COLLECTIONS" },
    { url: "/collections/neelkamal", text: "PADMAPRIYA COLLECTIONS" },
    { url: "/collections/neelkamal", text: "NEELPUSHPA COLLECTIONS" },
    { url: "/collections/neelkamal", text: "FIROZA COLLECTIONS" },
    { url: "/collections/neelkamal", text: "KALIKA COLLECTIONS" },
    { url: "/collections/neelkamal", text: "MAYURA COLLECTIONS" },
];

export const Collections: React.FC<CollectionsProps> = ({}) => {
    return (
        <div className=" got ls-2">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button>
                        <div className="flex items-center cursor-pointer">
                            <button
                                style={{
                                    fontSize: "11px",
                                }}
                                className="p-2 text-gold font-medium text-xs got ls-2 w-full text-left hover:underline"
                            >
                                COLLECTIONS
                            </button>
                            <FiChevronRight className="text-xl text-gold mb-2" />
                        </div>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        style={{
                            marginTop: "-30px",
                        }}
                        className="absolute z-10 left-20 w-64 origin-top-left divide-y divide-gray-100  rounded-sm bg-cream shadow-lg ring-1 ring-gold ring-opacity-50 focus:outline-none"
                    >
                        <div className="p-1.5">
                            {links.map((link, i) => (
                                <Menu.Item key={i}>
                                    <a
                                        href={link.url}
                                        className="flex items-center cursor-pointer"
                                    >
                                        <button
                                            style={{
                                                fontSize: "11px",
                                            }}
                                            className="p-2 text-gold font-medium text-xs got ls-2 w-full text-left hover:underline"
                                        >
                                            {link.text}
                                        </button>
                                    </a>
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};
