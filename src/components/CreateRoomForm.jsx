import React from "react";

const CreateRoomForm = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        right: 0,
        left: 0,
        height: "60px",
        borderStyle: "solid",
        borderWidth: "0px 0px 10px 0px",
      }}
    >
      <form style={{ borderStyle: "none" }}>
        <input
          type="text"
          name="content"
          onChange={handleOnChange}
          value={content}
          style={{
            width: "90%",
            height: "60px",
            paddingLeft: "5px",
            borderColor: "#6AB04A",
            borderStyle: "solid",
          }}
          placeholder="Write your message 😁"
        />

        <button
          style={{
            width: "10%",
            height: "60px",
            borderStyle: "solid",
            borderWidth: "10px",
            borderColor: "#6AB04A",
            backgroundColor: "#6AB04A",
          }}
          onClick={handleOnSubmit}
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default CreateRoomForm;
