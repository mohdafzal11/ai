import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";

const Header = () => {
  const { isSignedIn } = useUser();

  console.log(isSignedIn);

  return (
    <div className=" px-5 py-3 flex justify-between shadow-md bg-custom-linear">
      <div><img src="" alt="logo" /></div>
      <div>
        {isSignedIn ? (
          <div className="flex items-center space-x-4">
           
            <Link to={"/dashboard"}>
              <Button  className="">Dashboard</Button>
            </Link>
            <UserButton/>
          </div>
        ) : (
          <Link to={"/auth/sign-in"}>
            <Button className="">Get Started</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
