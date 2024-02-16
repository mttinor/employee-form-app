import { Col } from "react-bootstrap";
import FormWapper from "./FormWapper";
import Input from "./../base/Input";

type EducationFormData = {
  grade: string;
  fieldOfStudy: string;
  academicOrientation: string;
  universityName: string;
  gradePoint: string;
};

type EducationFormProps = EducationFormData & {
  updateFields: (fields: Partial<EducationFormData>) => void;
};

export default function EducationForm({
  gradePoint,
  universityName,
  grade,
  fieldOfStudy,
  academicOrientation,
  updateFields,
}: EducationFormProps) {
  return (
    <FormWapper title="سوابق تحصیلی">
      <Col xs={12} md={6}>
        <Input
          required={true}
          title="مقطع"
          value={grade}
          onChangeValue={(e) => updateFields({ grade: e.target.value })}
        />
      </Col>
      <Col xs={12} md={6}>
        <Input
          title="رشته تحصیلی"
          value={fieldOfStudy}
          onChangeValue={(e) => updateFields({ fieldOfStudy: e.target.value })}
        />
      </Col>
      <Col xs={12} md={6}>
        <Input
          title="گرایش "
          value={academicOrientation}
          onChangeValue={(e) =>
            updateFields({ academicOrientation: e.target.value })
          }
        />
      </Col>
      <Col xs={12} md={6}>
        <Input
          title="دانشگاه / موسسه "
          value={universityName}
          onChangeValue={(e) =>
            updateFields({ universityName: e.target.value })
          }
        />
      </Col>
      <Col xs={12} md={6}>
        <Input
          title="معدل"
          value={gradePoint}
          onChangeValue={(e) => updateFields({ gradePoint: e.target.value })}
        />
      </Col>
    </FormWapper>
  );
}
