/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function PickUpModal(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1280px"
      height="832px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "PickUpModal")}
      {...rest}
    >
      <Icon
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="19px"
        left="20px"
        padding="0px 0px 0px 0px"
        type="close"
        fontSize="24px"
        {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="300"
        color="rgba(0,0,0,1)"
        lineHeight="60px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="407px"
        height="272px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="226px"
        left="437px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Please confirm that&#xA;&#xA;Armando&#xA;&#xA;is being picked up"
        {...getOverrideProps(
          overrides,
          "Please confirm that Armando is being picked up"
        )}
      ></Text>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "ButtonConfirmPickUp")}
      ></Flex>
    </View>
  );
}
