export const name_validation = {
    name: 'name',
    label: 'name',
    type: 'text',
    id: 'name',
    placeholder: 'Your name ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }
  export const surname_validation = {
    name: 'surname',
    label: 'surname',
    type: 'text',
    id: 'surname',
    placeholder: 'Your Surname ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }

export  const password_validation = {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    placeholder: 'Type password ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      minLength: {
        value: 8,
        message: 'min 8 characters',
      },
    },
  }
 export const new_password_validation = {
    name: "New password",
    label: "New password",
    type: "password",
    id: "New password",
    placeholder: "New password ...",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      minLength: {
        value: 8,
        message: "min 8 characters",
      },
    },
  };

 export const repeat_password_validation = {
    name: "Repeat password",
    label: "Repeat password",
    type: "password",
    id: "Repeat password",
    placeholder: "Reapeat password ...",
    validation: {
      required: {
        value: true,
        message: "required",
      },
      minLength: {
        value: 8,
        message: "min 8 characters",
      },
    },
  };

  export const email_validation = {
    name: 'email',
    label: 'email',
    type: 'text',
    id: 'email',
    placeholder: 'Your email ...',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Entered value does not match email format",
      },
    },
  }