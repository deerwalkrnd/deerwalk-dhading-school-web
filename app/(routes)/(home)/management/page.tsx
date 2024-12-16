import ManagementPage from '@/_pages/ManangementPage'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Management",
  description: "Deerwalk Dhading School’s management team ensures the smooth operation of the institution, fostering an environment that prioritizes excellence and growth for every student.",
};

const ManagementMainPage = () => {
  return (
    <ManagementPage />
  )
}

export default ManagementMainPage