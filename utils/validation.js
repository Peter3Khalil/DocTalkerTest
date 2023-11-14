import * as yup from 'yup';
export const loginSchema = yup.object().shape({
  email: yup.string().trim().email("invalid email").required("Please enter your email"),
  password: yup.string().required("please enter your password"),
});
