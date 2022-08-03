import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export default function Contact(props) {
  return (
    <div>
      <section className={`text-gray-600 body-font overflow-hidden bg-${props.mainBG}-900`}>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className={`text-${props.mainBG==="gray"?"white": "gray-900"} text-3xl title-font font-medium mb-4`}>
                FOR NEXT IT WORKS
              </h1>
              <div className="flex mb-4">
                <Link
                  className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1"
                  to="/contact"
                >
                  Description
                </Link>
                <Link
                  className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                  to="/contact"
                >
                  Reviews
                </Link>
                <Link
                  className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                  to="/contact"
                >
                  Details
                </Link>
              </div>
              <p className="leading-relaxed mb-4">
                Hello, I am 4 year experienced web designer and developer.
                Experties in complete website making and with the high quality
                of work. I have gone through your requirements and understood
                them clearly. Can show you portfolio works . Please provide
                reference for your work if any available. Available to start
                work now and will deliver the work on time. Please discuss in
                chat so that we can make things clear all about work and budget
                issues from both side. Thank you. You can have look at my portfolio :
                <a href="https://www.freelancer.com/u/PradhumnSingh" className="text-purple-500 inline-block underline" target="_balnk">
                https://www.freelancer.com/u/PradhumnSingh
                </a>
                 Able to start work
                now immediately. please discuss this in chat. Hello, I am good
                in content writing works. I am a fresher but not exactly,
                completed some projects of content writing. No budget issues are
                there. Able to start work now and within time. please discuss
                this in chat.
              </p>
              
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="../../logo.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
Contact.propTypes = {
  mainBG : PropTypes.string.isRequired
}
Contact.defaultProps = {
  mainBG : "white"
}