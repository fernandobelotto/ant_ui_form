import { Button, Radio } from "antd";
import { useForm } from "react-hook-form";
import { AppCheckbox } from "./inputs/AppCheckbox";
import { AppInput } from "./inputs/AppInput";
import { AppRadio } from "./inputs/AppRadio";
import { Typography } from "antd";
import { AppInputNumber } from "./inputs/AppInputNumber";
import { AppRate } from "./inputs/AppRate";
import { AppSelect } from "./inputs/AppSelect";

import { AppDatePicker } from "./inputs/AppDatePicker";
import dayjs, { Dayjs } from "dayjs";

dayjs();

type FormType = {
  text: string;
  checkbox: boolean;
  radio: string;
  number: number;
  rate: number;
  select: string;
  date: Dayjs;
};

const { Title } = Typography;

const AppFullForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormType>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Title>Ant Design + React Hook Form</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AppInput<FormType>
          errors={errors}
          name="text"
          control={control}
          placeholder="Enter text"
        />
        <AppCheckbox<FormType>
          errors={errors}
          name="checkbox"
          control={control}
          question="Do you like this?"
        />
        <AppRadio<FormType> control={control} name="radio" errors={errors}>
          <Radio value="a">item 1</Radio>
          <Radio value="b">item 2</Radio>
          <Radio value="c">item 3</Radio>
        </AppRadio>
        <AppInputNumber<FormType>
          control={control}
          name="number"
          errors={errors}
        />
        <AppRate<FormType> control={control} name="rate" errors={errors} />

        <AppSelect<FormType>
          control={control}
          name="select"
          errors={errors}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "disabled",
              disabled: true,
              label: "Disabled",
            },
          ]}
        />

        <AppDatePicker<FormType>
          errors={errors}
          name="date"
          control={control}
        />

        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default AppFullForm;
