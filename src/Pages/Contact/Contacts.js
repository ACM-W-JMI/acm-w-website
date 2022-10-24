import React from "react";
import styled from "styled-components";
import ContactItem from "./ContactItem";
import { InnerLayout, MainLayout } from "../../styles/Layouts";
import { Email } from "@material-ui/icons";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import { useState } from "react";
import "./contact.css"
import toast from "react-hot-toast";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (event) => {
    console.log(name, email, message);
    event.preventDefault();
    try {
      if(name.length<1 || email.length<1 || message.length<1){
        toast.error("One of the fields among name, email,message are empty, try again",{
          style: {
            backgroundColor:'#0344AC',
            padding: '16px',
            color: 'white',
          },
          iconTheme: {
            primary: '#0444AC',
            secondary: '#ff7675',
          },
        });
        return;
      }
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      if (res.status === 400 || !res) {
        toast.error("Message not sent!",{
          style: {
            backgroundColor:'#0344AC',
            padding: '16px',
            color: 'white',
          },
          iconTheme: {
            primary: '#0444AC',
            secondary: '#ff7675',
          },
        })
      } else {
        toast.success('Message sent!',{
          style: {
            backgroundColor:'#0344AC',
            padding: '16px',
            color: 'white',
          },
          iconTheme: {
            primary: '#0444AC',
            secondary: '#ff7675',
          },
        })
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const home = <HomeWorkIcon />;
  const emailI = <Email />;
  return (
    <MainLayout>
      <h1 className="contact-heading">Contact</h1>
      <ContactStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get in Touch</h4>
            </div>
            <form className="form">
              <div className="form-filling">
                <label htmlFor="name">Enter your Name</label>
                <input
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-filling">
                <label htmlFor="email">Enter your Email</label>
                <input
                  placeholder="Enter your Email"
                  type="email"
                  id="email"
                  name="phone"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-filling">
                <label htmlFor="subject">Write your message</label>
                <input
                  placeholder="Write your message"
                  type="text"
                  id="desc"
                  name="desc"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <div className="form-filling f-button">
                <button className="buttonSend" onClick={handleSubmit}>
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
