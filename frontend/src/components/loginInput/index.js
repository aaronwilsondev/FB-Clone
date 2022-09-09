import { useField } from "formik";
import "./styles.css";

export default function LoginInput({ placeholder, ...props }) {
  const [feild, meta] = useField(props);
  return (
    <div className="input_wrap">
      <input
        type={feild.type}
        name={feild.name}
        placeholder={placeholder}
        {...props}
        {...feild}
      />
    </div>
  );
}
