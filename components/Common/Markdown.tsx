import React from 'react';
const ReactMarkdown = require('react-markdown')
const htmlParser = require('react-markdown/plugins/html-parser')

const renderMdLink = (props: any) => {
    const external = props.href.startsWith('http');
    const file = props.href.startsWith('/files/');
    return <a href={props.href} rel={external ? 'nofollow noreferrer noopener' : ''} target={external || file ? '_blank' : '_self'}>
        {props.children}
    </a>;
}

// For more info on the processing instructions, see
// <https://github.com/aknuds1/html-to-react#with-custom-processing-instructions>
const parseHtml = htmlParser({
    isValidNode: () => true,
});

interface Props {
    source?: string;
}

export const Markdown = (props: Props) => {
    return (
        <ReactMarkdown astPlugins={[parseHtml]} escapeHtml={false} source={props.source} renderers={{ link: renderMdLink}} />
    );
}
