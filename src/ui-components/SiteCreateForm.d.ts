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
export declare type SiteCreateFormInputValues = {
    name?: string;
    createdDate?: string;
    address?: string;
    phoneNumber?: string;
    siteAdminName?: string;
    siteAdminEmail?: string;
    status?: string;
    ManagedBy?: any[];
};
export declare type SiteCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    createdDate?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    siteAdminName?: ValidationFunction<string>;
    siteAdminEmail?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    ManagedBy?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SiteCreateFormOverridesProps = {
    SiteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    createdDate?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    siteAdminName?: PrimitiveOverrideProps<TextFieldProps>;
    siteAdminEmail?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    ManagedBy?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type SiteCreateFormProps = React.PropsWithChildren<{
    overrides?: SiteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SiteCreateFormInputValues) => SiteCreateFormInputValues;
    onSuccess?: (fields: SiteCreateFormInputValues) => void;
    onError?: (fields: SiteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SiteCreateFormInputValues) => SiteCreateFormInputValues;
    onValidate?: SiteCreateFormValidationValues;
} & React.CSSProperties>;
export default function SiteCreateForm(props: SiteCreateFormProps): React.ReactElement;
