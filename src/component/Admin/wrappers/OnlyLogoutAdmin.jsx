import { useEffect, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Loading from "../../general/Loading/Loading";
import { AdminContext } from "../../../Admin";
import { ADMIN_ROUTE } from "../../../route/RouterConfig";

function OnlyLogoutAdmin({ children }) {
   const { isLoading, isAuth } = useContext(AdminContext);

   if (isLoading) return <Loading />;

   if (isAuth === false) return children;

   return <Navigate to={ADMIN_ROUTE} />;
}

export default observer(OnlyLogoutAdmin);
