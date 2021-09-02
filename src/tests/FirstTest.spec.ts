import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Tiago'

  expect(user.name).toEqual('Tiago')
})
