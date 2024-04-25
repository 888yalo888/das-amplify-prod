/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Youth } from "../models";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type YouthUpdateFormInputValues = {
    fullName?: string;
    dateOfBirth?: string;
    guardianFullName?: string;
    guardianPhoneNumber?: string;
    grade?: string;
    gender?: string;
    status?: string;
};
export declare type YouthUpdateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    dateOfBirth?: ValidationFunction<string>;
    guardianFullName?: ValidationFunction<string>;
    guardianPhoneNumber?: ValidationFunction<string>;
    grade?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type YouthUpdateFormOverridesProps = {
    YouthUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullName?: PrimitiveOverrideProps<TextFieldProps>;
    dateOfBirth?: PrimitiveOverrideProps<TextFieldProps>;
    guardianFullName?: PrimitiveOverrideProps<TextFieldProps>;
    guardianPhoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    grade?: PrimitiveOverrideProps<SelectFieldProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type YouthUpdateFormProps = React.PropsWithChildren<{
    overrides?: YouthUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    youth?: Youth;
    onSubmit?: (fields: YouthUpdateFormInputValues) => YouthUpdateFormInputValues;
    onSuccess?: (fields: YouthUpdateFormInputValues) => void;
    onError?: (fields: YouthUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: YouthUpdateFormInputValues) => YouthUpdateFormInputValues;
    onValidate?: YouthUpdateFormValidationValues;
} & React.CSSProperties>;
export default function YouthUpdateForm(props: YouthUpdateFormProps): React.ReactElement;
