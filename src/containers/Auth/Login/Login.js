import LoginHero from "../../../assets/images/login.png";
import { Formik, Form } from "formik";
import { useContext } from "react";
import Input from "../../../components/UI/Input/Input";
import * as Yup from "yup";
import Button from "../../../components/UI/Button/Button";
import { Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";

import { UserContext } from "../../../Provider/UserProvider/UserProvider";
const LOGIN = gql`
  mutation login($slug: String!, $password: String!) {
    login(input: { identifier: $slug, password: $password }) {
      jwt
      user {
        username
        id
      }
    }
  }
`;
const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short"),
});

export default function Login() {
  const { login } = useContext(UserContext);

  const [
    loginUser,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(LOGIN);
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values) => {
        try {
          const { data, errors } = await loginUser({
            variables: {
              slug: values.email,
              password: values.password,
            },
            onError: (er) => {
              console.log(er);
            },
          });
          login(data.login);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container mx-auto flex flex-col md:flex-row-reverse	text-primary items-center md:justify-around">
            <div className="flex justify-center	w-40 md:w-2/5">
              <img src={LoginHero} className="cover-fit" alt="login" />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-3xl font-bold mb-4	">Login</h1>
              <Form className="flex flex-col items-center md:items-start md:justify-start	">
                {mutationLoading && <p>Loading...</p>}
                {mutationError && (
                  <p className="text-red-500">Email or Password is incorrect</p>
                )}
                <Input
                  id="email"
                  type="email"
                  placeHolder="Email"
                  errors={errors.email}
                  touched={touched.email}
                />
                <Input
                  id="password"
                  type="password"
                  placeHolder="Password"
                  errors={errors.password}
                  touched={touched.password}
                  styling="mb-10"
                />

                <Button
                  type="submit"
                  disabled={!(dirty && isValid)}
                  loading={mutationLoading}
                  btnColor="primary"
                  styling="w-3/4 self-center md:w-6/4	md:self-start rounded-lg "
                >
                  Login
                </Button>
                <p>
                  Don't have an account yet,
                  <Link to="/login" className="text-blue-500 mt-10">
                    {" "}
                    Sign In here
                  </Link>
                </p>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
