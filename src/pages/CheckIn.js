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
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { getSite } from "../services/api.service";
import useStore from "../store/store";
import { gradeMapper } from "../utils/text";
import { Vibe as VibeEnum } from "../enums/vibe.enum";
import EmoteAngry from "../assets/EmoteAngry.png";
import EmoteAtEase from "../assets/EmoteAtEase.png";
import EmoteHappy from "../assets/EmoteHappy.png";
import EmoteSad from "../assets/EmoteSad.png";
import { useMediaQuery } from "react-responsive";
import { VibeImageMap } from "../utils/image";

import "react-day-picker/style.css";
import "../styles/DayPicker.css";

const CheckIn = () => {
    const store = useStore();

    const dayPickerRef = React.useRef(null);

    const [site, setSite] = React.useState();
    const [showDayPicker, setShowDayPicker] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    // const handleIconClick = () => {
    //     setShowDayPicker(!showDayPicker);
    // };

    const handleDayClick = (day) => {
        const localDate = new Date(day);
        localDate.setMinutes(
            localDate.getMinutes() + localDate.getTimezoneOffset()
        );

        setSelectedDate(localDate);
        setShowDayPicker(false);
        console.log("selectedDateOnClick", localDate);
    };

    const handleOutsideClick = (event) => {
        if (
            !!dayPickerRef.current &&
            !dayPickerRef.current.contains(event.target)
        ) {
            setShowDayPicker(false);
            console.log(dayPickerRef.current);
        }
    };

    function getDate(date = selectedDate) {
        const now = new Date();
        const options = {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        };
        // console.log(date);
        return (date || now).toLocaleDateString("en-US", options);
    }

    React.useEffect(() => {
        if (showDayPicker) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [showDayPicker]);

    React.useEffect(() => {
        console.log("selectedDate", selectedDate);
        const fetchSiteData = async () => {
            const data = await getSite(store?.currentSite?.id, selectedDate);
            setSite(data);
            store.setSite(data);
            console.log("data", data);
        };

        if (store.currentSite?.id) {
            fetchSiteData();
        }
    }, [store.currentSite?.id, selectedDate]);

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
                EmoteCool: {
                    src:
                        VibeImageMap[youth.vibes?.[0]?.checkOutVibe] ||
                        VibeImageMap[youth.vibes?.[0]?.checkInVibe] ||
                        "",
                },
            };
            if (youth.vibes.length > 0) {
                if (youth.vibes[0].checkOutTime) {
                    return (
                        <YouthCardPickedUp
                            key={youth?.id}
                            youth={youth}
                            className={["youth-card", "picked-up"]}
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
            (youth) =>
                youth.vibes[0].checkOutVibe === VibeEnum.AtEase ||
                (!youth.vibes[0].checkOutVibe &&
                    youth.vibes[0].checkInVibe === VibeEnum.AtEase)
        ).length;
        const totalAngry = checkedIn?.filter(
            (youth) =>
                youth.vibes[0].checkOutVibe === VibeEnum.Angry ||
                (!youth.vibes[0].checkOutVibe &&
                    youth.vibes[0].checkInVibe === VibeEnum.Angry)
        ).length;
        const totalSad = checkedIn?.filter(
            (youth) =>
                youth.vibes[0].checkOutVibe === VibeEnum.Sad ||
                (!youth.vibes[0].checkOutVibe &&
                    youth.vibes[0].checkInVibe === VibeEnum.Sad)
        ).length;
        const totalHappy = checkedIn?.filter(
            (youth) =>
                youth.vibes[0].checkOutVibe === VibeEnum.Happy ||
                (!youth.vibes[0].checkOutVibe &&
                    youth.vibes[0].checkInVibe === VibeEnum.Happy)
        ).length;
        return {
            "4/11": {
                children: `${checkedIn?.length || 0}/${total?.length || 0}`,
                fontFamily: "fantasy",
                fontWeight: "900",
            },
            "1/4": {
                children: `${checkedOut?.length || 0}/${
                    checkedIn?.length || 0
                }`,
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
                    flexFlow: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: isTabletOrMobile ? "10px" : "10px 152px",
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
                            maxWidth: "300px",
                            padding: 0,
                        }}
                    >
                        ButtonCheckIn
                    </ButtonCheckIn>
                </Link>
                <div
                    style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "center",
                        gap: "20px",
                    }}
                >
                    {/* <div
            style={{
              fontFamily: "var(--amplify-fonts-default-variable)",
              fontSize: isTabletOrMobile ? "1.4em" : "2em",
              fontWeight: "bold",
              margin: isTabletOrMobile ? "30px 10px" : 0,
              textAlign: "center",
            }}
          >
            {getCurrentDate()}
          </div> */}

                    {showDayPicker ? (
                        <div
                            ref={dayPickerRef}
                            style={{
                                backgroundColor: "white",
                                position: "absolute",
                                // top: "80px",
                                zIndex: 99,
                                fontSize: isTabletOrMobile ? "1.4em" : "2em",
                                // fontWeight: "bold",
                                margin: isTabletOrMobile ? "30px 10px" : 0,
                                textAlign: "center",
                                fontFamily:
                                    "var(--amplify-fonts-default-variable)",
                            }}
                        >
                            <DayPicker
                                onDayClick={handleDayClick}
                                // captionLayout="dropdown"
                            />
                        </div>
                    ) : (
                        <div>
                            <div
                                style={{
                                    fontFamily:
                                        "var(--amplify-fonts-default-variable)",
                                    fontSize: isTabletOrMobile
                                        ? "1.4em"
                                        : "2em",
                                    fontWeight: "bold",
                                    margin: isTabletOrMobile ? "30px 10px" : 0,
                                    textAlign: "center",
                                    cursor: "pointer",
                                }}
                                onClick={() => setShowDayPicker(true)}
                            >
                                {getDate(selectedDate)}
                            </div>
                            {/* {showDayPicker && (
                            <div
                                ref={dayPickerRef}
                                style={{
                                    backgroundColor: "white",
                                    position: "absolute",
                                    top: "80px",
                                    zIndex: 1,
                                }}
                            >
                                <DayPicker
                                    captionLayout="dropdown"
                                    onDayClick={handleDayClick}
                                />
                            </div>
                        )} */}
                        </div>
                    )}
                </div>

                <div>
                    <VibeSummary overrides={getVibeSummaryOverrides()} />
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: isTabletOrMobile ? "column" : "row",
                    alignItems: isTabletOrMobile ? "center" : "",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                <Roster></Roster>
            </div>
        </div>
    );
};

export default CheckIn;
