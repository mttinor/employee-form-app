import { useState } from "react";
import { Card, Container, Table } from "react-bootstrap";

export default function Admin() {
  const INIT_DATA = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : [];
  const [data, setData] = useState([
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
    ...INIT_DATA,
  ]);
  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>لیست افراد ثبت نامی</Card.Header>
        <Card.Body>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>نام</th>
                <th>نام خانوادگی</th>
                <th>سمت</th>
                <th>مقطع</th>
              </tr>
            </thead>
            <tbody>
              {data.map((x, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{x.firstName}</td>
                  <td>{x.lastName}</td>
                  <td>{x.position}</td>
                  <td>{x.grade}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}
