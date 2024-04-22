import React from "react";
import {
  ButtonCheckIn,
  VibeSummary,
  YouthCardCheckedIn,
  YouthCardPickedUp,
  YouthCardDefault,
} from "../ui-components";
import { Link } from "react-router-dom";

import { getSite } from '../services/api.service';


const CheckIn = () => {
  function getCurrentDate() {
    const now = new Date();
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return now.toLocaleDateString("en-US", options);
  }

  const [site, setSite] = React.useState();

  React.useEffect(() => {
    const fetchSiteData = async () => {
      const data = await getSite('03f24a65-f53c-4447-846f-922527d48a52');
      console.log(data);
      setSite(data);
    };
    fetchSiteData();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px 20px",
        }}
      >
        <Link to="/roster" style={{ textDecoration: "none" }}>
          <ButtonCheckIn>ButtonCheckIn</ButtonCheckIn>
        </Link>
        <div
          style={{
            fontFamily: "var(--amplify-fonts-default-variable)",
            fontSize: "2em",
            fontWeight: "bold",
          }}
        >
          {getCurrentDate()}
        </div>
        <div>
          <VibeSummary />
        </div>
      </div>
      <div>
        {site?.roster?.map((item) => {
          if (item?.grade === "SECOND") {
            return <YouthCardCheckedIn key={item?.id} youth={item} />;
          } 
          else if (item?.grade === "THIRD") {
            return <YouthCardPickedUp key={item?.id} youth={item} />;
          } 
          else {
            return <YouthCardDefault key={item?.id} youth={item}/>;
          }
        })}
      </div>
    </div>
  );
};

export default CheckIn;
