import React from 'react';

export const InlineScript = ({ script }: { script: string}) => (
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: script }} />
)
