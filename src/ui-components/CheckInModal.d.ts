/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { CheckInVibeProps } from "./CheckInVibe";
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
export declare type CheckInModalOverridesProps = {
    CheckInModal?: PrimitiveOverrideProps<FlexProps>;
    "Ty, What\u2019s your vibe today?"?: PrimitiveOverrideProps<TextProps>;
    CheckInVibesSelector?: PrimitiveOverrideProps<FlexProps>;
    CheckInVibeAtEase?: CheckInVibeProps;
    CheckInVibeAngry?: CheckInVibeProps;
    CheckInVibeHappy?: CheckInVibeProps;
    CheckInVibeSad?: CheckInVibeProps;
    ButtonCheckInVibe?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type CheckInModalProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CheckInModalOverridesProps | undefined | null;
}>;
export default function CheckInModal(props: CheckInModalProps): React.ReactElement;
