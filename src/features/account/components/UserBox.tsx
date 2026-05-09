'use client'

import { useState } from "react"
import { logout } from "../../auth/actions"

type User = {
  firstName: string
  lastName: string
} | null

export default function UserBox({user}: {user: User}) {

    const [ userOptionsVisible, setUserOptionsVisible ] = useState(false)
    
        const initials = user
        ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase()
        : null
    
        function SignOut() {
            setUserOptionsVisible(false)
            logout()
        }

    return (

        <>
            {user &&
            <div className="relative">
                <button onClick={() => {setUserOptionsVisible(!userOptionsVisible)}} className="hover:bg-primary-2 bg-amber-700 text-white hover:text-primary-1 ml-4 p-3 rounded-full text-sm cursor-pointer">{initials}</button>
                {userOptionsVisible &&
                <div className="text-sm bg-white rounded-sm absolute right-0 p-2 mt-5 w-80 border border-gray-200 shadow-[0px_2px_8px_rgba(0,0,0,0.32)]">
                    <div className="flex gap-2 p-2 items-center rounded-md bg-gray-200">
                        <span className="bg-primary-1 text-primary-2 p-2 rounded-md">{initials}</span>
                        <span className="tracking-tighter font-medium">{`${user?.firstName} ${user?.lastName}`}</span>
                    </div>
                    <div className="py-2 grid">
                        <div className="border-b border-b-gray-200 pb-2 mb-2">
                            <a href="/bookings" className="px-2 py-1 rounded-md hover:bg-gray-100 block">My Bookings</a>
                            <a href="/saved" className="px-2 py-1 rounded-md hover:bg-gray-100 block">Saved Properties</a>
                        </div>
                        <div>
                            <a href="/manage" className="px-2 py-1 rounded-md hover:bg-gray-100 block">Manage account</a>
                            <button onClick={() => SignOut()} className="px-2 py-1 rounded-md hover:bg-gray-100 text-left cursor-pointer w-full">Sign out</button>
                        </div>
                    </div>
                </div>}

            </div>}
        </>          
    )
}