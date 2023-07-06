import React from "react";
import AddNew from "./AddNew";
import UpdateUser from "./UpdateUser";



const FormSection = () => {
  const flag = true;
  return (
    <div>
        {flag? <AddNew />: <UpdateUser />}
    </div>
  
  )
};

export default FormSection;
