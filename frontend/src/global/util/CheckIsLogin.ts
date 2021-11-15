import useAsync from '@hook/useAsync';

function checkIsLogin() {
  try {
    const { data, loading, error } = useAsync(
      null,
      'api/login/info',
      [],
      'POST',
    );
    console.log(data);
    return !(data === null || data.message === 'User is not Login');
  } catch (error) {
    return false;
  }
}

export default checkIsLogin;
