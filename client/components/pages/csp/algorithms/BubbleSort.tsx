import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { CgSpinner } from "react-icons/cg";
import { Response, FormWrapper, fs } from "../../components/form";
export const BubbleSort = () => {
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState<{
    status: boolean | undefined;
    message: string;
  }>({ status: undefined, message: "" });
  const [og, setOg] = useState<number[]>([]);
  return (
    <>
      <FormWrapper>
        <Formik
          initialValues={{ arr: "" }}
          onSubmit={async (values) => {
            setOg(values.arr.split(",").map(Number));
            setLoading(true);
            const response = await axios({
              method: "post",
              url: "http://127.0.0.1:5000/csp/alg/bubblesort",
              data: {
                arr: values.arr
                  .split(",")
                  .map(Number)
                  .sort(function (a, b) {
                    return a - b;
                  }),
              },
            }).catch((error) => error);
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
                placeholder="745,34,52,51,1,5,823"
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
      {/* {res.status !== undefined ? (
        <div>
          <p className="!text-green-400">{`Sorted array: [${res.arr.join(
            ", "
          )}]`}</p>
          <p className="!text-red-400">{`Original array: [${og.join(
            ", "
          )}]`}</p>
        </div>
      ) : null} */}
    </>
  );
};
