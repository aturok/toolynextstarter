import styled from 'styled-components';
import { itemShadow } from '../Common/Common.styles';
import { themeColor } from '../Theme';
import { device } from '../Media.styles';

export const Photo = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    overflow: hidden;
    ${itemShadow};

    & > img {
        width: 200px;
        filter: grayscale();
    }
`;

export const PersonsList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;

    & > li {
        padding: 2em 0;
        border-bottom: 1px solid ${themeColor(c => c.separator)};
        display: flex;

        @media ${device.s}, ${device.sm} {
            padding: 1em 0;
            flex-flow: column;
            justify-content: center;
        }
    }

    & > li > div:nth-child(1) {
        display: flex;
        flex-flow: column;
        align-items: center;
        flex-shrink: 0;
        width: 30%;

        @media ${device.s}, ${device.sm} {
            width: 100%;
            margin-bottom: 1em;
        }
    }

    & > li > div:nth-child(2) {
        text-align: left;
        display: flex;
        flex-flow: column;
        justify-content: center;
        padding-left: 15%;

        @media ${device.s}, ${device.sm} {
            text-align: center;
            padding: 0;
        }

        & > span {
            display: block;
        }
        & > span:first-of-type {
            font-weight: 500;
        }

        & > p {
            margin: 10px 0px 0px 0px;

        }
    }


`;
