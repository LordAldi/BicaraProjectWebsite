import { Form, ErrorMessage } from "formik";
import Input from "../../UI/Input/Input";

const FormSignin = ({ formik, formList }) => {
  const { errors, touched, isValid, dirty } = formik;
  return (
    <Form className="flex flex-col items-center	">
      {/* <div className="form-row">
        <label htmlFor="email">Email</label>
        <Field
          type="email"
          name="email"
          id="email"
          className={errors.email && touched.email ? "input-error" : null}
        />
        <ErrorMessage name="email" component="span" className="error" />
      </div>

      <div className="form-row">
        <label htmlFor="password">Password</label>
        <Field
          type="password"
          name="password"
          id="password"
          className={errors.password && touched.password ? "input-error" : null}
        />
        <ErrorMessage name="password" component="span" className="error" />
      </div>

      <button
        type="submit"
        className={!(dirty && isValid) ? "disabled-btn" : ""}
        disabled={!(dirty && isValid)}
      >
        Sign In
      </button> */}
    </Form>
  );
};

export default FormSignin;
