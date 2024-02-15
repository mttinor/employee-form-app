import { Col } from "react-bootstrap";
import FormWapper from "./FormWapper";
import Input from "./base/Input";
import SingleSelect from "./base/SingleSelect";
import Calender from "./base/Calender";
import { DateObject } from "react-multi-date-picker";
import { useState } from "react";

type UserFormData = {
  maritalStatus: string;
  firstName: string;
  nationalCode: string;
  placeBirth: string;
  dateBirth: DateObject | DateObject[] | null;
  fatherName: string;
};

type UserFormProps = UserFormData & {
  updateFields: (fields: Partial<UserFormData>) => void;
};

export default function UserInfoFrom({
  maritalStatus,
  firstName,
  nationalCode,
  placeBirth,
  dateBirth,
  fatherName,
  updateFields,
}: UserFormProps) {
  const [options, setOptions] = useState([
    {
      name: "متاهل",
      value: "1",
    },
    {
      name: "مجرد",
      value: "2",
    },
    {
      name: "سایر",
      value: "3",
    },
  ]);
  return (
    <FormWapper title="اطلاعات فردی">
      <Col xs={12} md={6}>
        {" "}
        <Input
          title="نام خانوادگی "
          value={firstName}
          onChangeValue={(e) => updateFields({ firstName: e.target.value })}
        />
      </Col>
      <Col xs={12} md={6}>
        <Input
          title="نام پدر "
          value={fatherName}
          onChangeValue={(e) => updateFields({ fatherName: e.target.value })}
        />
      </Col>
      <Col xs={12} md={6}>
        <Calender
          title="تاریخ تولد "
          value={dateBirth}
          onChangeValue={(e) => updateFields({ dateBirth: e })}
        />
      </Col>
      <Col xs={12} md={6}>
        <Input
          title="محل تولد "
          value={placeBirth}
          onChangeValue={(e) => updateFields({ placeBirth: e.target.value })}
        />
      </Col>
      <Col xs={12} md={6}>
        <Input
          title="کد ملی "
          value={nationalCode}
          onChangeValue={(e) => updateFields({ nationalCode: e.target.value })}
        />
      </Col>
      <Col xs={12} md={6}>
        <SingleSelect
          value={maritalStatus}
          options={options}
          onChangeValue={(e) => updateFields({ maritalStatus: e.target.value })}
          title="وضعیت تاهل"
        />
      </Col>
    </FormWapper>
  );
}
