import styled from 'styled-components';

const menuitems = [
    ["#emailform", "form"],
    ["/mdpage", "subpage"],
    ["http://toolympus.com", "other site"],
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