import { ErrorMessage, useField } from "formik";
import "./styles.css";

export default function LoginInput({ placeholder, bottom, ...props }) {
  const [feild, meta] = useField(props);
  return (
    <div className="input_wrap">
      {meta.touched && meta.error && !bottom && (
        <div className="input_error" style={{ transform: "translateY(2px)" }}>
          {meta.touched && meta.error && <ErrorMessage name={feild.name} />}
          {meta.touched && meta.error && (
            <div className="error_arrow_top"></div>
          )}
        </div>
      )}
      <input
        className={meta.touched && meta.error ? "input_error_border" : ""}
        type={feild.type}
        name={feild.name}
        placeholder={placeholder}
        {...props}
        {...feild}
      />
      {meta.touched && meta.error && bottom && (
        <div className="input_error">
          {meta.touched && meta.error && <ErrorMessage name={feild.name} />}
          {meta.touched && meta.error && (
            <div className="error_arrow_bottom"></div>
          )}
        </div>
      )}
      {meta.touched && meta.error && (
        <i className="error_icon" style={{ top: `${!bottom && "63%"}` }}></i>
      )}
    </div>
  );
}
