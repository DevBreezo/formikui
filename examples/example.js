import React from "react";
import EZFormikUI from "ez-formikui";

const fields = [
  {
    fieldName: "email",
    label: "Email Address",
    type: "text",
    options: "email",
    props: { disabled: true },
    initialValue: ""
  },
  {
    fieldName: "password",
    label: "Password",
    type: "text",
    options: "password",
    initialValue: ""
  },
  {
    fieldName: "textarea",
    label: "Text area max size",
    type: "textarea",
    rows: 2,
    rowsMax: 4,
    initialValue: ""
  },
  {
    fieldName: "radio",
    label: "Radio",
    type: "radio",
    options: [
      { value: "1", label: "A" },
      { value: "2", label: "B" },
      { value: "3", label: "C" }
    ],
    initialValue: "2",
    grid: {
      xs: 6
    }
  },
  {
    fieldName: "checkbox",
    label: "Checkbox",
    type: "checkbox",
    options: [
      { value: "1", label: "A" },
      { value: "2", label: "B" },
      { value: "3", label: "C" }
    ],
    grid: {
      xs: 6
    },
    initialValue: ["1"]
  },
  {
    fieldName: "select",
    label: "Select Multi",
    type: "select",
    options: [
      { value: "a", label: "A" },
      { value: "b", label: "B" },
      { value: "c", label: "C" }
    ],
    isMulti: true,
    grid: {
      xs: 6
    },
    initialValue: ["c"]
  },
  {
    fieldName: "switch",
    label: "Switch example",
    type: "switch",
    grid: {
      xs: 6
    },
    initialValue: true
  },
  {
    fieldName: "autocomplete",
    label: "AutoComplete",
    type: "autocomplete",
    options: [
      { value: "1", label: "Ade" },
      { value: "2", label: "Bac" },
      { value: "3", label: "Cae" }
    ],
    grid: {
      xs: 6
    },
    initialValue: "1",
    props: { disableClearable: false }
  },
  {
    fieldName: "array",
    label: "Array Example",
    type: "array",
    startEmpty: true,
    max: 3,
    of: [
      {
        fieldName: "name",
        label: "Name",
        type: "text",
        options: "text",
        initialValue: "",
        grid: {
          xs: 6
        }
      },
      {
        fieldName: "age",
        label: "Age",
        type: "text",
        options: "number",
        initialValue: "",
        grid: {
          xs: 6
        }
      }
    ],
    initialValue: []
  },
  {
    fieldName: "date",
    label: "Date ex",
    type: "date",
    initialValue: 0,
    grid: {
      xs: 6
    }
  },
  {
    fieldName: "datetime",
    label: "Date Time ex",
    type: "datetime",
    initialValue: Date.now() - 3600 * 24 * 1000,
    grid: {
      xs: 6
    }
  },
  {
    fieldName: "time",
    label: "Time ex",
    type: "time",
    grid: {
      xs: 6
    },
    props: {
      style: { border: "3px solid cyan", borderRadius: 2, padding: 5 }
    }
  },
  {
    fieldName: "custom",
    type: "other",
    label: "Custom Component",
    initialValue: 0,
    component: ({ value, setValue, errorMsg }) => (
      <div>
        <h3>custom component example</h3>
        <div
          onClick={() => {
            setValue(value + 1);
          }}
        >
          My value is changing on click {value}
        </div>
        {errorMsg && (
          <div style={{ background: "brown", padding: 20, color: "white" }}>
            {errorMsg}
          </div>
        )}
      </div>
    )
  }
];

const Example = () => {
  return (
    <EZFormikUI
    fields={fields}
    title="EZ-FormikUI"
    paragraph="Easy form generator"
    onSubmit={values => alert(JSON.stringify(values, undefined, 4))}
    validate={values => {
      const errors = {};

      if (values.custom > 2) {
        errors.custom = "No more then 2!";
      }

      return errors;
    }}
  />
  );
};

export default Example;
