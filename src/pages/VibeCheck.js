import React from "react";
import { ButtonCheckInVibe, CheckInVibe } from "../ui-components";

import { useNavigate, useParams } from "react-router-dom";
import { checkInYouth, getYouthInfo } from "../services/api.service";
import { Vibe } from "../enums/vibe.enum";
import useStore from "../store/store";
import EmoteAngry from "../assets/EmoteAngry.png";
import EmoteAtEase from "../assets/EmoteAtEase.png";
import EmoteHappy from "../assets/EmoteHappy.png";
import EmoteSad from "../assets/EmoteSad.png";
import { useMediaQuery } from "react-responsive";


const VibeCheck = () => {
  const site = useStore((state) => state.currentSite);
  const navigate = useNavigate();
  const { youthID } = useParams();
  
  const [youth, setYouth] = React.useState();
  
  React.useEffect(() => {
    const fetchYouthData = async () => {
      setYouth(await getYouthInfo(youthID));
    };
    const foundYouthData = site.roster.find((youth) => youth.id === youthID);
    if (!foundYouthData) {
      fetchYouthData();
    } else {
      setYouth(foundYouthData);
    }
  }, []);
  
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 760px)" });
  const [selectedVibe, setSelectedVibe] = React.useState();

  const VibeOptions = () => {
    function onOptionClick(vibe) {
      setSelectedVibe(vibe);
    }

    function getOverrides(vibe) {
      return {
        CheckInVibe: {
          className: `check-in-option ${
            selectedVibe === vibe ? "check-in-option__selected" : ""
          }`,
          onClick: () => onOptionClick(vibe),
        },
        Content: vibe,
        Emote: {
          src: vibe === Vibe.Angry ? EmoteAngry
          : vibe === Vibe.AtEase ? EmoteAtEase
          : vibe === Vibe.Sad ? EmoteSad
          : vibe === Vibe.Happy ? EmoteHappy
          : null,
          alt: vibe,
        },
        Label: {
          children: vibe,
        },
        Vibe: {
          vibe: vibe,
        },
      };
    }
    const vibes = Object.values(Vibe).map((vibe) => <CheckInVibe key={vibe} overrides={getOverrides(vibe)}/>);

    return vibes;
  };

  async function onCheckInClick() {
    await checkInYouth(site.id, youth.id, selectedVibe).catch((error) =>
      console.log("check in error", error)
    );
    navigate("/check-in");
  }

  const checkInButtonOverrides = {
    ButtonCheckInVibe: {
      className: "check-in-btn",
    },
    ButtonCheckInVibe6151869: {
      isDisabled: !selectedVibe,
      margin: "auto",
      width: isTabletOrMobile ? "350px": "400px"
    },
  };



  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px 20px",
        textAlign: "center",
      }}
    >
      <h1>Hey {youth?.fullName.split(" ")[0]}, what's your vibe today?</h1>
      <VibeOptions>Angry</VibeOptions>
      <ButtonCheckInVibe 
        overrides={checkInButtonOverrides}
        onClick={onCheckInClick}
      />
    </div>
  );
};

export default VibeCheck;
