import Link from 'next/link';

export function Footer() {
    // Get the most recent date of the last commit
    const monthAndDateOfLastUpdate = 'February 2025';

    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <p className="text-xs">
            This website was last updated: {monthAndDateOfLastUpdate}.
            </p>
            <br/>
            <p className="text-xs">
            Credit to <Link href="https://mindyseu.com">Mindy Seu</Link> for the format of this statement. Repository for this website can be found <Link href="https://github.com/jffng/next-platform-starter">here</Link>.
        </p>
        </footer>
    );
};
