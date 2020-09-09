import styled from 'styled-components';
import { itemShadow } from '../Common/Common.styles';
import { themeColor } from '../Theme';
import { device } from '../Media.styles';

export const Photo = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    overflow: hidden;
    ${itemShadow}

    & > img {
        width: 200px;
        filter: grayscale();
    }
`;

export const PersonsList = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
    display: flex;
    flex-flow: column;

    & > li {
        padding: 2em 0;
        border-bottom: 1px solid ${themeColor(c => c.separator)};
        display: flex;

        @media ${device.sm} {
            flex-flow: row;
            justify-content: flex-start;
        }
        @media ${device.s} {
            flex-flow: column;
        }
    }

    & > li > div:nth-child(1) {
        display: flex;
        flex-flow: column;
        align-items: center;
        flex-shrink: 0;

        @media ${device.sm} {
            width: 30%;
        }
        @media ${device.s} {
            width: 100%;
            margin-bottom: 1em;
        }
    }

    & > li > div:nth-child(2) {
        text-align: left;
        display: flex;
        flex-flow: column;
        justify-content: center;

        @media ${device.sm} {
            padding-left: 2em;
        }
        @media ${device.s} {
            text-align: center;
        }

        & > span {
            display: block;
        }
        & > span:first-of-type {
            font-weight: 500;
        }
    }
`;
