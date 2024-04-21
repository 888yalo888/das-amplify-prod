/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type DataRowComponentOverridesProps = {
    DataRowComponent?: PrimitiveOverrideProps<FlexProps>;
    label6072547?: PrimitiveOverrideProps<TextProps>;
    label6072573?: PrimitiveOverrideProps<TextProps>;
    label6072574?: PrimitiveOverrideProps<TextProps>;
    label6072575?: PrimitiveOverrideProps<TextProps>;
    label6072576?: PrimitiveOverrideProps<TextProps>;
    label6072571?: PrimitiveOverrideProps<TextProps>;
    label6072549?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DataRowComponentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DataRowComponentOverridesProps | undefined | null;
}>;
export default function DataRowComponent(props: DataRowComponentProps): React.ReactElement;
