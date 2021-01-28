import {
  validateEmptyAndEmail,
  validateEmptyAndlength3
} from '../../../src/utils/validators'

describe('Validators utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndlength3()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with less then 3 character payload', () => {
    expect(validateEmptyAndlength3('12')).toBe(
      '*Este campo precisa de no mínimo 3 caracteres'
    )
  })

  it('should returns true when pass a correct param', () => {
    expect(validateEmptyAndlength3('1234')).toBe(true)
  })

  it('should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with a invalid param', () => {
    expect(validateEmptyAndEmail('myemail@')).toBe(
      '*Este campo precisa ser um email'
    )
  })

  it('should returns true when pass a correct param', () => {
    expect(validateEmptyAndEmail('myemail@email.com')).toBe(true)
  })
})
