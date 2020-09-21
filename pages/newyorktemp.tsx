import axios from 'axios';
import Head from '../components/Common/Head';
import BrandHeader from '../components/Common/BrandHeader';
import HeaderImage from '../components/Common/HeaderImage';
import Footer from '../components/Common/Footer';
import { Main } from '../components/Common/Common.styles';

import { NewYorkTemperatureBlock } from '../components/Main/NewYorkTemperatureBlock';

interface Props {
    temperature: number;
    location: string;
}

export default function Home(props: Props) {
  return (
      <>
        <Head />
        <BrandHeader />
        <HeaderImage />

        <Main>
            <NewYorkTemperatureBlock temperature={props.temperature} location={props.location} />
        </Main>

        <Footer />
      </>);
}

export async function getServerSideProps(context) {
    const query = new URLSearchParams(context.query);
    const lon = query.get("lon") || "40.713";
    const lat = query.get("lat") || "34.006";

    const location = (!query.get("lon") && !query.get("lat"))
        ? "New York (40.713, 34.006)" : `longitude ${lon}, latitude ${lat}`;

    const { data } = await axios.get(`http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&unit=metric&output=json`);
    return {
        props: {
            temperature: data.dataseries[0].temp2m,
            location,
        }
    };
}
