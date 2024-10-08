import NftCard from "../../general/nft/NftCard";
import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { USER_NFT_ROUTE } from "../../../route/RouterConfig";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LaunchIcon from '@mui/icons-material/Launch';

export const NftCardUser = ({ nft }) => {
   return (
      <NftCard
         nft={nft}
         cardAction={
            // <Box sx={{ display: "flex", overflow: "hidden" }}>
            //    <NavLink
            //       style={{ flex: "50% 0 1" }}
            //       to={USER_NFT_ROUTE + "/" + nft.id}
            //    >
            //       <Button
            //          variant="outlined"
            //          color="primary"
            //          fullWidth
            //          sx={{ borderRadius: "0px 0px 0px 10px", fontWeight: 600 }}
            //       >
            //          open
            //       </Button>
            //    </NavLink>
            //    <Button
            //       startIcon={<ShoppingCartIcon />}
            //       sx={{
            //          flex: "50% 0 1",
            //          borderRadius: "0px 0px 10px 0px",
            //          fontWeight: 600,
            //       }}
            //       target="_blank"
            //       href={nft?.link}
            //       variant="contained"
            //       component={"a"}
            //    >
            //       Buy
            //    </Button>
            // </Box>
            <NavLink
               style={{ flex: "50% 0 1" }}
               to={USER_NFT_ROUTE + "/" + nft.id}
            >
               <Button
                  variant="outlined"
                  // variant="contained"
                  color="primary"
                  startIcon={<LaunchIcon/>}
                  fullWidth
                  sx={{ borderRadius: "0px 0px 10px 10px", fontWeight: 600 }}
               >
                  open
               </Button>
            </NavLink>
         }
      />
   );
};
