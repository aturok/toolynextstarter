import Head from '../components/Common/Head';
import BrandHeader from '../components/Common/BrandHeader';
import HeaderImage from '../components/Common/HeaderImage';
import Footer from '../components/Common/Footer';
import { Main } from '../components/Common/Common.styles';
import { CookieBlock } from '../components/Common/Cookie';

import { ExampleBlock } from '../components/Main/ExampleBlock';
import { ExampleForm } from '../components/Main/ExampleForm';
import { Separator } from '../components/primitive/Separator';
import { ExampleTableBlock } from '../components/Main/ExampleTableBlock';
import { ExamplePeopleBlock } from '../components/Main/ExamplePeopleBlock';

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
            <Separator />
            <ExamplePeopleBlock />
            <ExampleTableBlock />
        </Main>

        <Footer />
        <CookieBlock/>

      </>);
}
