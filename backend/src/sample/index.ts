import insertUserSample from './InsertUserSample';
import insertWorkspaceSample from './InsertWorkspaceSample';
import insertUserHasWorkspaceSample from './InsertUserHasWorkspace';

const addSampleData = async () => {
  await insertUserSample();
  await insertWorkspaceSample();
  await insertUserHasWorkspaceSample();
};

export default addSampleData;
