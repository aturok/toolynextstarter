import styled, { css } from 'styled-components';
import { themeColor } from '../Theme';
import { device } from '../Media.styles';

export const HeaderLogoSize = 70;
export const HeaderVerticalPadding = 10;
export const HeaderHeight = 115;
export const ContainerSidePadding = 40;
export const ContainerSidePaddingS = 20;
export const SiteSidePadding = "20%";

export const Main = styled.main`
    min-height: calc(100% - ${HeaderHeight}px - 200px);
`;

export const CenteredContainer = styled.div`
    text-align: center;
    background: ${themeColor(c => c.background)};
    @media ${device.sm} {
        padding: 30px ${ContainerSidePadding}px;
    }
    @media ${device.s} {
        padding: 30px ${ContainerSidePaddingS}px;
    }
`;

export const TextContainer = styled.div`
    text-align: left;
    @media ${device.sm} {
        padding: 30px 25%;
    }
    @media ${device.s} {
        padding: 30px ${ContainerSidePaddingS}px;
    }
`;

export const containerShadow = css`
    box-shadow: 0 0 15px 5px ${themeColor(c => c.gray)};
`;

export const containerDarkShadow = css`
    box-shadow: 0 0 10px -2px ${themeColor(c => c.grayDark)};
`;

export const itemShadow = css`
    box-shadow: 0 0 15px -3px ${themeColor(c => c.gray)};
    transition: 0.5s ease all;

    & :hover {
        box-shadow: 0 0 15px 5px ${themeColor(c => c.gray)};
    }
`;


export const InvertedCenteredContainer = styled(CenteredContainer)`
    background: ${themeColor(c => c.actionBlock)};
    ${containerShadow}

    & h1, h2, h3, * {
        color: ${themeColor(c => c.actionBlockText)};
    }
`;

export const PaddedContainer = styled(CenteredContainer)`
    padding: 80px 40px;
`;

type propsColor = (props: any) => string;
export const maskIconCss = (img: string, color: string | propsColor, w: number, h: number, fieldWidth: number) => css`
    display: inline-block;
    mask: url(${img});
    mask-size: cover;
    width: ${w}px;
    height: ${h}px;
    background: ${color};
    margin-right: ${fieldWidth-w}px;
    flex-shrink: 0;
`;

export const BarList = styled.ul`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    padding: 0;
    list-style: none;

    & > li {
        padding: 10px 30px;
    }
    & > li:not(:last-child) {
        border-right: 1px solid ${themeColor(c => c.grayDim)};
    }
`;

export const buttonCss = (inverted?: boolean) => css`
    padding: 10px 20px;
    color: ${themeColor(c => c.primaryButtonText)};
    background: ${inverted ? themeColor(c => c.primaryButton): themeColor(c => c.primaryButton)};
    border: none;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;

    ${itemShadow}
`;

export const Form = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;

    & > input {
        font-family: OpenSans;
        width: 350px;
        margin: 10px;
        padding: 10px 10px;
        line-height: 1em;
        font-size: 1em;
        border-radius: 8px;
        border: 1px solid ${themeColor(c => c.primary)};
        outline: none;
        background: ${themeColor(c => c.background)};
    }

    & > input[type="submit"] {
        width: auto;
        ${props => buttonCss(props.inverted)}
    }
`;

export const LinkButton = styled.a`
    ${props => buttonCss(props.inverted)}
    font-family: OpenSans;
    line-height: 1em;
    font-size: 1em;
    display: inline-block;
`;

export const ActionItem = styled.li`
    display: grid;
    grid-template: 160px 1fr / 1fr;

    & > div {
        display: flex;
        flex-flow: column;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    & > div:first-child {
        background: ${themeColor(c => c.prosHighlight)};
        color: ${themeColor(c => c.prosHighlightText)};

        & > span:first-child {
            margin-bottom: 10px;
        }
        & > h3 {
            color: ${themeColor(c => c.prosHighlightText)};
            margin: 0;
            font-weight: normal;
        }
    }
    & > div:last-child {
        background: ${themeColor(c => c.textWhite)};
    }
`;

export const ProsList = styled.ul`
    display: flex;
    padding: 0;

    & > li {
        ${itemShadow}
        border: 1px solid ${themeColor(c => c.grayDim)};
        
        & :hover {
            transform: translate(-2px, -2px);
        }
        transition: 0.5s ease all;
    }

    @media ${device.m} {
        flex-flow: row wrap;
        justify-content: center;

        & > li {
            margin: 30px;
            width: 25%;
        }
    }
    @media ${device.smStrict} {
        flex-flow: row wrap;
        justify-content: center;

        & > li {
            margin: 30px;
            width: 33%;
        }
    }
    @media ${device.s} {
        flex-flow: column;
        justify-content: flex-start;
        align-items: center;

        & > li {
            margin: 20px 0;
            width: 100%;
        }
    }
`;


export const FormSuccess = styled.div``;

export const FormSuccessCss = css`
    &:not(.posted) {
        ${FormSuccess} {
            display: none;
        }
    }

    &.posted {
        & > *:not(${FormSuccess}) {
            display: none;
        }
        ${FormSuccess} {
            display: block;
        }
    }
`;
