import styled from 'styled-components';
import { themeColor } from '../Theme';
import { device } from '../Media.styles';

export const CellHint = styled.span``;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    @media ${device.sm} {
        text-align: left;
    }
    @media ${device.s} {
        text-align: center;
    }

    tr {
        border-bottom: 1px solid ${themeColor(c => c.separator)};

        @media ${device.s} {
            display: flex;
            flex-flow: column;
            padding: 0.5em 0;
        }
    }
    thead tr {
        color: ${themeColor(c => c.tableHeader)};
    }

    th {
        font-weight: normal;
        @media ${device.s} {
            display: none;
        }
        @media ${device.sm} {
            padding: 0.7em 0.4em;

            & :first-child {
                padding-left: 0;
            }
            & :last-child {
                padding-right: 0;
            }
        }
    }

    td {
        height: auto;

        @media ${device.sm} {
            padding: 0.7em 0.4em;

            & :first-child {
                padding-left: 0;
            }
            & :last-child {
                padding-right: 0;
            }

            & ${CellHint} {
                display: none;
            }
        }
        @media ${device.s} {
            padding: initial;
            & ${CellHint} {
                display: inline;
            }
        }

        & :nth-child(3), & :nth-child(4) {
            white-space: nowrap;
            color: ${themeColor(c => c.tableHeader)};
            font-style: italic;
        }
    }
`;
