import { Course } from "../../types";
import CourseItem from "./CourseItem";
import Card from "../Card";

const CourseCard = ({ courses }: { courses: Course[] }) => {
  return (
    <Card title="강의 목록">
      {courses.map((item) => (
        <CourseItem course={item} key={item.id} />
      ))}
    </Card>
  );
};

export default CourseCard;
