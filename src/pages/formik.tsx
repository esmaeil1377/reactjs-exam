import { Input, Form, Button, Space } from "antd";
import { useFormik } from 'formik';

const FormItem = Form.Item;

interface IForm {
  username: string;
  password: string;
}

export default function FormikTest() {
  // TODO: make form work with formik , pass handleSubmit to onSubmit of formik
  // BONUS: adding validation has extra points
  // Resource: https://formik.org/docs/tutorial

    const formik = useFormik({
     initialValues: {
       username: '',
       password: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
        onReset: values => {
         // values.username = "";
         // values.password = "";
            formik.values.password = '';
            formik.values.username = '';
        }
   });

  const handleSubmit = (values: IForm) => {
    console.log(values);
  };

  const handleReset = (values: IForm) => {
      console.log(values);

  }

  return (
    <div>
      <div>Simple Formik With Antd Inputs :: Edit src/pages/formik.tsx</div>
      <hr />
      {/* TODO: use Formik */}
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
        <FormItem label="Username" name="username">
          <input
         id="username"
         name="username"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.username}
       />
        </FormItem>
        {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
        <FormItem label="Password" name="password">
          <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
        </FormItem>
        <Space>
          {/*<Button type="primary" htmlType="submit">*/}
          {/*  submit*/}
          {/*</Button>*/}
          <button type="submit">submit</button>
          {/*<button type="reset" onClick={*/}
          {/*  */}
          {/*}>reset</button>*/}
          <button onClick={formik.handleReset} type="reset">
              reset
          </button>
          {/*    // TODO: reset form with formik*/}
          {/*  }}*/}
          {/*>*/}
          {/*  reset*/}
          {/*</Button>*/}
        </Space>
      </form>
    </div>
  );
}
