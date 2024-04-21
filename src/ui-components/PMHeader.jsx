/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Heading, Icon, Image, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function PMHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="1280px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      boxShadow="0px 3px 3px rgba(0, 0, 0, 0.25)"
      padding="4px 16px 4px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PMHeader")}
      {...rest}
    >
      <Image
        width="72px"
        height="72px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Logo")}
      ></Image>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-end"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Site Drop Down")}
      >
        <Heading
          width="unset"
          height="unset"
          shrink="0"
          level="5"
          children="Kiddie Academy of Far North Dallas"
          {...getOverrideProps(overrides, "Heading59311361")}
        ></Heading>
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="chevron_down"
          fontSize="24px"
          {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
        ></Icon>
      </Flex>
      <View
        width="40px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          profileBugOnClick();
        }}
        {...getOverrideProps(overrides, "Profile Bug")}
      >
        <Icon
          width="40px"
          height="40px"
          viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
          paths={[
            {
              d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
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
          {...getOverrideProps(overrides, "Ellipse 1")}
        ></Icon>
        <Heading
          width="unset"
          height="unset"
          position="absolute"
          top="10px"
          left="8px"
          level="6"
          children="CX"
          {...getOverrideProps(overrides, "Heading59311360")}
        ></Heading>
      </View>
    </Flex>
  );
}
