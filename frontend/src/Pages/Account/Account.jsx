import BreadcrumbTab from "@/Utils/BreadcrumbTab";
import TabTitle from "@/Utils/TabTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Dashboard from "./Partial/Dashboard";
import Orders from "./Partial/Orders";
import Address from "./Partial/Address";
import useUser from "@/Hooks/Apis/Users/useUser";
import Loader2 from "@/Utils/Loader/Loader2";
import Profile from "./Partial/Profile";
import useAxiosSecure from "@/Hooks/Fetcher/useAxiosSecure";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Account = () => {
  const [userData, isLoading, userFetch] = useUser();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axiosSecure('/api/customer-logout')
    if(res.data.success){
      navigate('/')
      localStorage.setItem('cus_token', res.data.token)
      toast.success('Logout Successfully');
      userFetch();
      localStorage.removeItem('cus_token');
    }
    } catch (err) {
      toast.error(err.response.data)
    }
  }

  if (isLoading) return <Loader2 />;

  return (
    <div>
      <TabTitle title="My Account" />
      <BreadcrumbTab menu={[{ name: "Account", link: null }]} />
      <Tabs
        defaultValue="dashboard"
        className=" flex flex-col lg:flex-row items-start"
      >
        <TabsList className="flex flex-col space-y-2 bg-color_4/30 rounded-none w-full lg:w-3/12">
          <TabsTrigger
            className="w-full flex justify-start lg:hover:bg-color_1/80 lg:hover:text-white duration-500"
            value="dashboard"
          >
            Dashboard
          </TabsTrigger>
          <TabsTrigger
            className="w-full flex justify-start lg:hover:bg-color_1/80 lg:hover:text-white duration-500"
            value="orders"
          >
            Orders
          </TabsTrigger>
          <TabsTrigger
            className="w-full flex justify-start lg:hover:bg-color_1/80 lg:hover:text-white duration-500"
            value="address"
          >
            Address
          </TabsTrigger>
          <TabsTrigger
            className="w-full flex justify-start lg:hover:bg-color_1/80 lg:hover:text-white duration-500"
            value="profile"
          >
            Account Details
          </TabsTrigger>
          <button onClick={handleLogout} className="w-full py-2 px-3 flex justify-start lg:hover:bg-color_1/80 lg:hover:text-white duration-500">
            Logout
          </button>
        </TabsList>
        <div className="lg:w-9/12 mt-4 lg:mt-0">
          <TabsContent value="dashboard">
            <Dashboard name={userData.name} />
          </TabsContent>
          <TabsContent value="orders">
            <Orders />
          </TabsContent>
          <TabsContent value="address">
            <Address />
          </TabsContent>
          <TabsContent value="profile">
            <Profile data={userData} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Account;
