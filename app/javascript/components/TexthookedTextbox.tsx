import React from 'react';

interface TexthookedTextboxProps {
    text: string;
}

const TexthookedTextbox: React.FC<TexthookedTextboxProps> = ({ text }) => {
    return (
        <div className="w-full
                mx-auto rounded-xl bg-white
                p-6
                shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none
                dark:-outline-offset-1 dark:outline-white/10">
            <div>
                <p className="text-gray-500 dark:text-gray-400">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default TexthookedTextbox;