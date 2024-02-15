import FormWapper from "./FormWapper";

type EducationFormData = {
  firstName: string;
};

type EducationFormProps = EducationFormData & {
  updateFields: (fields: Partial<EducationFormData>) => void;
};

export default function EducationForm({
  firstName,
  updateFields,
}: EducationFormProps) {
  return (
    <FormWapper title="سوابق تحصیلی">
      <label>نام </label>
      <input
        type="text"
        required
        autoFocus
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      {/* <Col>
        <Multiselect
          placeholder="انتخاب کنید"
          options={optionSalarys} // Options to display in the dropdown
          selectedValues={salary} // Preselected value to persist in dropdown
          onSelect={onSelect} // Function will trigger on select event
          onRemove={onRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
        />
      </Col> */}
    </FormWapper>
  );
}
