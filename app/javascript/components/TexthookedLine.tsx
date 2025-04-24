import React from 'react';
import TexthookedTextbox from "~/components/TexthookedTextbox";

interface TexthookedLineProps {
    originalSourceText: string;
}

const TexthookedLine: React.FC<TexthookedLineProps> = ({ originalSourceText }) => {
    return (
        <>
            <TexthookedTextbox text={originalSourceText} />
            <TexthookedTextbox text="Original text but in some other language" />
        </>
    );
};

export default TexthookedLine;