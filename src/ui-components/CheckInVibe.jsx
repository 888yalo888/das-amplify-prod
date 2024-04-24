/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import Vibe from "./Vibe";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function CheckInVibe(props) {
  const {
    src,
    label,
    default: defaultProp,
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [
    {
      overrides: { Vibe: {}, Label: {}, Contents: {}, CheckInVibe: {} },
      variantValues: { isSelected: "False" },
    },
    {
      overrides: {
        Vibe: {},
        Label: {},
        Contents: {},
        CheckInVibe: {
          border: "1px SOLID rgba(64,170,191,1)",
          backgroundColor: "rgba(184,206,249,1)",
        },
      },
      variantValues: { isSelected: "True" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="216px"
      height="80px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      borderRadius="8px"
      padding="15px 15px 15px 15px"
      backgroundColor="rgba(250,250,250,1)"
      display="flex"
      aria-label={label}
      {...getOverrideProps(overrides, "CheckInVibe")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Contents")}
      >
        <Vibe
          width="48px"
          height="48px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          vibe="' '"
          {...getOverrideProps(overrides, "Vibe")}
        ></Vibe>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="36px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={defaultProp}
          {...getOverrideProps(overrides, "Label")}
        ></Text>
      </Flex>
    </Flex>
  );
}
