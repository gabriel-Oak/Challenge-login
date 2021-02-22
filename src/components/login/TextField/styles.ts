import styled from "styled-components";
const teste = ({ error, theme }: { error: boolean, theme: any }) => error 
? theme.colors.secondary 
: '#989FDB';

export const Input = styled.input`
  border: 1px solid ${teste};
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  height: 48px;
  width: 100%;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    border-width: 2px;
    outline: none;
  }

  &:disabled {
    color: #8a8a8a;
    border-color: #8a8a8a;
  } 
`;

export const Label = styled.label`
  margin: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const InputContainer = styled.div`
  margin: 8px 0 18px 0;
  width: 100%;
  position: relative;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  position: absolute;
  right: 16px;
  top: 32px;
  cursor: pointer;
`;

export const ErrorLabel = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 28px;
  padding-left: 18px;
`;