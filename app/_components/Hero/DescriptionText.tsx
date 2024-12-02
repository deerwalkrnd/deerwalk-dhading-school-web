import React, { ReactElement } from "react";


export default function DescriptionText({
    description
}: {
    description?: string
}): ReactElement {
    return (
        <div className="w-full text-wrap text-center lg:text-2xl text-white font-thin text-lg  lg:h-[8rem]">
            {description}
        </div>
    );
}
