import React from 'react';
import TexthookedLine from "~/components/TexthookedLine";

const TexthookerApp = () => {
    return (
        <main id="app-container"
              className="w-screen bg-gray-950/[4.5%]
              bg-[radial-gradient(circle,#73737350_1px,transparent_1px)]
              bg-[size:10px_10px]
              absolute -z-10
              pl-5 pr-5 pt-2 pb-2">
                <div className="grid grid-flow-row auto-rows-max grid-cols-2 gap-4 mx-auto">
                    <TexthookedLine originalSourceText="here is a go thing." />
                    <TexthookedLine originalSourceText="Estelle! What are you doing?!" />
                    <TexthookedLine originalSourceText="Joshua! What is happening?!" />
                </div>
        </main>
);
};

export default TexthookerApp;