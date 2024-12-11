import React, { ReactElement } from "react";
import styles from "@/_components/Elementary/app.module.css";

export default function ElementaryList(): ReactElement {
  return (
    <div>
<p className="text-center text-3xl text-[#00247F] font-semibold my-5">
        DDS Credit Courses
      </p>
      <div className="flex flex-col items-center mb-10">
        <div className={`${styles.container} flex items-center justify-center flex-wrap sm:gap-0`}>
          <div className={`${styles.hex} ${styles.hex0} relative`}>
            <div className={styles.top}></div>
            <div className={styles.middle}></div>
            <div className={styles.bottom}></div>
            <div className="flex flex-col justify-center items-center h-full absolute inset-0">
              <p className="text-white z-10 text-lg sm:text-2xl text-center">Sanskrit</p>
            </div>
          </div>

          <div className={`${styles.hex} ${styles.hex1} relative`}>
            <div className={styles.top}></div>
            <div className={styles.middle}></div>
            <div className={styles.bottom}></div>
            <div className="flex flex-col justify-center items-center h-full absolute inset-0">
              <p className="text-white z-10 text-lg sm:text-2xl text-center">Coding</p>
            </div>
          </div>
        </div>

        <div className={`${styles.container} flex items-center flex-wrap mt-10 sm:mt-0 justify-center sm:gap-0`}>
          <div className={`${styles.hex} ${styles.hex2} relative`}>
            <div className={styles.top}></div>
            <div className={styles.middle}></div>
            <div className={styles.bottom}></div>
            <div className="flex flex-col justify-center items-center h-full absolute inset-0">
              <p className="text-white z-10 text-lg sm:text-2xl text-center">English </p>
              <p className="text-white z-10 text-lg sm:text-2xl text-center">Reading</p>
            </div>
          </div>

          <div className={`${styles.hex} ${styles.hex3} relative`}>
            <div className={styles.top}></div>
            <div className={styles.middle}></div>
            <div className={styles.bottom}></div>
            <div className="flex flex-col justify-center items-center h-full absolute inset-0">
              <p className="text-white z-10 text-lg sm:text-2xl text-center">Nepali </p>
              <p className="text-white z-10 text-lg sm:text-2xl text-center">Reading</p>
            </div>
          </div>

          <div className={`${styles.hex} ${styles.hex4} hidden relative sm:block`}>
            <div className={styles.top}></div>
            <div className={styles.middle}></div>
            <div className={styles.bottom}></div>
            <div className="flex flex-col justify-center items-center h-full absolute inset-0">
              <p className="text-white z-10 text-lg sm:text-2xl text-center">Public</p>
              <p className="text-white z-10 text-lg sm:text-2xl text-center">Speaking</p>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}
