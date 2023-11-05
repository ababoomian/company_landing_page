import React from "react";
import styled from "styled-components";

function Calendar() {
  return (
    <Container>
      <Content>
        <Title>Features</Title>
        <Description>
        We are a team of information technology experts ready to offer you customized solutions and professional support to optimize your business
        </Description>
      </Content>
      <FeaturesContainer>
        <FeatureColumn>
          <FeatureItem>
            <FeatureImage loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f4629a7c-e58b-4bcf-b5b9-5089209bc0a5?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4629a7c-e58b-4bcf-b5b9-5089209bc0a5?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4629a7c-e58b-4bcf-b5b9-5089209bc0a5?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4629a7c-e58b-4bcf-b5b9-5089209bc0a5?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4629a7c-e58b-4bcf-b5b9-5089209bc0a5?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4629a7c-e58b-4bcf-b5b9-5089209bc0a5?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4629a7c-e58b-4bcf-b5b9-5089209bc0a5?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f4629a7c-e58b-4bcf-b5b9-5089209bc0a5?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
            <FeatureTitle>OpenType features</FeatureTitle>
            <FeatureDescription>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </FeatureDescription>
          </FeatureItem>
        </FeatureColumn>
        <FeatureColumn>
          <FeatureItem>
            <FeatureImage loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3787cf01-c76e-469a-a959-e46474e1d739?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3787cf01-c76e-469a-a959-e46474e1d739?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3787cf01-c76e-469a-a959-e46474e1d739?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3787cf01-c76e-469a-a959-e46474e1d739?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3787cf01-c76e-469a-a959-e46474e1d739?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3787cf01-c76e-469a-a959-e46474e1d739?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3787cf01-c76e-469a-a959-e46474e1d739?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3787cf01-c76e-469a-a959-e46474e1d739?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
            <FeatureTitle>Design with real data</FeatureTitle>
            <FeatureDescription>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </FeatureDescription>
          </FeatureItem>
        </FeatureColumn>
        <FeatureColumn>
          <FeatureItem>
            <FeatureImage loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c0eb50a7-9ea8-4e7e-9bb4-8cd013458185?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0eb50a7-9ea8-4e7e-9bb4-8cd013458185?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0eb50a7-9ea8-4e7e-9bb4-8cd013458185?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0eb50a7-9ea8-4e7e-9bb4-8cd013458185?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0eb50a7-9ea8-4e7e-9bb4-8cd013458185?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0eb50a7-9ea8-4e7e-9bb4-8cd013458185?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0eb50a7-9ea8-4e7e-9bb4-8cd013458185?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0eb50a7-9ea8-4e7e-9bb4-8cd013458185?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
            <FeatureTitle>Fastest way to take action</FeatureTitle>
            <FeatureDescription>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </FeatureDescription>
          </FeatureItem>
        </FeatureColumn>
      </FeaturesContainer>
      <FeatureImage2 loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32b14ff9-34f1-4b2d-b44d-d52b738a86d2?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32b14ff9-34f1-4b2d-b44d-d52b738a86d2?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32b14ff9-34f1-4b2d-b44d-d52b738a86d2?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32b14ff9-34f1-4b2d-b44d-d52b738a86d2?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32b14ff9-34f1-4b2d-b44d-d52b738a86d2?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32b14ff9-34f1-4b2d-b44d-d52b738a86d2?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32b14ff9-34f1-4b2d-b44d-d52b738a86d2?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32b14ff9-34f1-4b2d-b44d-d52b738a86d2?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 80px;
  align-items: flex-start;
  align-self: stretch;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px 0px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Content = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 1177px;
  padding: 10px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Title = styled.div`
  color: var(--text, #252b42);
  text-align: center;
  font-family: Graphik, sans-serif;
  font-size: 48px;
  font-weight: 400;
  line-height: 114.583%;
  letter-spacing: 0.2px;
  align-self: center;
  white-space: nowrap;
  @media (max-width: 991px) {
    font-size: 40px;
    white-space: initial;
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

const FeaturesContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const FeatureColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FeatureItem = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FeatureImage = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 61px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
`;

const FeatureTitle = styled.div`
  color: var(--text, #252b42);
  text-align: center;
  font-family: Graphik, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.1px;
  margin-top: 20px;
`;

const FeatureDescription = styled.div`
  color: var(--second-text, #374754);
  text-align: center;
  font-family: Graphik, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 138.889%;
  letter-spacing: 0.2px;
  margin-top: 20px;
`;

const FeatureImage2 = styled.img`
  aspect-ratio: 1.79;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  align-self: stretch;
  margin-top: 132px;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default Calendar;