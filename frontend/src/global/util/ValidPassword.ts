export const validPassword = (password: string) => {
  const pattern1 = /[0-9]/;
  const pattern2 = /[a-zA-Z]/;
  const pattern3 = /[`~!@#$%^&*()_+|<>?:{}]/;
  if (password.search(/\s/) !== -1) return '공백이 존재하면 안됩니다.';
  if (!pattern1.test(password)) {
    return '비밀번호는 숫자가 하나 이상 구성되어야 합니다.';
  }
  if (!pattern3.test(password)) {
    return '비밀번호는 특수문자가 하나 이상 구성되어야 합니다.';
  }
  if (!pattern2.test(password)) {
    return '비밀번호는 영어 대문자/소문자, 숫자, 특수문자로 구성되어야 합니다.';
  }
  return 'success';
};
