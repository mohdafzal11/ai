import {
  SignIn
} from "@clerk/clerk-react";

const SignInPage = () => {
  console.log("sign page render")
  return (
    <div className="h-screen w-screen flex justify-center items-center">
       <SignIn/>
    </div>
  );
};

export default SignInPage;
