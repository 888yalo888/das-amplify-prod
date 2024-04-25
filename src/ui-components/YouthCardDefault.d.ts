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
export declare type YouthCardDefaultOverridesProps = {
    YouthCardDefault?: PrimitiveOverrideProps<FlexProps>;
    TopCard?: PrimitiveOverrideProps<FlexProps>;
    YouthInfo?: PrimitiveOverrideProps<FlexProps>;
    YouthName?: PrimitiveOverrideProps<TextProps>;
    YouthGrade?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type YouthCardDefaultProps = React.PropsWithChildren<Partial<FlexProps> & {
    youth?: any;
} & {
    overrides?: YouthCardDefaultOverridesProps | undefined | null;
}>;
export default function YouthCardDefault(props: YouthCardDefaultProps): React.ReactElement;
