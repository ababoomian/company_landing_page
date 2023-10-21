import React from "react";
import styled from "styled-components";

function Update(props) {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Title>Fastest way to organize</Title>
          <Subtitle>
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </Subtitle>
        </TextContainer>
        <Button>Try For Free</Button>
      </Content>
      <Image loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d86a2863-29fb-4cfa-9adf-875b05034014?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86a2863-29fb-4cfa-9adf-875b05034014?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86a2863-29fb-4cfa-9adf-875b05034014?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86a2863-29fb-4cfa-9adf-875b05034014?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86a2863-29fb-4cfa-9adf-875b05034014?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86a2863-29fb-4cfa-9adf-875b05034014?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86a2863-29fb-4cfa-9adf-875b05034014?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d86a2863-29fb-4cfa-9adf-875b05034014?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  align-self: stretch;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 284px 20px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Content = styled.div`
  align-self: center;
  margin-bottom: -58px;
  width: 100%;
  max-width: 1225px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 10px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: start;
  width: 532px;
  max-width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Title = styled.div`
  color: var(--text, #252b42);
  font-family: Graphik, sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 114.583%;
  letter-spacing: 0.2px;
  max-width: 335px;
  align-self: start;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.div`
  color: var(--second-text, #374754);
  font-family: Graphik, sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 142.857%;
  letter-spacing: 0.2px;
  align-self: start;
  margin-top: 27px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Button = styled.div`
  align-items: center;
  border-radius: 35px;
  border: 1px solid var(--Primary, #2091f9);
  background-color: var(--Primary, #2091f9);
  align-self: start;
  display: flex;
  margin-top: 70px;
  width: 236px;
  max-width: 100%;
  flex-grow: 1;
  flex-direction: column;
  padding: 16px 20px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Image = styled.img`
  aspect-ratio: 1.79;
  object-fit: cover;
  object-position: center;
  width: 625px;
  overflow: hidden;
  margin-top: 4px;
  max-width: 100%;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default Update;