import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'jeff ong — work in progress'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.png" sizes="any" />
            </head>
            <body className="antialiased text-black">
                <div className="flex flex-col min-h-screen px-4 bg-grid-pattern sm:px-10">
                    <div className="flex flex-col w-full max-w-2xl mx-auto grow">
                        <Header />
                        <div className="grow">{children}</div>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
