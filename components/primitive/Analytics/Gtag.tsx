import React from 'react';

export const Gtag = ({ trackingId }: { trackingId: string}) => {
    return (
        <>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}></script>
            <script dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${trackingId}');
                    `}} />
        </>
    )
}