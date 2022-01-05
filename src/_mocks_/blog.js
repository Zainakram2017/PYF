import faker from 'faker';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Education is the most powerful weapon which you can use to change the world',
  'Live as if you were to die tomorrow. Learn as if you were to live forever',
  'The cure for boredom is curiosity. There is no cure for curiosity',
  'If You are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people”',
  'It’s not that I’m so smart, it’s just that I stay with problems longer',
  'Teachers open the door, but you must enter by yourself'
];

const posts = [...Array(5)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: mockImgCover(index + 1),
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  author: {
    name: faker.name.findName(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`
  }
}));

export default posts;
