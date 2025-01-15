import { useEffect, useState } from "react";

const Courses = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch(`data/courses_${filter}.json`)
      .then((res) => res.json())
      .then((data) => setList(data));

    return () => {
      console.log("❎ 연결 해제");
    };
  }, [filter]);

  return (
    <>
      <label htmlFor="all">전체</label>
      <input
        id="all"
        type="radio"
        value="all"
        checked={filter === "all"}
        onChange={(e) => setFilter(e.target.value)}
      />
      <label htmlFor="favorite">좋아요</label>
      <input
        id="favorite"
        type="radio"
        value="favorite"
        checked={filter === "favorite"}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {list.map((item: { id: number; title: string }) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

const AppEffect = () => {
  // 1] DOM 조작하기
  // useEffect(() => {
  //   const $h2 = document.querySelector("#title");
  //   $h2!.textContent = "Data Fetching";
  // }, []);
  // 위의 방법으로 작성 하면 무한 루프에 빠진다.
  // 초기 데이터를 불러온 뒤 상태값을 업데이트 하므로 해당 컴포넌트가 재렌더링 상태로 들어간다.
  // 이후 데이터를 받고 다시 상태 업데이트를 하기 때문에 이 과정이 무한 반복이 된다.

  const [show, setShow] = useState(true);

  return (
    <>
      <h2 id="title">데이터 가져오기</h2>
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Courses />}
    </>
  );
};

export default AppEffect;
