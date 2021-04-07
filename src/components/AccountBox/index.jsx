import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Icons, SubmitButton } from "./common";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { LoginForm } from "./LogInForm";
import { SignupForm } from "./SignUpForm";
import { ForgottenForm } from "./ForgottenForm";
import { StartForm } from "./StartForm";
import { RiPlantFill } from "react-icons/ri";

const BoxContainer = styled.div`
  margin: auto;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-image: url("https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bW9uc3RlcmF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
  background-position: center;
  background-size: cover;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.3);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const Backdrop = styled(motion.div)`
  width: 175%;
  height: 550px;
  opacity: 25%;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(50deg);
  top: -300px;
  left: -70px;
  background: rgba(214, 180, 181, 255);
  background: linear-gradient(
    90deg,
    rgba(214, 180, 181, 255) 20%,
    rgba(184, 106, 119, 255) 100%
  );
`;
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 100%;
`;

const HeaderText = styled.h2`
  padding: 0;
  font-size: 30px;
  font-weight: 800;
  color: #ffffff;
  z-index: 10;
  text-align: center;

  text-transform: uppercase;
`;

const SmallText = styled.h5`
  color: #fff;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  z-index: 10;
  margin: 0;

  color: rgba(214, 180, 181, 255);
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [active, setActive] = useState("login");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToStart = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("start");
    }, 400);
  };
  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToLogin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("login");
    }, 400);
  };

  const switchToForgotten = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("forgotten");
    }, 400);
  };
  const contextValue = {
    switchToSignup,
    switchToLogin,
    switchToForgotten,
    switchToStart,
  };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <Backdrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapse"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "start"}

          {active === "login" && (
            <HeaderContainer>
              <Icons onClick={switchToStart}>
                {" "}
                <RiPlantFill />{" "}
              </Icons>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}

          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create Account</HeaderText>
              <Icons onClick={switchToStart}>
                {" "}
                <RiPlantFill />{" "}
              </Icons>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "forgotten" && (
            <HeaderContainer>
              <HeaderText>Enter Email</HeaderText>
              <Icons onClick={switchToStart}>
                {" "}
                <RiPlantFill />{" "}
              </Icons>
              <SmallText>Please enter your email to receive a link!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "start" && <StartForm />}
          {active === "login" && <LoginForm />}
          {active === "signup" && <SignupForm />}
          {active === "forgotten" && <ForgottenForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
