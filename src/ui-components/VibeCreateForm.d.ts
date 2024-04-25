/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type VibeCreateFormInputValues = {
    checkInVibe?: string;
    checkOutVibe?: string;
    checkInTime?: string;
    checkOutTime?: string;
    youthID?: string;
    site?: any;
};
export declare type VibeCreateFormValidationValues = {
    checkInVibe?: ValidationFunction<string>;
    checkOutVibe?: ValidationFunction<string>;
    checkInTime?: ValidationFunction<string>;
    checkOutTime?: ValidationFunction<string>;
    youthID?: ValidationFunction<string>;
    site?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VibeCreateFormOverridesProps = {
    VibeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    checkInVibe?: PrimitiveOverrideProps<TextFieldProps>;
    checkOutVibe?: PrimitiveOverrideProps<TextFieldProps>;
    checkInTime?: PrimitiveOverrideProps<TextFieldProps>;
    checkOutTime?: PrimitiveOverrideProps<TextFieldProps>;
    youthID?: PrimitiveOverrideProps<AutocompleteProps>;
    site?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type VibeCreateFormProps = React.PropsWithChildren<{
    overrides?: VibeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: VibeCreateFormInputValues) => VibeCreateFormInputValues;
    onSuccess?: (fields: VibeCreateFormInputValues) => void;
    onError?: (fields: VibeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: VibeCreateFormInputValues) => VibeCreateFormInputValues;
    onValidate?: VibeCreateFormValidationValues;
} & React.CSSProperties>;
export default function VibeCreateForm(props: VibeCreateFormProps): React.ReactElement;
