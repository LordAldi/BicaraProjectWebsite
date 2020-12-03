import { Field, ErrorMessage } from "formik";

const Input = ({ id, type, placeHolder, errors, touched, styling }) => {
  return (
    <>
      <ErrorMessage name={id} component="span" className="text-red-500" />

      <Field
        className={`outline-none ring ${
          errors && touched
            ? "ring-red-500  placeholder-red-500"
            : " ring-secondary  placeholder-secondary"
        } ring-opacity-50 focus:ring-opacity-100 hover:ring-opacity-100 text-center md:text-left	md:pl-3 h-10 my-3 w-full max-w-6/4 rounded-lg ${styling}`}
        id={id}
        placeholder={placeHolder}
        name={id}
        type={type}
      />
    </>
  );
};

export default Input;
