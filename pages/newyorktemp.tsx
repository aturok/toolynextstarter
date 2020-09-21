import axios from 'axios';
import Head from '../components/Common/Head';
import BrandHeader from '../components/Common/BrandHeader';
import HeaderImage from '../components/Common/HeaderImage';
import Footer from '../components/Common/Footer';
import { Main } from '../components/Common/Common.styles';

import { NewYorkTemperatureBlock } from '../components/Main/NewYorkTemperatureBlock';

interface Props {
    temperature: number;
}

export default function Home(props: Props) {
  return (
      <>
        <Head />
        <BrandHeader />
        <HeaderImage />

        <Main>
            <NewYorkTemperatureBlock temperature={props.temperature} />
        </Main>

        <Footer />
      </>);
}

export async function getServerSideProps() {
    const url = "http://www.7timer.info/bin/api.pl?lon=40.713&lat=74.006&product=civil&unit=metric&output=json";
    const { data } = await axios.get(url);
    return {
        props: { temperature: data.dataseries[0].temp2m }
    };
}
