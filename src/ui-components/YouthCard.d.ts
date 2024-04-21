/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Youth } from "../models";
import { CardProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type YouthCardOverridesProps = {
    YouthCard?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    "Britt Reid"?: PrimitiveOverrideProps<TextProps>;
    "Grade 3"?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDE20"?: PrimitiveOverrideProps<TextProps>;
    "Line 5"?: PrimitiveOverrideProps<IconProps>;
    "CHECK OUT"?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: MyIconProps;
} & EscapeHatchProps;
export declare type YouthCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    youth?: Youth;
} & {
    overrides?: YouthCardOverridesProps | undefined | null;
}>;
export default function YouthCard(props: YouthCardProps): React.ReactElement;
