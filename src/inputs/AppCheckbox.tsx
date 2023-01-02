import { Checkbox, Form } from "antd";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type Props<T extends Partial<FieldValues>> = {
  control: Control<any>;
  name: Path<T>;
  label?: string;
  helperText?: string;
  errors: any;
  question: string;
};

export const AppCheckbox = <T extends Partial<FieldValues>>({
  control,
  name,
  label,
  question,
  helperText,
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item name={name} label={label}>
          <Checkbox {...field}>{question}</Checkbox>
        </Form.Item>
      )}
    />
  );
};
