/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Youth } from "../models";
import { DividerProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type YouthCardPickedUpOverridesProps = {
    YouthCardPickedUp?: PrimitiveOverrideProps<FlexProps>;
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
export declare type YouthCardPickedUpProps = React.PropsWithChildren<Partial<FlexProps> & {
    youth?: Youth;
} & {
    overrides?: YouthCardPickedUpOverridesProps | undefined | null;
}>;
export default function YouthCardPickedUp(props: YouthCardPickedUpProps): React.ReactElement;
