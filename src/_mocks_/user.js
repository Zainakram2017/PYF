import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(1),
  name: sample(['Ali', 'Raza', 'Hassan', 'Abiha', 'Areesha', 'Fatima', 'Tahir']),
  company: sample(['9th', '10th', '1st Year', '2nd Year']),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample(['Teacher', 'Student'])
}));

export default users;
