/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Vibe, Site } from "../models";
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
export declare type VibeUpdateFormInputValues = {
    checkInVibe?: string;
    checkOutVibe?: string;
    checkInTime?: string;
    checkOutTime?: string;
    youthID?: string;
    site?: Site;
};
export declare type VibeUpdateFormValidationValues = {
    checkInVibe?: ValidationFunction<string>;
    checkOutVibe?: ValidationFunction<string>;
    checkInTime?: ValidationFunction<string>;
    checkOutTime?: ValidationFunction<string>;
    youthID?: ValidationFunction<string>;
    site?: ValidationFunction<Site>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VibeUpdateFormOverridesProps = {
    VibeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    checkInVibe?: PrimitiveOverrideProps<SelectFieldProps>;
    checkOutVibe?: PrimitiveOverrideProps<SelectFieldProps>;
    checkInTime?: PrimitiveOverrideProps<TextFieldProps>;
    checkOutTime?: PrimitiveOverrideProps<TextFieldProps>;
    youthID?: PrimitiveOverrideProps<AutocompleteProps>;
    site?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type VibeUpdateFormProps = React.PropsWithChildren<{
    overrides?: VibeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    vibe?: Vibe;
    onSubmit?: (fields: VibeUpdateFormInputValues) => VibeUpdateFormInputValues;
    onSuccess?: (fields: VibeUpdateFormInputValues) => void;
    onError?: (fields: VibeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VibeUpdateFormInputValues) => VibeUpdateFormInputValues;
    onValidate?: VibeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function VibeUpdateForm(props: VibeUpdateFormProps): React.ReactElement;
