import { CenteredContainer } from '../Common/Common.styles';

interface Props {
    temperature: number;
}

export const NewYorkTemperatureBlock = (props: Props) => {
    const { temperature } = props;

    return (
        <CenteredContainer>
            <h2>Temperature</h2>
            <p>New York temperature is {temperature}&deg;C</p>
        </CenteredContainer>
    );
}