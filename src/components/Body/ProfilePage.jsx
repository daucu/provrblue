import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../Constant/API";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function ProfilePage() {
  const [userData, setUserData] = useState(false);
  const checkUserLogin = () => {
    axios
      .get(`${API}/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.status === 200) {
          setUserData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    checkUserLogin();
  }, []);

  //   code to logout
  const handleLogout = () => {
    axios
      .get(`${API}/logout`, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div class="flex items-center h-screen w-full justify-center">
        <div class="w-[300px]">
          <div class="bg-white shadow-xl rounded-lg py-3">
            <div class="photo-wrapper p-2">
              <img
                class="w-32 h-32 rounded-full mx-auto"
                src={userData.image}
                alt="John Doe"
              />
            </div>
            <div class="p-2">
              <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                {userData ? userData.name : "Loading..."}
              </h3>

              <table class="text-xs my-3">
                <tbody>
                  <tr>
                    <td class="px-2 py-3 text-gray-500 text-[20px] font-semibold">
                      Country
                    </td>
                    <td class="px-2 py-3  text-[17px] ">
                      {userData ? userData.country : "Loading..."}
                    </td>
                  </tr>
                  <tr>
                    <td class="px-2 py-3 text-gray-500 text-[20px] font-semibold">
                      Phone
                    </td>
                    <td class="px-2 py-3 text-[17px] ">
                      {userData ? userData.phone : "Loading..."}
                    </td>
                  </tr>
                  <tr>
                    <td class="px-2 py-3 text-gray-500 text-[20px] font-semibold">
                      Email
                    </td>
                    <td class="px-2 py-3 text-[17px] ">
                      {userData ? userData.email : "Loading..."}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="text-center mt-4">
                <button
                  class="text-xs btn bg-[#4614B9] text-white    font-medium"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ProfilePage;
