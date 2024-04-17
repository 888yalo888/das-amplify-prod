/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Site, ProgramManager, Youth } from "../models";
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
export declare type SiteUpdateFormInputValues = {
    name?: string;
    createdDate?: string;
    address?: string;
    phoneNumber?: string;
    siteAdminName?: string;
    siteAdminEmail?: string;
    status?: string;
    ManagedBy?: ProgramManager[];
    AttendedBy?: Youth[];
};
export declare type SiteUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    createdDate?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    siteAdminName?: ValidationFunction<string>;
    siteAdminEmail?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    ManagedBy?: ValidationFunction<ProgramManager>;
    AttendedBy?: ValidationFunction<Youth>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SiteUpdateFormOverridesProps = {
    SiteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    createdDate?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    siteAdminName?: PrimitiveOverrideProps<TextFieldProps>;
    siteAdminEmail?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    ManagedBy?: PrimitiveOverrideProps<AutocompleteProps>;
    AttendedBy?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type SiteUpdateFormProps = React.PropsWithChildren<{
    overrides?: SiteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    site?: Site;
    onSubmit?: (fields: SiteUpdateFormInputValues) => SiteUpdateFormInputValues;
    onSuccess?: (fields: SiteUpdateFormInputValues) => void;
    onError?: (fields: SiteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SiteUpdateFormInputValues) => SiteUpdateFormInputValues;
    onValidate?: SiteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SiteUpdateForm(props: SiteUpdateFormProps): React.ReactElement;
