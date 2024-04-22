/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { VibeProps } from "./Vibe";
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
    "4"?: PrimitiveOverrideProps<TextProps>;
    "15922668"?: PrimitiveOverrideProps<TextProps>;
    "15922669"?: PrimitiveOverrideProps<TextProps>;
    "15922670"?: PrimitiveOverrideProps<TextProps>;
    "15922671"?: PrimitiveOverrideProps<TextProps>;
    "15922672"?: PrimitiveOverrideProps<TextProps>;
    VibeSummary?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 21"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 447"?: PrimitiveOverrideProps<FlexProps>;
    Cool?: PrimitiveOverrideProps<FlexProps>;
    Vibe59551259?: VibeProps;
    "Frame 444"?: PrimitiveOverrideProps<FlexProps>;
    Vibe59551292?: VibeProps;
    "Frame 445"?: PrimitiveOverrideProps<FlexProps>;
    Vibe59551334?: VibeProps;
    "Frame 446"?: PrimitiveOverrideProps<FlexProps>;
    Vibe59551385?: VibeProps;
    "CHECKED-IN"?: PrimitiveOverrideProps<TextProps>;
    "PICKED UP"?: PrimitiveOverrideProps<TextProps>;
    "Line 9"?: PrimitiveOverrideProps<IconProps>;
    "Line 10"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type VibeSummaryProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: VibeSummaryOverridesProps | undefined | null;
}>;
export default function VibeSummary(props: VibeSummaryProps): React.ReactElement;
