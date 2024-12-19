/* eslint-disable react/prop-types */
import useUser from "@/Hooks/Apis/Users/useUser";
import Loader2 from "@/Utils/Loader/Loader2";
import axios from "axios";
import { url } from "../../connection";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const CheckLogin = ({children}) => {
    const [go, setGo] = useState(false);
  const [userData, isLoading] = useUser();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("cus_token");


  useEffect(() => {
    if (!token) {
      return navigate("/register");
    } else {
      axios(`${url}/api/cus-validate-token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (isLoading) return setLoader(true);
          if (res.data.userId === userData._id) {
            setGo(true);
            setLoader(false);
          } else {
            return navigate("/register");
          }
        })
        .catch(() => {
          return navigate("/register");
        });
    }
  }, [token]);

  if (loader) {
    return <Loader2 />;
  }

  return go && children;
};

export default CheckLogin;