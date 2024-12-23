import { Course } from "../../types";

const CourseItem = ({ course }: { course: Course }) => {
  // const isEmpty = false;
  // if (isEmpty) {
  //   return <p>강의가 없습니다.</p>;
  // }

  return (
    <article className="course">
      <img className="course__img" src={course.thumbnail} alt="강의 이미지" />
      <div className="course__body">
        <div className="course__title">{course.title}</div>
        <div className="course__description">{course.description}</div>
      </div>
    </article>
  );
};

export default CourseItem;
