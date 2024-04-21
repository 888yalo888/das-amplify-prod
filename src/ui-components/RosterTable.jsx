/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Badge, Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function RosterTable(props) {
  const { youth, overrides, ...rest } = props;
  const vectorOnClick = useNavigateAction({
    type: "url",
    url: "/update/youthid",
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="1100px"
      height="265px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="65px 116px 65px 116px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "RosterTable")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="733px"
        height="44px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Header Row")}
      >
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(215,218,220,1)"
          {...getOverrideProps(overrides, "Header Cell60731145")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="First Name"
            {...getOverrideProps(overrides, "First Name")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(215,218,220,1)"
          {...getOverrideProps(overrides, "Header Cell60731146")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Last Name"
            {...getOverrideProps(overrides, "Last Name")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(215,218,220,1)"
          {...getOverrideProps(overrides, "Header Cell60731148")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Date of Birth"
            {...getOverrideProps(overrides, "Date of Birth")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(215,218,220,1)"
          {...getOverrideProps(overrides, "Header Cell60731150")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Guardian Name"
            {...getOverrideProps(overrides, "Guardian Name")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(215,218,220,1)"
          {...getOverrideProps(overrides, "Header Cell60731152")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Guardian Phone"
            {...getOverrideProps(overrides, "Guardian Phone")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(215,218,220,1)"
          {...getOverrideProps(overrides, "Header Cell60731154")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Grade"
            {...getOverrideProps(overrides, "Grade")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(215,218,220,1)"
          {...getOverrideProps(overrides, "Header Cell60731156")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Gender"
            {...getOverrideProps(overrides, "Gender")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(215,218,220,1)"
          {...getOverrideProps(overrides, "Header Cell60731158")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Status"
            {...getOverrideProps(overrides, "Status")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="72px"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(215,218,220,1)"
          {...getOverrideProps(overrides, "Header Cell60731160")}
        ></Flex>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="733px"
        height="44px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Roster Row")}
      >
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="11px 23px 11px 23px"
          {...getOverrideProps(overrides, "Row Cell60731019")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cell"
            {...getOverrideProps(overrides, "Cell60731018")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="11px 23px 11px 23px"
          {...getOverrideProps(overrides, "Row Cell60731020")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cell"
            {...getOverrideProps(overrides, "Cell60731021")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="11px 23px 11px 23px"
          {...getOverrideProps(overrides, "Row Cell60731022")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cell"
            {...getOverrideProps(overrides, "Cell60731023")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="11px 23px 11px 23px"
          {...getOverrideProps(overrides, "Row Cell60731024")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cell"
            {...getOverrideProps(overrides, "Cell60731025")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="11px 23px 11px 23px"
          {...getOverrideProps(overrides, "Row Cell60731026")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cell"
            {...getOverrideProps(overrides, "Cell60731027")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="11px 23px 11px 23px"
          {...getOverrideProps(overrides, "Row Cell60731028")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cell"
            {...getOverrideProps(overrides, "Cell60731029")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="11px 23px 11px 23px"
          {...getOverrideProps(overrides, "Row Cell60731030")}
        >
          <Text
            fontFamily="Inter"
            fontSize="12px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="14.522727012634277px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cell"
            {...getOverrideProps(overrides, "Cell60731031")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="44px"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="11px 23px 11px 23px"
          {...getOverrideProps(overrides, "Row Cell60731034")}
        >
          <Badge
            width="68px"
            height="unset"
            shrink="0"
            size="default"
            variation="default"
            children="Badge"
            {...getOverrideProps(overrides, "Badge")}
          ></Badge>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="72px"
          height="44px"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="11px 23px 11px 23px"
          {...getOverrideProps(overrides, "Row Cell60731036")}
        >
          <View
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
            {...getOverrideProps(overrides, "icons8-edit 1")}
          >
            <Icon
              width="22.09px"
              height="22.08px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 22.086091995239258,
                height: 22.079999923706055,
              }}
              paths={[
                {
                  d: "M20.325 0C19.8731 0 19.4081 0.166875 19.065 0.51L18.42 1.17L20.91 3.66C20.9081 3.66187 21.57 3.015 21.57 3.015C22.2581 2.32687 22.2581 1.19813 21.57 0.51C21.225 0.165 20.7769 0 20.325 0ZM17.64 1.89L6.735 12.795L6.705 12.945L6.255 15.27L6.105 15.975L6.81 15.825L9.135 15.375L9.285 15.345L20.19 4.44L19.5 3.765L8.82 14.43L7.65 13.26L18.315 2.58L17.64 1.89ZM0.48 3.84C0.21375 3.84 0 4.05562 0 4.32L0 21.6C0 21.8644 0.21375 22.08 0.48 22.08L17.76 22.08C18.0262 22.08 18.24 21.8644 18.24 21.6L18.24 7.68L17.28 8.64L17.28 21.12L0.96 21.12L0.96 4.8L13.44 4.8L14.4 3.84L0.48 3.84Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="4%"
              bottom="4%"
              left="4%"
              right="3.97%"
              onClick={() => {
                vectorOnClick();
              }}
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
        </Flex>
      </Flex>
    </Flex>
  );
}
