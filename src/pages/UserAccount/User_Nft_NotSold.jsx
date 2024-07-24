import { Title } from "../../component/general/Title";
import { Box, Unstable_Grid2 as Grid, Button } from "@mui/material";
import NftService from "../../services/NftService";
import Loading from "../../component/general/Loading/Loading";
import ErrorElement from "../../component/general/ErrorElement";
import { NftCardAdmin } from "../../component/Admin/nft/NftCardAdmin";
import { useQuery } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { ContainerComponent } from "../../component/general/wrappers/ContainerComponent";
import InCenter from "../../component/general/wrappers/InCenter";
import { NavLink } from "react-router-dom";
import { ADMIN_NFT_ADD_ROUTE } from "../../route/RouterConfig";
import { Empty } from "../../component/general/Empty";
import NftCard_skeleton from "../../component/general/skeletons/NftCard_skeleton";
import { NftCardUser } from "../../component/User/nft/NftCardUser";

export const User_Nft_NotSold = () => {
   const { error, isLoading, data } = useQuery({
      queryKey: ["getNotSoldAdmin"],
      queryFn: NftService.getNotSold,
      select: ({ data }) => data,
   });

   if (error) return <ErrorElement message={error?.message} />;

   console.log(isLoading);

   return (
      <ContainerComponent>
         <Title label={"NFT"} />
         <Box
            display={{ xs: "block", sm: "flex" }}
            mb={2}
            justifyContent={{ sm: "normal", sm: "end" }}
         ></Box>
         <InCenter style={{ p: { xs: 0 } }} maxWidth="lg">
            {isLoading ? (
               <Grid container spacing={2} columns={12}>
                  {Array(4)
                     .fill("5")
                     .map((el, id) => (
                        <Grid xs={6} sm={4} md={4} lg={3} key={id}>
                           <NftCard_skeleton />
                        </Grid>
                     ))}
               </Grid>
            ) : data?.length !== 0 ? (
               <Grid container spacing={2} columns={12}>
                  {data?.map((el) => (
                     <Grid xs={6} sm={4} md={4} lg={3} key={el?.id}>
                        <NftCardUser nft={el} />
                     </Grid>
                  ))}
               </Grid>
            ) : (
               <Empty />
            )}
         </InCenter>
      </ContainerComponent>
   );
};
