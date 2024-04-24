/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, SelectFieldProps } from "@aws-amplify/ui-react";
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
export declare type DropdownSelectorOverridesProps = {
    DropdownSelector?: PrimitiveOverrideProps<FlexProps>;
    DropdownSelector6031537?: PrimitiveOverrideProps<FlexProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type DropdownSelectorProps = React.PropsWithChildren<Partial<FlexProps> & {
    dropdownSelector6031537?: React.ReactNode;
} & {
    overrides?: DropdownSelectorOverridesProps | undefined | null;
}>;
export default function DropdownSelector(props: DropdownSelectorProps): React.ReactElement;
