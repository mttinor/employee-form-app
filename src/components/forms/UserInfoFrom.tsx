import { Col } from "react-bootstrap";
import FormWapper from "./FormWapper";
import Input from "./../base/Input";
import SingleSelect from "./../base/SingleSelect";
import Calender from "./../base/Calender";
import { useState } from "react";

type UserFormData = {
  maritalStatus: string;
  firstName: string;
  lastName: string;
  nationalCode: string;
  placeBirth: string;
  dateBirth: string;
  fatherName: string;
  gender: string;
  address: string;
};

type UserFormProps = UserFormData & {
  updateFields: (fields: Partial<UserFormData>) => void;
};

export default function UserInfoFrom({
  address,
  gender,
  maritalStatus,
  firstName,
  lastName,
  nationalCode,
  placeBirth,
  dateBirth,
  fatherName,
  updateFields,
}: UserFormProps) {
  const [maritalStatusOptions] = useState([
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
  const [genderOptions] = useState([
    {
      name: "مرد",
      value: "1",
    },
    {
      name: "زن",
      value: "2",
    },
    {
      name: "سایر",
      value: "3",
    },
  ]);

  [{ name: "مذکز", value: "1" }];
  return (
    <FormWapper title="اطلاعات فردی">
      <Col xs={12} md={6}>
        <Input
          title="نام"
          value={firstName}
          onChangeValue={(e) => updateFields({ firstName: e.target.value })}
        />
      </Col>
      <Col xs={12} md={6}>
        <Input
          title="نام خانوادگی "
          value={lastName}
          onChangeValue={(e) => updateFields({ lastName: e.target.value })}
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
          maxDate={new Date()}
          onChangeValue={(e: any) =>
            updateFields({
              dateBirth: `${e?.year}/${e?.monthIndex + 1}/${e?.day}`,
            })
          }
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
          options={maritalStatusOptions}
          onChangeValue={(e) => updateFields({ maritalStatus: e.target.value })}
          title="وضعیت تاهل"
        />
      </Col>
      <Col xs={12} md={6}>
        <SingleSelect
          value={gender}
          options={genderOptions}
          onChangeValue={(e) => updateFields({ gender: e.target.value })}
          title="جنسیت"
        />
      </Col>
      <Col xs={12} md={6}>
        <Input
          value={address}
          onChangeValue={(e) => updateFields({ address: e.target.value })}
          title="آدرس"
        />
      </Col>
    </FormWapper>
  );
}
