import Link from 'next/link';

const navItems = [
    { linkText: 'CV', href: 'https://docs.google.com/spreadsheets/d/1LtpUlSQJaYhO-Umu28o_GDXFsX0KhAvBiCGuZWp_rgk/edit?gid=0#gid=0' },
    { linkText: 'Portfolio', href: 'https://nostalgic-ramanujan-e41182.netlify.app/work/' },
    { linkText: 'Github', href: 'https://github.com/jffng' },
    { linkText: 'Instagram', href: 'https://instagram.com/ongbrand' },
    { linkText: 'LinkedIn', href: 'https://www.linkedin.com/in/ongjeffrey/' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            {navItems.map(({ linkText, href }) => (
                <Link key={href} href={href}>{linkText}</Link>
            ))}

        </nav>
    );
}
