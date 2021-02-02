import Head from '../../components/Common/Head';
import BrandHeader from '../../components/Common/BrandHeader';
import Footer from '../../components/Common/Footer';
import { Main, TextContainer } from '../../components/Common/Common.styles';
import { Markdown } from '../../components/Common/Markdown';
import { readPage } from '../../api/pages';
import { forLanguage, LanguageContext } from '../../components/Localization/LanguageContext';


export default function MDPage(page) {
  return (
      <LanguageContext.Provider value={forLanguage(page.lang)}>
        <Head />
        <BrandHeader />

        <Main>
            <TextContainer>
                <Markdown source={page.content} />
            </TextContainer>
        </Main>

        <Footer />
    </LanguageContext.Provider>);
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { lang: 'ru' }},
            { params: { lang: 'en' }}, 
        ],
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    return { props: { ...readPage(`/mdpage_${params.lang}`), lang: params.lang } };
}
