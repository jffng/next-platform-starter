"use client"; // Needed if using Next.js App Router
import Link from 'next/link';
import { useEffect, useState } from "react";

export function Footer() {
    const [lastModified, setLastModified] = useState("");

    useEffect(() => {
        setLastModified(document.lastModified); // Gets last modified date from the browser
    }, []);
    // Get the most recent date of the last git commit

    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
			<p className="text-xs">
            Code for this website can be found in this repository <Link href="https://github.com/jffng/next-platform-starter">this repository</Link>.
            This website was last updated {lastModified}. 
            </p>
            <br/>
            <p className="text-xs">
            Credit to <Link href="https://mindyseu.com">Mindy Seu</Link> for the format of this statement.
            </p>
        </footer>
    );
};
