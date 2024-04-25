/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ProgramManagerCreateFormInputValues = {
    fullName?: string;
    createdDate?: string;
    email?: string;
    status?: string;
    AssignedTo?: any[];
};
export declare type ProgramManagerCreateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    createdDate?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    AssignedTo?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgramManagerCreateFormOverridesProps = {
    ProgramManagerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullName?: PrimitiveOverrideProps<TextFieldProps>;
    createdDate?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    AssignedTo?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ProgramManagerCreateFormProps = React.PropsWithChildren<{
    overrides?: ProgramManagerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProgramManagerCreateFormInputValues) => ProgramManagerCreateFormInputValues;
    onSuccess?: (fields: ProgramManagerCreateFormInputValues) => void;
    onError?: (fields: ProgramManagerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgramManagerCreateFormInputValues) => ProgramManagerCreateFormInputValues;
    onValidate?: ProgramManagerCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProgramManagerCreateForm(props: ProgramManagerCreateFormProps): React.ReactElement;
