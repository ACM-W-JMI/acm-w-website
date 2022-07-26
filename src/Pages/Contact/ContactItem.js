import React from "react";
import styled from "styled-components";

function ContactItem({ icon, title, contact }) {
  return (
    <ContactItemStyled>
      <div className="left-content">{icon}</div>
      <div className="right-content">
        <h6>
          {title}
          <p>{contact}</p>
        </h6>
      </div>
    </ContactItemStyled>
  );
}
const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  .left-content {
    padding: 1.6rem;
    border-radius: 1px solid var(--border-color);
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2.3rem;
    }
  }
  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
    }
    p {
      padding: 0.4rem 0;
      font-size: 0.8rem;
      color: var(--font-light-color);
    }
  }
`;
export default ContactItem;

// padding: 1.5rem 2rem;
// background-color: var(--background-dark-grey);
// display: flex;
// align-items: center;
// &:not(:last-child) {
//   margin-bottom: 2.5rem;
// }
// .left-content {
//   padding: 1.5rem;
//   border: 1px solid var(--border-color);
//   font-size: 2rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 1.5rem;
//   svg {
//     font-size: 2.3rem;
//   }
// }
// .right-content {
//   h6 {
//     color: var(--white-color);
//     font-size: 1.2rem;
//     padding-bottom: 0.6rem;
//   }
//   p {
//     padding: 0.1rem 0;
//   }
// }
