'use client'

import HalfBox from "@/src/components/HalfBox";
import FormInput from "@/src/components/FormInput";
import Submit from "@/src/components/Submit";
import GoogleAuth from "../components/GoogleAuth";
import { useState } from "react";

export default function Login() {

  const [ emailLogin, activateEmailLogin ] = useState(false)

  return (
    <HalfBox>
      <main className="w-90 max-w-full m-auto">
        <h1 className="mb-10 text-3xl md:text-4xl font-semibold">Sign in</h1>
        <form>
          <FormInput name="email" type="email" label="Email Address" className="mb-6" />
          {emailLogin &&
          <div>
            <FormInput name="password" type="password" label="Password" className="mb-6" />
            
            <Submit action="signup" />
          </div>}
        </form>
        {!emailLogin &&
        <div className="mb-4"> 
          <button onClick={() => {activateEmailLogin(!emailLogin)}} className="cursor-pointer px-2 rounded-md text-white bg-primary-1 hover:bg-primary-2 hover:text-primary-1 focus:border focus:border-gray-300 focus:outline-0 h-11 w-full">Continue with Email</button>
          <GoogleAuth />
        </div>}
        <a href="/signup" className="block group text-gray-700 text-[14px]">Don&apos;t have an account? <span className="text-primary-1 group-hover:text-primary-2" >Sign up instead</span></a>
        <a href="/recover-pass" className="group text-gray-700 text-[14px]">Forgot Password? <span className="text-primary-1 group-hover:text-primary-2" >Recover here</span></a>
      </main>
    </HalfBox>
  );
}
