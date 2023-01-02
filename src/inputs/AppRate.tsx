import { Form, Rate } from "antd";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type Props<T extends Partial<FieldValues>> = {
  control: Control<any>;
  name: Path<T>;
  label?: string;
  helperText?: string;
  errors: any;
};

export const AppRate = <T extends Partial<FieldValues>>({
  control,
  name,
  label,
}: Props<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Rate {...field} />
        </Form.Item>
      )}
    />
  );
};
