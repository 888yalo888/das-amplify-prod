/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Vibe, Site, Youth } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  useDataStoreBinding,
  validateField,
} from "./utils";
import { DataStore } from "aws-amplify/datastore";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function VibeCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    checkInVibe: "",
    checkOutVibe: "",
    checkInTime: "",
    checkOutTime: "",
    youthID: undefined,
    site: undefined,
  };
  const [checkInVibe, setCheckInVibe] = React.useState(
    initialValues.checkInVibe
  );
  const [checkOutVibe, setCheckOutVibe] = React.useState(
    initialValues.checkOutVibe
  );
  const [checkInTime, setCheckInTime] = React.useState(
    initialValues.checkInTime
  );
  const [checkOutTime, setCheckOutTime] = React.useState(
    initialValues.checkOutTime
  );
  const [youthID, setYouthID] = React.useState(initialValues.youthID);
  const [site, setSite] = React.useState(initialValues.site);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCheckInVibe(initialValues.checkInVibe);
    setCheckOutVibe(initialValues.checkOutVibe);
    setCheckInTime(initialValues.checkInTime);
    setCheckOutTime(initialValues.checkOutTime);
    setYouthID(initialValues.youthID);
    setCurrentYouthIDValue(undefined);
    setCurrentYouthIDDisplayValue("");
    setSite(initialValues.site);
    setCurrentSiteValue(undefined);
    setCurrentSiteDisplayValue("");
    setErrors({});
  };
  const [currentYouthIDDisplayValue, setCurrentYouthIDDisplayValue] =
    React.useState("");
  const [currentYouthIDValue, setCurrentYouthIDValue] =
    React.useState(undefined);
  const youthIDRef = React.createRef();
  const [currentSiteDisplayValue, setCurrentSiteDisplayValue] =
    React.useState("");
  const [currentSiteValue, setCurrentSiteValue] = React.useState(undefined);
  const siteRef = React.createRef();
  const getIDValue = {
    site: (r) => JSON.stringify({ id: r?.id }),
  };
  const siteIdSet = new Set(
    Array.isArray(site)
      ? site.map((r) => getIDValue.site?.(r))
      : getIDValue.site?.(site)
  );
  const youthRecords = useDataStoreBinding({
    type: "collection",
    model: Youth,
  }).items;
  const siteRecords = useDataStoreBinding({
    type: "collection",
    model: Site,
  }).items;
  const getDisplayValue = {
    youthID: (r) => `${r?.fullName ? r?.fullName + " - " : ""}${r?.id}`,
    site: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    checkInVibe: [],
    checkOutVibe: [],
    checkInTime: [],
    checkOutTime: [],
    youthID: [{ type: "Required" }],
    site: [{ type: "Required", validationMessage: "Site is required." }],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          checkInVibe,
          checkOutVibe,
          checkInTime,
          checkOutTime,
          youthID,
          site,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          await DataStore.save(new Vibe(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "VibeCreateForm")}
      {...rest}
    >
      <SelectField
        label="Check in vibe"
        placeholder="Please select an option"
        isDisabled={false}
        value={checkInVibe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              checkInVibe: value,
              checkOutVibe,
              checkInTime,
              checkOutTime,
              youthID,
              site,
            };
            const result = onChange(modelFields);
            value = result?.checkInVibe ?? value;
          }
          if (errors.checkInVibe?.hasError) {
            runValidationTasks("checkInVibe", value);
          }
          setCheckInVibe(value);
        }}
        onBlur={() => runValidationTasks("checkInVibe", checkInVibe)}
        errorMessage={errors.checkInVibe?.errorMessage}
        hasError={errors.checkInVibe?.hasError}
        {...getOverrideProps(overrides, "checkInVibe")}
      >
        <option
          children="Atease"
          value="ATEASE"
          {...getOverrideProps(overrides, "checkInVibeoption0")}
        ></option>
        <option
          children="Angry"
          value="ANGRY"
          {...getOverrideProps(overrides, "checkInVibeoption1")}
        ></option>
        <option
          children="Sad"
          value="SAD"
          {...getOverrideProps(overrides, "checkInVibeoption2")}
        ></option>
        <option
          children="Happy"
          value="HAPPY"
          {...getOverrideProps(overrides, "checkInVibeoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Check out vibe"
        placeholder="Please select an option"
        isDisabled={false}
        value={checkOutVibe}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              checkInVibe,
              checkOutVibe: value,
              checkInTime,
              checkOutTime,
              youthID,
              site,
            };
            const result = onChange(modelFields);
            value = result?.checkOutVibe ?? value;
          }
          if (errors.checkOutVibe?.hasError) {
            runValidationTasks("checkOutVibe", value);
          }
          setCheckOutVibe(value);
        }}
        onBlur={() => runValidationTasks("checkOutVibe", checkOutVibe)}
        errorMessage={errors.checkOutVibe?.errorMessage}
        hasError={errors.checkOutVibe?.hasError}
        {...getOverrideProps(overrides, "checkOutVibe")}
      >
        <option
          children="Atease"
          value="ATEASE"
          {...getOverrideProps(overrides, "checkOutVibeoption0")}
        ></option>
        <option
          children="Angry"
          value="ANGRY"
          {...getOverrideProps(overrides, "checkOutVibeoption1")}
        ></option>
        <option
          children="Sad"
          value="SAD"
          {...getOverrideProps(overrides, "checkOutVibeoption2")}
        ></option>
        <option
          children="Happy"
          value="HAPPY"
          {...getOverrideProps(overrides, "checkOutVibeoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Check in time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={checkInTime && convertToLocal(new Date(checkInTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              checkInVibe,
              checkOutVibe,
              checkInTime: value,
              checkOutTime,
              youthID,
              site,
            };
            const result = onChange(modelFields);
            value = result?.checkInTime ?? value;
          }
          if (errors.checkInTime?.hasError) {
            runValidationTasks("checkInTime", value);
          }
          setCheckInTime(value);
        }}
        onBlur={() => runValidationTasks("checkInTime", checkInTime)}
        errorMessage={errors.checkInTime?.errorMessage}
        hasError={errors.checkInTime?.hasError}
        {...getOverrideProps(overrides, "checkInTime")}
      ></TextField>
      <TextField
        label="Check out time"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={checkOutTime && convertToLocal(new Date(checkOutTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              checkInVibe,
              checkOutVibe,
              checkInTime,
              checkOutTime: value,
              youthID,
              site,
            };
            const result = onChange(modelFields);
            value = result?.checkOutTime ?? value;
          }
          if (errors.checkOutTime?.hasError) {
            runValidationTasks("checkOutTime", value);
          }
          setCheckOutTime(value);
        }}
        onBlur={() => runValidationTasks("checkOutTime", checkOutTime)}
        errorMessage={errors.checkOutTime?.errorMessage}
        hasError={errors.checkOutTime?.hasError}
        {...getOverrideProps(overrides, "checkOutTime")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              checkInVibe,
              checkOutVibe,
              checkInTime,
              checkOutTime,
              youthID: value,
              site,
            };
            const result = onChange(modelFields);
            value = result?.youthID ?? value;
          }
          setYouthID(value);
          setCurrentYouthIDValue(undefined);
        }}
        currentFieldValue={currentYouthIDValue}
        label={"Youth id"}
        items={youthID ? [youthID] : []}
        hasError={errors?.youthID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("youthID", currentYouthIDValue)
        }
        errorMessage={errors?.youthID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.youthID(youthRecords.find((r) => r.id === value))
            : ""
        }
        setFieldValue={(value) => {
          setCurrentYouthIDDisplayValue(
            value
              ? getDisplayValue.youthID(
                  youthRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentYouthIDValue(value);
        }}
        inputFieldRef={youthIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Youth id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Youth"
          value={currentYouthIDDisplayValue}
          options={youthRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.youthID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentYouthIDValue(id);
            setCurrentYouthIDDisplayValue(label);
            runValidationTasks("youthID", label);
          }}
          onClear={() => {
            setCurrentYouthIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.youthID?.hasError) {
              runValidationTasks("youthID", value);
            }
            setCurrentYouthIDDisplayValue(value);
            setCurrentYouthIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("youthID", currentYouthIDValue)}
          errorMessage={errors.youthID?.errorMessage}
          hasError={errors.youthID?.hasError}
          ref={youthIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "youthID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              checkInVibe,
              checkOutVibe,
              checkInTime,
              checkOutTime,
              youthID,
              site: value,
            };
            const result = onChange(modelFields);
            value = result?.site ?? value;
          }
          setSite(value);
          setCurrentSiteValue(undefined);
          setCurrentSiteDisplayValue("");
        }}
        currentFieldValue={currentSiteValue}
        label={"Site"}
        items={site ? [site] : []}
        hasError={errors?.site?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("site", currentSiteValue)
        }
        errorMessage={errors?.site?.errorMessage}
        getBadgeText={getDisplayValue.site}
        setFieldValue={(model) => {
          setCurrentSiteDisplayValue(model ? getDisplayValue.site(model) : "");
          setCurrentSiteValue(model);
        }}
        inputFieldRef={siteRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Site"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Site"
          value={currentSiteDisplayValue}
          options={siteRecords
            .filter((r) => !siteIdSet.has(getIDValue.site?.(r)))
            .map((r) => ({
              id: getIDValue.site?.(r),
              label: getDisplayValue.site?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentSiteValue(
              siteRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSiteDisplayValue(label);
            runValidationTasks("site", label);
          }}
          onClear={() => {
            setCurrentSiteDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.site?.hasError) {
              runValidationTasks("site", value);
            }
            setCurrentSiteDisplayValue(value);
            setCurrentSiteValue(undefined);
          }}
          onBlur={() => runValidationTasks("site", currentSiteDisplayValue)}
          errorMessage={errors.site?.errorMessage}
          hasError={errors.site?.hasError}
          ref={siteRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "site")}
        ></Autocomplete>
      </ArrayField>
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
