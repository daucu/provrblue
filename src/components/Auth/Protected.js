import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../Constant/API";

function Protected() {
  const checkUserLogin = async () => {
    await axios
      .get(`${API}/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    checkUserLogin();
  }, []);

  return <div>Protected</div>;
}

export default Protected;
