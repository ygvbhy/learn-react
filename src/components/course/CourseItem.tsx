import { Course } from "../../types";

const LinkIcon = ({ link }: { link: string }) => {
  return (
    <a href={link} className="btn" target="_blank">
      <img src="/img/link-icon.svg" className="btn__img" alt="링크" />
    </a>
  );
};

const CourseItem = ({
  course,
  onToggleFavorite,
}: {
  course: Course;
  onToggleFavorite: () => void;
}) => {
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
      <div className="course__icons">
        <button className="btn">
          <img
            src={
              course.isFavorite
                ? "/img/heart-fill-icon.svg"
                : "/img/heart-icon.svg"
            }
            className="btn__img"
            alt="좋아요"
            onClick={onToggleFavorite}
          />
        </button>
        {course.link && <LinkIcon link={course.link} />}
      </div>
    </article>
  );
};

export default CourseItem;
