import { useState } from "react";
import FormWapper from "./FormWapper";
import Multiselect from "multiselect-react-dropdown";
import { Col } from "react-bootstrap";
type CertificateFormData = {
  licence: object[];
};

type CertificateFormProps = CertificateFormData & {
  updateFields: (fields: Partial<CertificateFormData>) => void;
};
export default function CertificateForm({
  licence,
  updateFields,
}: CertificateFormProps) {
  const [optionSalarys, setOptionSalarys] = useState([
    { id: 1, name: "بین 10 تا 15 میلیون تومان 1️⃣" },
    { id: 2, name: "بین 15 تا 20 میلیون تومان 1️⃣" },
    { id: 3, name: "بین 20 تا 25 میلیون تومان 1️⃣" },
    { id: 4, name: "بین 25 تا 30 میلیون تومان 1️⃣" },
    { id: 5, name: "بین 30 تا 35 میلیون تومان 1️⃣" },
  ]);
  function onSelect(selectedList: object[], selectedItem: object) {
    console.log(selectedList, selectedItem, "onSelect");
    updateFields({ licence: selectedList });
  }

  function onRemove(selectedList: object[], removedItem: object) {
    console.log(selectedList, removedItem, "onRemove");
    updateFields({ licence: selectedList });
  }
  return (
    <FormWapper title="دوره های آموزشی و گواهینامه ها">
      <Col>
        <Multiselect
          placeholder="انتخاب کنید"
          options={optionSalarys} // Options to display in the dropdown
          selectedValues={licence} // Preselected value to persist in dropdown
          onSelect={onSelect} // Function will trigger on select event
          onRemove={onRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
        />
      </Col>
    </FormWapper>
  );
}
