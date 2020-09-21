import styled from 'styled-components';
import NextHead from 'next/head'
import * as constants from '../../constants/constants';

export default () => {
    return (
        <NextHead>
            <title>{constants.siteTitle}</title>
            <meta property="og:title" content={constants.siteTitle} />
            <meta property="og:site_name" content={constants.siteTitle} />
            <meta property="og:description" content={constants.siteDescription} />
            <meta property="og:type" content={constants.ogType} />
            <meta property="og:url" content={constants.ogUrl} />
            <meta property="og:image" content={constants.ogImage} />
            
            <link rel="icon" href="/favicon.ico" />
            {/* use favicon generator to create a favicon from an image */}
        </NextHead>);
}