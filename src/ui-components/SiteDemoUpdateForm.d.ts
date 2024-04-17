/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { SiteDemo } from "../models";
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
export declare type SiteDemoUpdateFormInputValues = {
    sitename?: string;
    siteID?: string;
};
export declare type SiteDemoUpdateFormValidationValues = {
    sitename?: ValidationFunction<string>;
    siteID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SiteDemoUpdateFormOverridesProps = {
    SiteDemoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sitename?: PrimitiveOverrideProps<TextFieldProps>;
    siteID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SiteDemoUpdateFormProps = React.PropsWithChildren<{
    overrides?: SiteDemoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    siteDemo?: SiteDemo;
    onSubmit?: (fields: SiteDemoUpdateFormInputValues) => SiteDemoUpdateFormInputValues;
    onSuccess?: (fields: SiteDemoUpdateFormInputValues) => void;
    onError?: (fields: SiteDemoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SiteDemoUpdateFormInputValues) => SiteDemoUpdateFormInputValues;
    onValidate?: SiteDemoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SiteDemoUpdateForm(props: SiteDemoUpdateFormProps): React.ReactElement;
