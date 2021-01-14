import {cookieMessage, cookieLink, cookiesExplanationURL} from '../../constants/constants';
import styled from 'styled-components';
import { themeColor } from '../Theme';
import { buttonCss, CookieHeight, containerShadow } from '../Common/Common.styles';

const CookieWrapper = styled.div`
  display: none;
  position: fixed;
  z-index: 101;
  bottom: 0px;
  width: 100%;
  height: ${CookieHeight}px;
  ${containerShadow};

  align-items: center;
  justify-content: center;
  color:${themeColor(c => c.ribbonText)};
  background-color: ${themeColor(c => c.ribbon)};


  &.active{
    display: flex;
    animation-name: cookie-appears;
    animation-duration: 1s;
  }

  & p {
    margin: 0px 30px;
  }

  & > a {
    color:${themeColor(c => c.ribbonText)};
  }

  @keyframes cookie-appears {
    0% {
      bottom: -${CookieHeight}px;;
    }

    100% {
      bottom: 0px;
    }
  }

`;

const OKButton = styled.button`
  ${props => buttonCss(!props.inverted)};
  margin: 0px 15px;
  border-radius: 5px;
`;

export const CookieBlock = () => {
    return (
    <CookieWrapper id="cookie-block">
      <p>{cookieMessage}</p>
      <a href={cookiesExplanationURL} target='_blank'>{cookieLink}</a>
      <OKButton id="cookie-ok-button">OK</OKButton>
    </CookieWrapper>
  );
}




