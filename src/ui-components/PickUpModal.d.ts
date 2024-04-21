/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PickUpModalOverridesProps = {
    PickUpModal?: PrimitiveOverrideProps<ViewProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<IconProps>;
    "Please confirm that Armando is being picked up"?: PrimitiveOverrideProps<TextProps>;
    ButtonConfirmPickUp?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type PickUpModalProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PickUpModalOverridesProps | undefined | null;
}>;
export default function PickUpModal(props: PickUpModalProps): React.ReactElement;
