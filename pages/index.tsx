import Head from '../components/Common/Head';
import BrandHeader from '../components/Common/BrandHeader';
import HeaderImage from '../components/Common/HeaderImage';
import Footer from '../components/Common/Footer';
import { Main } from '../components/Common/Common.styles';

import { ExampleBlock } from '../components/Main/ExampleBlock';
import { ExampleForm } from '../components/Main/ExampleForm';

export default function Home() {
  return (
      <>
        <Head />
        <BrandHeader />
        <HeaderImage />

        <Main>
            <ExampleBlock />
            <ExampleForm />
            <ExampleBlock />
        </Main>

        <Footer />
      </>);
}
