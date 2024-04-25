/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BadgeProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RosterTableOverridesProps = {
    RosterTable?: PrimitiveOverrideProps<FlexProps>;
    "Header Row"?: PrimitiveOverrideProps<FlexProps>;
    "Header Cell60731145"?: PrimitiveOverrideProps<FlexProps>;
    "First Name"?: PrimitiveOverrideProps<TextProps>;
    "Header Cell60731146"?: PrimitiveOverrideProps<FlexProps>;
    "Last Name"?: PrimitiveOverrideProps<TextProps>;
    "Header Cell60731148"?: PrimitiveOverrideProps<FlexProps>;
    "Date of Birth"?: PrimitiveOverrideProps<TextProps>;
    "Header Cell60731150"?: PrimitiveOverrideProps<FlexProps>;
    "Guardian Name"?: PrimitiveOverrideProps<TextProps>;
    "Header Cell60731152"?: PrimitiveOverrideProps<FlexProps>;
    "Guardian Phone"?: PrimitiveOverrideProps<TextProps>;
    "Header Cell60731154"?: PrimitiveOverrideProps<FlexProps>;
    Grade?: PrimitiveOverrideProps<TextProps>;
    "Header Cell60731156"?: PrimitiveOverrideProps<FlexProps>;
    Gender?: PrimitiveOverrideProps<TextProps>;
    "Header Cell60731158"?: PrimitiveOverrideProps<FlexProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    "Header Cell60731160"?: PrimitiveOverrideProps<FlexProps>;
    "Roster Row"?: PrimitiveOverrideProps<FlexProps>;
    "Row Cell60731019"?: PrimitiveOverrideProps<FlexProps>;
    Cell60731018?: PrimitiveOverrideProps<TextProps>;
    "Row Cell60731020"?: PrimitiveOverrideProps<FlexProps>;
    Cell60731021?: PrimitiveOverrideProps<TextProps>;
    "Row Cell60731022"?: PrimitiveOverrideProps<FlexProps>;
    Cell60731023?: PrimitiveOverrideProps<TextProps>;
    "Row Cell60731024"?: PrimitiveOverrideProps<FlexProps>;
    Cell60731025?: PrimitiveOverrideProps<TextProps>;
    "Row Cell60731026"?: PrimitiveOverrideProps<FlexProps>;
    Cell60731027?: PrimitiveOverrideProps<TextProps>;
    "Row Cell60731028"?: PrimitiveOverrideProps<FlexProps>;
    Cell60731029?: PrimitiveOverrideProps<TextProps>;
    "Row Cell60731030"?: PrimitiveOverrideProps<FlexProps>;
    Cell60731031?: PrimitiveOverrideProps<TextProps>;
    "Row Cell60731034"?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Row Cell60731036"?: PrimitiveOverrideProps<FlexProps>;
    "icons8-edit 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type RosterTableProps = React.PropsWithChildren<Partial<FlexProps> & {
    youth?: any;
} & {
    overrides?: RosterTableOverridesProps | undefined | null;
}>;
export default function RosterTable(props: RosterTableProps): React.ReactElement;
