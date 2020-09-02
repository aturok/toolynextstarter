import styled from 'styled-components';
import NextHead from 'next/head'

export default () => {
    return (
        <NextHead>
            <title>Your best website for your unique idea!</title>
            
            <link rel="icon" href="/favicon.ico" />
            {/* use favicon generator to create a favicon from an image */}
        </NextHead>);
}