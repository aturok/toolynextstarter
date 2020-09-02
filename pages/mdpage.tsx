import Head from '../components/Common/Head';
import BrandHeader from '../components/Common/BrandHeader';
import Footer from '../components/Common/Footer';
import { Main, TextContainer } from '../components/Common/Common.styles';
import ReactMarkdown from 'react-markdown/with-html';
import { readPage } from '../api/pages';


export default function Terms(page) {
  return (
      <>
        <Head />
        <BrandHeader />

        <Main>
            <TextContainer>
                <ReactMarkdown escapeHtml={false} source={page.content} />
            </TextContainer>
        </Main>

        <Footer />
      </>);
}

export async function getStaticProps() {
    return { props: readPage('/mdpage') };
}
