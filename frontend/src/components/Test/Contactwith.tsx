import React from "react";
import styled from "styled-components";
import Blackform from "./Blackform";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
function ContactForm(props) {
  return (
    <Container>
      <Content>
          <LeftColumn>
            <Heading>

            <h1>CONTACT</h1>
            <h3>Say Somthing to start live Chat</h3>
            </Heading>
            <Secondary>
              <Ft_ul>
                <Ft_li><a style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }} href=""><PhoneIcon style={{ fontSize: '16px', marginBottom: '-3px' }} /> : +37477041898</a></Ft_li>
                <Ft_li><a style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }} href=""><EmailIcon style={{ fontSize: '16px', marginBottom: '-3px' }} /> : baboomian53@gmail.com</a></Ft_li>
                <Ft_li><a style={{ color: 'white', textDecoration: 'none', fontSize: '16px' }} href=""><FmdGoodIcon style={{ fontSize: '16px', marginBottom: '-3px' }} />: Armenia Yerevan Halabyan 2A</a></Ft_li>
              </Ft_ul>
            </Secondary>
          </LeftColumn>
        <RightColumn>
          <FormContainer>
            <Row>
              <Label>First Name</Label>
              <input type="text" placeholder="Type your name..." style={{outline: "none", borderRadius: '5px', border: "solid 1px black" }} />
            </Row>
            <Row>
              <Label>Last Name</Label>
              <input style={{outline: "none", borderRadius: '5px', border: "solid 1px black" }} placeholder="Type your surname..." />
            </Row>
            <Row>
              <Label>Email</Label>
              <input placeholder="Type your email..." style={{outline: "none", borderRadius: '5px', border: "solid 1px black" }} />
            </Row>
            <Row>
              <Label>Phone Number</Label>
              <input placeholder="Type your phone number..." style={{outline: "none", borderRadius: '5px', border: "solid 1px black" }} />
            </Row>
            <Row>
              <Label>Select Subject?</Label>
              <select name="choose" id="select" style={{border: "solid 1px black", background: "transparent"}}>
                <option value={0}>Select what you want</option>
                <option value={1}>Game devloping</option>
                <option value={2}>Web developing</option>
                <option value={3}>Devops</option>

              </select>
            </Row>
            <Row>
              <Label>Message</Label>
              <textarea placeholder="Type your questions..." style={{}}></textarea>
            </Row>
            <SubmitButton>
              <ButtonText>Send Message</ButtonText>
            </SubmitButton>
          </FormContainer>
        </RightColumn>
      </Content>
    </Container>
  );
}

const Heading = styled.div`
  color:white;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  /* margin-left:20px; */
  margin-top:10px;
`

const Secondary = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  margin-bottom:20px;
  align-items:center;
  color:white;
  text-decoration:none;
`
const Ft_ul = styled.ul`
  /* text-decoration:none; */
  list-style:none;
`
const Ft_li = styled.li`
  margin-bottom: 20px;
  /* list-style:none; */
`

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 60px 30px rgba(0, 0, 0, 0.03);
  background-color: #fff;
  align-self: center;
  display: flex;
  margin-top: 52px;
  width: 100%;
  /* max-width: 1196px; */
  flex-direction: column;
  /* padding: 10px; */
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Content = styled.div`
  display: flex;
  align-self: center;
  width: 100%;
  max-width: 1136px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LeftColumn = styled.div`
  border-radius:10px;
  display: flex;
  background-color:black;
  flex-direction: column;
  line-height: normal;
  width: 45%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Image = styled.img`
  aspect-ratio: 0.76;
  object-fit: cover;
  object-position: center;
  width: 100%;
  overflow: hidden;
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
  width: 55%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:stretch;
  gap:20px;
  width: 595px;
  margin: auto 0;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Row = styled.div`
  align-self: stretch;
  display: flex;
  width: 100%;
  margin-top:20px;
  align-items:center;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Label = styled.div`
  color: #8d8d8d;
  align-self: start;
  text-wrap: nowrap;
  font: 500 12px/166.667% Poppins, sans-serif;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Value = styled.div`
  color: #000;
  align-self: start;
  margin-top: 9px;
  text-wrap: nowrap;
  font: 500 14px/142.857% Poppins, sans-serif;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const ImageIcon = styled.img`
  aspect-ratio: 0.08;
  object-fit: cover;
  object-position: center;
  width: 1px;
  stroke-width: 1px;
  stroke: #848484;
  overflow: hidden;
  align-self: start;
  margin-top: 18px;
  max-width: 100%;
`;

const SubmitButton = styled.div`
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.12);
  background-color: #000;
  align-self: end;
  display: flex;
  margin-top: 44px;
  width: 214px;
  max-width: 100%;
  flex-grow: 1;
  flex-direction: column;
  padding: 15px 20px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ButtonText = styled.div`
  color: #fff;
  text-align: center;
  align-self: center;
  text-wrap: nowrap;
  font: 500 16px Poppins, sans-serif;
  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

export default ContactForm;