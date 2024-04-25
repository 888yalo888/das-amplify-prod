/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function YouthCardDefault(props) {
  const { youth, overrides, ...rest } = props;
  const youthCardDefaultOnClick = useNavigateAction({
    type: "url",
    url: `${"/vibe-check/"}${youth?.id}`,
  });
  return (
    <Flex
      gap="7px"
      direction="column"
      width="350px"
      height="104px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      borderRadius="8px"
      padding="23px 15px 23px 15px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        youthCardDefaultOnClick();
      }}
      {...getOverrideProps(overrides, "YouthCardDefault")}
      {...rest}
    >
      <Flex
        gap="147px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TopCard")}
      >
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "YouthInfo")}
        >
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
            children="Britt Reifffffffffd"
            {...getOverrideProps(overrides, "YouthName")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="18px"
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
            children="Grade 3"
            {...getOverrideProps(overrides, "YouthGrade")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
