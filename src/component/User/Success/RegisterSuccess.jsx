import { Box, Typography, Button } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { NavLink } from "react-router-dom";
import { ACTIVATE_TOKEN_TIME } from "../../../validateConfig";
import { USER_SIGN_IN_ROUTE } from "../../../route/RouterConfig";

const RegisterSuccess = ({ mail }) => {
   return (
      <Box
         maxWidth={450}
         p={1}
         margin={"0 auto"}
         flex={1}
         gap={2}
         display={"flex"}
         flexDirection={"column"}
         justifyContent={"center"}
         alignItems={"center"}
      >
         <DoneAllIcon sx={{ width: 70, height: 70 }} color="primary" />
         <Typography color={"secondary.contrastText"} textAlign={"center"} variant="h5">
            We have sent the link to the mail{mail && `: "${mail}"`} to activate
            the account.
         </Typography>
         <Box>
            <Typography
               textAlign={"center"}
               variant="body1"
               color={"secondary.main"}
            >
               The link will be active for {ACTIVATE_TOKEN_TIME} minutes
            </Typography>
            <Typography
               textAlign={"center"}
               variant="body1"
               color={"secondary.main"}
            >
               Check your Spam folder
            </Typography>
         </Box>
         <NavLink to={USER_SIGN_IN_ROUTE}>
            <Button variant="contained">Sign In</Button>
         </NavLink>
      </Box>
   );
};

export default RegisterSuccess;
