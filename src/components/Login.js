/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React from "react";
import PropTypes from "prop-types";
import { useForm, ValidationError } from "@formspree/react";

export default function Login(props) {
  const [state, handleSubmit] = useForm("xoqbazzg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <div
        className={`hidden sm:block px-2 bg-${props.mainBG}-900`}
        aria-hidden="true"
      >
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className={`mt-10 sm:mt-0 px-2 bg-${props.mainBG}-900`}>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3
                className={`text-lg font-medium leading-6 text-${
                  props.mainBG === "gray" ? "white" : "gray-900"
                }`}
              >
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" onSubmit={handleSubmit} method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className={`px-4 py-5 bg-${props.mainBG}-900 sm:p-6`}>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className={`block text-sm font-medium text-${
                          props.mainBG === "gray" ? "white" : "gray-700"
                        }`}
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="off"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1 outline-1	outline-pink-500"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className={`block text-sm font-medium text-${
                          props.mainBG === "gray" ? "white" : "gray-700"
                        }`}
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="off"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1 outline-1	outline-pink-500"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className={`block text-sm font-medium text-${
                          props.mainBG === "gray" ? "white" : "gray-700"
                        }`}
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="off"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1 outline-1	outline-pink-500"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className={`block text-sm font-medium text-${
                          props.mainBG === "gray" ? "white" : "gray-700"
                        }`}
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="off"
                        required
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>India</option>
                        <option>Russia</option>
                        <option>China</option>
                        <option>France</option>
                        <option>Canada</option>
                        <option>United States</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className={`block text-sm font-medium text-${
                          props.mainBG === "gray" ? "white" : "gray-700"
                        }`}
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="off"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1 outline-1	outline-pink-500"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className={`block text-sm font-medium text-${
                          props.mainBG === "gray" ? "white" : "gray-700"
                        }`}
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="off"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1 outline-1	outline-pink-500"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className={`block text-sm font-medium text-${
                          props.mainBG === "gray" ? "white" : "gray-700"
                        }`}
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="off"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1 outline-1	outline-pink-500"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className={`block text-sm font-medium text-${
                          props.mainBG === "gray" ? "white" : "gray-700"
                        }`}
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="off"
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-1 outline-1	outline-pink-500"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`px-4 py-3 bg-${props.mainBG}-900 text-right sm:px-6`}
                >
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    formTarget="_balnk"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        className={`hidden sm:block px-2 bg-${props.mainBG}-900`}
        aria-hidden="true"
      >
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}
Login.propTypes = {
  mainBG: PropTypes.string.isRequired,
};
Login.defaultProps = {
  mainBG: "white",
};
