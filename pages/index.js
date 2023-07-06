import Head from "next/head";
import TableSection from "@/components/TableSection";
import FormSection from "@/components/FormSection";
import { useState } from "react";
import { BiUserPlus } from "react-icons/bi";

export default function Home() {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <main className="mx-auto">
      <Head>
        <title>Employee Management Sytem</title>
        <meta
          name="description"
          content="This is the employee management system where an organization can store and manage its employees data"
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      {/* 
      <TopSection /> */}

      <h2 className="text-center">Employee Management System</h2>
      <div className="container mx-auto flex justify-between py-5 border-b">
        <div className="left flex gap-3">
          <button
            onClick={handleButtonClick}
            className="flex bg-indigo-500 text-white font-semibold px-4 py-2 border rounded-md 
            horver:bg-gray-50 hover:border-indogo-500 hover:text-gray-800"
          >
            <span className="w-3/4">Add Employee</span>
            <span className="ml-2">
              {" "}
              <BiUserPlus size={30} />{" "}
            </span>
          </button>
        </div>
       
      </div>
      {isFormVisible && <FormSection />}
      <TableSection />
    </main>
  );
}
