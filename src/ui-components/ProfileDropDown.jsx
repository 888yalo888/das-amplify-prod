/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Heading, Icon } from "@aws-amplify/ui-react";
export default function ProfileDropDown(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="240px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="8px"
      padding="32px 0px 32px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ProfileDropDown")}
      {...rest}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="88px"
        height="88px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "profile-badge")}
      >
        <Icon
          width="88px"
          height="88px"
          viewBox={{ minX: 0, minY: 0, width: 88, height: 88 }}
          paths={[
            {
              d: "M88 44C88 68.3005 68.3005 88 44 88C19.6995 88 0 68.3005 0 44C0 19.6995 19.6995 0 44 0C68.3005 0 88 19.6995 88 44Z",
              fill: "rgba(249,184,249,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Ellipse 2")}
        ></Icon>
        <Heading
          width="unset"
          height="unset"
          position="absolute"
          top="19px"
          left="16px"
          level="2"
          children="CX"
          {...getOverrideProps(overrides, "Heading59271131")}
        ></Heading>
      </Flex>
      <Heading
        width="unset"
        height="unset"
        gap="-32px"
        shrink="0"
        level="5"
        children="Charles Xavier"
        {...getOverrideProps(overrides, "Heading59541254")}
      ></Heading>
      <Button
        width="174px"
        height="unset"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="warning"
        children="Log Out"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
