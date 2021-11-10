import React from 'react';

interface Props {
  input: string;
  filterList: [];
  filter: (e) => boolean;
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
  ResultTemplate,
  NoResultTemplate = undefined,
  className,
}: Props): JSX.Element => {
  const filteredList = filterList.filter((e) => filter(e));

  return (
    <div className={className}>
      {filteredList.length ? (
        <ResultTemplate matches={filteredList} />
      ) : (
        NoResultTemplate && <NoResultTemplate input={input} />
      )}
    </div>
  );
};

export default Autocomplete;
