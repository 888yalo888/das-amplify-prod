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
export declare type ProgramManagerUpdateFormInputValues = {
    fullName?: string;
    createdDate?: string;
    email?: string;
    status?: string;
    AssignedTo?: any[];
};
export declare type ProgramManagerUpdateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    createdDate?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    AssignedTo?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProgramManagerUpdateFormOverridesProps = {
    ProgramManagerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullName?: PrimitiveOverrideProps<TextFieldProps>;
    createdDate?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    AssignedTo?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ProgramManagerUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProgramManagerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    programManager?: any;
    onSubmit?: (fields: ProgramManagerUpdateFormInputValues) => ProgramManagerUpdateFormInputValues;
    onSuccess?: (fields: ProgramManagerUpdateFormInputValues) => void;
    onError?: (fields: ProgramManagerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProgramManagerUpdateFormInputValues) => ProgramManagerUpdateFormInputValues;
    onValidate?: ProgramManagerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProgramManagerUpdateForm(props: ProgramManagerUpdateFormProps): React.ReactElement;
