import * as yup from 'yup';
export const loginSchema = yup.object().shape({
  email: yup.string().trim().email().required(),
  password: yup.string().required()
});