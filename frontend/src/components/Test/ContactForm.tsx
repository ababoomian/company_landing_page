import React from "react";
import styled from "styled-components";

function ContactForm(props) {
  return (
    <Container>
      <Header>Contact Us</Header>
      <Description>
        Most calendars are designed for teams. <br /> Slate is designed for
        freelancers
      </Description>
      <FormContainer>
        <FormColumn>
          <FormInput>
            <InputLabel>Your Name</InputLabel>
            <Input />
          </FormInput>
          <FormInput>
            <InputLabel>Your Email</InputLabel>
            <Input />
          </FormInput>
          <FormInput>
            <InputLabel>Your Message</InputLabel>
            <TextArea />
          </FormInput>
        </FormColumn>
       </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  background-color: #fff;
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 1440px;
  flex-direction: column;
  padding: 203px 20px 102px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Header = styled.div`
  color: var(--text, #252b42);
  text-align: center;
  font-family: Graphik, sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 114.583%;
  letter-spacing: 0.2px;
  align-self: center;
  text-wrap: nowrap;

  @media (max-width: 991px) {
    font-size: 40px;
    text-wrap: initial;
  }
`;

const Description = styled.div`
  color: var(--second-text, #374754);
  text-align: center;
  font-family: Graphik, sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 142.857%;
  letter-spacing: 0.2px;
  align-self: stretch;
  margin-top: 27px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FormContainer = styled.div`
  align-self: stretch;
  margin-top: 60px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 100%;
  max-width: 690px;
  margin: auto;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FormInput = styled.div`
  align-items: flex-start;
  align-self: stretch;
  border-radius: 20px;
  border: 1px solid #ddd;
  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);
  background-color: #fff;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 52px 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const InputLabel = styled.div`
  color: var(--text, #252b42);
  font-family: Graphik, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.1px;
  align-self: center;
  text-wrap: nowrap;

  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Input = styled.input`
  color: var(--Background, #18171d);
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.1px;
  align-self: stretch;
  align-items: flex-start;
  border-radius: 39px;
  border: 1px solid #e8e8e8;
  background-color: #f5f5f5;
  margin-top: 45px;
  width: 96%;
  padding: 19px 20px;

  @media (max-width: 991px) {
    text-wrap: initial;
    margin-top: 40px;
  }
`;

const TextArea = styled.textarea`
  color: var(--Background, #18171d);
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 106.667%;
  letter-spacing: 0.1px;
  align-self: stretch;
  text-wrap: nowrap;
  align-items: flex-start;
  border: 1px solid #e8e8e8;
  background-color: #f5f5f5;
  margin-top: 44px;
  width: 95%;
  padding: 26px 20px 123px;

  @media (max-width: 991px) {
    text-wrap: initial;
    margin-top: 40px;
    padding-bottom: 10px;
  }
`;

export default ContactForm;