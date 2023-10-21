import React from "react";
import styled from "styled-components";

function Service(props) {
  return (
    <Services>
      <Container>
        <Title>Testimonials</Title>
        <Content>
          <Image loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/435434d8-237a-4879-86eb-fb1482723ff4?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/435434d8-237a-4879-86eb-fb1482723ff4?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/435434d8-237a-4879-86eb-fb1482723ff4?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/435434d8-237a-4879-86eb-fb1482723ff4?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/435434d8-237a-4879-86eb-fb1482723ff4?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/435434d8-237a-4879-86eb-fb1482723ff4?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/435434d8-237a-4879-86eb-fb1482723ff4?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/435434d8-237a-4879-86eb-fb1482723ff4?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
          <Description>
            Most calendars are designed for teams. Slate is designed for freelancers
            <br /> who want a simple way to plan their schedule.
          </Description>
          <UserInfo>
            <UserImage loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aba49dac-63bc-4b44-abc2-c0849be6cf2b?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aba49dac-63bc-4b44-abc2-c0849be6cf2b?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aba49dac-63bc-4b44-abc2-c0849be6cf2b?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aba49dac-63bc-4b44-abc2-c0849be6cf2b?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aba49dac-63bc-4b44-abc2-c0849be6cf2b?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aba49dac-63bc-4b44-abc2-c0849be6cf2b?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aba49dac-63bc-4b44-abc2-c0849be6cf2b?apiKey=cb5b1c6924d344aa9fb46935b4465878&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aba49dac-63bc-4b44-abc2-c0849be6cf2b?apiKey=cb5b1c6924d344aa9fb46935b4465878&"/>
            <UserInfoContent>
              <UserName>Organize across</UserName>
              <UserRole>Ui designer</UserRole>
            </UserInfoContent>
          </UserInfo>
        </Content>
        <MoreTestimonials>More Testimonials</MoreTestimonials>
      </Container>
    </Services>
  );
}

const Services = styled.div`
  align-items: flex-start;
  background-color: #fff;
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 1439px;
  flex-direction: column;
  padding: 111px 20px 100px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Container = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 987px;
  flex-direction: column;
  padding: 0 10px;

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

const Content = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  margin-top: 90px;
  flex-direction: column;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Image = styled.img`
  aspect-ratio: 2.48;
  object-fit: cover;
  object-position: center;
  width: 149px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
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
  margin-top: 60px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const UserInfo = styled.div`
  align-items: flex-start;
  align-self: center;
  display: flex;
  margin-top: 60px;
  width: 186px;
  max-width: 100%;
  gap: 13px;
  padding: 1px 0;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const UserImage = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 50px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

const UserInfoContent = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
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

const UserRole = styled.div`
  color: var(--text, #252b42);
  font-family: Graphik, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 186.667%;
  letter-spacing: 0.2px;
  align-self: start;
`;

const MoreTestimonials = styled.div`
  color: var(--Light-text, #fff);
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

export default Service;