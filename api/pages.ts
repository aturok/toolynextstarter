import fs from "fs";
import matter from "gray-matter";

interface Page {
    title: string;
    content: string;
}

export const readPage = (path: string): Page => {
    const markdownWithMetadata = fs
        .readFileSync(`${process.cwd()}/content${path}.md`)
        .toString();
        
        const { data, content } = matter(markdownWithMetadata);

        return {
            title: data.title,
            ...data,
            content,
        };
}
