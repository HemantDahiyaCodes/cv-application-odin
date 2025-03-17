import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GeneralInformation } from "../components/generalInformation";
import { EducationInfo } from "../components/EducationExp";
import { WorkInfo } from "../components/workExp";
import "../styles/first-section/first-section-style.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralInformation />
    <EducationInfo />
    <WorkInfo />
  </StrictMode>
);
