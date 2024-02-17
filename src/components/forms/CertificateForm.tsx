import { Form } from "react-bootstrap";
import { useState } from "react";
import FormWapper from "./FormWapper";
import Multiselect from "multiselect-react-dropdown";
import { Col } from "react-bootstrap";
import Input from "./../base/Input";

type CertificateFormData = {
  licence: object[];
  timeLicence: string;
};

type CertificateFormProps = CertificateFormData & {
  updateFields: (fields: Partial<CertificateFormData>) => void;
};
export default function CertificateForm({
  licence,
  timeLicence,
  updateFields,
}: CertificateFormProps) {
  const [optionLicence] = useState([
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JAVASCRIPT" },
    { id: 4, name: "REACT" },
    { id: 5, name: "VUE" },
  ]);
  function onSelect(selectedList: object[]) {
    updateFields({ licence: selectedList });
  }

  function onRemove(selectedList: object[]) {
    updateFields({ licence: selectedList });
  }
  return (
    <FormWapper title="دوره های آموزشی و گواهینامه ها">
      <Col>
        <Form.Label>از دورهای زیر کدام را گذرانده اید :</Form.Label>
        <Multiselect
          placeholder="انتخاب کنید"
          options={optionLicence} // Options to display in the dropdown
          selectedValues={licence} // Preselected value to persist in dropdown
          onSelect={onSelect} // Function will trigger on select event
          onRemove={onRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
        />
      </Col>
      <Col xs={12} md={6}>
        <Input
          type="number"
          title="مدت زمان گذراندن دوره ها"
          value={timeLicence}
          onChangeValue={(e) => updateFields({ timeLicence: e.target.value })}
        />
      </Col>
    </FormWapper>
  );
}
