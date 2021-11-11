import React, { useEffect, useRef, useState } from 'react';

interface Props {
  input: string;
  filterList: [];
  filter: (e) => boolean;
  setValue: (e) => void;
  ResultTemplate: React.ElementType;
  NoResultTemplate: React.ElementType;
  className: string;
}
/**
 * 자동 완성
 * @filter 필터링하는 함수
 * @filterList 필터링 하려고 하는 배열
 * @ResultTemplate 필터링 된 결과를 표시할 컴포넌트, 필터링 된 배열은 matches로 전달
 * @input과 @NoResultTemplate는 매칭되는 값이 없을 때를 위한 옵션
 */
const Autocomplete = ({
  input = '',
  filterList,
  filter,
  setValue,
  ResultTemplate,
  NoResultTemplate = undefined,
  className,
}: Props): JSX.Element => {
  const filteredList = filterList.filter((e) => filter(e));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(false);
  const max = useRef(0);
  // const [{ filteredList, index, selected }, setState] = useState({
  //   filteredList: filterList.filter((e) => filter(e)),
  //   index: 0,
  //   selected: false,
  // });

  // useEffect(() => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     filteredList: filterList.filter((e) => filter(e)),
  //   }));
  // }, [input]);
  console.log('outside', filteredList);

  const handleKeyDown = (e) => {
    console.log('inside', filteredList);
    console.log(max.current);
    if (e.key === 'ArrowDown') {
      setIndex((prevIndex) => {
        return prevIndex === filteredList.length - 1 ? 0 : prevIndex + 1;
      });
      // setState((prevState) => ({
      //   ...prevState,
      //   index:
      //     prevState.index === prevState.filteredList.length - 1
      //       ? 0
      //       : prevState.index + 1,
      // }));
    } else if (e.key === 'ArrowUp') {
      setIndex((prevIndex) => {
        return prevIndex === 0 ? filteredList.length - 1 : prevIndex - 1;
      });
      // setState((prevState) => ({
      //   ...prevState,
      //   index:
      //     prevState.index === 0
      //       ? prevState.filteredList.length - 1
      //       : prevState.index - 1,
      // }));
    } else if (e.key === 'Enter') {
      setSelected(true);
      // setState((prevState) => ({
      //   ...prevState,
      //   selected: true,
      // }));
    }
  };

  useEffect(() => {
    if (selected) {
      setValue(filteredList[index]);
    }
  }, [selected]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className={className}>
      {input && filteredList.length ? (
        <ResultTemplate matches={filteredList} index={index} />
      ) : (
        NoResultTemplate && <NoResultTemplate input={input} />
      )}
    </div>
  );
};

export default Autocomplete;
