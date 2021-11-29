import React, { useEffect, useState } from 'react';

interface Props {
  input: string;
  filter: (e) => boolean;
  filterList: any[];
  setValue: (e) => void;
  ResultTemplate: React.ElementType;
  NoResultTemplate?: React.ElementType;
  className: string;
}
/**
 * 자동 완성
 * @input 필터링하는 문자
 * @filter 필터링하는 함수
 * @filterList 필터링 하려고 하는 배열
 * @setValue 값을 선택했을 때 실행할 함수
 * @ResultTemplate 필터링 된 결과를 표시할 컴포넌트, 필터링 된 배열은 matches로 전달
 * @NoResultTemplate는 매칭되는 값이 없을 때를 위한 옵션
 */
const Autocomplete = ({
  input = '',
  filter,
  filterList,
  setValue,
  ResultTemplate,
  NoResultTemplate,
  className,
}: Props): JSX.Element => {
  const filteredList = filterList.filter((e) => filter(e));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIndex((prevIndex) => {
        return prevIndex === filteredList.length - 1 ? 0 : prevIndex + 1;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIndex((prevIndex) => {
        return prevIndex === 0 ? filteredList.length - 1 : prevIndex - 1;
      });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      setSelected(true);
    }
  };

  useEffect(() => {
    if (selected) {
      setValue(filteredList[index]);
      setSelected(false);
    }
  }, [selected]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    setIndex(0);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

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

Autocomplete.defaultProps = {
  NoResultTemplate: undefined,
};

export default Autocomplete;
