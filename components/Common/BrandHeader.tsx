import styled from 'styled-components';
import { HeaderVerticalPadding, HeaderLogoSize, containerDarkShadow, ContainerSidePadding, maskIconCss, containerShadow, HeaderHeight } from './Common.styles';
import { themeColor } from '../Theme';
import { device } from '../Media.styles';
import { facebooklink, emailaddress } from '../../constants/constants';
import Menu from './Menu';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 200;
    min-height: ${HeaderHeight}px;


    background: ${themeColor(c => c.ribbon)};
    color: ${themeColor(c => c.ribbonText)};
    ${containerDarkShadow}

    display: flex;
    flex-flow: row;
    align-items: center;
    
    @media ${device.sm} {
        padding: ${HeaderVerticalPadding}px ${ContainerSidePadding}px;
        justify-content: space-between;
    }
    @media ${device.s} {
        padding: ${HeaderVerticalPadding}px 0;
        justify-content: center;
    }

    & h1 {
        font-size: 36px;
        display: flex;
        flex-flow: row;
        align-items: center;
        margin: 0;
    }

    & h1 > img {
        width: ${HeaderLogoSize}px;
        margin: 0 0 0 12px;
    }

    & > div {
        display: flex;
        flex-flow: row;
        align-items: center;
    }
    & > div:first-child {
        justify-content: flex-start;
    }
    & > div:last-child {
        justify-content: flex-end;

        @media ${device.s} {
            display: none;
        }
    }

    & > :nth-child(2) {
        flex-grow: 1;
        margin-left: 50px;
    }
`;

const Line = styled.div`
    width: 1px;
    height: ${HeaderLogoSize - 10}px;
    border-left: 1px solid ${themeColor(c => c.ribbonText)};
    margin: 0 20px;
`;

const Motto = styled.div`
    font-family: Exo2;
    font-size: 14px;

    & > span {
        display: block;
    }
`;

const iconCss = (icon: string, size: number) => maskIconCss(icon, themeColor(c => c.ribbonText), size, size, 50);

export const Facebook = styled.span`
    ${iconCss('/icons/facebook.svg', 24)};
`;
export const Mail = styled.span`
    ${iconCss('/icons/mail.svg', 31)};
`;

const MobileSubheaderContainer = styled.div`
    width: 100%;
    background: ${themeColor(c => c.ribbon)};
    color: ${themeColor(c => c.ribbonText)};
    ${containerShadow}
    
    @media ${device.sm} {
        display: none;
    }
    @media ${device.s} {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        padding: ${HeaderVerticalPadding}px 0;
    }
`;

const LinksBlock = () => (
    <>
        <a target="_blank" href={facebooklink}>
            <Facebook />
        </a>
        <a target="_blank" href={`mailto:${emailaddress}`}>
            <Mail />
        </a>
    </>
);

export default () => {
    return (
        <>
            <Container>
                <div>
                <a href="/"><h1>idea<img src='/img/logo.svg' alt="my idea" /></h1></a>
                <Line />
                <Motto><span>find</span><span>the best </span><span>site starter</span></Motto>
                </div>

                <Menu />

                <div>
                    <LinksBlock />
                </div>
            </Container>
            <MobileSubheaderContainer>
                <LinksBlock />
            </MobileSubheaderContainer>
        </>);
}