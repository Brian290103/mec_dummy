import * as yup from 'yup';

export const basicSchema = yup.object().shape({
  firstName: yup.string().min(3).required('Required'),
  middleName: yup.string().min(3).required('Required'),
  lastName: yup.string().min(3).required('Required'),
  dob: yup.date().max(new Date(), 'Invalid Date').required('Required'),
  idno: yup
    .string()
    .matches(/^\d+$/, 'Enter a Number')
    .min(8)
    .max(8)
    .required('Required'),

  // Contact Validation
  phone: yup
    .string()
    .matches(/^\d+$/, 'Enter a Number')
    .min(9)
    .max(9)
    .required('Required'),
  email: yup
    .string()
    .email('Please Enter a valid Email')
    .matches(/^[\w.-]+@[\w.-]+\.[\w]{2,}$/, 'Please Enter a valid Email')
    .required('Required'),
  address: yup.string().min(3).required('Required'),
  village: yup.string().min(3).required('Required'),

  // Guardian Details Valiadtion
  gname: yup.string().min(3).required('Required'),
  occupation: yup.string().min(3).required('Required'),
  gid: yup
    .string()
    .matches(/^\d+$/, 'Enter a Number')
    .min(8)
    .max(8)
    .required('Required'),
  gphone: yup
    .string()
    .matches(/^\d+$/, 'Enter a Number')
    .min(9)
    .max(9)
    .required('Required'),

  // Academic Qualification
  school: yup.string().min(3).required('Required'),

  // Course Application
  coc: yup.date().min(new Date(), 'Invalid Date').required('Required'),
  eoc: yup.date().min(new Date(), 'Invalid Date').required('Required'),

  // Documents
  // passport:yup.
});
