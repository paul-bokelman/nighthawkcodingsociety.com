import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { CgSpinner } from "react-icons/cg";
import { Response, FormWrapper, fs } from "../../components/form";
export const Palindrome = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [res, setRes] = useState<{
    status: boolean | undefined;
    message: string;
  }>({ status: undefined, message: "" });
  return (
    <>
      <FormWrapper>
        <Formik
          initialValues={{ str: "" }}
          onSubmit={async (values) => {
            setLoading(true);
            const response = await axios({
              method: "post",
              url: "http://127.0.0.1:5000/csp/alg/palindrome",
              data: {
                str: values.str,
              },
            }).catch((error) => error);
            setRes(response.data);
            setLoading(false);
          }}
        >
          <Form>
            <label className="block">
              <span className={fs.label}>String</span>
              <Field
                name="str"
                className={fs.form}
                type="text"
                placeholder="racecar"
              />
            </label>
            <button
              type="submit"
              disabled={loading ? true : false}
              className={fs.button}
            >
              {loading ? (
                <CgSpinner className="animate-spin inline h-5 w-5" />
              ) : (
                "Submit"
              )}
            </button>
          </Form>
        </Formik>
      </FormWrapper>
      <Response response={res} />
    </>
  );
};
