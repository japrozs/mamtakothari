import React from "react";

interface MetaProps {
    title: string;
    owner?: string;
    description?: string;
}

export const Meta: React.FC<MetaProps> = ({ title, owner, description }) => {
    return (
        <>
            <meta name="description" content={description} />
            {owner ? <meta name="author" content={owner} /> : ""}
            <meta
                name="keywords"
                content={`SunitaShekhawat, Jewellery, Fine Jewellery`}
            />
            <meta name="og:title" content={title || "Spam"} />
            <meta
                name="og:type"
                content={owner ? "sunita.shekhawat" : "website"}
            />
            <meta property="og:determiner" content="the" />
            <meta property="og:locale" content="en_GB" />
            <meta property="og:site_name" content="Mamta Kothari" />
            <meta
                name="og:description"
                content={description != null ? description : "Spam"}
            />
            <meta name="og:site_name" content="Spam" />
            <meta name="og:image" content={`../../public/logo.png`} />
            <meta property="og:image:alt" content="Mamta Kothari" />
        </>
    );
};
