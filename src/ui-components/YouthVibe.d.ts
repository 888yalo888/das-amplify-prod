/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Youth, Vibe } from "../models";
import { DividerProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { VibeProps } from "./Vibe";
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
export declare type YouthVibeOverridesProps = {
    YouthVibe?: PrimitiveOverrideProps<FlexProps>;
    TopCard?: PrimitiveOverrideProps<FlexProps>;
    YouthInfo?: PrimitiveOverrideProps<FlexProps>;
    YouthName?: PrimitiveOverrideProps<TextProps>;
    YouthGrade?: PrimitiveOverrideProps<TextProps>;
    EmoteCool?: PrimitiveOverrideProps<ImageProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    BottomCard?: PrimitiveOverrideProps<FlexProps>;
    YouthStatusIcon?: MyIconProps;
    YouthStatus?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type YouthVibeProps = React.PropsWithChildren<Partial<FlexProps> & {
    youth?: Youth;
    vibe?: Vibe;
} & {
    youthStatus?: "CheckedIn" | "Default" | "PickedUp";
    "Britt Reid"?: PrimitiveOverrideProps<TextProps>;
    "Grade 3"?: PrimitiveOverrideProps<TextProps>;
    Vibe?: VibeProps;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    BottomCard?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "CHECK OUT"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type YouthVibeProps = React.PropsWithChildren<Partial<FlexProps> & {
    youth?: Youth;
} & {
    property1?: "Default" | "Variant2";
} & {
    overrides?: YouthVibeOverridesProps | undefined | null;
}>;
export default function YouthVibe(props: YouthVibeProps): React.ReactElement;
