import React from "react";
import styled from "styled-components";

function Pricing(props) {
  return (
    <PricingWrapper>
      <Container>
        <Header>Pricing</Header>
        <Description>
          Most calendars are designed for teams. <br />
          Slate is designed for freelancers
        </Description>
      </Container>
      <PriceContainer>
        <Column>
          <PriceCard>
            <PriceTitle>FREE</PriceTitle>
            <PriceDescription>
              Organize across all <br /> apps by hand
            </PriceDescription>
            <PriceAmount>
              <PriceSymbol>$</PriceSymbol>
              <PriceValue>0</PriceValue>
              <PricePeriod>Per Month</PricePeriod>
            </PriceAmount>
            <PriceFeatures>
              <PriceFeature>Pricing Feature</PriceFeature>
              <PriceFeature>Pricing Feature</PriceFeature>
              <PriceFeature>Pricing Feature</PriceFeature>
              <PriceFeature>Pricing Feature</PriceFeature>
              <PriceFeature>Pricing Feature</PriceFeature>
            </PriceFeatures>
            <OrderButton>Order Now</OrderButton>
          </PriceCard>
        </Column>
        <Column>
          <PriceCard>
            <PriceTitle>STANDARD</PriceTitle>
            <PriceDescription>
              Organize across all <br /> apps by hand
            </PriceDescription>
            <PriceAmount>
              <PriceSymbol>$</PriceSymbol>
              <PriceValue>10</PriceValue>
              <PricePeriod>Per Month</PricePeriod>
            </PriceAmount>
            <PriceFeatures>
              <PriceFeature>Pricing Feature</PriceFeature>
              <PriceFeature>Pricing Feature</PriceFeature>
              <PriceFeature>Pricing Feature</PriceFeature>
              <PriceFeature>Pricing Feature</PriceFeature>
              <PriceFeature>Pricing Feature</PriceFeature>
            </PriceFeatures>
            <OrderButton>Order Now</OrderButton>
          </PriceCard>
        </Column>
        <Column>
          <PriceCard>
            <PriceTitle>BUSINESS</PriceTitle>
            <PriceDescription>
              Organize across all <br /> apps by hand
            </PriceDescription>
            <PriceAmount>
              <PriceSymbol>$</PriceSymbol>
              <PriceValue>99</PriceValue>
              <PricePeriod>Per Month</PricePeriod>
            </PriceAmount>
            <PriceFeatures>
              <PriceFeature>Pricing Feature</PriceFeature>
              <PriceFeature>Pricing Feature</PriceFeature>
              <PriceFeature>Pricing Feature</PriceFeature>
              <PriceFeature>Pricing Feature</PriceFeature>
              <PriceFeature>Pricing Feature</PriceFeature>
            </PriceFeatures>
            <OrderButton>Order Now</OrderButton>
          </PriceCard>
        </Column>
      </PriceContainer>
    </PricingWrapper>
  );
}

const PricingWrapper = styled.div`
  align-items: flex-start;
  align-self: stretch;
  background-color: var(--Dark-background, #252b42);
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 100px 0px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Container = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 1105px;
  padding: 10px;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Header = styled.div`
  color: var(--Light-text, #fff);
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
  color: var(--Light-text, #fff);
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

const PriceContainer = styled.div`
  align-self: stretch;
  margin-top: 90px;
  display: flex;
  justify-content:space-around;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    display:flex;
    flex-direction:column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 80%;
     display: flex;
     background-color:red;
    flex-direction: column;
    align-items:center;
    justify-content:center;
  }
`;

const PriceCard = styled.div`
  align-items: center;
  border-radius: 10px;
  border: 1px solid #dedede;
  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);
  background-color: var(--light-background, #fff);
  display: flex;
  width: 100%;
  flex-direction: column;
  flex: 1;
  margin: auto;
  padding: 42px 20px;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const PriceTitle = styled.div`
  color: var(--text, #252b42);
  font-family: Graphik, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.1px;
  align-self: center;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const PriceDescription = styled.div`
  color: var(--second-text, #374754);
  text-align: center;
  font-family: Graphik, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 143.75%;
  letter-spacing: 0.1px;
`;

const PriceAmount = styled.div`
  align-items: flex-start;
  align-self: center;
  display: flex;
  margin-top: 30px;
  width: 143px;
  max-width: 100%;
  gap: 10px;
`;

const PriceSymbol = styled.div`
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

const PriceValue = styled.div`
  color: var(--text, #252b42);
  font-family: Graphik, sans-serif;
  font-size: 74px;
  font-weight: 700;
  line-height: 113.514%;
  letter-spacing: 0.2px;
  align-self: start;

  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const PricePeriod = styled.div`
  color: var(--second-text, #374754);
  font-family: Graphik, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 143.75%;
  letter-spacing: 0.1px;
  align-self: start;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const PriceFeatures = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  margin-top: 40px;
  width: 109px;
  max-width: 100%;
  flex-direction: column;
`;

const PriceFeature = styled.div`
  color: var(--text, #252b42);
  font-family: Graphik, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 186.667%;
  letter-spacing: 0.2px;
`;

const OrderButton = styled.div`
  align-items: center;
  align-self: center;
  border-radius: 35px;
  background-color: var(--Primary, #2091f9);
  display: flex;
  margin-top: 40px;
  width: 255px;
  max-width: 100%;
  flex-direction: column;
  padding: 18px 20px;
`;

const OrderButtonText = styled.div`
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

export default Pricing;