import { Markdown } from 'components/markdown';
import Game from 'components/gameoflife';

const postDynamicContentExplainer = `
I'm an American technologist with 13 years of experience building with technologies for the web. In practice, I'm neither a cynic nor optimist, but biased towards prototyping and experimentation. My preference is to work in cross-functional groups (designers, engineers, research, product & strategy) with individuals of open mind and clear purpose. 

WORK — I prototype and develop [websites](https://asif.org), [apps](https://skematic.com), and [installations](https://docubase.mit.edu/project/subway-stories/), both as an independent professional and as a part of multidisciplinary design, product, & research teams. The bulk of my recent work has been in open source software contributions to [WordPress](http://wordpress.org), in the form of [themes](https://github.com/Automattic/themes/commits?author=jffng), [plugins](https://github.com/WordPress/create-block-theme), and the CMS itself, [Gutenberg](https://github.com/WordPress/gutenberg/commits?author=jffng). A selection of projects and more about my work can be found [here](https://nostalgic-ramanujan-e41182.netlify.app/work/).

EMPLOYMENT — I've been employed by [Automattic](https://automattic.com/) (2019 - 2024), [frog design](https://www.frog.co/) (2015 - 2018), [barbarian](https://www.wearebarbarian.com/) (2012 - 2014). My titles included design director, software engineer, [creative technologist](https://automattic.design/2019/06/21/what-is-a-creative-technologist/), and design technologist.

PRACTICE — I make music and perform under the moniker [Off-Brand](https://off-brand.net/about). I'm a resident of [the Lot Radio](https://www.thelotradio.com/), co-hosting a monthly show [SLUICE](https://www.youtube.com/results?search_query=SLUICE+lot+radio) with [Laenz](https://soundcloud.com/laenzzz). My most recent [sound performance collaboration](https://www.instagram.com/p/DC1scd8PtxE/?img_index=1) with [CACHE Collective](https://thisiscache.com/) took place at the Museum Siam in Bangkok.

My [media artwork](https://jffng.github.io/subway-stories-web/) has been exhibited at [SIGGRAPH](https://dl.acm.org/doi/10.1145/2601080.2601086), [CURRENTS Festival](https://currentsnewmedia.org/), [NYC Resistor](https://hackaday.com/2014/06/13/nyc-resistor-interactive-show-2014/), and the [Dumbo Arts Festival](https://www.thesubwaydiaries.com/blog/dumbo-arts-festival-more-underground-magic/). My master’s thesis, [The Medium is the Machine](https://vimeo.com/manage/videos/128042517)  (2015) looked at the commercial use of artificial intelligence in mediating personal identity. I [spoke about the automation of design](https://www.youtube.com/live/wMpXHOWVOwg?si=m2qlKofghmJGukYb&t=2653) at the St. Etienne Design Biennale (2019).

BACKGROUND — I was born and raised in [Michigan](https://en.wikipedia.org/wiki/St._Joseph,_Michigan) (1990 - 2012), and currently live in [New York City](https://en.wikipedia.org/wiki/Ridgewood,_Queens) (2012 - present). I graduated from the [University of Michigan](https://michiganross.umich.edu/) (2008) and [New York University](https://tisch.nyu.edu/itp) (2015) with degrees in business and computers, respectively. I am the third child of two immigrants from Hong Kong and Malaysia to the United States.

KIN — The following people are important collaborators and direct influences on my life and thinking: [https://gordonwantuch.com/](https://gordonwantuch.com/), [https://www.wipawe.com/](https://www.wipawe.com/), [https://nicsedlazek.com/](https://nicsedlazek.com/), [https://www.xlaenz.com/](https://www.xlaenz.com/), [https://mebenedetto.com/](https://mebenedetto.com/), [https://www.meiravong.com/](https://www.meiravong.com/), [https://x.com/ycmizrahi](https://x.com/ycmizrahi), [https://lav.io/](https://lav.io/), [https://christynyiri.com/](https://christynyiri.com/), [https://maedastudio.com/](https://maedastudio.com/), [https://sekai.co.uk/](https://sekai.co.uk/).

OTHER — I enjoy books, movies, writing, [amaro](https://www.instagram.com/p/Cxi1DlPODjZ/?img_index=1), and cooking. I’m currently studying Japanese. A spreadsheet of citations from things I’m reading can be found [here](https://docs.google.com/spreadsheets/d/1nv6TUkhfrEraAkCspkMeKeDqG97SO_cbSFu-QT-B2js/edit?gid=0#gid=0), and some collections of things [here](https://www.are.na/jeff-ong/).

I would love to hear from you, please get in touch by [email at jonger4 at gmail.com](mailto:jonger4@gmail.com).`

export default function Page() {
    return (
        <main className="flex flex-col gap-36 sm:gap-4">
            <section className="flex flex-col gap-6">
                <Game/>
                <Markdown content={postDynamicContentExplainer} />
            </section>
        </main>
    );
}