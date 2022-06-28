import React, { useState, Fragment, useRef, useEffect } from "react";
import Link from "next/link";
import { VscMenu, VscClose } from "react-icons/vsc";
import { Menu, Transition } from "@headlessui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Categories } from "../shared/Categories";
import { Collections } from "../shared/Collections";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
    const [open, setOpen] = useState(false);
    const [fineJewelleryOpen, setFineJewelleryOpen] = useState(false);
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    const [collectionsOpen, setCollectionsOpen] = useState(false);
    const links = [
        { url: "/piroi", text: "PIROI" },
        { url: "/collections", text: "COLLECTIONS" },
        { url: "/campaigns", text: "CAMPAIGNS" },
        { url: "/stores", text: "STORES" },
    ];

    const categoriesList = [
      { url: "/diamond", text: "DIAMOND" },
      { url: "/diamond", text: "GOLD" },
      { url: "/diamond", text: "PRECIOUS GEMS" },
      { url: "/diamond", text: "REDEFINED JEWEL" },
      { url: "/diamond", text: "KUNDAN POLKI" },
    ]

    const collectionsList = [
      { url: "/collections/neelkamal", text: "NEELKAMAL COLLECTIONS" },
      { url: "/collections/neelkamal", text: "NEELVARNA COLLECTIONS" },
      { url: "/collections/neelkamal", text: "PADMAPRIYA COLLECTIONS" },
      { url: "/collections/neelkamal", text: "NEELPUSHPA COLLECTIONS" },
      { url: "/collections/neelkamal", text: "FIROZA COLLECTIONS" },
      { url: "/collections/neelkamal", text: "KALIKA COLLECTIONS" },
      { url: "/collections/neelkamal", text: "MAYURA COLLECTIONS" },
    ]

    return (
        <div className="w-full">
            <div className="hidden md:block p-5 border-b border-gray-400">
                <div className="">
                    <a href="/">
                        <img
                            className="h-16 w-auto mx-auto"
                            src="https://sunitashekhawat.com/skin/frontend/flamingo/default/images/logo.png"
                        />
                    </a>
                </div>
                <div className="flex items-center justify-center mx-auto pt-4">
                    <a
                        href={"/worldofmk"}
                        className="nav-item got ls-2"
                        style={{ fontSize: "11px" }}
                    >
                        WORLD OF MAMTA KOTHARI
                    </a>
                    <div className=" got ls-2">
                        <Menu
                            as="div"
                            className="relative inline-block text-left"
                        >
                            <div>
                                <Menu.Button
                                    style={{ fontSize: "11px" }}
                                    className="flex items-center text-xs got ls-2 nav-item"
                                >
                                    FINE JEWELLERY
                                    <FiChevronDown className="ml-1 mb-2 text-lg" />
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
                                <Menu.Items className="absolute left-6 mt-2 w-56 origin-top-right divide-y divide-gray-100  rounded-sm bg-cream shadow-lg ring-1 ring-gold ring-opacity-50 focus:outline-none">
                                    <div className="p-1.5">
                                        <Categories />
                                        <Collections />
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
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
                        <a
                            href={"/worldofmk"}
                            style={{ fontSize: "11px" }}
                            className="text-gold got ls-2 text-sm font-medium pt-1 cursor-pointer mt-2"
                        >
                            WORLD OF MAMTA KOTHARI
                        </a>
                        <a
                            onClick={() => setFineJewelleryOpen(!fineJewelleryOpen)}
                            style={{ fontSize: "11px" }}
                            className="flex items-center text-gold got ls-2 text-sm font-medium py-2 pb-1 cursor-pointer mt-2"
                        >
                            FINE JEWELLERY {fineJewelleryOpen ? <FiChevronUp className="ml-1 mb-2 text-lg" /> : <FiChevronDown className="ml-1 mb-2 text-lg" />}
                        </a>
                        {fineJewelleryOpen && (
                          <div>
                            <a
                                onClick={() => setCategoriesOpen(!categoriesOpen)}
                                style={{ fontSize: "11px" }}
                                className="flex items-center text-gold got ls-2 text-sm font-medium py-2 pb-1 cursor-pointer ml-4"
                            >
                              CATEGORIES {categoriesOpen ? <FiChevronUp className="ml-1 mb-2 text-lg" /> : <FiChevronDown className="ml-1 mb-2 text-lg" />}
                            </a>
                            {categoriesOpen && (
                              <div className="ml-8">
                              {categoriesList.map((cat, i) => (
                                <a
                                    key={i}
                                    href={cat.url}
                                    style={{ fontSize: "11px" }}
                                    className="flex items-center text-gold got ls-2 text-sm font-medium py-1 pb-1 cursor-pointer ml-4"
                                >
                                  {cat.text}
                                </a>
                              ))}
                              </div>
                            )}
                            <a
                                onClick={() => setCollectionsOpen(!collectionsOpen)}
                                style={{ fontSize: "11px" }}
                                className="flex items-center text-gold got ls-2 text-sm font-medium py-2 pb-1 cursor-pointer ml-4"
                            >
                              COLLECTIONS {collectionsOpen ? <FiChevronUp className="ml-1 mb-2 text-lg" /> : <FiChevronDown className="ml-1 mb-2 text-lg" />}
                            </a>
                            {collectionsOpen && (
                              <div className="ml-8">
                              {collectionsList.map((col, i) => (
                                <a
                                    key={i}
                                    href={col.url}
                                    style={{ fontSize: "11px" }}
                                    className="flex items-center text-gold got ls-2 text-sm font-medium py-1 pb-1 cursor-pointer ml-4"
                                >
                                  {col.text}
                                </a>
                              ))}
                              </div>
                            )}
                          </div>
                        )}
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
