import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from 'nanoid'
import './ContactForm.module.css'

export default function ContactForm({ onAdd }) {
    
   

    const initialValues = {
        id: '',
        name: "",
        number: "",
    };


    const nameField = useId();
    const numberField = useId();

    const FormSchema = Yup.object().shape({    
       name: Yup.string().min(3, "Too short name!").max(50, "Too long name!").required("This field is required."),
       number: Yup.string().min(3, "Too short number!").max(50, "Too long number!").required("This field is required."),
    });

    const handleSubmit = (values, actions) => {
    initialValues.id = nanoid()
    onAdd(values)

    actions.resetForm();
  };

    return (
        <Formik initialValues={initialValues} validationSchema={FormSchema} onSubmit={handleSubmit}>
            <Form>
                <div>
                    <label htmlFor={nameField}>Name</label>
                    <Field name="name" type="text" id={nameField}></Field>
                    <ErrorMessage name="name" component="span"/>
                </div>

                <div>
                    <label htmlFor={numberField}>Number</label>
                    <Field name="number" type="text" id={numberField}></Field>
                    <ErrorMessage name="number" component="span"/>
                </div>

                <button type="submit">Add contact</button>
            </Form>
</Formik>
    )
}