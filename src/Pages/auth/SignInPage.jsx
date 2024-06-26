import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignIn
} from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
       <SignIn/>
    </div>
  );
};

export default SignInPage;
