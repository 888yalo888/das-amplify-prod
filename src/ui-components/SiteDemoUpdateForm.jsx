/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { SiteDemo } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function SiteDemoUpdateForm(props) {
  const {
    id: idProp,
    siteDemo: siteDemoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    sitename: "",
    siteID: "",
  };
  const [sitename, setSitename] = React.useState(initialValues.sitename);
  const [siteID, setSiteID] = React.useState(initialValues.siteID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = siteDemoRecord
      ? { ...initialValues, ...siteDemoRecord }
      : initialValues;
    setSitename(cleanValues.sitename);
    setSiteID(cleanValues.siteID);
    setErrors({});
  };
  const [siteDemoRecord, setSiteDemoRecord] = React.useState(siteDemoModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(SiteDemo, idProp)
        : siteDemoModelProp;
      setSiteDemoRecord(record);
    };
    queryData();
  }, [idProp, siteDemoModelProp]);
  React.useEffect(resetStateValues, [siteDemoRecord]);
  const validations = {
    sitename: [],
    siteID: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          sitename,
          siteID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            SiteDemo.copyOf(siteDemoRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SiteDemoUpdateForm")}
      {...rest}
    >
      <TextField
        label="Sitename"
        isRequired={false}
        isReadOnly={false}
        value={sitename}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sitename: value,
              siteID,
            };
            const result = onChange(modelFields);
            value = result?.sitename ?? value;
          }
          if (errors.sitename?.hasError) {
            runValidationTasks("sitename", value);
          }
          setSitename(value);
        }}
        onBlur={() => runValidationTasks("sitename", sitename)}
        errorMessage={errors.sitename?.errorMessage}
        hasError={errors.sitename?.hasError}
        {...getOverrideProps(overrides, "sitename")}
      ></TextField>
      <TextField
        label="Site id"
        isRequired={false}
        isReadOnly={false}
        value={siteID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sitename,
              siteID: value,
            };
            const result = onChange(modelFields);
            value = result?.siteID ?? value;
          }
          if (errors.siteID?.hasError) {
            runValidationTasks("siteID", value);
          }
          setSiteID(value);
        }}
        onBlur={() => runValidationTasks("siteID", siteID)}
        errorMessage={errors.siteID?.errorMessage}
        hasError={errors.siteID?.hasError}
        {...getOverrideProps(overrides, "siteID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || siteDemoModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || siteDemoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
