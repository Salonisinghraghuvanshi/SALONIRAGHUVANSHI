import React from "react";
import Navbar from "../Components/Navbar";
import Themetoggle from "../Components/Themetoggle";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Messege.css"; // Custom CSS
import ScrollBtn from "../Components/ScrollToTopButton";

const Messege = () => {
  return (
    <>
    <ScrollBtn/>
      <div className="messege-page">
        <Themetoggle />
        <Navbar />

        {/* <!--Desktop Content Section --> */}
        <div class="main-content bg justify-content-between d-none d-md-flex">
          <div class=""></div>
          <div class="d-flex justify-content-center align-items-center">
            <div class="card mt-5 p-2">
              <div class="card-body">
                <h3 class="text-center mb-4">Get in Touch!</h3>
                <form
                  class="form-width"
                  action="https://api.web3forms.com/submit"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="9e3d4831-c918-49ca-849c-e1efe9ff3774"
                  />
                  <div class="form-group py-1">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      placeholder="your name"
                    />
                  </div>
                  <div class="form-group py-1">
                    <label for="email">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      id="email"
                      placeholder="hello@gmail.com"
                    />
                  </div>
                  <div class="form-group py-1">
                    <label for="message">Message</label>
                    <textarea
                      class="form-control"
                      id="message"
                      name="message"
                      rows="3"
                      placeholder="Hii, nice to meet you..."
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-col btn-block my-2">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Mobile Content Section --> */}
        <div class="background-image justify-content-center align-items-center d-md-none d-flex">
          <div class="card">
            <div class="card-body py-2">
              <h3 class="text-center">Get in Touch!</h3>
              <form
                class="form-width"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="9e3d4831-c918-49ca-849c-e1efe9ff3774"
                />
                <div class="form-group py-1">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="your name"
                  />
                </div>
                <div class="form-group py-1">
                  <label for="email">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id="email"
                    placeholder="hello@gmail.com"
                  />
                </div>
                <div class="form-group py-1">
                  <label for="message">Message</label>
                  <textarea
                    class="form-control"
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Hii, nice to meet you..."
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-col btn-block my-2">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messege;
