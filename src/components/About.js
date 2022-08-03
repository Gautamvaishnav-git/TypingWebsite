/* This example requires Tailwind CSS v2.0+ */
// import { PaperClipIcon } from "@heroicons/react/solid";
// import { Link } from "react-router-dom";
import React from 'react'
import PropTypes from 'prop-types'



export default function About(props) {
  return (
    <div className={`bg-${props.mainBG}-900 shadow overflow-hidden`}>
      <div className="px-4 py-5 sm:px-6">
        <h3 className={`text-lg leading-6 font-medium text-${props.mainBG==="gray"?"white":"gray-900"}`}>About</h3>
        <p className={`mt-1 max-w-2xl text-sm text-${props.mainBG==="gray"?"gray-400":"gray-500"}`}>Details</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className={`bg-${props.mainBG==="gray"?"gray-900 ":"gray-50"} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
            <dt className={`text-sm font-medium text-${props.mainBG==="gray"?"indigo-500":"gray-50"}`}>Full name</dt>
            <dd className={`mt-1 text-sm text-${props.mainBG==="gray"?"gray-400":"gray-900"} sm:mt-0 sm:col-span-2`}>
              Pankaj Vaishnav
            </dd>
          </div>
          <div className={`bg-${props.mainBG==="gray" ? "indigo-600":"gray-50"} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
            <dt className={`text-sm font-medium text-${props.mainBG==="gray"?"white":"gray-500"}`}>Skills</dt>
            <dd className={`mt-1 text-sm text-${props.mainBG==="gray"?"gray-400":"gray-900"} sm:mt-0 sm:col-span-2`}>
              Graphic Designer, Web Developer, JAVA Developer{" "}
            </dd>
          </div>
          <div className={`bg-${props.mainBG==="gray"?"gray-900 ":"gray-50"} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
            <dt className={`text-sm font-medium text-${props.mainBG==="gray"?"indigo-500":"gray-50"}`}>Email address</dt>
            <dd className={`mt-1 text-sm text-${props.mainBG==="gray"?"gray-400":"gray-900"} sm:mt-0 sm:col-span-2`}>
              fornextitworks@gmail.com
            </dd>
          </div>
          <div className={`bg-${props.mainBG==="gray" ? "indigo-600":"gray-50"} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
            <dt className={`text-sm font-medium text-${props.mainBG==="gray"?"white":"gray-500"}`}>Experience</dt>
            <dd className={`mt-1 text-sm text-${props.mainBG==="gray"?"gray-400":"gray-900"} sm:mt-0 sm:col-span-2`}>
              5 Years
            </dd>
          </div>
          <div className={`bg-${props.mainBG==="gray"?"gray-900 ":"gray-50"} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
            <dt className={`text-sm font-medium text-${props.mainBG==="gray"?"indigo-500":"gray-50"}`}>About</dt>
            <dd className={`mt-1 text-sm text-${props.mainBG==="gray"?"gray-400":"gray-900"} sm:mt-0 sm:col-span-2`}>
              Hello, I am 4 year experienced web designer and developer.
              Experties in complete website making and with the high quality of
              work. I have gone through your requirements and understood them
              clearly. Can show you portfolio works . Please provide reference
              for your work if any available. Available to start work now and
              will deliver the work on time. Please discuss in chat so that we
              can make things clear all about work and budget issues from both
              side. Thank you.
              <br />
              <br />
              Hello, You will get 100% satisfaction from work. You will get work
              completed within your time limits. There is no budget issue,
              please discuss. I am 4 years experienced in graphic designing
              works. I understood the requirements carefully. You can have look
              at my portfolio :
              <a href="https://www.freelancer.com/u/PradhumnSingh">
                https://www.freelancer.com/u/PradhumnSingh
              </a>
              Able to start work now immediately. please discuss this in chat.
              <br />
              <br />
              Hello, I am good in content writing works. I am a fresher but not
              exactly, completed some projects of content writing. No budget
              issues are there. Able to start work now and within time. please
              discuss this in chat.
            </dd>
          </div>
          <div className={`bg-${props.mainBG==="gray" ? "indigo-600":"gray-50"} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
            <dt className={`text-sm font-medium text-${props.mainBG==="gray"?"white":"gray-500"}`}>Attachments</dt>
            <dd className={`mt-1 text-sm text-${props.mainBG==="gray"?"gray-400":"gray-900"} sm:mt-0 sm:col-span-2`}>
              <a
                href="https://www.freelancer.com/u/PradhumnSingh"
                target="_balnk"
                className={`underline text-${props.mainBG==="gray"?"gray-200":"indigo-500"}`}
              >
                Freelancer Web
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}


About.propTypes = {
  mainBG : PropTypes.string.isRequired
}
About.defaultProps = {
  mainBG : "white"
}