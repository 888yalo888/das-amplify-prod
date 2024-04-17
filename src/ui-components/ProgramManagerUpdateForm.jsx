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
import { ProgramManager, Site, ProgramManagerSite } from "../models";
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
export default function ProgramManagerUpdateForm(props) {
  const {
    id: idProp,
    programManager: programManagerModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fullName: "",
    createdDate: "",
    email: "",
    status: "",
    AssignedTo: [],
  };
  const [fullName, setFullName] = React.useState(initialValues.fullName);
  const [createdDate, setCreatedDate] = React.useState(
    initialValues.createdDate
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [status, setStatus] = React.useState(initialValues.status);
  const [AssignedTo, setAssignedTo] = React.useState(initialValues.AssignedTo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = programManagerRecord
      ? {
          ...initialValues,
          ...programManagerRecord,
          AssignedTo: linkedAssignedTo,
        }
      : initialValues;
    setFullName(cleanValues.fullName);
    setCreatedDate(cleanValues.createdDate);
    setEmail(cleanValues.email);
    setStatus(cleanValues.status);
    setAssignedTo(cleanValues.AssignedTo ?? []);
    setCurrentAssignedToValue(undefined);
    setCurrentAssignedToDisplayValue("");
    setErrors({});
  };
  const [programManagerRecord, setProgramManagerRecord] = React.useState(
    programManagerModelProp
  );
  const [linkedAssignedTo, setLinkedAssignedTo] = React.useState([]);
  const canUnlinkAssignedTo = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ProgramManager, idProp)
        : programManagerModelProp;
      setProgramManagerRecord(record);
      const linkedAssignedTo = record
        ? await Promise.all(
            (
              await record.AssignedTo.toArray()
            ).map((r) => {
              return r.site;
            })
          )
        : [];
      setLinkedAssignedTo(linkedAssignedTo);
    };
    queryData();
  }, [idProp, programManagerModelProp]);
  React.useEffect(resetStateValues, [programManagerRecord, linkedAssignedTo]);
  const [currentAssignedToDisplayValue, setCurrentAssignedToDisplayValue] =
    React.useState("");
  const [currentAssignedToValue, setCurrentAssignedToValue] =
    React.useState(undefined);
  const AssignedToRef = React.createRef();
  const getIDValue = {
    AssignedTo: (r) => JSON.stringify({ id: r?.id }),
  };
  const AssignedToIdSet = new Set(
    Array.isArray(AssignedTo)
      ? AssignedTo.map((r) => getIDValue.AssignedTo?.(r))
      : getIDValue.AssignedTo?.(AssignedTo)
  );
  const siteRecords = useDataStoreBinding({
    type: "collection",
    model: Site,
  }).items;
  const getDisplayValue = {
    AssignedTo: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    fullName: [],
    createdDate: [],
    email: [{ type: "Email" }],
    status: [],
    AssignedTo: [],
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
          fullName,
          createdDate,
          email,
          status,
          AssignedTo,
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
          const promises = [];
          const assignedToToLinkMap = new Map();
          const assignedToToUnLinkMap = new Map();
          const assignedToMap = new Map();
          const linkedAssignedToMap = new Map();
          AssignedTo.forEach((r) => {
            const count = assignedToMap.get(getIDValue.AssignedTo?.(r));
            const newCount = count ? count + 1 : 1;
            assignedToMap.set(getIDValue.AssignedTo?.(r), newCount);
          });
          linkedAssignedTo.forEach((r) => {
            const count = linkedAssignedToMap.get(getIDValue.AssignedTo?.(r));
            const newCount = count ? count + 1 : 1;
            linkedAssignedToMap.set(getIDValue.AssignedTo?.(r), newCount);
          });
          linkedAssignedToMap.forEach((count, id) => {
            const newCount = assignedToMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                assignedToToUnLinkMap.set(id, diffCount);
              }
            } else {
              assignedToToUnLinkMap.set(id, count);
            }
          });
          assignedToMap.forEach((count, id) => {
            const originalCount = linkedAssignedToMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                assignedToToLinkMap.set(id, diffCount);
              }
            } else {
              assignedToToLinkMap.set(id, count);
            }
          });
          assignedToToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const programManagerSiteRecords = await DataStore.query(
              ProgramManagerSite,
              (r) =>
                r.and((r) => {
                  return [
                    r.siteId.eq(recordKeys.id),
                    r.programManagerId.eq(programManagerRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(programManagerSiteRecords[i]));
            }
          });
          assignedToToLinkMap.forEach((count, id) => {
            const siteToLink = siteRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new ProgramManagerSite({
                    programManager: programManagerRecord,
                    site: siteToLink,
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            fullName: modelFields.fullName,
            createdDate: modelFields.createdDate,
            email: modelFields.email,
            status: modelFields.status,
          };
          promises.push(
            DataStore.save(
              ProgramManager.copyOf(programManagerRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProgramManagerUpdateForm")}
      {...rest}
    >
      <TextField
        label="Full name"
        isRequired={false}
        isReadOnly={false}
        value={fullName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName: value,
              createdDate,
              email,
              status,
              AssignedTo,
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
        label="Created date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdDate && convertToLocal(new Date(createdDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              fullName,
              createdDate: value,
              email,
              status,
              AssignedTo,
            };
            const result = onChange(modelFields);
            value = result?.createdDate ?? value;
          }
          if (errors.createdDate?.hasError) {
            runValidationTasks("createdDate", value);
          }
          setCreatedDate(value);
        }}
        onBlur={() => runValidationTasks("createdDate", createdDate)}
        errorMessage={errors.createdDate?.errorMessage}
        hasError={errors.createdDate?.hasError}
        {...getOverrideProps(overrides, "createdDate")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              createdDate,
              email: value,
              status,
              AssignedTo,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              createdDate,
              email,
              status: value,
              AssignedTo,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Active"
          value="ACTIVE"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Archived"
          value="ARCHIVED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              fullName,
              createdDate,
              email,
              status,
              AssignedTo: values,
            };
            const result = onChange(modelFields);
            values = result?.AssignedTo ?? values;
          }
          setAssignedTo(values);
          setCurrentAssignedToValue(undefined);
          setCurrentAssignedToDisplayValue("");
        }}
        currentFieldValue={currentAssignedToValue}
        label={"Assigned to"}
        items={AssignedTo}
        hasError={errors?.AssignedTo?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("AssignedTo", currentAssignedToValue)
        }
        errorMessage={errors?.AssignedTo?.errorMessage}
        getBadgeText={getDisplayValue.AssignedTo}
        setFieldValue={(model) => {
          setCurrentAssignedToDisplayValue(
            model ? getDisplayValue.AssignedTo(model) : ""
          );
          setCurrentAssignedToValue(model);
        }}
        inputFieldRef={AssignedToRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Assigned to"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Site"
          value={currentAssignedToDisplayValue}
          options={siteRecords
            .filter((r) => !AssignedToIdSet.has(getIDValue.AssignedTo?.(r)))
            .map((r) => ({
              id: getIDValue.AssignedTo?.(r),
              label: getDisplayValue.AssignedTo?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAssignedToValue(
              siteRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAssignedToDisplayValue(label);
            runValidationTasks("AssignedTo", label);
          }}
          onClear={() => {
            setCurrentAssignedToDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.AssignedTo?.hasError) {
              runValidationTasks("AssignedTo", value);
            }
            setCurrentAssignedToDisplayValue(value);
            setCurrentAssignedToValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("AssignedTo", currentAssignedToDisplayValue)
          }
          errorMessage={errors.AssignedTo?.errorMessage}
          hasError={errors.AssignedTo?.hasError}
          ref={AssignedToRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "AssignedTo")}
        ></Autocomplete>
      </ArrayField>
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
          isDisabled={!(idProp || programManagerModelProp)}
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
              !(idProp || programManagerModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
