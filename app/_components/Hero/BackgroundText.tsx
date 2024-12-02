import React, { ReactElement } from "react";

export default function BackgroundText({ text }: { text?: string }): ReactElement {
    return (<div className="lg:text-8xl opacity-5 text-white font-serif absolute z-0 tracking-widest lg:block  whitespace-nowrap w-full overflow-hidden text-center">
        {text}
    </div>);
}
