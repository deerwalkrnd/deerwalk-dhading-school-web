import Code from "@/_assets/images/code";
import Read from "@/_assets/images/read";
import Write from "@/_assets/images/write";
import React from "react";

export default function StayConnectedCardII({className,description, isRead, isWrite, isCode}:{className ?: string, description ?: string,className1 ?: string, isWrite ?: boolean, isRead ?: boolean, isCode ?: boolean}) {
  return (
    <div className="w-[272px] h-[280px] flex flex-col bg-white rounded-sm shadow-md overflow-hidden justify-between transform transition-transform duration-300 hover:-translate-y-8">
      <div className="text-3xl flex justify-center items-center p-10 bg-DSS_Blue font-semibold text-white gap-4">
        {className}    

        {isRead &&<Read />}
        {isWrite&&<Write />}
        {isCode && <Code />}
      </div>

      {/* Content Section */}
      <div className="pt-4 h-full">
        <p className="text-gray-700 text-base mb-4 pl-4">
          {description}
        </p>
      </div>
    </div>
  );
}


