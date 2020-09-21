import { CenteredContainer } from '../Common/Common.styles';

interface Props {
    temperature: number;
    location: string;
}

export const NewYorkTemperatureBlock = (props: Props) => {
    const { location, temperature } = props;

    return (
        <CenteredContainer>
            <h2>Temperature</h2>
            <p>Temperature in {location} is <b>{temperature}&deg;C</b></p>
            <p><i>You may set lon &amp; lat query params to show temperature for different locations (use 0.000 format)</i></p>
        </CenteredContainer>
    );
}