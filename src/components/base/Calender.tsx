import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { DateObject, Value } from "react-multi-date-picker";
type ComponentProps = {
  title?: string;
  value?: Value;
  minDate?: Date;
  maxDate?: Date;
  onChangeValue: (e: DateObject | DateObject[] | null) => void;
};
export default function Calender({
  title,
  value,
  minDate,
  maxDate,
  onChangeValue,
}: ComponentProps) {
  return (
    <>
      <label className="mb-2" htmlFor="">
        {title}:
      </label>
      <br />
      <DatePicker
        minDate={minDate}
        maxDate={maxDate}
        value={value}
        onChange={(e) => onChangeValue(e)}
        calendar={persian}
        locale={persian_fa}
      />
    </>
  );
}
