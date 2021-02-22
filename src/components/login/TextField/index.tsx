import { LoginFieldEvent } from '../../../interfaces/login';
import {
  InputContainer, Label, Input, ErrorLabel, CloseButton,
} from './styles';

interface Props {
  disabled: boolean;
  value: string;
  error?: string;
  label: string;
  onChange: (e: LoginFieldEvent) => void;
  onClear?: (() => void);
  id: string;
  name: string;
  placeholder: string;
  type: string;
}

const TextField: React.FC<Props> = ({
  disabled, value, onChange, onClear, error, label, name, id, placeholder, type,
}) => (
  <InputContainer>
    <Label htmlFor={id}>{label}</Label>
    <Input
      error={!!error}
      disabled={disabled}
      name={name}
      value={value}
      id={id}
      placeholder={placeholder} 
      type={type}
      onChange={onChange}
    />

    {!!onClear && !!value && (
      <CloseButton onClick={onClear} type="button">
        <img src="/images/close.svg" alt="clear" height={20} />
      </CloseButton>
    )}

    {error && (
      <ErrorLabel>{error}</ErrorLabel>
    )}
  </InputContainer>
);

export default TextField;