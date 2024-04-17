/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, HeadingProps, IconProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PMHeaderOverridesProps = {
    PMHeader?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<ImageProps>;
    "Site Drop Down"?: PrimitiveOverrideProps<FlexProps>;
    Heading59311361?: PrimitiveOverrideProps<HeadingProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<IconProps>;
    "Profile Bug"?: PrimitiveOverrideProps<ViewProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
    Heading59311360?: PrimitiveOverrideProps<HeadingProps>;
} & EscapeHatchProps;
export declare type PMHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PMHeaderOverridesProps | undefined | null;
}>;
export default function PMHeader(props: PMHeaderProps): React.ReactElement;
