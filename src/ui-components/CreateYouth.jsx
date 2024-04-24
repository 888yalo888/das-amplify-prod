/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Flex,
  PhoneNumberField,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function CreateYouth(props) {
  const { youth, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="714px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "CreateYouth")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="714px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 42px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="600px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Full name"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField6188911")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Date of Birth"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField6188912")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Guardian Name"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField6188913")}
          ></TextField>
          <PhoneNumberField
            width="unset"
            height="unset"
            label="Guardian Phone"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "PhoneNumberField")}
          ></PhoneNumberField>
          <SelectField
            width="unset"
            height="unset"
            label="Grade"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField6188956")}
          ></SelectField>
          <TextField
            width="unset"
            height="unset"
            label="Gender"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField6188963")}
          ></TextField>
          <SelectField
            width="unset"
            height="unset"
            label="Site"
            shrink="0"
            alignSelf="stretch"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField61891715")}
          ></SelectField>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,0)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(4,125,149,1)"
          {...getOverrideProps(overrides, "Button")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
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
            children="Save"
            {...getOverrideProps(overrides, "label")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
