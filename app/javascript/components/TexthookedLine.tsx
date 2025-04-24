import React from 'react';

interface TexthookedLineProps {
    originalSourceText: string;
}

const TexthookedLine: React.FC<TexthookedLineProps> = ({ originalSourceText }) => {
    return (
        <div className="mx-auto rounded-xl bg-white
                p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none
                dark:-outline-offset-1 dark:outline-white/10">
            <span>orig</span>

            <div>
                <p className="text-gray-500 dark:text-gray-400">
                    {originalSourceText}
                </p>
            </div>
        </div>
    );
};

export default TexthookedLine;