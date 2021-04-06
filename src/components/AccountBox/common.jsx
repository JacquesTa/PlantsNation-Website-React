import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.2);
  box-sizing: border-box;
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  box-sizing: border-box;
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: rgba(184, 106, 119, 255);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &::not(::last-of-type) {
    border-bottom: 1.4px solid rgba(214, 180, 181, 255);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(214, 180, 181, 255);
  }
`;

export const SubmitButton = styled.button`
  width: 100%100%;
  padding: 21px 40%;
  margin: 5px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  box-sizing: border-box;
  transition: all, 240ms ease-in-out;
  background: rgba(214, 180, 181, 255);
  background: linear-gradient(
    90deg,
    rgba(214, 180, 181, 255) 20%,
    rgba(184, 106, 119, 255) 100%
  );
  &:hover {
    filter: brightness(1.05);
  }
`;

export const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const FieldError = styled.div`
  color: #be0e0e;
  font-size: 11px;
  min-height: 18px;
  box-sizing: border-box;
`;
