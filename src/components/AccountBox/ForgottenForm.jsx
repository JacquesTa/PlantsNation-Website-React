import React, { useContext } from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  SubmitButton,
  MutedLink,
  BoldLink,
} from "./common";
import { AccountContext } from "./accountContext";

export function ForgottenForm(props) {
  const { switchToLogin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
      </FormContainer>

      <SubmitButton type="submit">Send</SubmitButton>

      <MutedLink href="#">
        Remember your Password?{" "}
        <BoldLink href="#" onClick={switchToLogin}>
          Sign In
        </BoldLink>{" "}
      </MutedLink>
    </BoxContainer>
  );
}
