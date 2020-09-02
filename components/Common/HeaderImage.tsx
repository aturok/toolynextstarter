import styled from 'styled-components';
import { themeColor } from '../Theme';

const Container = styled.div`
    width: 100%;
    height: 300px;
    padding: 0;
    margin: 0;
    background: url(/img/header.jpg);
    background-size: cover;
    background-position: center;
    box-shadow:
        0 10px 15px -10px ${themeColor(c => c.black)} inset,
        0 -10px 15px -10px ${themeColor(c => c.black)} inset;
    filter: grayscale();
`;

export default () => {
    return <Container/>;
}