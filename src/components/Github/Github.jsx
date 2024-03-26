import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
  // const [data, setData] = useState([]);
  //   fetch("https://api.github.com/users/mr-jas91")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  return (
    <div className="border p-4 bg-green-700">
      <h1 className="text-3xl text-white">
        {data.name} : {data.followers}
      </h1>
      <br />
      <img src={data.avatar_url} alt="profile" />
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mr-jas91");
  return response.json();
};
