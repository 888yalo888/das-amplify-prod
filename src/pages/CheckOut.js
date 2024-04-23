import React from "react";
import { ButtonCheckInVibe, CheckInVibe } from "../ui-components";

import { useNavigate, useParams } from "react-router-dom";
import { checkOutYouth, getYouthInfo } from "../services/api.service";
import { Vibe } from '../enums/vibe.enum';
import useStore from "../store/store";

const CheckOut = () => {
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

  const [selectedVibe, setSelectedVibe] = React.useState();  

  const VibeOptions = () => {
    function onOptionClick(vibe) {
      setSelectedVibe(vibe);
    }
    
    function getOverrides(vibe) {
      return {
        CheckInVibe: {
          className: `check-in-option ${selectedVibe === vibe ? 'check-in-option__selected' : ''}`,
          onClick: () => onOptionClick(vibe),
        },
        'At Ease': {
          children: vibe,
        },
      };
    }
    const vibes = Object.values(Vibe).map((vibe) => <CheckInVibe key={vibe} overrides={getOverrides(vibe)} />);
    
    return vibes;
  }

  const checkOutButtonOverrides = {
    ButtonCheckInVibe: {
      className: 'check-in-btn',
    },
    ButtonCheckInVibe6151869: {
      isDisabled: !selectedVibe
    },
  };

  async function onCheckOutClick() {
    console.log(youth.vibes);
    await checkOutYouth(youth.vibes[0].id, selectedVibe).catch((error) => console.log('check in error', error));
    navigate('/check-in');
  }

  return (
    <div
    style={{
      display: "flex",
      flexDirection: 'column',
      justifyContent: "center",
      alignItems: 'center',
      margin: "10px 20px",
    }}>
      <VibeOptions></VibeOptions>
      <h2>Please confirm that </h2>
      <h1>{youth?.fullName}</h1>
      <h2>is being picked up.</h2>
      <ButtonCheckInVibe overrides={checkOutButtonOverrides} onClick={onCheckOutClick}/>
    </div>
  );
};

export default CheckOut;
