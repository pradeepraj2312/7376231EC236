import React from "react";
import { Log } from "../../logging_middleware/logger";
export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcmFkZWVwcmFqLmVjMjNAYml0c2F0aHkuYWMuaW4iLCJleHAiOjE3NzgyMzYwMTgsImlhdCI6MTc3ODIzNTExOCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6Ijg4NzRlYWZhLWY4MzYtNDFlMy04MzBkLWIzNDAxMjZmNDg1OSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InByYWRlZXByYWogciIsInN1YiI6IjQ5NTAyNjM5LTdiN2MtNGQ0ZC1hYWNkLWQ2NDE4ZjI4ODQ0MiJ9LCJlbWFpbCI6InByYWRlZXByYWouZWMyM0BiaXRzYXRoeS5hYy5pbiIsIm5hbWUiOiJwcmFkZWVwcmFqIHIiLCJyb2xsTm8iOiI3Mzc2MjMxZWMyMzYiLCJhY2Nlc3NDb2RlIjoidUthSmZtIiwiY2xpZW50SUQiOiI0OTUwMjYzOS03YjdjLTRkNGQtYWFjZC1kNjQxOGYyODg0NDIiLCJjbGllbnRTZWNyZXQiOiJGRmdEbU1qdGtwVGhFanF3In0.qAPRp1OIQZPbMl7swjKnwe88D6I44EBz75l2S0A_DtQ"
function App() {
  const handleClick = async () => {
    await Log("frontend", "info", "component", "User clicked Submit button", token);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Affordmed Full Stack Evaluation</h2>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
