/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type VibeSummaryOverridesProps = {
    "15922669"?: PrimitiveOverrideProps<TextProps>;
    "15922670"?: PrimitiveOverrideProps<TextProps>;
    "15922671"?: PrimitiveOverrideProps<TextProps>;
    "15922672"?: PrimitiveOverrideProps<TextProps>;
    VibeSummary?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 21"?: PrimitiveOverrideProps<ViewProps>;
    "4/11"?: PrimitiveOverrideProps<TextProps>;
    "1/4"?: PrimitiveOverrideProps<TextProps>;
    "Frame 447"?: PrimitiveOverrideProps<FlexProps>;
    Cool?: PrimitiveOverrideProps<FlexProps>;
    EmoteCool?: PrimitiveOverrideProps<ImageProps>;
    Happy?: PrimitiveOverrideProps<FlexProps>;
    EmoteHappy?: PrimitiveOverrideProps<ImageProps>;
    Sad?: PrimitiveOverrideProps<FlexProps>;
    EmoteSad?: PrimitiveOverrideProps<ImageProps>;
    Angry?: PrimitiveOverrideProps<FlexProps>;
    EmoteAngry?: PrimitiveOverrideProps<ImageProps>;
    "CHECKED-IN"?: PrimitiveOverrideProps<TextProps>;
    "PICKED UP"?: PrimitiveOverrideProps<TextProps>;
    "Line 9"?: PrimitiveOverrideProps<IconProps>;
    "Line 10"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type VibeSummaryProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: VibeSummaryOverridesProps | undefined | null;
}>;
export default function VibeSummary(props: VibeSummaryProps): React.ReactElement;
