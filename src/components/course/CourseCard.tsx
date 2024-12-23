import { Course } from "../../types";
import CourseItem from "./CourseItem";
import Card from "../Card";

const CourseCard = ({ courses }: { courses: Course[] }) => {
  return (
    <Card title="강의 목록">
      {courses.map((item, index) => (
        <CourseItem course={item} key={index} />
      ))}
    </Card>
  );
};

export default CourseCard;
