import React from "react";
import {PickUpModal} from "../ui-components";

import { generateClient } from "aws-amplify/api";
import { useParams } from "react-router-dom";
import { getYouth } from "../graphql/queries";


const client = generateClient();

const CheckOut = () => {
  const { youthID } = useParams();
  async function GetYouth() {
    const variables = {
      id: youthID,
    };

    const results = (
      await client.graphql({
        query: getYouth,
        variables,
      })
    ).data.getSite.AttendedBy.items;

    const reduced = results.reduce((youths, item) => {
      youths.push(item.youth);
      return youths;
    }, []);
    return reduced;
  }

  const [youth, setYouth] = React.useState();

  React.useEffect(() => {
    const fetchYouthData = async () => {
      const data = await GetYouth();
      console.log(data);
      setYouth(data);
    };
    fetchYouthData();
  }, []);

  return (
    <div>
      if({youth?.id}){
        <PickUpModal key={youth?.id} />
      }
    </div>
  );
};

export default CheckOut;
