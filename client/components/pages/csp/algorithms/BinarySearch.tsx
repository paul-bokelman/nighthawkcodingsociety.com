import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { CgSpinner } from "react-icons/cg";
import { Response, FormWrapper, fs } from "../../components/form";
export const BinarySearch = () => {
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState<{
    status: boolean | undefined;
    message: string;
  }>({ status: undefined, message: "" });
  return (
    <>
      <FormWrapper>
        <Formik
          initialValues={{ arr: "", x: "" }}
          onSubmit={async (values) => {
            setLoading(true);
            const response = await axios({
              method: "post",
              url: "http://127.0.0.1:5000/csp/alg/binarysearch",
              data: {
                arr: values.arr
                  .split(",")
                  .map(Number)
                  .sort(function (a, b) {
                    return a - b;
                  }),
                x: values.x,
              },
            }).catch((error) => error);
            console.log(response);
            setRes(response.data);
            setLoading(false);
          }}
        >
          <Form>
            <label className="block">
              <span className={fs.label}>Array</span>
              <Field
                name="arr"
                className={fs.form}
                type="text"
                placeholder="1,4,8,9,43,56"
              />
            </label>
            <label className="block mt-3">
              <span className={fs.label}>Value</span>
              <Field
                name="x"
                className={fs.form}
                type="number"
                placeholder="56"
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
