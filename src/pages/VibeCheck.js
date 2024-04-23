import React from "react";
import { ButtonCheckInVibe, CheckInVibe } from "../ui-components";

import { useParams } from "react-router-dom";
import { checkInYouth, getYouthInfo } from "../services/api.service";
import { Vibe } from '../enums/vibe.enum';
import useStore from "../store/store";

const VibeCheck = () => {
  const { youthID } = useParams();

  const [youth, setYouth] = React.useState();

  React.useEffect(() => {
    const fetchYouthData = async () => {
      setYouth(await getYouthInfo(youthID));
    };
    fetchYouthData();
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

  const site = useStore((state) => state.currentSite);
  async function onCheckInClick() {
    await checkInYouth(site.id, youth.id, selectedVibe).then((result) => console.log('check in result', result)).catch((error) => console.log('check in error', error));
  }

  const checkInButtonOverrides = {
    ButtonCheckInVibe: {
      className: 'check-in-btn',
    },
    ButtonCheckInVibe6151869: {
      isDisabled: !selectedVibe
    },
  };

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
    <VibeOptions></VibeOptions>
    <ButtonCheckInVibe overrides={checkInButtonOverrides} onClick={onCheckInClick}/>
  </div>
  );
};

export default VibeCheck;
