'use client'

import { useActionState } from "react"
import { signup } from "../../actions/auth";
import Submit from "@/src/components/Submit";
import HalfBox from "@/src/components/HalfBox";
import FormInput from "@/src/components/FormInput";
import GoogleAuth from "../components/GoogleAuth";
import { useState } from "react";

export default function Signup() {

  const [ emailSignup, activateEmailSignup ] = useState(false)
  const [state, action] = useActionState(signup, null)

  return (
    <HalfBox background="lagos2.jpg">
        
        <h1 className="mb-10 text-3xl md:text-4xl font-semibold">Sign up</h1>
        <form action={action}>
           {state?.error && (
              <p className="text-red-500 text-sm mb-4">{state.error}</p>
            )}
          <FormInput name="email" type="email" label="Email Address" className="mb-6" />
          {emailSignup && <div>
            <FormInput name="password" type="password" label="Password" className="mb-6" />
            <FormInput name="firstName" type="text" label="First Name" className="mb-6" />
            <FormInput name="lastName" type="text" label="Last Name" className="mb-6" />
            <label htmlFor="terms" className="block mb-6">
              <input id="terms" type="checkbox" name="terms" />
              <span className="cursor-pointer text-sm text-gray-700">    I agree to the Terms of Service & Privacy Policy</span>
            </label>
            <Submit action="signup" />
          </div>}
        </form>
        {!emailSignup &&
        <div className="mb-4">
          
          <button onClick={() => {activateEmailSignup(!emailSignup)}} className="cursor-pointer px-2 rounded-md text-white bg-primary-1 hover:bg-primary-2 hover:text-primary-1 focus:border focus:border-gray-300 focus:outline-0 h-11 w-full">Continue with Email</button>
          <GoogleAuth />

        </div>}
        <a href="/login" className="group text-gray-700 text-[14px]">Already have an account? <span className="text-primary-1 group-hover:text-primary-2" >Log in instead</span></a>
    </HalfBox>
  );
}