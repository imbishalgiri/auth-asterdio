import React, { FC, useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

import { useForm, Controller } from "react-hook-form";

import { CleanButton } from "./signupUtils";
import { PasswordInput } from "./PasswordField";
import { User } from "../types/types";
import UploadImage from "./UploadImage";
import CustomModal from "./CustomModal";
import UserInfo from "./UserInfo";

// ----------------- (Main Component)
const Signup: FC = () => {
  const [loading, setLoading] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [userData, setUserData] = useState<User>();
  const [userImage, setUserImage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<User>();

  // (watching password to confirm password)
  const password = watch("password");

  // --------------- (submit handeler: Signup)
  const onSignupSubmit = (data: User) => {
    setUserData(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmited(true);
    }, 2000);

    // data could be appended on formdata because of image and sent to the server
    const formData = new FormData();
    formData.append("first_name", data.firstName);
    // and same for other finally submit formData to the api
  };

  const handleClose = () => {
    setSubmited(false);
  };

  const onFileChooseClick = (data: File) => {
    setUserImage(URL.createObjectURL(data));
  };

  // ------------------------------------------- (presentational part)
  return (
    <>
      <form onSubmit={handleSubmit(onSignupSubmit)}>
        {/* ------------------------------------------ (first name field)  */}
        <FormControl isInvalid={errors.firstName && true}>
          <FormLabel htmlFor="email">
            First Name <span style={{ color: "red" }}> *</span>
          </FormLabel>
          <Input
            placeholder="Enter First Name Here"
            borderColor={"blue"}
            id="lname"
            {...register("firstName", {
              required: "Please enter first name.",
              minLength: {
                value: 3,
                message: "First Name must have at least 3 characters",
              },
            })}
          />
          {errors.firstName ? (
            <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
          ) : (
            <FormHelperText>This field is required.</FormHelperText>
          )}
        </FormControl>
        <br />
        {/* ------------------------------------------ (last name field)  */}
        <FormControl isInvalid={errors.lastName && true}>
          <FormLabel htmlFor="email">
            Last Name <span style={{ color: "red" }}> *</span>
          </FormLabel>
          <Input
            placeholder="Enter Last Name Here"
            borderColor={"blue"}
            id="fname"
            {...register("lastName", {
              required: "Please enter last name.",
              minLength: {
                value: 3,
                message: "Last Name must have at least 3 characters",
              },
            })}
          />
          {errors.lastName ? (
            <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
          ) : (
            <FormHelperText>This field is required.</FormHelperText>
          )}
        </FormControl>
        <br />
        {/* ------------------------------------------ (email field)  */}
        <FormControl isInvalid={errors.email && true}>
          <FormLabel htmlFor="email">
            Email address <span style={{ color: "red" }}> *</span>
          </FormLabel>
          <Input
            placeholder="Enter Email Here"
            borderColor={"blue"}
            id="email"
            {...register("email", {
              required: "Please enter email.",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid Email format",
              },
            })}
          />
          {errors.email ? (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          ) : (
            <FormHelperText>This field is required.</FormHelperText>
          )}
        </FormControl>
        <br />
        {/* ------------------------------------------ (password field)  */}
        <Controller
          render={({ field: { ref, ...rest } }) => (
            <PasswordInput
              label="Password"
              placeholder="Enter Password"
              isRequired
              error={errors.password}
              {...rest}
            />
          )}
          name="password"
          control={control}
          rules={{
            required: "Please enter password.",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          }}
        />
        <br />
        {/* -------------------------------------- (confirm password field)  */}
        <Controller
          render={({ field: { ref, ...rest } }) => (
            <PasswordInput
              label="Password Confirm"
              placeholder="Confirm Password"
              isRequired
              error={errors.passwordConfirm}
              {...rest}
            />
          )}
          name="passwordConfirm"
          control={control}
          rules={{
            required: "Please confirm  password.",
            validate: (value) =>
              value === password || "Passwords do not match.",
          }}
        />
        <br />
        <UploadImage onFileChooseClick={onFileChooseClick} />
        <br /> <br />
        <CleanButton
          isLoading={loading}
          loadingText={"Signing Up"}
          _hover={{ backgroundColor: "royalblue" }}
          _focus={{ boxShadow: "none" }}
          type="submit"
        >
          Sign Up
        </CleanButton>
      </form>
      <CustomModal isOpen={submited} handleClose={handleClose}>
        <UserInfo user={userData} image={userImage} />
      </CustomModal>
    </>
  );
};

export default Signup;
