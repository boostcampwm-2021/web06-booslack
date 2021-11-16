import insertUserSample from './InsertUserSample';
import insertWorkspaceSample from './InsertWorkspaceSample';
import insertUserHasWorkspaceSample from './InsertUserHasWorkspace';
import insertChannelSample from './InsertChannelSample';

const addSampleData = async () => {
  await insertUserSample();
  await insertWorkspaceSample();
  await insertUserHasWorkspaceSample();
  await insertChannelSample();
};

export default addSampleData;
