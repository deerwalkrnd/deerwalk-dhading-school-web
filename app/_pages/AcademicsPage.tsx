import AcademicsSection from "@/_sections/AcademicsSection";
import { ReactElement } from "react";

export default function AcademicsPage(): ReactElement {
    return (
        <div className="lg:flex hidden flex-col w-full overflow-hidden">
            <AcademicsSection />
        </div>
    );
}