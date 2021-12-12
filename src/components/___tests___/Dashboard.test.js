jest.mock('../../firebase.js', () => jest.fn());
import Dashboard from '../Dashboard';

test('testing true to true', () => {
  expect(true).toBe(true);
});
