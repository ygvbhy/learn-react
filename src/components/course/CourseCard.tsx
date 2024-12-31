import { Course } from "../../types";
import CourseItem from "./CourseItem";
import Card from "../Card";

const CourseCard = ({
  courses,
  onToggleFavorite = () => {},
}: {
  courses: Course[];
  onToggleFavorite?: (id: number) => void;
}) => {
  return (
    <Card title="강의 목록">
      {courses.map((item) => (
        <CourseItem
          course={item}
          key={item.id}
          onToggleFavorite={() => onToggleFavorite(item.id)}
        />
      ))}
    </Card>
  );
};

export default CourseCard;
