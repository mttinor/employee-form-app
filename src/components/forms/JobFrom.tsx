import { Col, Form } from "react-bootstrap";
import FormWapper from "./FormWapper";
import { useState } from "react";
import Input from "./../base/Input";
import SingleSelect from "./../base/SingleSelect";

type JobFormData = {
  salary: string;
  companyName: string;
  position: string;
  workTime: string;
  satisfactionCompany: string;
};

type JobFormProps = JobFormData & {
  updateFields: (fields: Partial<JobFormData>) => void;
};

export default function JobFrom({
  satisfactionCompany,
  salary,
  companyName,
  position,
  workTime,
  updateFields,
}: JobFormProps) {
  const [options, setOptions] = useState([
    { value: "1", name: "بین 10 تا 15 میلیون تومان " },
    { value: "2", name: "بین 15 تا 20 میلیون تومان " },
    { value: "3", name: "بین 20 تا 25 میلیون تومان " },
    { value: "4", name: "بین 25 تا 30 میلیون تومان " },
    { value: "5", name: "بین 30 تا 35 میلیون تومان " },
  ]);
  return (
    <FormWapper title="سوابق شغلی">
      <Col xs={12} md={6}>
        <Input
          title="نام سازمان "
          value={companyName}
          onChangeValue={(e) => updateFields({ companyName: e.target.value })}
        />
      </Col>
      <Col xs={12} md={6}>
        <Input
          title="سمت"
          value={position}
          onChangeValue={(e) => updateFields({ position: e.target.value })}
        />
      </Col>
      <Col xs={12} md={6}>
        <Input
          title="مدت همکاری"
          value={workTime}
          onChangeValue={(e) => updateFields({ workTime: e.target.value })}
        />
      </Col>
      <Col xs={12} md={6}>
        <SingleSelect
          value={salary}
          options={options}
          onChangeValue={(e) => updateFields({ salary: e.target.value })}
          title="میزان حقوق دریافتی"
        />
      </Col>
      <Col xs={12} md={6}>
        <Form.Label>رضایت از سازمان قبلی:</Form.Label>
        <Form.Check
          onChange={(e) =>
            updateFields({ satisfactionCompany: e.target.value })
          }
          value="دارم"
          inline
          label="دارم"
          name="group1"
          type="radio"
        />
        <Form.Check
          onChange={(e) =>
            updateFields({ satisfactionCompany: e.target.value })
          }
          value="ندارم"
          inline
          label="ندارم"
          name="group1"
          type="radio"
        />
      </Col>
    </FormWapper>
  );
}
