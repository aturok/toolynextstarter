import styled from 'styled-components';
import { HeaderVerticalPadding, HeaderLogoSize, containerDarkShadow, ContainerSidePadding, maskIconCss, containerShadow, HeaderHeight } from './Common.styles';
import { themeColor } from '../Theme';
import { device } from '../Media.styles';
import { facebooklink, emailaddress } from '../../constants/constants';

const menuitems = [
    ["#emailform", "form"],
    ["/mdpage", "subpage"],
    ["http://toolympus.com", "other site"],
];

const MenuList = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row;
    align-items: center;

    & > li:not(:first-child) {
        margin-left: 25px;
    }
`;

export default () => (
    <MenuList>
        {menuitems.map(([url, text]) => (
            <li>
                <a href={url} target={url.startsWith('#') || url.startsWith('/') ? "_self" : "_blank"}>{text}</a>
            </li>
        ))}
    </MenuList>
);