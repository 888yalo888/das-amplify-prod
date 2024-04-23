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
import useStore from '../store/store';


const CheckIn = () => {
  const store = useStore();
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
      const data = await getSite(store.currentSite.id);
      console.log(data);
      setSite(data);
      store.setSite(data);
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
            return <YouthCardCheckedIn key={item?.id} youth={item} style={{margin:'25px'}}/>;
          } 
          else if (item?.grade === "THIRD") {
            return <YouthCardPickedUp key={item?.id} youth={item} style={{margin:'25px'}}/>;
          } 
          else {
            return <YouthCardDefault key={item?.id} youth={item} style={{margin:'25px'}}/>;
          }
        })}
      </div>
    </div>
  );
};

export default CheckIn;
