import { Card } from 'components/card';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';

const postDynamicContentExplainer = `
I work with new media and the Internet, and a bent towards critical theory and practice. I love ideas, with a bias towards exploration via experimentation. Neither a cynic nor optimist, I prefer to work in cross-functional teams with individuals of open mind and clear purpose. Open to collaborations and conversations, please get in touch by [email at jonger4 at gmail.com](mailto:jonger4@gmail.com).

WORK — I develop custom websites & apps, digital apps, and installations, both as an independent professional and as a part of multidisciplinary design & research teams. My recent work was focused on open source software contributions to [WordPress](http://wordpress.org) in the form of [themes](https://github.com/Automattic/themes/commits?author=jffng), [plugins](https://github.com/WordPress/create-block-theme), and the content editor, [Gutenberg](https://github.com/WordPress/gutenberg/commits?author=jffng).

EMPLOYMENT — I've worked for [Automattic](https://automattic.com/) (2019 - 2024), [frog design](https://www.frog.co/) (2015 - 2018), [barbarian](https://www.wearebarbarian.com/) (2012 - 2014). My titles included design director, creative technologist, design technologist, and software engineer.

PRACTICE — I make music and perform under the moniker [Off-Brand](https://off-brand.net/about). I co-host a monthly radio show [SLUICE on the Lot Radio](https://www.youtube.com/results?search_query=SLUICE+lot+radio) with [Laenz](https://soundcloud.com/laenzzz). 

My [media artwork](https://jffng.github.io/subway-stories-web/) has been exhibited at [SIGGRAPH](https://dl.acm.org/doi/10.1145/2601080.2601086), [CURRENTS Festival](https://currentsnewmedia.org/), [NYC Resistor](https://hackaday.com/2014/06/13/nyc-resistor-interactive-show-2014/), and the [Dumbo Arts Festival](https://www.thesubwaydiaries.com/blog/dumbo-arts-festival-more-underground-magic/). My master’s thesis (2015) looked at the commercial use of artificial intelligence in mediating personal identity. I spoke about the automation of design at the St. Etienne Design Biennale (2019).

BACKGROUND — I was born and raised in [Michigan](https://en.wikipedia.org/wiki/St._Joseph,_Michigan) (1990 - 2012), and currently live in [New York City](https://en.wikipedia.org/wiki/Ridgewood,_Queens) (2012 - present). I graduated from the [University of Michigan](https://michiganross.umich.edu/) (2008) and [New York University](https://tisch.nyu.edu/itp) (2015) with degrees in business and computers, respectively. I am the third child of two immigrants from Hong Kong and Malaysia to the United States.

KIN — The following people are important collaborators and direct influences on my life and thinking: [https://www.wipawe.com/](https://www.wipawe.com/), [https://nicsedlazek.com/](https://nicsedlazek.com/), [https://www.xlaenz.com/](https://www.xlaenz.com/), [https://mebenedetto.com/](https://mebenedetto.com/), [https://www.meiravong.com/](https://www.meiravong.com/), [https://x.com/ycmizrahi](https://x.com/ycmizrahi), [https://lav.io/](https://lav.io/), [https://christynyiri.com/](https://christynyiri.com/), [https://maedastudio.com/](https://maedastudio.com/), [https://sekai.co.uk/](https://sekai.co.uk/).

OTHER — I enjoy books, movies, writing, amaro, and cooking. I’m currently studying Japanese. A spreadsheet of citations from things I’m reading can be found [here](https://docs.google.com/spreadsheets/d/1nv6TUkhfrEraAkCspkMeKeDqG97SO_cbSFu-QT-B2js/edit?gid=0#gid=0), and some collections of things [here](https://www.are.na/jeff-ong/).`

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-36 sm:gap-4">
            <section className="flex flex-col gap-6">
                <Markdown content={postDynamicContentExplainer} />
            </section>
            {/* { !!cards?.length && <CardsGrid cards={cards} /> } */}
        </main>
    );
}

function RuntimeContextCard() {
    const title = `Netlify Context: running in ${ctx} mode.`;
    if (ctx === 'dev') {
        return <Card title={title} text="Next.js will rebuild any page you navigate to, including static pages." />;
    } else {
        return <Card title={title} text="This page was statically-generated at build time." />;
    }
}
