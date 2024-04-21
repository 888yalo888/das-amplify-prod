/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Youth } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import YouthVibe from "./YouthVibe";
import { Collection } from "@aws-amplify/ui-react";
export default function Youths(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.fullName(SortDirection.ASCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Youth,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    async function setItemsFromDataStore() {
      var loaded = await Promise.all(
        itemsDataStore.map(async (item) => ({
          ...item,
          vibes: await item.vibes.toArray(),
        }))
      );
      setItems(loaded);
    }
    setItemsFromDataStore();
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "Youths")}
      {...rest}
    >
      {(item, index) => (
        <YouthVibe
          youth={item}
          height="auto"
          width="300px"
          margin="5px 5px 5px 5px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></YouthVibe>
      )}
    </Collection>
  );
}
