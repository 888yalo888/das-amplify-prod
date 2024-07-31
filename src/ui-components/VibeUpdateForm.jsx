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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getVibe, getYouth, listSites, listYouths } from "../graphql/queries";
import { updateVibe } from "../graphql/mutations";
const client = generateClient();
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
export default function VibeUpdateForm(props) {
  const {
    id: idProp,
    vibe: vibeModelProp,
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
  const [youthIDLoading, setYouthIDLoading] = React.useState(false);
  const [youthIDRecords, setYouthIDRecords] = React.useState([]);
  const [selectedYouthIDRecords, setSelectedYouthIDRecords] = React.useState(
    []
  );
  const [site, setSite] = React.useState(initialValues.site);
  const [siteLoading, setSiteLoading] = React.useState(false);
  const [siteRecords, setSiteRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = vibeRecord
      ? { ...initialValues, ...vibeRecord, youthID, site }
      : initialValues;
    setCheckInVibe(cleanValues.checkInVibe);
    setCheckOutVibe(cleanValues.checkOutVibe);
    setCheckInTime(cleanValues.checkInTime);
    setCheckOutTime(cleanValues.checkOutTime);
    setYouthID(cleanValues.youthID);
    setCurrentYouthIDValue(undefined);
    setCurrentYouthIDDisplayValue("");
    setSite(cleanValues.site);
    setCurrentSiteValue(undefined);
    setCurrentSiteDisplayValue("");
    setErrors({});
  };
  const [vibeRecord, setVibeRecord] = React.useState(vibeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getVibe.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getVibe
        : vibeModelProp;
      const youthIDRecord = record ? record.youthID : undefined;
      const youthRecord = youthIDRecord
        ? (
            await client.graphql({
              query: getYouth.replaceAll("__typename", ""),
              variables: { id: youthIDRecord },
            })
          )?.data?.getYouth
        : undefined;
      setYouthID(youthIDRecord);
      setSelectedYouthIDRecords([youthRecord]);
      const siteRecord = record ? await record.site : undefined;
      setSite(siteRecord);
      setVibeRecord(record);
    };
    queryData();
  }, [idProp, vibeModelProp]);
  React.useEffect(resetStateValues, [vibeRecord, youthID, site]);
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
  const fetchYouthIDRecords = async (value) => {
    setYouthIDLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ fullName: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listYouths.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listYouths?.items;
      var loaded = result.filter((item) => youthID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setYouthIDRecords(newOptions.slice(0, autocompleteLength));
    setYouthIDLoading(false);
  };
  const fetchSiteRecords = async (value) => {
    setSiteLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listSites.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listSites?.items;
      var loaded = result.filter(
        (item) => !siteIdSet.has(getIDValue.site?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setSiteRecords(newOptions.slice(0, autocompleteLength));
    setSiteLoading(false);
  };
  React.useEffect(() => {
    fetchYouthIDRecords("");
    fetchSiteRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          checkInVibe: checkInVibe ?? null,
          checkOutVibe: checkOutVibe ?? null,
          checkInTime: checkInTime ?? null,
          checkOutTime: checkOutTime ?? null,
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
          const modelFieldsToSave = {
            checkInVibe: modelFields.checkInVibe ?? null,
            checkOutVibe: modelFields.checkOutVibe ?? null,
            checkInTime: modelFields.checkInTime ?? null,
            checkOutTime: modelFields.checkOutTime ?? null,
            youthID: modelFields.youthID,
            vibeSiteId: modelFields?.site?.id ?? null,
          };
          await client.graphql({
            query: updateVibe.replaceAll("__typename", ""),
            variables: {
              input: {
                id: vibeRecord.id,
                ...modelFieldsToSave,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "VibeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Check in vibe"
        isRequired={false}
        isReadOnly={false}
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
      ></TextField>
      <TextField
        label="Check out vibe"
        isRequired={false}
        isReadOnly={false}
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
      ></TextField>
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
            ? getDisplayValue.youthID(
                youthIDRecords.find((r) => r.id === value) ??
                  selectedYouthIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentYouthIDDisplayValue(
            value
              ? getDisplayValue.youthID(
                  youthIDRecords.find((r) => r.id === value) ??
                    selectedYouthIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentYouthIDValue(value);
          const selectedRecord = youthIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedYouthIDRecords([selectedRecord]);
          }
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
          options={youthIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.youthID?.(r),
            }))}
          isLoading={youthIDLoading}
          onSelect={({ id, label }) => {
            setCurrentYouthIDValue(id);
            setCurrentYouthIDDisplayValue(label);
            runValidationTasks("youthID", label);
          }}
          onClear={() => {
            setCurrentYouthIDDisplayValue("");
          }}
          defaultValue={youthID}
          onChange={(e) => {
            let { value } = e.target;
            fetchYouthIDRecords(value);
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
          isLoading={siteLoading}
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
          defaultValue={site}
          onChange={(e) => {
            let { value } = e.target;
            fetchSiteRecords(value);
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
          isDisabled={!(idProp || vibeModelProp)}
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
              !(idProp || vibeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
