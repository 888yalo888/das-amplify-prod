/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SiteDemoCreateFormInputValues = {
    sitename?: string;
    siteID?: string;
};
export declare type SiteDemoCreateFormValidationValues = {
    sitename?: ValidationFunction<string>;
    siteID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SiteDemoCreateFormOverridesProps = {
    SiteDemoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sitename?: PrimitiveOverrideProps<TextFieldProps>;
    siteID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SiteDemoCreateFormProps = React.PropsWithChildren<{
    overrides?: SiteDemoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SiteDemoCreateFormInputValues) => SiteDemoCreateFormInputValues;
    onSuccess?: (fields: SiteDemoCreateFormInputValues) => void;
    onError?: (fields: SiteDemoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SiteDemoCreateFormInputValues) => SiteDemoCreateFormInputValues;
    onValidate?: SiteDemoCreateFormValidationValues;
} & React.CSSProperties>;
export default function SiteDemoCreateForm(props: SiteDemoCreateFormProps): React.ReactElement;
