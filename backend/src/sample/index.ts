import insertUserSample from './InsertUserSample';
import insertWorkspaceSample from './InsertWorkspaceSample';
import insertUserHasWorkspaceSample from './InsertUserHasWorkspace';
import insertChannelSample from './InsertChannelSample';
import insertThreadSample from './InsertThreadSample';

const addSampleData = async () => {
  await insertUserSample();
  await insertWorkspaceSample();
  await insertUserHasWorkspaceSample();
  await insertChannelSample();
  await insertThreadSample();
};

export default addSampleData;
