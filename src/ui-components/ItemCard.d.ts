/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BadgeProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ItemCardOverridesProps = {
    ItemCard?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    "Classic Long Sleeve"?: PrimitiveOverrideProps<TextProps>;
    $99?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ItemCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ItemCardOverridesProps | undefined | null;
}>;
export default function ItemCard(props: ItemCardProps): React.ReactElement;
