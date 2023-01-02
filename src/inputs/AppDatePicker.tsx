import { DatePicker, Form } from "antd";
import dayjs from "dayjs";
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

export const AppDatePicker = <T extends Partial<FieldValues>>({
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
          <DatePicker
            value={dayjs(field.value)}
            picker={picker}
            onChange={(e) => e?.format() && field.onChange(e.format())}
          />
        </Form.Item>
      )}
    />
  );
};
