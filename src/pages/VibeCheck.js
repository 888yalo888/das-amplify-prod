import React from "react";
import {ButtonCheckInVibe, CheckInModal, CheckInVibeDefault, PickUpModal} from "../ui-components";

import { generateClient } from "aws-amplify/api";
import { useParams } from "react-router-dom";
import { getYouth } from "../graphql/queries";


const client = generateClient();

const VibeCheck = () => {
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
    ).data.getYouth;
    console.log(results)
    return results;
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
    <div
    style={{
      display: "flex",
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: 'center',
      margin: "10px 20px",
    }}
  >
    <h1>{youth?.fullName.split(' ')[0]}, what's your vibe today?</h1>
    <CheckInVibeDefault label={'Ballsy'}/>
    <CheckInVibeDefault/>
    <CheckInVibeDefault/>
    <CheckInVibeDefault/>
    <ButtonCheckInVibe/>
  </div>
  );
};

export default VibeCheck;
