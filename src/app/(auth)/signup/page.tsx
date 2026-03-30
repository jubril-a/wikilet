'use client'

import FormInput from "@/src/components/FormInput";
import Submit from "@/src/components/Submit";
import { useState } from "react";

export default function Signup() {

  const [ emailSignup, activateEmailSignup ] = useState(false)

  return (
    <div className="px-4 pt-40">
      <main className="bg-white w-90 max-w-full m-auto">
        <h1 className="mb-10 text-3xl md:text-4xl font-semibold">Sign up</h1>
        <form>
          <FormInput name="email" type="email" label="Email Address" className="mb-6" />
          {emailSignup && <div>
            <FormInput name="password" type="password" label="Password" className="mb-6" />
            <label htmlFor="terms" className="block mb-6">
              <input type="checkbox" name="terms" />
              <span className="text-sm text-gray-700">    I agree to the Terms of Service & Privacy Policy</span>
            </label>
            <Submit action="signup" />
          </div>}
        </form>
        {!emailSignup &&
        <div className="mb-4">
          
          <button onClick={() => {activateEmailSignup(!emailSignup)}} className="mb-6 px-2 rounded-md text-white bg-primary-1 hover:bg-primary-2 hover:text-primary-1 focus:border focus:border-gray-300 focus:outline-0 h-11 w-full">Continue with Email</button>

          <button className="px-2 rounded-md border border-gray-400 hover:border-primary-2 focus:border-gray-300 focus:outline-0 h-11 w-full">Continue with Google</button>

        </div>}
        <a href="/login" className="group text-gray-700 text-[14px]">Already have an account? <span className="text-primary-1 group-hover:text-primary-2" >Log in instead</span></a>
      </main>
    </div>
  );
}