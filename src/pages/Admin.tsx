import { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
type FormData = {
  firstName: string;
  lastName: string;
  nationalCode: string;
  placeBirth: string;
  dateBirth: string;
  fatherName: string;
  maritalStatus: string;
  salary: string;
  companyName: string;
  position: string;
  workTime: string;
  satisfactionCompany: string;
  licence: object[];
  grade: string;
  fieldOfStudy: string;
  academicOrientation: string;
  universityName: string;
  gradePoint: string;
  timeLicence: string;
  startPosition: string;
  endPosition: string;
};
export default function Admin() {
  const [data, setData] = useState<FormData[]>([
    {
      endPosition: "1402/11/25",
      startPosition: "1402/11/1",
      firstName: "مهدی",
      lastName: "عباس زاده",
      maritalStatus: "2",
      nationalCode: "0020102917",
      placeBirth: "تهران",
      dateBirth: "1402/11/1",
      fatherName: "علی",
      salary: "2",
      companyName: "رسا",
      position: "فرانت اند",
      workTime: "",
      satisfactionCompany: "دارم",
      licence: [
        {
          id: 1,
          name: "HTML",
        },
        {
          id: 2,
          name: "CSS",
        },
      ],
      grade: "لیسانی",
      fieldOfStudy: "مهندسی",
      academicOrientation: "ای تی ",
      universityName: "قم",
      gradePoint: "20",
      timeLicence: "2",
    },
  ]);

  useEffect(() => {
    const loc_storage: string | null = localStorage.getItem("userData");
    if (loc_storage && JSON.parse(`${loc_storage}`).length > 0) {
      setData((prev) => [...prev, ...JSON.parse(`${loc_storage}`)]);
    }
  }, []);
  return (
    <Container className="mt-4">
      <Row>
        <Col className="d-block d-md-none" xs={12}>
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "Center",
              alignItems: "center",
            }}
          >
            <h1> قسمت داشبور برای سایزهای دکستاپ طراحی شده است</h1>
          </div>
        </Col>
        <Col className="d-none d-md-block" xs={12}>
          <Card>
            <Card.Header>لیست افراد ثبت نامی ({data?.length})</Card.Header>
            <Card.Body>
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>نام و نام خانوادگی</th>
                    <th>محل تولد</th>
                    <th>نام پدر</th>
                    <th>سمت</th>
                    <th>مقطع</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((x, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{`${x.firstName} ${x.lastName}`}</td>
                      <td>{x.placeBirth}</td>
                      <td>{x.fatherName}</td>
                      <td>{x.position}</td>
                      <td>{x.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
