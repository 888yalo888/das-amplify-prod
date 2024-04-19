/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type YouthVibePickedUpOverridesProps = {
    YouthVibePickedUp?: PrimitiveOverrideProps<FlexProps>;
    TopCard?: PrimitiveOverrideProps<FlexProps>;
    YouthInfo?: PrimitiveOverrideProps<FlexProps>;
    "Britt Reifffffffffd"?: PrimitiveOverrideProps<TextProps>;
    "Grade 3"?: PrimitiveOverrideProps<TextProps>;
    Vibe?: VibeProps;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    BottomCard?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "PICKED UP"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type YouthVibePickedUpProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: YouthVibePickedUpOverridesProps | undefined | null;
}>;
export default function YouthVibePickedUp(props: YouthVibePickedUpProps): React.ReactElement;
