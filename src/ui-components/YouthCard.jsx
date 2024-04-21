/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Card, Icon, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function YouthCard(props) {
  const { youth, overrides, ...rest } = props;
  const youthCardOnClick = useNavigateAction({ type: "url", url: "" });
  const cardOnClick = useNavigateAction({ type: "url", url: "/vibe-check" });
  return (
    <View
      width="318px"
      height="105px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      onClick={() => {
        youthCardOnClick();
      }}
      {...getOverrideProps(overrides, "YouthCard")}
      {...rest}
    >
      <Card
        width="318px"
        height="97px"
        position="absolute"
        backgroundColor="rgba(184,206,249,1)"
        top="7.62%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="8px"
        variation="outline"
        onClick={() => {
          cardOnClick();
        }}
        {...getOverrideProps(overrides, "Card")}
      ></Card>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="15.24%"
        bottom="56.19%"
        left="5.35%"
        right="67.3%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Britt Reid"
        {...getOverrideProps(overrides, "Britt Reid")}
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
        position="absolute"
        top="40.95%"
        bottom="41.9%"
        left="5.35%"
        right="80.19%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Grade 3"
        {...getOverrideProps(overrides, "Grade 3")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="72px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="47px"
        height="57px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="45.71%"
        left="79.56%"
        right="5.66%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="😠"
        {...getOverrideProps(overrides, "\uD83D\uDE20")}
      ></Text>
      <Icon
        width="318px"
        height="0px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 318,
          height: 0.000027800442921943613,
        }}
        paths={[
          {
            d: "M0 0L318 0L318 -1L0 -1L0 0Z",
            stroke: "rgba(169,169,169,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="66.67%"
        bottom="33.33%"
        left="0%"
        right="0%"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "Line 5")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="72.38%"
        bottom="4.76%"
        left="41.19%"
        right="32.7%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="CHECK OUT"
        {...getOverrideProps(overrides, "CHECK OUT")}
      ></Text>
      <MyIcon
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="74.29%"
        bottom="6.67%"
        left="32.39%"
        right="61.32%"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        type="checkout"
        {...getOverrideProps(overrides, "MyIcon")}
      ></MyIcon>
    </View>
  );
}
