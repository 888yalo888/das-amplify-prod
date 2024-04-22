import React from "react";
import {
  ButtonCheckIn,
  Youths,
  VibeSummary,
  YouthVibe,
  YouthCardCheckedIn,
  YouthCardPickedUp,
  YouthCardDefault,
} from "../ui-components";
import { Link, Navigate } from "react-router-dom";

import { generateClient } from "aws-amplify/api";
import { getYouthRosterForSite, getRosterById, getYouth } from "../graphql/queries";

const client = generateClient();

const CheckIn = () => {
  async function getRoster() {
    const variables = {
      // date: new Date().toISOString().split("T")[0],
      // siteId: "03f24a65-f53c-4447-846f-922527d48a52",
      id: "03f24a65-f53c-4447-846f-922527d48a52",
    };

    const results = (
      await client.graphql({
        query: getRosterById,
        variables,
      })
    ).data.getSite.AttendedBy.items;

    const reduced = results.reduce((youths, item) => {
      youths.push(item.youth);
      return youths;
    }, []);
    return reduced;
  }

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

  const [roster, setRoster] = React.useState();

  React.useEffect(() => {
    const fetchRosterData = async () => {
      const data = await getRoster();
      console.log(data);
      setRoster(data);
    };
    fetchRosterData();
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
        {roster?.map((item) => {
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
