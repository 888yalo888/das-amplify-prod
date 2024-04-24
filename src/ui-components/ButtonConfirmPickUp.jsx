/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function ButtonConfirmPickUp(props) {
  const { overrides, ...rest } = props;
  const buttonConfirmPickUpSixOneFiveThreeNineFiveOneOnClick =
    useNavigateAction({ type: "url", url: "/check-in" });
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ButtonConfirmPickUp")}
      {...rest}
    >
      <Button
        width="400px"
        height="unset"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Confirm Pick Up"
        onClick={() => {
          buttonConfirmPickUpSixOneFiveThreeNineFiveOneOnClick();
        }}
        {...getOverrideProps(overrides, "ButtonConfirmPickUp6153951")}
      ></Button>
    </Flex>
  );
}
