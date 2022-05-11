import { useRouter } from 'next/router';

import Link from 'next/link';
import { CSSProperties } from 'react';

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',    
}

type ActiveLinkProps = {
    text: string, 
    href: string,
    children?: React.ReactNode; // added type for children
};

export const ActiveLink = ({ text, href }: ActiveLinkProps) => {

    const { asPath } = useRouter();

    return (
        <Link href={ href }>
            <a style={ asPath === href ? style : undefined }>{ text }</a>
        </Link>
        );
};



