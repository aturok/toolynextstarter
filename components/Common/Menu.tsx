import styled from 'styled-components';
import { themeColor } from '../Theme';

const menuitems = [
    ["/#emailform", "form"],
    ["/mdpage", "subpage"],
    ["http://toolympus.com", "other site"],
    ["/newyorktemp", "SSR page"],
];

export const MenuList = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row;
    align-items: center;

    & > li:not(:first-child) {
        margin-left: 25px;
    }

    & > li > a {
        display: inline-block;
        font-weight: normal;
        padding: 10px 0;
        position: relative;
        overflow-x: hidden;

        & ::before {
            content: ' ';
            position: absolute;
            height: 0;
            bottom: 3px;
            left: -300px;
            width: 100%;
            border-bottom: 3px solid ${themeColor(c => c.secondary)};
            transition: all 0.4s ease;
        }

        &:hover, &.active {
            & ::before {
                left: 0;
            }
        }
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