import { Vibe } from "../enums/vibe.enum"
import EmoteAngry from "../assets/EmoteAngry.png";
import EmoteAtEase from "../assets/EmoteAtEase.png";
import EmoteHappy from "../assets/EmoteHappy.png";
import EmoteSad from "../assets/EmoteSad.png";

export const VibeImageMap = {
    [Vibe.Angry]: EmoteAngry,
    [Vibe.Sad]: EmoteSad,
    [Vibe.AtEase]: EmoteAtEase,
    [Vibe.Happy]: EmoteHappy,
};