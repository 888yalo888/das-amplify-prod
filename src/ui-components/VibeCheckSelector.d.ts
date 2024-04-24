/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckInVibeProps } from "./CheckInVibe";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type VibeCheckSelectorOverridesProps = {
    VibeCheckSelector?: PrimitiveOverrideProps<FlexProps>;
    CheckInVibe6163865?: CheckInVibeProps;
    CheckInVibe6163866?: CheckInVibeProps;
    CheckInVibe6163867?: CheckInVibeProps;
    CheckInVibe6163868?: CheckInVibeProps;
} & EscapeHatchProps;
export declare type VibeCheckSelectorProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: VibeCheckSelectorOverridesProps | undefined | null;
}>;
export default function VibeCheckSelector(props: VibeCheckSelectorProps): React.ReactElement;
