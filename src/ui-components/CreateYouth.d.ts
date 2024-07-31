/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, PhoneNumberFieldProps, SelectFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type CreateYouthOverridesProps = {
    CreateYouth?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField6188911?: PrimitiveOverrideProps<TextFieldProps>;
    TextField6188912?: PrimitiveOverrideProps<TextFieldProps>;
    TextField6188913?: PrimitiveOverrideProps<TextFieldProps>;
    PhoneNumberField?: PrimitiveOverrideProps<PhoneNumberFieldProps>;
    SelectField6188956?: PrimitiveOverrideProps<SelectFieldProps>;
    TextField6188963?: PrimitiveOverrideProps<TextFieldProps>;
    SelectField61891715?: PrimitiveOverrideProps<SelectFieldProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CreateYouthProps = React.PropsWithChildren<Partial<FlexProps> & {
    youth?: any;
} & {
    overrides?: CreateYouthOverridesProps | undefined | null;
}>;
export default function CreateYouth(props: CreateYouthProps): React.ReactElement;
