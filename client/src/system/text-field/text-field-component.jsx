import { TextField } from "@mui/material";
import "./text-field-component.scss";

export default function TextFieldComponent({
  label,
  multiline,
  onChange,
  value,
}) {
  const onChnageTextField = (event) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      label={label}
      multiline={multiline}
      minRows={3}
      onChange={onChnageTextField}
      autoComplete="off"
      className="text-field"
    />
  );
}
