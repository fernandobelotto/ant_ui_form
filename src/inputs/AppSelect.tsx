import { Form, Select } from "antd";
import { PropsWithChildren } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type Props<T extends Partial<FieldValues>> = PropsWithChildren<{
  control: Control<any>;
  name: Path<T>;
  label?: string;
  helperText?: string;
  errors: any;
  options: any;
}>;

export const AppSelect = <T extends Partial<FieldValues>>({
  control,
  name,
  label,
  options,
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select style={{ width: 120 }} options={options} {...field} />
        </Form.Item>
      )}
    />
  );
};
