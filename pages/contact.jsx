import Link from 'next/link'
import React from 'react'
import {FaHeadset, FaSpinner} from "react-icons/fa"
import { projects } from "../config"
export default function Home({theme}) {
  const [submited, setSubmited] = React.useState(false)
  const submitContact = e => {
    e.preventDefault();
    setSubmited(true);
    setTimeout(async() => {
      let email = e?.target?.email?.value;
      let content = e?.target?.content?.value;
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          content: content
        })
      }).then(r => {
        if(r) {
          setSubmited(false);
        } else {
          setSubmited(false);
        }
      })
    }, 2500);
  }
  return (
      <div className='mt-4'>
     <div className='flex items-center justify-center space-x-1 text-2xl'>
          <FaHeadset className='text-purple-500/70'/>
          <p className='font-quicksand font-semibold'>Contact Me!</p>
          </div>
          <form onSubmit={submitContact} className="w-full space-y-4" autoComplete="off">
           <div class="flex justify-center self-center z-10">
        <div class="p-10 mx-auto rounded-2xl w-100 ">
            <div class="space-y-5">
                        <div class="space-y-2">
                              <label class="text-sm font-medium text-base-500 tracking-wide">Email</label>
              <input id="email" class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-purple-400" type="email" placeholder="mail@gmail.com"/>
              </div>
                          <div class="space-y-2">
              <label class="mb-5 text-sm font-medium text-base-500 tracking-wide">
                Message
              </label>
              <textarea id="content" class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-purple-400" type="text" placeholder="Enter your message"/>
            </div>
            <div>
              <button type="submit" class="w-full flex justify-center bg-purple-200  hover:bg-purple-500 text-black p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500" aria-disabled={submited ? true : false}>
                {submited ? <FaSpinner className='animate-spin'/> : "Submit"}
              </button>
            </div>
            </div>
        </div>
      </div>
  </form>
      </div>
  )
}
