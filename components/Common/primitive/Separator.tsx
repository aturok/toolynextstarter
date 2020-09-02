import styled from 'styled-components';
import { CenteredContainer } from '../Common.styles';
import { themeColor } from '../../Theme';

const Container = styled(CenteredContainer)`
    padding-top: 0 !important;
    padding-bottom: 0 !important;
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    border-top: 1px solid ${themeColor(c => c.separator)};
`;

export default () => {
    return (
        <Container>
            <Line />
        </Container>);
}