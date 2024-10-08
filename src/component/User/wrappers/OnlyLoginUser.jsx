import { useEffect, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../../User";
import Loading from "../../general/Loading/Loading";
import { USER_SIGN_IN_ROUTE } from "../../../route/RouterConfig";

function OnlyLogoutUser({ children }) {
   const { isAuth, isLoading } = useContext(Context);

   if (isLoading) return <Loading />;

   if (isAuth === true) return children;

   return <Navigate to={USER_SIGN_IN_ROUTE} replace />;
}

export default observer(OnlyLogoutUser);
