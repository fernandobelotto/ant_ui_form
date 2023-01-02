import { Form, InputNumber } from "antd";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type Props<T extends Partial<FieldValues>> = {
  control: Control<any>;
  name: Path<T>;
  label?: string;
  helperText?: string;
  errors: any;
  placeholder?: string;
};

export const AppInputNumber = <T extends Partial<FieldValues>>({
  control,
  name,
  label,
  placeholder,
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item name={name} label={label}>
          <InputNumber placeholder={placeholder} {...field} />
        </Form.Item>
      )}
    />
  );
};
