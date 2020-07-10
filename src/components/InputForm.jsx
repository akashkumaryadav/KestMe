import React from "react";

const InputForm = ({
  handleOnSubmit,
  handleOnChange,
  content,
  placeholder,
  icon,
  color,
}) => {
  return (
    <div
      className="container p-0"
      style={{
        position: "fixed",
        bottom: "0",
        right: 0,
        left: 0,
        height: "60.5px",
        borderStyle: "solid",

        borderWidth: "0px 0px 0px 0px",
      }}
    >
      <form style={{ margin: 0 }}>
        <input
          type="text"
          name="content"
          onChange={handleOnChange}
          value={content}
          style={{
            width: "90%",
            height: "60px",
            paddingLeft: "5px",
            borderColor: color,
            borderStyle: "solid",
          }}
          placeholder={placeholder}
          required
        />

        <button
          style={{
            width: "10%",
            height: "60px",
            borderStyle: "solid",
            borderWidth: "12px",
            borderColor: color,
            backgroundColor: color,
          }}
          onClick={handleOnSubmit}
        >
          <i className={icon}></i>
        </button>
      </form>
    </div>
  );
};

export default InputForm;
