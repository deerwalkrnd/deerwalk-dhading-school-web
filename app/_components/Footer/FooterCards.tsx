import React, { ReactElement } from "react";

export default function FooterCards(): ReactElement {
  const date = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center text-center w-full h-full text-white text-sm lg:text-base pb-4">
      <p>© {date} - Deerwalk Dhading School. All Rights Reserved. Terms Of Use</p>
    </div>
  );
}
