import { useContext } from "react";
import SigninHero from "../../../assets/images/signin.png";
import { Formik, Form } from "formik";
import Input from "../../../components/UI/Input/Input";
import * as Yup from "yup";
import Button from "../../../components/UI/Button/Button";
import { Link } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { UserContext } from "../../../Provider/UserProvider/UserProvider";
const SIGNIN = gql`
  mutation createUser($email: String!, $username: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        username
        email
        id
      }
    }
  }
`;
const SignInSchema = Yup.object().shape({
  userName: Yup.string()
    .required("Username is Required")
    .min(6, "Username is too short"),

  email: Yup.string().email().required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short"),

  conPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default function SignIn() {
  const { login } = useContext(UserContext);
  const [
    signinUser,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(SIGNIN);

  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        conPassword: "",
      }}
      validationSchema={SignInSchema}
      onSubmit={async (values) => {
        console.log(values);

        try {
          const { data, errors } = await signinUser({
            variables: {
              username: values.userName,
              email: values.email,
              password: values.password,
            },
            onError: (er) => {
              console.log(er);
            },
          });
          login(data.register);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        // console.log("dirty");
        // console.log(dirty);
        // console.log("isValid");
        // console.log(isValid);
        return (
          <div className="container mx-auto flex flex-col md:flex-row-reverse	text-primary items-center md:justify-around">
            <div className="flex justify-center	w-40 md:w-2/4">
              <img src={SigninHero} className="cover-fit" />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-3xl font-bold mb-4	">SignIn</h1>
              <Form className="flex flex-col items-center md:items-start md:justify-start	">
                {/* {error && <div>ada error</div>} */}
                {mutationLoading && <p>Loading...</p>}
                {mutationError && (
                  <p className="text-red-500">
                    Email or Username Already Taken
                  </p>
                )}
                <Input
                  id="userName"
                  type="text"
                  placeHolder="Username"
                  errors={errors.userName}
                  touched={touched.userName}
                />
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
                />
                <Input
                  id="conPassword"
                  type="password"
                  placeHolder="Confirm Password"
                  errors={errors.conPassword}
                  touched={touched.conPassword}
                  styling="mb-10"
                />

                <Button
                  type="submit"
                  disabled={!(dirty && isValid)}
                  loading={mutationLoading}
                  btnColor="primary"
                  styling="w-3/4 self-center md:w-6/4	md:self-start rounded-lg "
                >
                  SignIn
                </Button>
                <p>
                  already have an account,
                  <Link to="/login" className="text-blue-500 mt-10">
                    {" "}
                    login here
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

{
  /* <div className="container mx-auto flex flex-col text-primary">
      <div className="flex justify-center">
        <img src={SigninHero} className="h-40" />
      </div>
      <div className="flex flex-col items-center	">
        <h1 className="text-3xl font-bold mb-4	">SignIn</h1>
        <Form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center	"
        >
          <Input
            id="userName"
            handleChange={formik.handleChange}
            placeHolder="Username"
            value={formik.values.userName}
            type="text"
          />
          <Input
            id="email"
            handleChange={formik.handleChange}
            placeHolder="Email"
            value={formik.values.email}
            type="email"
          />
          <Input
            id="password"
            handleChange={formik.handleChange}
            placeHolder="Password"
            value={formik.values.password}
            type="password"
          />
          <Input
            id="conPassword"
            handleChange={formik.handleChange}
            placeHolder="Confirm Password"
            value={formik.values.conPassword}
            type="password"
          />

          <button type="submit" className="bg-primary text-white">
            Submit
          </button>
          <button
            onClick={formik.handleReset}
            className="bg-primary text-white"
          ></button>
        </Form>
      </div>
    </div> */
}
