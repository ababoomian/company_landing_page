import React from "react";
import styled from "styled-components";

function Contacts(props) {
  return (
    <Contact>
      <Wrapper>
        <LeftColumn>
          <Image loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ef74e123-e9a4-4671-b263-22b963f8fb6c?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef74e123-e9a4-4671-b263-22b963f8fb6c?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef74e123-e9a4-4671-b263-22b963f8fb6c?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef74e123-e9a4-4671-b263-22b963f8fb6c?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef74e123-e9a4-4671-b263-22b963f8fb6c?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef74e123-e9a4-4671-b263-22b963f8fb6c?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef74e123-e9a4-4671-b263-22b963f8fb6c?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ef74e123-e9a4-4671-b263-22b963f8fb6c?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
        </LeftColumn>
        <RightColumn>
          <Content>
            <Title>At your fingertips</Title>
            <Subtitle>
              Lightning fast <br /> prototyping{" "}
            </Subtitle>
          </Content>
          <Newsletter>
            <NewsletterTitle>Subscribe to our Newsletter</NewsletterTitle>
            <NewsletterSubtitle>
              Available exclusively on Figmaland
            </NewsletterSubtitle>
            <EmailInput>
              <InputLabel>Your Email</InputLabel>
              <SubscribeButton>Subscribe</SubscribeButton>
            </EmailInput>
          </Newsletter>
        </RightColumn>
      </Wrapper>
    </Contact>
  );
}

const Contact = styled.div`
  align-items: flex-end;
  background-color: var(--light-background, #fff);
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 1440px;
  flex-direction: column;
  padding: 113px 20px 52px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Wrapper = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 55%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.32;
  object-fit: cover;
  object-position: center;
  width: 100%;
  overflow: hidden;
  margin-top: 46px;
  flex-grow: 1;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 45%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Content = styled.div`
  align-items: flex-start;
  display: flex;
  padding-bottom: 10px;
  flex-direction: column;
  width: 544px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Title = styled.div`
  color: var(--text, #252b42);
  font-family: Graphik, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.1px;
  align-self: start;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Subtitle = styled.div`
  color: var(--text, #252b42);
  font-family: Graphik, sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 114.583%;
  letter-spacing: 0.2px;
  align-self: start;
  margin-top: 17px;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Newsletter = styled.div`
  align-items: flex-start;
  align-self: end;
  display: flex;
  width: 457px;
  max-width: 100%;
  padding-bottom: 34px;
  flex-direction: column;
  margin: 35px 14px 0 0;

  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const NewsletterTitle = styled.div`
  color: var(--text, #252b42);
  font-family: Graphik, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.1px;
  align-self: start;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const NewsletterSubtitle = styled.div`
  color: var(--second-text, #374754);
  font-family: Graphik, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 138.889%;
  letter-spacing: 0.2px;
  align-self: start;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const EmailInput = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  margin-top: 34px;
  width: 100%;
  gap: 12px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const InputLabel = styled.div`
  color: var(--Background, #18171d);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 114.286%;
  letter-spacing: 0.1px;
  align-self: center;
  white-space: nowrap;
  align-items: flex-start;
  border-radius: 39px;
  border: 1px solid #e8e8e8;
  background-color: #f4f4f4;
  width: 273px;
  max-width: 100%;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  padding: 19px 20px;

  @media (max-width: 991px) {
    white-space: initial;
    padding-left: 10px;
  }
`;

const SubscribeButton = styled.div`
  align-items: center;
  border-radius: 35px;
  background-color: var(--Primary, #2091f9);
  align-self: stretch;
  display: flex;
  width: 172px;
  max-width: 100%;
  flex-direction: column;
  padding: 19px 20px;
`;

const SubscribeButtonText = styled.div`
  color: var(--Light-text, #fff);
  font-family: Graphik, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.2px;
  align-self: center;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default Contacts;