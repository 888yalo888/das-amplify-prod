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
  useNavigateAction,
} from "./utils";
import { Divider, Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function YouthVibe(props) {
  const {
    youth,
    vibe,
    grade,
    vibes,
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [
    {
      overrides: {
        YouthName: {},
        YouthGrade: {},
        YouthInfo: {},
        EmoteCool: {},
        TopCard: {},
        Divider: {},
        YouthStatusIcon: {},
        YouthStatus: {},
        BottomCard: {},
        YouthVibe: {},
      },
      variantValues: { youthStatus: "Default" },
    },
    {
      overrides: {
        YouthName: { fontSize: "20px", lineHeight: "30px", width: "206px" },
        YouthGrade: {},
        YouthInfo: {},
        EmoteCool: { display: "block" },
        TopCard: { gap: "26px", width: "272px" },
        Divider: {},
        YouthStatusIcon: {},
        YouthStatus: { children: "CHECKED IN" },
        BottomCard: { display: "flex" },
        YouthVibe: {
          padding: "7px 15px 7px 15px",
          backgroundColor: "rgba(184,206,249,1)",
        },
      },
      variantValues: { youthStatus: "CheckedIn" },
    },
    {
      overrides: {
        YouthName: { fontSize: "20px", lineHeight: "30px" },
        YouthGrade: {},
        YouthInfo: { shrink: "1", grow: "1", basis: "0" },
        EmoteCool: { display: "block" },
        TopCard: { gap: "16px", width: "272px" },
        Divider: {},
        YouthStatusIcon: { type: "checkmark" },
        YouthStatus: { children: "PICKED UP" },
        BottomCard: { gap: "8px", display: "flex" },
        YouthVibe: {
          padding: "7px 15px 7px 15px",
          backgroundColor: "rgba(214,245,219,1)",
        },
      },
      variantValues: { youthStatus: "PickedUp" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const youthVibeOnClick = useNavigateAction({
    type: "url",
    url: `${"/check-in/"}${youth?.id}`,
  });
  const topCardOnClick = useNavigateAction({ type: "url", url: "/vibe-check" });
  return (
    <Flex
      gap="7px"
      direction="column"
      width="304px"
      height="104px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      borderRadius="8px"
      padding="23px 15px 23px 15px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      onClick={() => {
        youthVibeOnClick();
      }}
      {...getOverrideProps(overrides, "YouthVibe")}
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
        display="flex"
        onClick={() => {
          topCardOnClick();
        }}
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
          display="flex"
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
            children={youth?.fullName}
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
            children={youth?.grade == "first" ? "FIRST" : "TEST"}
            {...getOverrideProps(overrides, "YouthGrade")}
          ></Text>
        </Flex>
        <Image
          width="30px"
          height="30px"
          display="none"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "EmoteCool")}
        ></Image>
      </Flex>
      <Divider
        width="unset"
        height="1px"
        display="none"
        shrink="0"
        alignSelf="stretch"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="none"
        {...getOverrideProps(overrides, "BottomCard")}
      >
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
          type="checkout"
          {...getOverrideProps(overrides, "YouthStatusIcon")}
        ></MyIcon>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="21px"
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
          children="CHECK OUT"
          {...getOverrideProps(overrides, "YouthStatus")}
        ></Text>
      </Flex>
    </Flex>
  );
}
