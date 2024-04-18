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
import { Youth, Site, YouthSite } from "../models";
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
export default function YouthUpdateForm(props) {
  const {
    id: idProp,
    youth: youthModelProp,
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
    dateOfBirth: "",
    guardianFullName: "",
    guardianPhoneNumber: "",
    grade: "",
    gender: "",
    status: "",
    site: [],
  };
  const [fullName, setFullName] = React.useState(initialValues.fullName);
  const [createdDate, setCreatedDate] = React.useState(
    initialValues.createdDate
  );
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
  const [status, setStatus] = React.useState(initialValues.status);
  const [site, setSite] = React.useState(initialValues.site);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = youthRecord
      ? { ...initialValues, ...youthRecord, site: linkedSite }
      : initialValues;
    setFullName(cleanValues.fullName);
    setCreatedDate(cleanValues.createdDate);
    setDateOfBirth(cleanValues.dateOfBirth);
    setGuardianFullName(cleanValues.guardianFullName);
    setGuardianPhoneNumber(cleanValues.guardianPhoneNumber);
    setGrade(cleanValues.grade);
    setGender(cleanValues.gender);
    setStatus(cleanValues.status);
    setSite(cleanValues.site ?? []);
    setCurrentSiteValue(undefined);
    setCurrentSiteDisplayValue("");
    setErrors({});
  };
  const [youthRecord, setYouthRecord] = React.useState(youthModelProp);
  const [linkedSite, setLinkedSite] = React.useState([]);
  const canUnlinkSite = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Youth, idProp)
        : youthModelProp;
      setYouthRecord(record);
      const linkedSite = record
        ? await Promise.all(
            (
              await record.site.toArray()
            ).map((r) => {
              return r.site;
            })
          )
        : [];
      setLinkedSite(linkedSite);
    };
    queryData();
  }, [idProp, youthModelProp]);
  React.useEffect(resetStateValues, [youthRecord, linkedSite]);
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
  const siteRecords = useDataStoreBinding({
    type: "collection",
    model: Site,
  }).items;
  const getDisplayValue = {
    site: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    fullName: [],
    createdDate: [],
    dateOfBirth: [],
    guardianFullName: [],
    guardianPhoneNumber: [{ type: "Phone" }],
    grade: [],
    gender: [],
    status: [],
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
          fullName,
          createdDate,
          dateOfBirth,
          guardianFullName,
          guardianPhoneNumber,
          grade,
          gender,
          status,
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
          const promises = [];
          const siteToLinkMap = new Map();
          const siteToUnLinkMap = new Map();
          const siteMap = new Map();
          const linkedSiteMap = new Map();
          site.forEach((r) => {
            const count = siteMap.get(getIDValue.site?.(r));
            const newCount = count ? count + 1 : 1;
            siteMap.set(getIDValue.site?.(r), newCount);
          });
          linkedSite.forEach((r) => {
            const count = linkedSiteMap.get(getIDValue.site?.(r));
            const newCount = count ? count + 1 : 1;
            linkedSiteMap.set(getIDValue.site?.(r), newCount);
          });
          linkedSiteMap.forEach((count, id) => {
            const newCount = siteMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                siteToUnLinkMap.set(id, diffCount);
              }
            } else {
              siteToUnLinkMap.set(id, count);
            }
          });
          siteMap.forEach((count, id) => {
            const originalCount = linkedSiteMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                siteToLinkMap.set(id, diffCount);
              }
            } else {
              siteToLinkMap.set(id, count);
            }
          });
          siteToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const youthSiteRecords = await DataStore.query(YouthSite, (r) =>
              r.and((r) => {
                return [
                  r.siteId.eq(recordKeys.id),
                  r.youthId.eq(youthRecord.id),
                ];
              })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(youthSiteRecords[i]));
            }
          });
          siteToLinkMap.forEach((count, id) => {
            const siteToLink = siteRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new YouthSite({
                    youth: youthRecord,
                    site: siteToLink,
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            fullName: modelFields.fullName,
            createdDate: modelFields.createdDate,
            dateOfBirth: modelFields.dateOfBirth,
            guardianFullName: modelFields.guardianFullName,
            guardianPhoneNumber: modelFields.guardianPhoneNumber,
            grade: modelFields.grade,
            gender: modelFields.gender,
            status: modelFields.status,
          };
          promises.push(
            DataStore.save(
              Youth.copyOf(youthRecord, (updated) => {
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
      {...getOverrideProps(overrides, "YouthUpdateForm")}
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
              dateOfBirth,
              guardianFullName,
              guardianPhoneNumber,
              grade,
              gender,
              status,
              site,
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
              dateOfBirth,
              guardianFullName,
              guardianPhoneNumber,
              grade,
              gender,
              status,
              site,
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
        label="Date of birth"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dateOfBirth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              createdDate,
              dateOfBirth: value,
              guardianFullName,
              guardianPhoneNumber,
              grade,
              gender,
              status,
              site,
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
        label="Guardian full name"
        isRequired={false}
        isReadOnly={false}
        value={guardianFullName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              createdDate,
              dateOfBirth,
              guardianFullName: value,
              guardianPhoneNumber,
              grade,
              gender,
              status,
              site,
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
        label="Guardian phone number"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={guardianPhoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              createdDate,
              dateOfBirth,
              guardianFullName,
              guardianPhoneNumber: value,
              grade,
              gender,
              status,
              site,
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
              createdDate,
              dateOfBirth,
              guardianFullName,
              guardianPhoneNumber,
              grade: value,
              gender,
              status,
              site,
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
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fullName,
              createdDate,
              dateOfBirth,
              guardianFullName,
              guardianPhoneNumber,
              grade,
              gender: value,
              status,
              site,
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
              dateOfBirth,
              guardianFullName,
              guardianPhoneNumber,
              grade,
              gender,
              status: value,
              site,
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
              dateOfBirth,
              guardianFullName,
              guardianPhoneNumber,
              grade,
              gender,
              status,
              site: values,
            };
            const result = onChange(modelFields);
            values = result?.site ?? values;
          }
          setSite(values);
          setCurrentSiteValue(undefined);
          setCurrentSiteDisplayValue("");
        }}
        currentFieldValue={currentSiteValue}
        label={"Site"}
        items={site}
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || youthModelProp)}
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
              !(idProp || youthModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
