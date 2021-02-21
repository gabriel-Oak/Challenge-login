import styled from 'styled-components';

export const Header = styled.h1`
  font-size: 40px;
  line-height: 48px;
  font-style: normal;
  font-weight: normal;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Subheader = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin: 16px 0 42px 0;
  padding-right: 30px;
  color: #989FDB;
`;

export const FormContainer = styled.section`
  flex: 1;
  max-width: 500px;
  min-width: 400px;
  position: relative;
  overflow: auto;
`;

export const Form = styled.form`
  position: absolute;
  top: 96px;
  left: 96px;
  width: 100%;
  max-width: 256px;
`;

export const Input = styled.input`
  border: 1px solid #989FDB;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  height: 48px;
  width: 100%;
  margin: 8px 0 18px 0;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    border-width: 2px;
    outline: none;
  }
`;

export const Label = styled.label`
  margin: 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SubmitButton = styled.button`
  height: 48px;
  color: white;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  border-radius: 8px;
  width: 100%;
  outline: none;
  cursor: pointer;
  border: none;
  margin: 6px 0 32px 0;
  transition: box-shadow 500ms ease-in-out;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    box-shadow: 0px 10px 25px 10px #CF99DB;
  }
`;

export const BottomCaption = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #989FDB;
  padding: 0 24px;
`;