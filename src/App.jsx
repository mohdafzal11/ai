import { Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

function App() {

  const { isSignedIn, user, isLoaded } = useUser();
  
  console.log(user)
  if(!isSignedIn && isLoaded ){
      return <Navigate to='/auth/sign-in'/>
  }
  return <div className="bg-black text-white"><Outlet/></div>;
}

export default App;
