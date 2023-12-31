import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";


const TableSection = () => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">DateOfBirth</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Job Title</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Status</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        <tr>
          <td className="px-3 py-2">
            <span>Mandla Ndzimakhwe</span>
          </td>
          <td className="px-16 py-2">
            <span>mandla@gmail.com</span>
          </td>
          <td className="px-16 py-2">
            <span>29/03/1999</span>
          </td>
          <td className="px-16 py-2">
            <span>Developer</span>
          </td>
          <td className="px-16 py-2">
            <button className="cursor">
              <span className="bg-green-500 text-white px-5 py-1 rounded-full">
                Active
              </span>
            </button>
          </td>
          <td className="px-16 py-2 flex justify-around gap-5">
            <button className="cursor text-[rgb(34,197,94)]">
              <BiEdit size={25} />
            </button>
            <button className="cursor text-[rgb(244,63,94)]">
              <BiTrashAlt size={25} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableSection;
