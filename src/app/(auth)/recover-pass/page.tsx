import HalfBox from "@/src/components/HalfBox";
import FormInput from "@/src/components/FormInput";
import Submit from "@/src/components/Submit";

export default function Recover() {

  return (
    <HalfBox>
        <main className="w-90 max-w-full m-auto">
        <h1 className="mb-10 text-3xl md:text-4xl font-semibold">Reset Password</h1>
        <form>
          <FormInput name="email" type="email" label="Email Address" className="mb-6" />
          <Submit action="recover" />
        </form>
        <a href="/signup" className="group text-gray-700 text-[14px]">Don&apos;t have an account? <span className="text-primary-1 group-hover:text-primary-2" >Sign up instead</span></a>
      </main>
    </HalfBox>
  );
}
