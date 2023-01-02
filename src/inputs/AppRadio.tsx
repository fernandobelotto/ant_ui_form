import { Form, Radio, Space } from "antd";
import { PropsWithChildren } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type Props<T extends Partial<FieldValues>> = PropsWithChildren<{
  control: Control<any>;
  name: Path<T>;
  label?: string;
  helperText?: string;
  errors: any;
  direction?: "horizontal" | "vertical";
}>;

export const AppRadio = <T extends Partial<FieldValues>>({
  control,
  name,
  label,
  children,
  direction = "vertical",
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Radio.Group {...field}>
            <Space direction={direction}>{children}</Space>
          </Radio.Group>
        </Form.Item>
      )}
    />
  );
};

export const AppRadioItem = Radio;
