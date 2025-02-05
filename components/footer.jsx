import Link from 'next/link';

export function Footer() {
    
    // Get the most recent date of the last commit
    const monthAndDateOfLastUpdate = 'February 2025';

    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <p className="text-xs">
            This website was last updated: {monthAndDateOfLastUpdate}.
            </p>
            <p className="text-xs">
            **The format of this statement is inspired by <Link href="https://mindyseu.com">Mindy Seu</Link>, as well as the citations 
        </p>
        </footer>
    );
};
