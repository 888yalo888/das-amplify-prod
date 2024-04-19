/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, SelectField } from "@aws-amplify/ui-react";
export default function DropdownSelector(props) {
  const { overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "DropdownSelector")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-end"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="16px 16px 16px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "DropdownSelector6031537")}
      >
        <SelectField
          width="240px"
          height="unset"
          placeholder="All"
          shrink="0"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField")}
        ></SelectField>
      </Flex>
    </Flex>
  );
}
