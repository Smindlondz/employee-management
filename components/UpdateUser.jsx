import React from "react";
import { useReducer } from "react";
import { BiBrush, BiPlus } from "react-icons/bi";
import Success from "./Success";
import Bugg from "./Bugg";

// const formReducer = (state, event) => {
//   return {
//     ...state,
//     [event.target.name]:event.target.value
//   }

// }

const formReducer = (state, action) => {
  // Handle different action types and update the state accordingly
  return {
    ...state,
    // Handle specific actions
    [action.target.name]: action.target.value,
  };
};

const UpdateUser = () => {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length == 0) return console.log("Please fill in the form")
    console.log(formData);
  };

  if (Object.keys(formData).length > 0) return <Bugg message={"Data added"} />
  return (
    <form
      className="grid lg:grid-cols-2 w-4/6 gap-4 p-5"
      onSubmit={handleSubmit}
    >
      <div className="input-type">
        <input
          onChange={setFormData}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          name="firstname"
          placeholder="FirstName"
        />
      </div>
      <div className="input-type">
        <input
        onChange={setFormData}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          name="lastname"
          placeholder="LastName"
        />
      </div>
      <div className="input-type">
        <input
        onChange={setFormData}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          name="email"
          placeholder="EmailAdress"
        />
      </div>
      <div className="input-type">
        <input
        onChange={setFormData}
          className="border w-full px-5 py-3 focus:outline-none rounded-md"
          type="text"
          name="jobtitle"
          placeholder="Job Title"
        />
      </div>
      <div className="input-type">
        <input
        onChange={setFormData}
          className="border px-5 py-3 focus:outline-none rounded-md"
          type="date"
          name="date"
          placeholder="Job Title"
        />
      </div>
      <div className="flex gap-10 items-center ">
        <div className="form-check">
          <input
          onChange={setFormData}
            type="radio"
            value="Active"
            name="status"
            id="radioDefault1"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          Active
          <label
            className="inline-block text-gray-800"
            htmlFor="radioDefault1"
          ></label>
        </div>
        <div className="form-check">
          <input
          onChange={setFormData}
            type="radio"
            value="Inactive"
            name="status"
            id="radioDefault2"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          Inactive
          <label
            className="inline-block text-gray-800"
            htmlFor="radioDefault2"
          ></label>
        </div>
      </div>
      <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-yellow-500 hover:text-yellow-500">
        Update 
        <span>
           <BiBrush className="px-1" size={24}/>
        </span>
      </button>
    </form>
  );
};

export default UpdateUser;
