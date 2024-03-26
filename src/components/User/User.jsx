import React from "react";
import { useParams } from "react-router-dom";

function User() {
const {id} = useParams()
  return (
    <div className="text-center border p-4 bg-gray-700 text-white text-3xl">
      User : {id}
    </div>
  );
}

export default User;
