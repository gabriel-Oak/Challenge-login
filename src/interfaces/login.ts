export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginFieldEvent {
  target: {
    name: string;
    value: string;
  };
}