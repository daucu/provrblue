import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Signup() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <section className="h-screen pt-[75px]">
        <div className="px-6 h-full text-gray-800 max-w-[1400px] m-auto">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12  mb-12 md:mb-0">
              <Link>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample image"
                />
              </Link>
            </div>

            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 w-[90%] mb-12 md:mb-0">
              <form className="pb-[50px]">
                {/* Email input */}
                <div className="mb-6">
                  <input
                    type="text"
                    // name={name}
                    className="input input-bordered w-full "
                    id="exampleFormControlInput2"
                    placeholder="Name"
                    // onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    // name={username}
                    className="input input-bordered w-full "
                    id="exampleFormControlInput2"
                    placeholder="Username"
                    // onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    // name={email}
                    className="input input-bordered w-full "
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input
                    type="password"
                    // name={password}
                    className="input input-bordered w-full "
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    // onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    // name={phone}
                    className="input input-bordered w-full "
                    id="exampleFormControlInput2"
                    placeholder="Phone Number"
                    // onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    // name={country}
                    className="input input-bordered w-full "
                    id="exampleFormControlInput2"
                    placeholder="Country"
                    // onChange={(e) => setCountry(e.target.value)}
                  />
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="btn btn-sm   w-full lg:w-32 rounded-none  bg-[#4614B9] hover:bg-[#247572]"
                    // onClick={(e) => handleSubmit(e)}
                  >
                    SignUp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Signup;
