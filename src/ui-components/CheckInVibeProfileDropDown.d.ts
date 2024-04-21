/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, HeadingProps, IconProps } from "@aws-amplify/ui-react";
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
export declare type CheckInVibeProfileDropDownOverridesProps = {
    CheckInVibeProfileDropDown?: PrimitiveOverrideProps<FlexProps>;
    "profile-badge"?: PrimitiveOverrideProps<FlexProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    Heading59271131?: PrimitiveOverrideProps<HeadingProps>;
    Heading59541254?: PrimitiveOverrideProps<HeadingProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CheckInVibeProfileDropDownProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CheckInVibeProfileDropDownOverridesProps | undefined | null;
}>;
export default function CheckInVibeProfileDropDown(props: CheckInVibeProfileDropDownProps): React.ReactElement;
