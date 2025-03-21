function Notification({ notification }) {
  if (notification !== "") {
    return (
      <div
        style={{
          border: "2px solid green",
          padding: "10px",
          margin: "10px 0",
          backgroundColor: "#f0f8ff",
        }}
      >
        a new anecdote {notification} has been created!
      </div>
    );
  }

  return null;
}

export default Notification;
