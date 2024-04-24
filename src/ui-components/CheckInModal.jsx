/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
import CheckInVibe from "./CheckInVibe";
export default function CheckInModal(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="89px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CheckInModal")}
      {...rest}
    >
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Ty, What’s your vibe today?"
        {...getOverrideProps(overrides, "Ty, What\u2019s your vibe today?")}
      ></Text>
      <Flex
        gap="32px"
        direction="row"
        width="464px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "CheckInVibesSelector")}
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
      <Button
        width="400px"
        height="unset"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Check In"
        {...getOverrideProps(overrides, "ButtonCheckInVibe")}
      ></Button>
    </Flex>
  );
}
