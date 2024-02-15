import { Form } from "react-bootstrap";

interface OptionType {
  name: string;
  value: string;
}
interface SingleSelectType {
  value: string;
  title: String;
  options?: OptionType[];
  errorMassage?: String;
  onChangeValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SingleSelect = ({
  title,
  value,
  options,
  errorMassage,
  onChangeValue,
}: SingleSelectType) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor="disabledSelect">{title} </Form.Label>
      <Form.Select
        value={value}
        onChange={(e) => onChangeValue(e)}
        id="disabledSelect"
      >
        <option>انتخاب کنید </option>
        {options?.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </Form.Select>
      {errorMassage && (
        <Form.Text className="text-muted">{errorMassage}</Form.Text>
      )}
    </Form.Group>
  );
};

export default SingleSelect;
