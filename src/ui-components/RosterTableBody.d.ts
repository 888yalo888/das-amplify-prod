/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Youth } from "../models";
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
export declare type RosterTableBodyOverridesProps = {
    RosterTableBody?: PrimitiveOverrideProps<FlexProps>;
    "Row Cell60731019"?: PrimitiveOverrideProps<FlexProps>;
    Cell60731018?: PrimitiveOverrideProps<TextProps>;
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
export declare type RosterTableBodyProps = React.PropsWithChildren<Partial<FlexProps> & {
    youth?: Youth;
} & {
    status?: "Active" | "Inactive";
} & {
    overrides?: RosterTableBodyOverridesProps | undefined | null;
}>;
export default function RosterTableBody(props: RosterTableBodyProps): React.ReactElement;
