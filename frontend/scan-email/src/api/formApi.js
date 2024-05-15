import React, { Component } from "react";
import Form from "../form/form";

const FORMAPI = () => {
  const apiUrl = `http://localhost:1500/user/api/verify`;
  // const url=`https://us-central1-inbox-730f0.cloudfunctions.net/app/user/api/verify`;

  const fetchFunction = async (data, callback) => {
    console.log("at form api", data);
    const { content, url, dnsName, email } = data;

    console.log({ content, url, dnsName, email });
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        body: JSON.stringify({ content, url, dnsName, email }),
      });

      if (!response.ok) {
        console.log("There is an error");
        callback({ message: true });
        return;
      }

      const result = await response.json();
      console.log(result);
      callback({ message: false });
    } catch (error) {
      console.error("An error occurred:", error);
      callback({ message: true });
    }
  };

  return <Form onCallback={fetchFunction} />;
};

export default FORMAPI;

// in api component

// const api=()=>{
//   fetchFunction=async(data, callback)=>{
//     //implement the logic
//     callback(result)
//   }

//   return <Form onCallback={fetchFunction}
// }

// in form component

// cost form=(props)=>{
//   const handlecallback=()=>{
//     //implement logic

//   }
//   const submitform=()=>{
//     props.onCallback(emailContent,handlecallback)
//   }
// }
