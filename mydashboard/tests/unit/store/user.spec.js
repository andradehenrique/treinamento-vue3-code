import useStore from '../../../src/hooks/useStore'
import {
  resetUserStore,
  setCurrentUser,
  clearCurrentUser,
  setApiKey
} from '../../../src/store/user'

describe('UserStore', () => {
  afterEach(() => {
    resetUserStore()
  })

  it('should set current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Igor' })
    expect(store.User.currentUser.name).toBe('Igor')
  })

  it('should set apiKey on current user', () => {
    const store = useStore()
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toEqual(
      expect.arrayContaining(['123'])
    )
  })

  it('should clean current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Igor' })
    expect(store.User.currentUser.name).toBe('Igor')
    clearCurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })
})
