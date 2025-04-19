import React from 'react'
import Link from 'next/link'

interface NavbarLinksProps {
    text: string;
    href: string;
    cssClass?: string;
};
export const NavbarLinks = ({ text, href, cssClass }: NavbarLinksProps) => {
    return (
        <>
            <Link href={href} className={cssClass} aria-current="page">{text}</Link>
        </>
    )
}
