import React from "react";

const AddField = ({ label, value, onChange }) => {
  return (
    <div>
      <label className="form-label">
        {label}
        <input
          className="form-control"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default AddField;
