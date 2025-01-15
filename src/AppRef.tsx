import { useEffect, useRef, useState } from "react";

// let counter = 0;

const ButtonCounter = () => {
  // useRef 는 값이 변경되어도 리렌더링되지 않는다.
  const countRef = useRef(0);
  // const [count, setCount] = useState(0);

  // 한번만 출력됨
  // console.log("✅ 리렌더링");

  const handleClick = () => {
    countRef.current++;
    // console.log(countRef.current);
    // setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleClick}>Count</button>
    </>
  );
};

const Form = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    content: "",
  });

  // 각각의 ref 를 선언 해줌
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const authorInputRef = useRef<HTMLInputElement | null>(null);
  const contentInputRef = useRef<HTMLTextAreaElement | null>(null);

  // submit 이벤트 핸들러
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // 각각의 입력 필드에 대한 이벤트 핸들러
  // 변경 됐다면 해당 하는 값의 name 과 value 를 이용해 form 상태를 업데이트
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // 초기 로딩시에 빈 값에 focus 처리
  useEffect(() => {
    if (!form.title) {
      titleInputRef.current?.focus();
      return;
    }
    if (!form.author) {
      authorInputRef.current?.focus();
      return;
    }
    if (!form.content) {
      contentInputRef.current?.focus();
      return;
    }
  }, [form]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>글쓰기</legend>
          <input
            ref={titleInputRef}
            type="text"
            name="title"
            placeholder="제목"
            value={form.title}
            onChange={handleChange}
          />
          <hr />
          <input
            ref={authorInputRef}
            type="text"
            name="author"
            placeholder="작성자"
            value={form.author}
            onChange={handleChange}
          />
          <hr />
          <textarea
            ref={contentInputRef}
            name="content"
            placeholder="내용"
            value={form.content}
            onChange={handleChange}
          ></textarea>
          <hr />
          <button type="submit">저장</button>
        </fieldset>
      </form>
    </>
  );
};

const AppRef = () => {
  return (
    <>
      <div>Count</div>
      <ButtonCounter />
      <ButtonCounter />
      <h2>Form</h2>
      <Form />
    </>
  );
};

export default AppRef;
