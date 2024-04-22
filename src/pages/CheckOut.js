import React from "react";
import {PickUpModal} from "../ui-components";

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
    <div>
      if({youth?.id}){
        <PickUpModal key={youth?.id} />
      }
    </div>
  );
};

export default CheckOut;
