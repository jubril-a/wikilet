type Props = {
  action: "login" | "signup" | "recover"
}

const labels = {
  login: "Log In",
  signup: "Register",
  recover: "Reset Password"
}

const Submit = ({action}: Props) => {

  return (
      <input className="bg-primary-1 rounded-md hover:bg-primary-2 text-white hover:text-primary-1 mb-6 py-3 cursor-pointer w-full" type="submit" value={labels[action]} />
  )
}

export default Submit