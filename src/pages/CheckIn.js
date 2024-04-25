import React from "react";
import {
  ButtonCheckIn,
  VibeSummary,
  YouthCardCheckedIn,
  YouthCardPickedUp,
  YouthCardDefault,
  Vibe,
} from "../ui-components";
import { Link } from "react-router-dom";

import { getSite } from "../services/api.service";
import useStore from "../store/store";
import { gradeMapper } from "../utils/text";
import { Vibe as VibeEnum } from "../enums/vibe.enum";
import EmoteAngry from "../assets/EmoteAngry.png";
import EmoteAtEase from "../assets/EmoteAtEase.png";
import EmoteHappy from "../assets/EmoteHappy.png";
import EmoteSad from "../assets/EmoteSad.png";
import { useMediaQuery } from "react-responsive";

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
      const data = await getSite(store?.currentSite?.id);
      setSite(data);
      store.setSite(data);
    };
    if (store.currentSite) {
      fetchSiteData();
    }
  }, [store.currentSite?.id]);

  function isCheckedIn(youth) {
    return youth.vibes.length > 0;
  }

  function isCheckedOut(youth) {
    return youth.vibes.length > 0 && youth.vibes[0].checkOutTime;
  }

  const Roster = () => {
    return site?.roster?.map((youth) => {
      const overrides = {
        YouthName: {
          children: youth.fullName,
        },
        YouthGrade: {
          children: gradeMapper(youth.grade),
        },
      };
      if (youth.vibes.length > 0) {
        if (youth.vibes[0].checkOutTime) {
          return (
            <YouthCardPickedUp
              key={youth?.id}
              youth={youth}
              className={"youth-card"}
              overrides={overrides}
            />
          );
        }
        return (
          <YouthCardCheckedIn
            key={youth?.id}
            youth={youth}
            className={"youth-card"}
            overrides={overrides}
          />
        );
      }
      return (
        <YouthCardDefault
          key={youth?.id}
          youth={youth}
          className={"youth-card"}
          overrides={overrides}
        />
      );
    });
  };

  const getVibeSummaryOverrides = () => {
    const checkedIn = site?.roster.filter((youth) => isCheckedIn(youth));
    const checkedOut = site?.roster.filter((youth) => isCheckedOut(youth));
    const total = site?.roster;
    const totalAtEase = checkedIn?.filter(
      (youth) => youth.vibes[0].checkInVibe === VibeEnum.AtEase
    ).length;
    const totalAngry = checkedIn?.filter(
      (youth) => youth.vibes[0].checkInVibe === VibeEnum.Angry
    ).length;
    const totalSad = checkedIn?.filter(
      (youth) => youth.vibes[0].checkInVibe === VibeEnum.Sad
    ).length;
    const totalHappy = checkedIn?.filter(
      (youth) => youth.vibes[0].checkInVibe === VibeEnum.Happy
    ).length;
    return {
      "4/11": {
        children: `${checkedIn?.length}/${total?.length}`,
        fontFamily: "fantasy",
        fontWeight: "900",
      },
      "1/4": {
        children: `${checkedOut?.length}/${checkedIn?.length}`,
        fontFamily: "fantasy",
        fontWeight: "900",
      },
      15922672: {
        children: totalAtEase,
        fontFamily: "fantasy",
        fontWeight: "900",
      },
      15922669: {
        children: totalAngry,
        fontFamily: "fantasy",
        fontWeight: "900",
      },
      15922670: {
        children: totalSad,
        fontFamily: "fantasy",
        fontWeight: "900",
      },
      15922671: {
        children: totalHappy,
        fontFamily: "fantasy",
        fontWeight: "900",
      },
      EmoteCool: {
        src: EmoteAtEase,
      },
      EmoteHappy: {
        src: EmoteHappy,
      },
      EmoteSad: {
        src: EmoteSad,
      },
      EmoteAngry: {
        src: EmoteAngry,
      },
    };
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1020px)" });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px 20px",
          flexDirection: isTabletOrMobile ? "column" : "row",
        }}
      >
        <Link
          to="/roster"
          style={{
            textDecoration: "none",
          }}
        >
          <ButtonCheckIn
            style={{
              width: "auto",
              minWidth: "190px",
              maxWidth: "225px",
              padding: 0,
            }}
          >
            ButtonCheckIn
          </ButtonCheckIn>
        </Link>
        <div
          style={{
            fontFamily: "var(--amplify-fonts-default-variable)",
            fontSize: isTabletOrMobile ? "1.4em" : "2em",
            fontWeight: "bold",
            margin: isTabletOrMobile ? "30px 10px" : 0,
            textAlign: "center",
          }}
        >
          {getCurrentDate()}
        </div>
        <div>
          <VibeSummary
            className=".vibe-summary"
            overrides={getVibeSummaryOverrides()}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: isTabletOrMobile ? "column" : "row",
          alignItems: isTabletOrMobile ? "center" : "",
          flexWrap: "wrap",
        }}
      >
        <Roster></Roster>
      </div>
    </div>
  );
};

export default CheckIn;
