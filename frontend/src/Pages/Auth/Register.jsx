import TabTitle from "@/Utils/TabTitle";
import SignIn from "./Partial/SignIn";
import BreadcrumbTab from "@/Utils/BreadcrumbTab";
import SignUp from "./Partial/SignUp";

const Register = () => {
  return (
    <div>
      <TabTitle title="Register" />
      <BreadcrumbTab menu={[{ name: "Sign In / Register", link: null }]} />
      <div className="flex flex-col items-start lg:flex-row gap-4">
        <SignUp />
        <SignIn />
      </div>
    </div>
  );
};

export default Register;
