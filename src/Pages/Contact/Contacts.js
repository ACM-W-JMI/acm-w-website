import React from "react";
import styled from "styled-components";
import ContactItem from "./ContactItem";
import { InnerLayout, MainLayout } from "../../styles/Layouts";
import { Email } from "@material-ui/icons";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import { useState } from "react";

function Contact() {
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setMsg({ ...msg, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, subject, message } = msg;
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Message not sent, try agin letter");
      } else {
        window.alert("Message Sent");
        setMsg({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const home = <HomeWorkIcon />;
  const emailI = <Email />;
  return (
    <MainLayout>
      <h1>Contact</h1>
      <ContactStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get in Touch</h4>
            </div>
            <form className="form" method="POST" onSubmit={handleSubmit}>
              <div className="form-filling">
                <label htmlFor="name">Enter your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={msg.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-filling">
                <label htmlFor="email">Enter your Email</label>
                <input
                  type="email"
                  id="email"
                  name="phone"
                  value={msg.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-filling">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={msg.message}
                  onChange={handleChange}
                />
              </div>
              <div className="form-filling">
                <label htmlFor="subject">Write your message</label>
                <input
                  type="text"
                  id="desc"
                  name="desc"
                  value={msg.message}
                  onChange={handleChange}
                />
              </div>
              <div className="form-filling f-button">
                <button className="buttonSend" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem icon={emailI} contact={"acmw.jmi@gmail.com"} />
            <ContactItem
              icon={home}
              contact={"Jamia Millia Islamia, Jamia Nagar, New Delhi"}
            />
          </div>
        </InnerLayout>
      </ContactStyled>
    </MainLayout>
  );
}
const ContactStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-filling {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
      .buttonSend {
        background-color: var(--sidebar-dark-color);
        padding: 0.6rem 1rem;
        cursor: pointer;
        color: white;
        display: inline-block;
        font-size: 1rem;
        position: relative;
        transition: all 0 0.4s ease-in;
        border-radius: 20px;
        border: none;
        &:hover {
          background-color: var(--primary-color);
        }
      }
    }
  }
`;
export default Contact;
