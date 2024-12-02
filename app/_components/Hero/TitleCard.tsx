import React, { ReactElement } from "react";

export default function TitleCard({
    title,
    isActive
}: {
    title?: string;
    isActive: boolean;
}): ReactElement {
    return (
        <div className="w-fit flex flex-col gap-2">
            <span>{title}</span>
            {isActive && <div className="w-[50%] border-solid border-b-2 border-[#EA5D0FCC]"></div>}
        </div>
    );
}
