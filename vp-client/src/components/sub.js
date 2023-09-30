import React, { useState } from "react";
import { SERVER_URL } from "../constants/contants";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [switchToA, setSwitchToA] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can perform some action with the email value here, e.g., send it to a server.
    fetch(`${SERVER_URL}/activation?email=${email}`).then(() => {
      console.log("check your email");
      setSwitchToA(true);
    });
  };

  const downloadPatrike = () => {
    fetch(`${SERVER_URL}/verify-code?email=${email}&code=${code}`).then(
      (res) => {
        function download(blob, filename) {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          // the filename you want
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }

        res.blob().then((blob) => {
          download(blob, "oct1.pdf");
        });
      }
    );
  };

  return (
    <div>
      <h2>Email Form</h2>
      {!switchToA ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        `code sent to ${email}`
      )}
      {switchToA ? (
        <div>
          <label htmlFor="code">Email:</label>
          <input
            id="code"
            type="text"
            placeholder="Enter verification code"
            onChange={handleCodeChange}
          />
          <button onClick={downloadPatrike}>Submit</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default EmailForm;
