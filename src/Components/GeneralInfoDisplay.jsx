import { useEffect, useState } from "react";
import "../Style/GeneralInfoDisplay.css";

export function GeneralInfoDisplay({ Name, Email, PhoneNumber, photoFile }) {
  const [photoURL, setPhotoURL] = useState(null);

  useEffect(() => {
    if (!photoFile) {
      setPhotoURL(null);
      return;
    }

    const url = URL.createObjectURL(photoFile);
    setPhotoURL(url);

    // cleanup to avoid memory leaks
    return () => URL.revokeObjectURL(url);
  }, [photoFile]);

  return (
    <div className="DisplayForm">
      {/* ✅ Profile Photo */}
      {photoURL && (
        <img
          src={photoURL}
          alt="Profile"
          className="ProfilePhoto"
        />
      )}

      <div className="Name">{Name}</div>

      <div className="EmailPhoneNumber">
        <div>{Email} |</div>
        <div>{PhoneNumber}</div>
      </div>
    </div>
  );
}
