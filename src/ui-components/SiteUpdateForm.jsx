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
import {
  Site,
  ProgramManager,
  Youth,
  ProgramManagerSite,
  YouthSite,
} from "../models";
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
export default function SiteUpdateForm(props) {
  const {
    id: idProp,
    site: siteModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    createdDate: "",
    address: "",
    phoneNumber: "",
    siteAdminName: "",
    siteAdminEmail: "",
    status: "",
    ManagedBy: [],
    AttendedBy: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [createdDate, setCreatedDate] = React.useState(
    initialValues.createdDate
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [siteAdminName, setSiteAdminName] = React.useState(
    initialValues.siteAdminName
  );
  const [siteAdminEmail, setSiteAdminEmail] = React.useState(
    initialValues.siteAdminEmail
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [ManagedBy, setManagedBy] = React.useState(initialValues.ManagedBy);
  const [AttendedBy, setAttendedBy] = React.useState(initialValues.AttendedBy);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = siteRecord
      ? {
          ...initialValues,
          ...siteRecord,
          ManagedBy: linkedManagedBy,
          AttendedBy: linkedAttendedBy,
        }
      : initialValues;
    setName(cleanValues.name);
    setCreatedDate(cleanValues.createdDate);
    setAddress(cleanValues.address);
    setPhoneNumber(cleanValues.phoneNumber);
    setSiteAdminName(cleanValues.siteAdminName);
    setSiteAdminEmail(cleanValues.siteAdminEmail);
    setStatus(cleanValues.status);
    setManagedBy(cleanValues.ManagedBy ?? []);
    setCurrentManagedByValue(undefined);
    setCurrentManagedByDisplayValue("");
    setAttendedBy(cleanValues.AttendedBy ?? []);
    setCurrentAttendedByValue(undefined);
    setCurrentAttendedByDisplayValue("");
    setErrors({});
  };
  const [siteRecord, setSiteRecord] = React.useState(siteModelProp);
  const [linkedManagedBy, setLinkedManagedBy] = React.useState([]);
  const canUnlinkManagedBy = false;
  const [linkedAttendedBy, setLinkedAttendedBy] = React.useState([]);
  const canUnlinkAttendedBy = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Site, idProp)
        : siteModelProp;
      setSiteRecord(record);
      const linkedManagedBy = record
        ? await Promise.all(
            (
              await record.ManagedBy.toArray()
            ).map((r) => {
              return r.programManager;
            })
          )
        : [];
      setLinkedManagedBy(linkedManagedBy);
      const linkedAttendedBy = record
        ? await Promise.all(
            (
              await record.AttendedBy.toArray()
            ).map((r) => {
              return r.youth;
            })
          )
        : [];
      setLinkedAttendedBy(linkedAttendedBy);
    };
    queryData();
  }, [idProp, siteModelProp]);
  React.useEffect(resetStateValues, [
    siteRecord,
    linkedManagedBy,
    linkedAttendedBy,
  ]);
  const [currentManagedByDisplayValue, setCurrentManagedByDisplayValue] =
    React.useState("");
  const [currentManagedByValue, setCurrentManagedByValue] =
    React.useState(undefined);
  const ManagedByRef = React.createRef();
  const [currentAttendedByDisplayValue, setCurrentAttendedByDisplayValue] =
    React.useState("");
  const [currentAttendedByValue, setCurrentAttendedByValue] =
    React.useState(undefined);
  const AttendedByRef = React.createRef();
  const getIDValue = {
    ManagedBy: (r) => JSON.stringify({ id: r?.id }),
    AttendedBy: (r) => JSON.stringify({ id: r?.id }),
  };
  const ManagedByIdSet = new Set(
    Array.isArray(ManagedBy)
      ? ManagedBy.map((r) => getIDValue.ManagedBy?.(r))
      : getIDValue.ManagedBy?.(ManagedBy)
  );
  const AttendedByIdSet = new Set(
    Array.isArray(AttendedBy)
      ? AttendedBy.map((r) => getIDValue.AttendedBy?.(r))
      : getIDValue.AttendedBy?.(AttendedBy)
  );
  const programManagerRecords = useDataStoreBinding({
    type: "collection",
    model: ProgramManager,
  }).items;
  const youthRecords = useDataStoreBinding({
    type: "collection",
    model: Youth,
  }).items;
  const getDisplayValue = {
    ManagedBy: (r) => `${r?.fullName ? r?.fullName + " - " : ""}${r?.id}`,
    AttendedBy: (r) => `${r?.fullName ? r?.fullName + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    createdDate: [],
    address: [],
    phoneNumber: [{ type: "Phone" }],
    siteAdminName: [],
    siteAdminEmail: [{ type: "Email" }],
    status: [],
    ManagedBy: [],
    AttendedBy: [],
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
          name,
          createdDate,
          address,
          phoneNumber,
          siteAdminName,
          siteAdminEmail,
          status,
          ManagedBy,
          AttendedBy,
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
          const managedByToLinkMap = new Map();
          const managedByToUnLinkMap = new Map();
          const managedByMap = new Map();
          const linkedManagedByMap = new Map();
          ManagedBy.forEach((r) => {
            const count = managedByMap.get(getIDValue.ManagedBy?.(r));
            const newCount = count ? count + 1 : 1;
            managedByMap.set(getIDValue.ManagedBy?.(r), newCount);
          });
          linkedManagedBy.forEach((r) => {
            const count = linkedManagedByMap.get(getIDValue.ManagedBy?.(r));
            const newCount = count ? count + 1 : 1;
            linkedManagedByMap.set(getIDValue.ManagedBy?.(r), newCount);
          });
          linkedManagedByMap.forEach((count, id) => {
            const newCount = managedByMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                managedByToUnLinkMap.set(id, diffCount);
              }
            } else {
              managedByToUnLinkMap.set(id, count);
            }
          });
          managedByMap.forEach((count, id) => {
            const originalCount = linkedManagedByMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                managedByToLinkMap.set(id, diffCount);
              }
            } else {
              managedByToLinkMap.set(id, count);
            }
          });
          managedByToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const programManagerSiteRecords = await DataStore.query(
              ProgramManagerSite,
              (r) =>
                r.and((r) => {
                  return [
                    r.programManagerId.eq(recordKeys.id),
                    r.siteId.eq(siteRecord.id),
                  ];
                })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(programManagerSiteRecords[i]));
            }
          });
          managedByToLinkMap.forEach((count, id) => {
            const programManagerToLink = programManagerRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new ProgramManagerSite({
                    site: siteRecord,
                    programManager: programManagerToLink,
                  })
                )
              );
            }
          });
          const attendedByToLinkMap = new Map();
          const attendedByToUnLinkMap = new Map();
          const attendedByMap = new Map();
          const linkedAttendedByMap = new Map();
          AttendedBy.forEach((r) => {
            const count = attendedByMap.get(getIDValue.AttendedBy?.(r));
            const newCount = count ? count + 1 : 1;
            attendedByMap.set(getIDValue.AttendedBy?.(r), newCount);
          });
          linkedAttendedBy.forEach((r) => {
            const count = linkedAttendedByMap.get(getIDValue.AttendedBy?.(r));
            const newCount = count ? count + 1 : 1;
            linkedAttendedByMap.set(getIDValue.AttendedBy?.(r), newCount);
          });
          linkedAttendedByMap.forEach((count, id) => {
            const newCount = attendedByMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                attendedByToUnLinkMap.set(id, diffCount);
              }
            } else {
              attendedByToUnLinkMap.set(id, count);
            }
          });
          attendedByMap.forEach((count, id) => {
            const originalCount = linkedAttendedByMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                attendedByToLinkMap.set(id, diffCount);
              }
            } else {
              attendedByToLinkMap.set(id, count);
            }
          });
          attendedByToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const youthSiteRecords = await DataStore.query(YouthSite, (r) =>
              r.and((r) => {
                return [
                  r.youthId.eq(recordKeys.id),
                  r.siteId.eq(siteRecord.id),
                ];
              })
            );
            for (let i = 0; i < count; i++) {
              promises.push(DataStore.delete(youthSiteRecords[i]));
            }
          });
          attendedByToLinkMap.forEach((count, id) => {
            const youthToLink = youthRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                DataStore.save(
                  new YouthSite({
                    site: siteRecord,
                    youth: youthToLink,
                  })
                )
              );
            }
          });
          const modelFieldsToSave = {
            name: modelFields.name,
            createdDate: modelFields.createdDate,
            address: modelFields.address,
            phoneNumber: modelFields.phoneNumber,
            siteAdminName: modelFields.siteAdminName,
            siteAdminEmail: modelFields.siteAdminEmail,
            status: modelFields.status,
          };
          promises.push(
            DataStore.save(
              Site.copyOf(siteRecord, (updated) => {
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
      {...getOverrideProps(overrides, "SiteUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              createdDate,
              address,
              phoneNumber,
              siteAdminName,
              siteAdminEmail,
              status,
              ManagedBy,
              AttendedBy,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
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
              name,
              createdDate: value,
              address,
              phoneNumber,
              siteAdminName,
              siteAdminEmail,
              status,
              ManagedBy,
              AttendedBy,
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
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              createdDate,
              address: value,
              phoneNumber,
              siteAdminName,
              siteAdminEmail,
              status,
              ManagedBy,
              AttendedBy,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phoneNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              createdDate,
              address,
              phoneNumber: value,
              siteAdminName,
              siteAdminEmail,
              status,
              ManagedBy,
              AttendedBy,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <TextField
        label="Site admin name"
        isRequired={false}
        isReadOnly={false}
        value={siteAdminName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              createdDate,
              address,
              phoneNumber,
              siteAdminName: value,
              siteAdminEmail,
              status,
              ManagedBy,
              AttendedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteAdminName ?? value;
          }
          if (errors.siteAdminName?.hasError) {
            runValidationTasks("siteAdminName", value);
          }
          setSiteAdminName(value);
        }}
        onBlur={() => runValidationTasks("siteAdminName", siteAdminName)}
        errorMessage={errors.siteAdminName?.errorMessage}
        hasError={errors.siteAdminName?.hasError}
        {...getOverrideProps(overrides, "siteAdminName")}
      ></TextField>
      <TextField
        label="Site admin email"
        isRequired={false}
        isReadOnly={false}
        value={siteAdminEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              createdDate,
              address,
              phoneNumber,
              siteAdminName,
              siteAdminEmail: value,
              status,
              ManagedBy,
              AttendedBy,
            };
            const result = onChange(modelFields);
            value = result?.siteAdminEmail ?? value;
          }
          if (errors.siteAdminEmail?.hasError) {
            runValidationTasks("siteAdminEmail", value);
          }
          setSiteAdminEmail(value);
        }}
        onBlur={() => runValidationTasks("siteAdminEmail", siteAdminEmail)}
        errorMessage={errors.siteAdminEmail?.errorMessage}
        hasError={errors.siteAdminEmail?.hasError}
        {...getOverrideProps(overrides, "siteAdminEmail")}
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
              name,
              createdDate,
              address,
              phoneNumber,
              siteAdminName,
              siteAdminEmail,
              status: value,
              ManagedBy,
              AttendedBy,
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
              name,
              createdDate,
              address,
              phoneNumber,
              siteAdminName,
              siteAdminEmail,
              status,
              ManagedBy: values,
              AttendedBy,
            };
            const result = onChange(modelFields);
            values = result?.ManagedBy ?? values;
          }
          setManagedBy(values);
          setCurrentManagedByValue(undefined);
          setCurrentManagedByDisplayValue("");
        }}
        currentFieldValue={currentManagedByValue}
        label={"Managed by"}
        items={ManagedBy}
        hasError={errors?.ManagedBy?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("ManagedBy", currentManagedByValue)
        }
        errorMessage={errors?.ManagedBy?.errorMessage}
        getBadgeText={getDisplayValue.ManagedBy}
        setFieldValue={(model) => {
          setCurrentManagedByDisplayValue(
            model ? getDisplayValue.ManagedBy(model) : ""
          );
          setCurrentManagedByValue(model);
        }}
        inputFieldRef={ManagedByRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Managed by"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ProgramManager"
          value={currentManagedByDisplayValue}
          options={programManagerRecords
            .filter((r) => !ManagedByIdSet.has(getIDValue.ManagedBy?.(r)))
            .map((r) => ({
              id: getIDValue.ManagedBy?.(r),
              label: getDisplayValue.ManagedBy?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentManagedByValue(
              programManagerRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentManagedByDisplayValue(label);
            runValidationTasks("ManagedBy", label);
          }}
          onClear={() => {
            setCurrentManagedByDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ManagedBy?.hasError) {
              runValidationTasks("ManagedBy", value);
            }
            setCurrentManagedByDisplayValue(value);
            setCurrentManagedByValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("ManagedBy", currentManagedByDisplayValue)
          }
          errorMessage={errors.ManagedBy?.errorMessage}
          hasError={errors.ManagedBy?.hasError}
          ref={ManagedByRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ManagedBy")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              createdDate,
              address,
              phoneNumber,
              siteAdminName,
              siteAdminEmail,
              status,
              ManagedBy,
              AttendedBy: values,
            };
            const result = onChange(modelFields);
            values = result?.AttendedBy ?? values;
          }
          setAttendedBy(values);
          setCurrentAttendedByValue(undefined);
          setCurrentAttendedByDisplayValue("");
        }}
        currentFieldValue={currentAttendedByValue}
        label={"Attended by"}
        items={AttendedBy}
        hasError={errors?.AttendedBy?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("AttendedBy", currentAttendedByValue)
        }
        errorMessage={errors?.AttendedBy?.errorMessage}
        getBadgeText={getDisplayValue.AttendedBy}
        setFieldValue={(model) => {
          setCurrentAttendedByDisplayValue(
            model ? getDisplayValue.AttendedBy(model) : ""
          );
          setCurrentAttendedByValue(model);
        }}
        inputFieldRef={AttendedByRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Attended by"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Youth"
          value={currentAttendedByDisplayValue}
          options={youthRecords
            .filter((r) => !AttendedByIdSet.has(getIDValue.AttendedBy?.(r)))
            .map((r) => ({
              id: getIDValue.AttendedBy?.(r),
              label: getDisplayValue.AttendedBy?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAttendedByValue(
              youthRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAttendedByDisplayValue(label);
            runValidationTasks("AttendedBy", label);
          }}
          onClear={() => {
            setCurrentAttendedByDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.AttendedBy?.hasError) {
              runValidationTasks("AttendedBy", value);
            }
            setCurrentAttendedByDisplayValue(value);
            setCurrentAttendedByValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("AttendedBy", currentAttendedByDisplayValue)
          }
          errorMessage={errors.AttendedBy?.errorMessage}
          hasError={errors.AttendedBy?.hasError}
          ref={AttendedByRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "AttendedBy")}
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
          isDisabled={!(idProp || siteModelProp)}
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
              !(idProp || siteModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
