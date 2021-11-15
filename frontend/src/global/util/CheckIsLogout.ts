import useAsync from '@hook/useAsync';

function checkIsLogout() {
  try {
    const { data, loading, error } = useAsync(
      null,
      'api/login/info',
      [],
      'POST',
    );
    return !(data === null) && data.message === 'User is not Login';
  } catch (error) {
    return false;
  }
}

export default checkIsLogout;
