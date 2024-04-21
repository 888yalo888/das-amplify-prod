import React from "react";
import { ButtonCheckIn, Youths, VibeSummary } from "../ui-components";

const CheckIn = () => {
  async function getRoster() {
    const variables = {
      date: new Date().toISOString().split("T")[0],
      siteId: "03f24a65-f53c-4447-846f-922527d48a52",
    };

    const results = (
      await client.graphql({
        query: getYouthRosterForSite,
        variables,
      })
    ).data.getSite.AttendedBy.items;
    console.log(results);

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

  const [roster, setRoster] = React.useState(undefined);

  React.useEffect(() => {
    const fetchRosterData = async () => {
      const data = await getRoster();
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
        <ButtonCheckIn>ButtonCheckIn</ButtonCheckIn>
        <div
          style={{
            fontFamily: "var(--amplify-fonts-default-variable)",
            fontSize: "2em",
            fontWeight: "bold",
          }}
        >
          {getCurrentDate()}
        </div>{" "}
        <div>
          <VibeSummary />
        </div>
      </div>
      <div>
        <Youths items={roster} />
      </div>
    </div>
  );
};

export default CheckIn;
