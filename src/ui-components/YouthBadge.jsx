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
import { Badge, Flex } from "@aws-amplify/ui-react";
export default function YouthBadge(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Badge: {}, YouthBadge: {} },
      variantValues: { property1: "ActiveYouth" },
    },
    {
      overrides: {
        Badge: { variation: "error", children: "Inactive" },
        YouthBadge: {},
      },
      variantValues: { property1: "InactiveYouth" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
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
      display="flex"
      {...getOverrideProps(overrides, "YouthBadge")}
      {...rest}
    >
      <Badge
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        variation="success"
        children="Active"
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
    </Flex>
  );
}
