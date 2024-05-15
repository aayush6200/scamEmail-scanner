import React from "react";
import { useState } from "react";

import FORMAPI from "../api/formApi";
import "./style.css";

const Form = (props) => {
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [domain, setDomain] = useState("");
  const [email, setEmail] = useState("");
  const [runApi, setRunApi] = useState(false);
  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(false);

  const contentHandler = (e) => {
    setContent(e.target.value);
  };
  const urlHandler = (e) => {
    setUrl(e.target.value);
  };
  const domainHandler = (e) => {
    setDomain(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const handleCallback = (data) => {
    setLoading(false);
  };
  const appliedHandler = (e) => {
    setApplied(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailContent = {
      content,
      url,
      domain,
      email,
    };
    // setRunApi(true);
    setLoading(true);

    props.onCallback(emailContent, handleCallback);
    setContent("");
    setUrl("");
    setDomain("");
    setEmail("");
  };

  return (
    <>
      <div className="your-component">
        {loading && <div className="loading-spinner"></div>}
      </div>

      {!loading && (
        <div className="form-container">
          <h2>secureInbox</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Url</label>
              <input
                type="text"
                // id="name"
                // name="name"
                value={url}
                onChange={urlHandler}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Domain</label>
              <input
                type="text"
                // id="email"
                // name="email"
                value={domain}
                onChange={domainHandler}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Email Content</label>
              <textarea
                // id="message"
                // name="message"
                value={content}
                onChange={contentHandler}
                required></textarea>
            </div>
            <div className="form-group-apply">
              <label htmlFor="applied">Did you apply for this job?</label>
              <select value={applied} onChange={appliedHandler} required>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unknown">I don't know</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Enter your email</label>
              <textarea
                // id="message"
                // name="message"
                placeholder="Enter an email where you want us to send the result"
                value={email}
                onChange={emailHandler}
                required></textarea>
            </div>
            <div className="detect-btn" style={{ marginLeft: "40%" }}>
              <button type="submit">Detect</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
