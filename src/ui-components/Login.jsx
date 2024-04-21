/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  Flex,
  Image,
  PasswordField,
  TextField,
} from "@aws-amplify/ui-react";
export default function Login(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="33px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Login")}
      {...rest}
    >
      <Image
        width="160px"
        height="160px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "cropped-DAS-logo-for-web 1")}
      ></Image>
      <TextField
        width="300px"
        height="unset"
        label="Email Address"
        shrink="0"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <PasswordField
        width="300px"
        height="unset"
        label="Password"
        shrink="0"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        hideShowPassword={false}
        {...getOverrideProps(overrides, "PasswordField")}
      ></PasswordField>
      <Button
        width="302px"
        height="unset"
        border="1px SOLID rgba(4,125,149,1)"
        shrink="0"
        backgroundColor="rgba(4,125,149,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Log in"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
