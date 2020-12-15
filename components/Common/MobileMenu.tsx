import styled from 'styled-components';
import { maskIconCss, HeaderHeight } from './Common.styles';
import { themeColor } from '../Theme';
import { device } from '../Media.styles';
import Menu, { MenuList } from './Menu';

const MenuWrapper = styled.div`
    display: none;
    &.active {
            position: fixed;
            display: block;
            z-index: 300;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${themeColor(c => c.background)};
        }
`;

const Container = styled.nav`
    & ${MenuList} {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        width: 100%;

        & li {
            margin: 0;
            padding: 0.5em 1em;
            width: 100%;
            border-bottom: 1px solid ${themeColor(c => c.separator)};
        }
    }

    & > img {
        height: 50px;
        margin: 0.5em 1em;
    }
`;

const iconSize = 26;
const buttonSize = iconSize+24;
const iconCss = (icon: string) => maskIconCss(icon, themeColor(c => c.ribbonText), iconSize, iconSize, iconSize);
export const MenuIcon = styled.span`
    ${iconCss('/icons/menu.svg')}
`;
export const CloseIcon = styled.span`
    ${iconCss('/icons/close.svg')}
`;

const Button = styled.a`
    text-align: center;
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    position: fixed;
    right: 10px;
    bottom: 10px;
    padding: 12px 10px 10px 10px;
    border-radius: ${5}px;
    background: ${themeColor(c => c.whiteTransparent)};
    display: block;

    @media ${device.landscapeTablets}, ${device.l} {
        display: none;
    }
`;

const MenuButton = styled(Button)`
    z-index: 150;
`;
const CloseButton = styled(Button)`
    z-index: 250;
`;

export const MobileMenu = () => {
    return (
        <>
            <MenuWrapper>
                <Container id="mobilenavigation">
                    <img src="/img/logo.svg" alt="Site logo"></img>
                    <Menu />
                    <CloseButton>
                        <CloseIcon />
                    </CloseButton>
                </Container>
            </MenuWrapper>
            <MenuButton id="mobilemenubutton">
                <MenuIcon />
            </MenuButton>
        </>
    );
}