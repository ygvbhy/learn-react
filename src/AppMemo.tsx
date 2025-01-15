import { useState, memo, useMemo, useCallback } from "react";
// 메모이제이션이 적용되지 않은 컴포넌트
const RegularComponent = ({
  count,
  items = [],
  onCount,
}: {
  count: number;
  items: { id: number; text: string; level: number }[];
  onCount: () => void;
}) => {
  console.log("RegularComponent 렌더링");
  return (
    <fieldset>
      <legend>일반 컴포넌트</legend>
      <div>{count}</div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <button onClick={onCount}>카운트 증가</button>
    </fieldset>
  );
};

// 메모이제이션이 적용된 컴포넌트
// memo 는 컴포넌트를 메모이제이션 하는 함수
// 컴포넌트가 렌더링 될때 이전 렌더링 값을 기억해서 재렌더링 되지 않음
// props 가 변경되지 않는 한 재렌더링 되지 않음
const MemoizedComponent = memo(
  ({
    count,
    items = [],
    onCount,
  }: {
    count: number;
    items: { id: number; text: string; level: number }[];
    onCount: () => void;
  }) => {
    MemoizedComponent.displayName = "MemoizedComponent";
    console.log("MemoizedComponent 렌더링");
    return (
      <fieldset>
        <legend>메모이제이션 컴포넌트</legend>
        <div>{count}</div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
        <button onClick={onCount}>카운트 증가</button>
      </fieldset>
    );
  }
);

export default function AppMemo() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // 리렌더링이 됐을때 해당 값이 다시 선언 되므로 memo 로 묶어서 놔둔것도 재렌더링됨
  // 그래서 해당 변수도 useMemo 로 묶어서 놔두면 재렌더링이 되지 않음
  const courses = useMemo(() => {
    return [
      { id: 0, text: "HTML", level: 1 },
      { id: 1, text: "CSS", level: 1 },
      { id: 2, text: "JavaScript", level: 1 },
      { id: 3, text: "React", level: 2 },
    ];
  }, []);

  // 함수 정의를 캐싱해주는 React Hook
  // 컴포넌트가 렌더링 될때 함수 정의를 캐싱해서 재렌더링 되지 않음
  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <h2>컴포넌트 메모이제이션</h2>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        기타 상태 변경
      </button>
      <hr />
      <RegularComponent count={count} items={courses} onCount={handleCount} />
      <MemoizedComponent count={count} items={courses} onCount={handleCount} />
    </div>
  );
}
