import { AccordionSummary, Box, Typography, useTheme } from "@mui/material";
import { StyledAccordion } from "../../general/StyledAccordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Empty } from "../../general/Empty";
import { NftCardAdminUser } from "./NftCardAdminUser";

export const NftActiveAccordion = ({ expanded, handleChange, nft }) => {
   const theme = useTheme();

   const active = nft?.filter((el) => el.active === 1) || [];

   return (
      <StyledAccordion expanded={expanded === 1} onChange={handleChange(1)}>
         <AccordionSummary expandIcon={<ExpandMoreIcon color="secondary" />}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
               <Typography color={theme.palette.secondary.main}>
                  Active NFT
               </Typography>
               <Typography
                  fontWeight={600}
                  variant="body1"
                  color={theme.palette.secondary.contrastText}
               >
                  ({active?.length || 0})
               </Typography>
            </Box>
         </AccordionSummary>
         <AccordionDetails
            sx={{ overflowX: "scroll", display: "flex", gap: 1 ,alignItems:'end'}}
         >
            {active && active?.length !== 0 ? (
               active.map((el) => (
                  <NftCardAdminUser
                     sx={{ width: "200px", minWidth: "200px" }}
                     nft={el}
                     key={el?.nft?.id}
                  />
               ))
            ) : (
               <Empty />
            )}
         </AccordionDetails>
      </StyledAccordion>
   );
};
