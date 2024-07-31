/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import CheckInVibe from "./CheckInVibe";
import { Flex } from "@aws-amplify/ui-react";
export default function CheckInVibesSelector(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="row"
      width="464px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CheckInVibesSelector")}
      {...rest}
    >
      <CheckInVibe
        display="flex"
        gap="0"
        direction="column"
        width="216px"
        height="80px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        borderRadius="8px"
        padding="15px 15px 15px 15px"
        isSelected="True"
        {...getOverrideProps(overrides, "CheckInVibeAtEase")}
      ></CheckInVibe>
      <CheckInVibe
        display="flex"
        gap="0"
        direction="column"
        width="216px"
        height="80px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="8px"
        padding="15px 15px 15px 15px"
        backgroundColor="rgba(250,250,250,1)"
        isSelected="False"
        {...getOverrideProps(overrides, "CheckInVibeAngry")}
      ></CheckInVibe>
      <CheckInVibe
        display="flex"
        gap="0"
        direction="column"
        width="216px"
        height="80px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="8px"
        padding="15px 15px 15px 15px"
        backgroundColor="rgba(250,250,250,1)"
        isSelected="False"
        {...getOverrideProps(overrides, "CheckInVibeHappy")}
      ></CheckInVibe>
      <CheckInVibe
        display="flex"
        gap="0"
        direction="column"
        width="216px"
        height="80px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="8px"
        padding="15px 15px 15px 15px"
        backgroundColor="rgba(250,250,250,1)"
        isSelected="False"
        {...getOverrideProps(overrides, "CheckInVibeSad")}
      ></CheckInVibe>
    </Flex>
  );
}
