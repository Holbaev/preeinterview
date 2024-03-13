import React, { useState } from "react";
import styles from "./Input.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { MdError } from "react-icons/md";
import { useFormContext } from "react-hook-form";
import showEye from "../../shared/assets/icons/show (1).png";
import closeEye from "../../shared/assets/icons/eye (2).png";

const Input = ({
  label,
  type,
  id,
  placeholder,
  validation,
  name,
  multiline,
}) => {
  // states
  const [isShow, setShow] = useState(false);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // functions

  const findInputError = (errors, name) => {
    const filtered = Object.keys(errors)
      .filter((key) => key.includes(name))
      .reduce((cur, key) => {
        return Object.assign(cur, { error: errors[key] });
      }, {});
    return filtered;
  };
  const isFormInvalid = (err) => {
    if (Object.keys(err).length > 0) {
      return true;
    } else {
      return false;
    }
  };
  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);
  return (
    <div className={styles.input}>
      <div className={styles.input_label}>
        <div className={styles.flex}>
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
          {type === "password" && (  
          <button
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
            onClick={() => setShow(!isShow)}
          >
            <img src={isShow ? showEye : closeEye} alt="" />
          </button>
          )}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <div className={styles.input_box}>
        {multiline ? (
          <textarea
            id={id}
            type={type}
            className={styles.input_field}
            placeholder={placeholder}
            {...register(`${name}`, validation)}
          ></textarea>
        ) : (
          <>
            {type === "password" ? (
              <input
                id={id}
                type={isShow ? "text" : "password"}
                placeholder={placeholder}
                {...register(name, validation)}
                className={styles.input_field}
              />
            ) : (
              <input
                id={id}
                type={type}
                placeholder={placeholder}
                {...register(name, validation)}
                className={styles.input_field}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
const InputError = ({ message }) => {
  // states
  const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
  };
  return (
    <motion.p className={styles.error} {...framer_error}>
      <MdError />
      {message}
    </motion.p>
  );
};

export default Input;
