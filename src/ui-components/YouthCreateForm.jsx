/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createYouth } from "../graphql/mutations";
const client = generateClient();
export default function YouthCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fullName: "",
    dateOfBirth: "",
    guardianFullName: "",
    guardianPhoneNumber: "",
    grade: "",
    gender: "",
  };
  const [fullName, setFullName] = React.useState(initialValues.fullName);
  const [dateOfBirth, setDateOfBirth] = React.useState(
    initialValues.dateOfBirth
  );
  const [guardianFullName, setGuardianFullName] = React.useState(
    initialValues.guardianFullName
  );
  const [guardianPhoneNumber, setGuardianPhoneNumber] = React.useState(
    initialValues.guardianPhoneNumber
  );
  const [grade, setGrade] = React.useState(initialValues.grade);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFullName(initialValues.fullName);
    setDateOfBirth(initialValues.dateOfBirth);
    setGuardianFullName(initialValues.guardianFullName);
    setGuardianPhoneNumber(initialValues.guardianPhoneNumber);
    setGrade(initialValues.grade);
    setGender(initialValues.gender);
    setErrors({});
  };
  const validations = {
    fullName: [{ type: "Required" }],
    dateOfBirth: [{ type: "Required" }],
    guardianFullName: [{ type: "Required" }],
    guardianPhoneNumber: [{ type: "Required" }, { type: "Phone" }],
    grade: [],
    gender: [{ type: "Required" }],
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
          fullName,
          dateOfBirth,
          guardianFullName,
          guardianPhoneNumber,
          grade,
          gender,
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
          await client.graphql({
            query: createYouth.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "YouthCreateForm")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Full name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={fullName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName: value,
              dateOfBirth,
              guardianFullName,
              guardianPhoneNumber,
              grade,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.fullName ?? value;
          }
          if (errors.fullName?.hasError) {
            runValidationTasks("fullName", value);
          }
          setFullName(value);
        }}
        onBlur={() => runValidationTasks("fullName", fullName)}
        errorMessage={errors.fullName?.errorMessage}
        hasError={errors.fullName?.hasError}
        {...getOverrideProps(overrides, "fullName")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Date of birth</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={dateOfBirth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              dateOfBirth: value,
              guardianFullName,
              guardianPhoneNumber,
              grade,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.dateOfBirth ?? value;
          }
          if (errors.dateOfBirth?.hasError) {
            runValidationTasks("dateOfBirth", value);
          }
          setDateOfBirth(value);
        }}
        onBlur={() => runValidationTasks("dateOfBirth", dateOfBirth)}
        errorMessage={errors.dateOfBirth?.errorMessage}
        hasError={errors.dateOfBirth?.hasError}
        {...getOverrideProps(overrides, "dateOfBirth")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Guardian full name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={guardianFullName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              dateOfBirth,
              guardianFullName: value,
              guardianPhoneNumber,
              grade,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.guardianFullName ?? value;
          }
          if (errors.guardianFullName?.hasError) {
            runValidationTasks("guardianFullName", value);
          }
          setGuardianFullName(value);
        }}
        onBlur={() => runValidationTasks("guardianFullName", guardianFullName)}
        errorMessage={errors.guardianFullName?.errorMessage}
        hasError={errors.guardianFullName?.hasError}
        {...getOverrideProps(overrides, "guardianFullName")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Guardian phone number</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={guardianPhoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              dateOfBirth,
              guardianFullName,
              guardianPhoneNumber: value,
              grade,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.guardianPhoneNumber ?? value;
          }
          if (errors.guardianPhoneNumber?.hasError) {
            runValidationTasks("guardianPhoneNumber", value);
          }
          setGuardianPhoneNumber(value);
        }}
        onBlur={() =>
          runValidationTasks("guardianPhoneNumber", guardianPhoneNumber)
        }
        errorMessage={errors.guardianPhoneNumber?.errorMessage}
        hasError={errors.guardianPhoneNumber?.hasError}
        {...getOverrideProps(overrides, "guardianPhoneNumber")}
      ></TextField>
      <SelectField
        label="Grade"
        placeholder="Please select an option"
        isDisabled={false}
        value={grade}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              dateOfBirth,
              guardianFullName,
              guardianPhoneNumber,
              grade: value,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.grade ?? value;
          }
          if (errors.grade?.hasError) {
            runValidationTasks("grade", value);
          }
          setGrade(value);
        }}
        onBlur={() => runValidationTasks("grade", grade)}
        errorMessage={errors.grade?.errorMessage}
        hasError={errors.grade?.hasError}
        {...getOverrideProps(overrides, "grade")}
      >
        <option
          children="Kindergarten"
          value="KINDERGARTEN"
          {...getOverrideProps(overrides, "gradeoption0")}
        ></option>
        <option
          children="First"
          value="FIRST"
          {...getOverrideProps(overrides, "gradeoption1")}
        ></option>
        <option
          children="Second"
          value="SECOND"
          {...getOverrideProps(overrides, "gradeoption2")}
        ></option>
        <option
          children="Third"
          value="THIRD"
          {...getOverrideProps(overrides, "gradeoption3")}
        ></option>
        <option
          children="Fourth"
          value="FOURTH"
          {...getOverrideProps(overrides, "gradeoption4")}
        ></option>
        <option
          children="Fifth"
          value="FIFTH"
          {...getOverrideProps(overrides, "gradeoption5")}
        ></option>
        <option
          children="Sixth"
          value="SIXTH"
          {...getOverrideProps(overrides, "gradeoption6")}
        ></option>
        <option
          children="Seventh"
          value="SEVENTH"
          {...getOverrideProps(overrides, "gradeoption7")}
        ></option>
        <option
          children="Eighth"
          value="EIGHTH"
          {...getOverrideProps(overrides, "gradeoption8")}
        ></option>
        <option
          children="Ninth"
          value="NINTH"
          {...getOverrideProps(overrides, "gradeoption9")}
        ></option>
        <option
          children="Tenth"
          value="TENTH"
          {...getOverrideProps(overrides, "gradeoption10")}
        ></option>
        <option
          children="Eleventh"
          value="ELEVENTH"
          {...getOverrideProps(overrides, "gradeoption11")}
        ></option>
        <option
          children="Twelfth"
          value="TWELFTH"
          {...getOverrideProps(overrides, "gradeoption12")}
        ></option>
      </SelectField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Gender</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              dateOfBirth,
              guardianFullName,
              guardianPhoneNumber,
              grade,
              gender: value,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
