import { DatePicker, Form } from "antd";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type Props<T extends Partial<FieldValues>> = {
  control: Control<any>;
  name: Path<T>;
  label?: string;
  helperText?: string;
  errors: any;
  placeholder?: string;
  picker?: "week" | "month" | "quarter" | "year";
};

export const AppTimePicker = <T extends Partial<FieldValues>>({
  control,
  name,
  label,
  picker,
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item name={name} label={label}>
          <DatePicker picker={picker} {...field} />
        </Form.Item>
      )}
    />
  );
};
