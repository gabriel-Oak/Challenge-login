const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const isEmail = (value: string) => (
  !emailRegex.test(value)
    ? 'Digite um e-mail válido;'
    : undefined
);

export default isEmail