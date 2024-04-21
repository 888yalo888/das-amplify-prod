/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type RosterTableHeaderOverridesProps = {
    RosterTableHeader?: PrimitiveOverrideProps<FlexProps>;
    "Header Cell60731145"?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
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
} & EscapeHatchProps;
export declare type RosterTableHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RosterTableHeaderOverridesProps | undefined | null;
}>;
export default function RosterTableHeader(props: RosterTableHeaderProps): React.ReactElement;
