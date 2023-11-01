import React from "react";
import styled from "styled-components";

function ContactForm(props) {
  return (
    <Container>
        <Navigation>miban</Navigation>
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
          <SubmitButton>Send</SubmitButton>
        </FormColumn>
        <ContactInfoColumn>
          <ContactInfo>
            <LocationIcon srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24171b84-71d6-41f4-95a1-29e335adf71c?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24171b84-71d6-41f4-95a1-29e335adf71c?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24171b84-71d6-41f4-95a1-29e335adf71c?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24171b84-71d6-41f4-95a1-29e335adf71c?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24171b84-71d6-41f4-95a1-29e335adf71c?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24171b84-71d6-41f4-95a1-29e335adf71c?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24171b84-71d6-41f4-95a1-29e335adf71c?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24171b84-71d6-41f4-95a1-29e335adf71c?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
            <LocationText>
              6386 Spring St undefined Anchorage, <br /> Georgia 12473 United
              States
            </LocationText>
          </ContactInfo>
          <ContactInfo>
            <PhoneIcon srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/435155ba-1d5a-4d4a-aa14-b40a13197f62?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/435155ba-1d5a-4d4a-aa14-b40a13197f62?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/435155ba-1d5a-4d4a-aa14-b40a13197f62?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/435155ba-1d5a-4d4a-aa14-b40a13197f62?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/435155ba-1d5a-4d4a-aa14-b40a13197f62?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/435155ba-1d5a-4d4a-aa14-b40a13197f62?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/435155ba-1d5a-4d4a-aa14-b40a13197f62?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/435155ba-1d5a-4d4a-aa14-b40a13197f62?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
            <PhoneText>(843) 555-0130</PhoneText>
          </ContactInfo>
          <ContactInfo>
            <EmailIcon srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bcd83705-c6e3-4f2d-baa0-eb585b9a1e59?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcd83705-c6e3-4f2d-baa0-eb585b9a1e59?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcd83705-c6e3-4f2d-baa0-eb585b9a1e59?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcd83705-c6e3-4f2d-baa0-eb585b9a1e59?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcd83705-c6e3-4f2d-baa0-eb585b9a1e59?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcd83705-c6e3-4f2d-baa0-eb585b9a1e59?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcd83705-c6e3-4f2d-baa0-eb585b9a1e59?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcd83705-c6e3-4f2d-baa0-eb585b9a1e59?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
            <EmailText>willie.jennings@example.com</EmailText>
          </ContactInfo>
        </ContactInfoColumn>
        <ImagesContainer>
          <Image srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0818532b-2754-4635-be46-55af730a3cf9?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0818532b-2754-4635-be46-55af730a3cf9?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0818532b-2754-4635-be46-55af730a3cf9?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0818532b-2754-4635-be46-55af730a3cf9?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0818532b-2754-4635-be46-55af730a3cf9?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0818532b-2754-4635-be46-55af730a3cf9?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0818532b-2754-4635-be46-55af730a3cf9?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0818532b-2754-4635-be46-55af730a3cf9?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
          <SocialIcons>
            <SocialIcon srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3023d15a-a4a9-4854-9122-283fa2ac2846?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3023d15a-a4a9-4854-9122-283fa2ac2846?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3023d15a-a4a9-4854-9122-283fa2ac2846?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3023d15a-a4a9-4854-9122-283fa2ac2846?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3023d15a-a4a9-4854-9122-283fa2ac2846?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3023d15a-a4a9-4854-9122-283fa2ac2846?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3023d15a-a4a9-4854-9122-283fa2ac2846?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3023d15a-a4a9-4854-9122-283fa2ac2846?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
            <SocialIcon srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/52533568-2b34-4b41-909f-c1968e3ab002?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/52533568-2b34-4b41-909f-c1968e3ab002?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52533568-2b34-4b41-909f-c1968e3ab002?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/52533568-2b34-4b41-909f-c1968e3ab002?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/52533568-2b34-4b41-909f-c1968e3ab002?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/52533568-2b34-4b41-909f-c1968e3ab002?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/52533568-2b34-4b41-909f-c1968e3ab002?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/52533568-2b34-4b41-909f-c1968e3ab002?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
            <SocialIcon srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eb618b2a-88a0-476d-a3f5-789c5eeb97c6?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb618b2a-88a0-476d-a3f5-789c5eeb97c6?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb618b2a-88a0-476d-a3f5-789c5eeb97c6?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb618b2a-88a0-476d-a3f5-789c5eeb97c6?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb618b2a-88a0-476d-a3f5-789c5eeb97c6?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb618b2a-88a0-476d-a3f5-789c5eeb97c6?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb618b2a-88a0-476d-a3f5-789c5eeb97c6?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eb618b2a-88a0-476d-a3f5-789c5eeb97c6?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
          </SocialIcons>
        </ImagesContainer>
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
  padding: 203px 0px;

  @media (max-width: 991px) {
    width:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
  }
`;
const Navigation = styled.nav`
  display: flex;
  text-align: center;
  background-color: #fff;
  width: 100%;
`
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
    align-items:center;
    width:100%;
    margin-top: 40px;
  }
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 400px;
  margin-left: 0px;

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
    width:400px;
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
    width:100%;
  }
`;

const Input = styled.input`
  color: var(--Background, #18171d);
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 106.667%;
  letter-spacing: 0.1px;
  align-self: stretch;
  text-wrap: nowrap;
  align-items: flex-start;
  border-radius: 39px;
  border: 1px solid #e8e8e8;
  background-color: #f5f5f5;
  margin-top: 45px;
  width: 100%;
  padding: 19px 20px;

  @media (max-width: 991px) {
    width:80%;
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
  width: 100%;
  padding: 26px 0px;

  @media (max-width: 991px) {
    
    text-wrap: initial;
    margin-top: 40px;
    padding-bottom: 10px;
  }
`;

const SubmitButton = styled.div`
  align-items: center;
  border-radius: 35px;
  background-color: var(--Primary, #2091f9);
  align-self: start;
  display: flex;
  margin-top: 45px;
  width: 145px;
  max-width: 100%;
  flex-grow: 1;
  flex-direction: column;
  padding: 18px 20px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ContactInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 62%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ContactInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 991px) {
    margin-top: 35px;
  }
`;

const LocationIcon = styled.img`
  aspect-ratio: 0.81;
  object-fit: cover;
  object-position: center;
  width: 26px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
`;

const LocationText = styled.div`
  color: var(--second-text, #374754);
  text-align: center;
  font-family: Graphik, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 143.75%;
  letter-spacing: 0.1px;
  align-self: stretch;
  margin-top: 20px;
`;

const PhoneIcon = styled.img`
  aspect-ratio: 0.62;
  object-fit: cover;
  object-position: center;
  width: 21px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
`;

const PhoneText = styled.div`
  color: var(--second-text, #374754);
  text-align: center;
  font-family: Graphik, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 143.75%;
  letter-spacing: 0.1px;
  align-self: stretch;
  margin-top: 20px;
  text-wrap: nowrap;

  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const EmailIcon = styled.img`
  aspect-ratio: 1.23;
  object-fit: cover;
  object-position: center;
  width: 27px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
`;

const EmailText = styled.div`
  color: var(--second-text, #374754);
  text-align: center;
  font-family: Graphik, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 143.75%;
  letter-spacing: 0.1px;
  align-self: stretch;
  margin-top: 20px;
  text-wrap: nowrap;

  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const ImagesContainer = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  width: 170px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  margin: 70px 0 0 10px;

  @media (max-width: 991px) {
    justify-content: center;
    margin-top: 40px;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.6;
  object-fit: cover;
  object-position: center;
  width: 516px;
  overflow: hidden;
  align-self: center;
  margin-top: 60px;
  max-width: 100%;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SocialIcons = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
`;

const SocialIcon = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex: 1;
`;

export default ContactForm;

