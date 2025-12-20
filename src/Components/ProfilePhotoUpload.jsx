
export function ProfilePhotoUpload({ photoFile, setPhotoFile }) {
  
  function handleChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file (png/jpg).");
      return;
    }

    setPhotoFile(file);
  }

  function removePhoto() {
    setPhotoFile(null);
  }

  return (
    <div className="Form">
      <h2 className="FormTitle"> Profile Photo</h2>

      <input type="file" accept="image/*" onChange={handleChange} />

      {photoFile && (
        <div style={{ marginTop: "10px" }}>
          <p>
            Selected: <strong>{photoFile.name}</strong>
          </p>
          <button type="button" onClick={removePhoto}>
            Remove Photo
          </button>
        </div>
      )}
    </div>
  );
}
