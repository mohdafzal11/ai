import { Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import Header from "./components/custom/Header";

function App() {
  const { isSignedIn, user, isLoaded } = useUser();

  console.log(user);
  if (!isSignedIn && isLoaded) {
    return <Navigate to="/auth/sign-in" />;
  }
  return (
    <div className="">
      <Header/>
      <Outlet />
    </div>
  );
}

export default App;
