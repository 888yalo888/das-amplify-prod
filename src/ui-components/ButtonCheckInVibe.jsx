/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function ButtonCheckInVibe(props) {
  const { overrides, ...rest } = props;
  const buttonCheckInVibeSixOneFiveOneEightSixNineOnClick = useNavigateAction({
    type: "url",
    url: "/check-in",
  });
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
      {...getOverrideProps(overrides, "ButtonCheckInVibe")}
      {...rest}
    >
      <Button
        width="400px"
        height="unset"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        disabled={false}
        children="Check In"
        onClick={() => {
          buttonCheckInVibeSixOneFiveOneEightSixNineOnClick();
        }}
        {...getOverrideProps(overrides, "ButtonCheckInVibe6151869")}
      ></Button>
    </Flex>
  );
}
