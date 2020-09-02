import styled from 'styled-components';
import { CenteredContainer, containerShadow } from './Common.styles';
import { themeColor } from '../Theme';
import { emailaddress } from '../../constants/constants';

const Attribution = styled.p`    
`;

const Container = styled(CenteredContainer)`
    font-size: 0.6em;
    background: ${themeColor(c => c.footerBackground)};
    color: ${themeColor(c => c.textWhiteDim)};
    ${containerShadow}

    & > ${Attribution} {
        margin: 10px 0 0;
    }

    & a {
        font-weight: bold;
        color: ${themeColor(c => c.textWhiteDim)};
    }
`;

export default () => {
    return (
        <Container>
            <div>
                <a href={`mailto:${emailaddress}`}>{emailaddress}</a>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
                 <a href="/mdpage">Other page</a>
            </div>
            <Attribution>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="blank">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></Attribution>
            <Attribution>Photo by Ave Calvar Martinez from Pexels</Attribution>
            
            <script src="/js/jquery.min.js"></script>
            <script src="/js/owl.carousel.min.js"></script>
            <script src="/js/init.js"></script>
        </Container>);
}