import { useState } from "react";
import "./App.css";
import html2pdf from "html2pdf.js";

import { GeneralInfoForm } from "./Components/GeneralInfoForm";
import { GeneralInfoDisplay } from "./Components/GeneralInfoDisplay";
import { EducationInfoForm } from "./Components/EducationInfoForm";
import { EducationInfoDisplay } from "./Components/EducationInfoDisplay";
import { ExperienceInfoForm } from "./Components/ExperienceInfoForm";
import { ExperienceInfoDisplay } from "./Components/ExperienceInfoDisplay";
import { ProfilePhotoUpload } from "./Components/ProfilePhotoUpload";

function App() {
  const [Name, setName] = useState("Mira Zoubi");
  const [Email, setEmail] = useState("mirazoubi2025@outlook.com");
  const [PhoneNumber, setPhoneNumber] = useState("+962 796 376 907");

  const [School, setSchool] = useState("Al-Hussein Technical University");
  const [Degree, setDegree] = useState("Computer Science");
  const [StartDate, setStartDate] = useState("2022");
  const [EndDate, setEndDate] = useState("2026");

  const [CompanyName, setCompanyName] = useState("Egnite");
  const [PositionTitle, setPositionTitle] = useState(
    "Frontend Developer Intern"
  );
  const [BeginDate, setBeginDate] = useState("2025");
  const [FinishDate, setFinishDate] = useState("Present");

  const [EducationOpen, setEducationOpen] = useState(true);
  const [ExperienceOpen, setExperienceOpen] = useState(true);

  const [photoFile, setPhotoFile] = useState(null);

  function downloadCV() {
    const element = document.getElementById("cv-preview");

    const options = {
      margin: 0.5,
      filename: "Mira_Zoubi_CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  }

  return (
    <div className="cv-app">
      <aside className="cv-editor">
        <h1 className="editor-title">CV Editor</h1>


        <button className="download-btn" onClick={downloadCV}>
          ⬇️ Download CV (PDF)
        </button>

        <section className="editor-section">
          <h2 className="section-title">Profile Photo</h2>
          <ProfilePhotoUpload
            photoFile={photoFile}
            setPhotoFile={setPhotoFile}
          />
        </section>

        <section className="editor-section">
          <h2 className="section-title">Personal Information</h2>
          <GeneralInfoForm
            Name={Name}
            Email={Email}
            PhoneNumber={PhoneNumber}
            setName={setName}
            setEmail={setEmail}
            setPhoneNumber={setPhoneNumber}
          />
        </section>

        <section className="editor-section">
          <button
            type="button"
            className="dropdown-header"
            onClick={() => setEducationOpen(!EducationOpen)}
          >
            <span>Education</span>
            <span className={`arrow ${EducationOpen ? "open" : ""}`}>▾</span>
          </button>

          {EducationOpen && (
            <EducationInfoForm
              School={School}
              Degree={Degree}
              StartDate={StartDate}
              EndDate={EndDate}
              setSchool={setSchool}
              setDegree={setDegree}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          )}
        </section>

        <section className="editor-section">
          <button
            type="button"
            className="dropdown-header"
            onClick={() => setExperienceOpen(!ExperienceOpen)}
          >
            <span>Experience</span>
            <span className={`arrow ${ExperienceOpen ? "open" : ""}`}>▾</span>
          </button>

          {ExperienceOpen && (
            <ExperienceInfoForm
              CompanyName={CompanyName}
              PositionTitle={PositionTitle}
              BeginDate={BeginDate}
              FinishDate={FinishDate}
              setCompanyName={setCompanyName}
              setPositionTitle={setPositionTitle}
              setBeginDate={setBeginDate}
              setFinishDate={setFinishDate}
            />
          )}
        </section>
      </aside>

      <main className="cv-preview" id="cv-preview">
        <GeneralInfoDisplay
          Name={Name}
          Email={Email}
          PhoneNumber={PhoneNumber}
          photoFile={photoFile}
        />

        <EducationInfoDisplay
          School={School}
          Degree={Degree}
          StartDate={StartDate}
          EndDate={EndDate}
        />

        <ExperienceInfoDisplay
          CompanyName={CompanyName}
          PositionTitle={PositionTitle}
          BeginDate={BeginDate}
          FinishDate={FinishDate}
        />
      </main>
    </div>
  );
}

export default App;
