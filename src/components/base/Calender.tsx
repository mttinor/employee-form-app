import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { DateObject, Value } from "react-multi-date-picker";
type UserFormProps = {
  title?: string;
  value?: Value;
  onChangeValue: (e: DateObject | DateObject[] | null) => void;
};
export default function Calender({
  title,
  value,
  onChangeValue,
}: UserFormProps) {
  return (
    <>
      <label className="mb-2" htmlFor="">{title}:</label><br />
      <DatePicker
        value={value}
        onChange={(e: DateObject | DateObject[] | null) => onChangeValue(e)}
        calendar={persian}
        locale={persian_fa}
      />
    </>
  );
}
