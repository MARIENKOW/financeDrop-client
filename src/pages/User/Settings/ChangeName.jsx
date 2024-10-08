import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, Box, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Context } from "../../../User";
import { StyledAlert } from "../../../component/general/StyledAlert";
import { StyledLoadingButton } from "../../../component/general/StyledLoadingButton";
import { StyledTextField } from "../../../component/general/Form/StyledTextField";
import { Title } from "../../../component/general/Title";
import { NAME_MAX_LENGTH, NAME_MIN_LENGTH } from "../../../validateConfig";
import { enqueueSnackbar } from "notistack";

const ChangeName = () => {
   const theme = useTheme();

   const { user, setUser, updateName } = useContext(Context);

   const { name } = user;
   console.log(name);

   const {
      handleSubmit,
      register,
      setError,
      clearErrors,
      reset,
      formState: { errors, isValid, isSubmitting, isDirty },
   } = useForm({ mode: "onChange", defaultValues: { name } });

   useEffect(() => {
      reset({ name });
   }, [name]);

   const onSubmit = async (data) => {
      try {
         await updateName(data);
         enqueueSnackbar(`Name change was a success!`, { variant: "success" });
      } catch (error) {
         console.log(error);
         if (error?.response?.status === 400) {
            const errors = error?.response?.data || {};
            for (let key in errors) {
               setError(key, { type: "server", message: errors[key] });
            }
            return;
         }
         setError("root.server", {
            type: "server",
            message: "Oops! something went wrong, try again later",
         });
      }
   };

   const handleChange = () => {
      clearErrors("root");
   };

   return (
      <Box
         flex={1}
         display={"flex"}
         flexDirection={"column"}
         justifyContent={"center"}
         alignItems={"center"}
      >
         <Box
            onChange={handleChange}
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
            sx={{
               display: "flex",
               flexDirection: "column",
               maxWidth: "400px",
               width: "100%",
               justifyContent: "center",
               gap: 1,
            }}
         >
            <Title
               sx={{ mb: 3, color: theme.palette.secondary.contrastText }}
               label={"Change name"}
            />

            <StyledTextField
               errors={errors}
               label="Name"
               register={register("name", {
                  required: "required field",
                  minLength: {
                     value: NAME_MIN_LENGTH,
                     message: `minimum ${NAME_MIN_LENGTH} characters`,
                  },
                  maxLength: {
                     value: NAME_MAX_LENGTH,
                     message: `maximunm ${NAME_MAX_LENGTH} characters`,
                  },
               })}
            />
            {errors?.root?.server && (
               <StyledAlert severity="error" variant="filled" hidden={true}>
                  {errors?.root?.server?.message}
               </StyledAlert>
            )}
            <StyledLoadingButton
               loading={isSubmitting}
               endIcon={<DoubleArrowIcon />}
               disabled={!isValid || !isDirty}
               type="submit"
               variant="contained"
               sx={{ mt: errors?.root?.server ? 0 : 3 }}
            >
               Send
            </StyledLoadingButton>
         </Box>
      </Box>
   );
};

export default observer(ChangeName);
