import React from "react";
import { PickUpModal } from "../ui-components";

import { useParams } from "react-router-dom";
import { getYouthInfo } from "../services/api.service";

const CheckOut = () => {
  const { youthID } = useParams();
  const [youth, setYouth] = React.useState();

  React.useEffect(() => {
    const fetchYouthData = async () => {
      const data = await getYouthInfo(youthID);
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
    }}>
      <h2>Please confirm that </h2>
      <h1>{youth?.fullName}</h1>
      <h2>is being picked up.</h2>
    </div>
  );
};

export default CheckOut;
