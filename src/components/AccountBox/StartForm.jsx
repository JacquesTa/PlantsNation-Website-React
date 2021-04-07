import React, { useContext } from "react";
import { RiPlantFill } from "react-icons/ri";
import {
  BoxContainer,
  HeaderContainer,
  HeaderText,
  Icons,
  InnerContainer,
  SubmitButton,
  TopContainer,
} from "./common";
import { AccountContext } from "./accountContext";

export function StartForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { switchToLogin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <TopContainer>
        <HeaderContainer>
          <HeaderText>Welcome</HeaderText>
          <Icons>
            {" "}
            <RiPlantFill />{" "}
          </Icons>
        </HeaderContainer>
      </TopContainer>
      <InnerContainer>
        <SubmitButton href="#" onClick={switchToLogin}>
          {" "}
          LogIn
        </SubmitButton>
        <SubmitButton href="#" onClick={switchToSignup}>
          {" "}
          SignUp
        </SubmitButton>
      </InnerContainer>
    </BoxContainer>
  );
}
