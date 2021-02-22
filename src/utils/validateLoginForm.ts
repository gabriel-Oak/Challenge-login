import { LoginFormData } from "../interfaces/login";
import isEmail from "./isEmail";

const validateLoginForm = (form: LoginFormData) => form.password 
  && form.email 
  && !isEmail(form.email);

export default validateLoginForm;
