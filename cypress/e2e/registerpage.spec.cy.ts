
let registerPageLocator = {
  "txt_name": '#name',
  "txt_email": '#email',
  "txt_pass": '#password',
  "txt_username": '#username',
  "txt_passConfirm": '#password_confirmation',
  "btn_signUpWithEmail": '.form-group.text-center > .btn',
  "btn_login":'.form-group.text-center > .btn',
  "mes_error": '.invalid-feedback'

}


describe('the register page TCs', () => {
  it('TC1: Elements of the normal log in get data validation', () => {
    cy.visit('https://app.eklipse.gg/register')

    cy.get(registerPageLocator.txt_name).type('ab{enter}')
      .get(registerPageLocator.mes_error).should('contain', 'The name field must be at least 3 characters.')
      .get(registerPageLocator.txt_name).clear().type('Adam')

    cy.get(registerPageLocator.txt_email).type('abc{enter}')
      .get(registerPageLocator.txt_name).click()
      .get(registerPageLocator.mes_error).should('contain', 'The email field must be a valid email.')
      .get(registerPageLocator.txt_email).clear().type('abc@gmail.com')

    cy.get(registerPageLocator.txt_pass).type('abc{enter}')
      .get(registerPageLocator.mes_error).should('contain', 'The password field must be at least 6 characters.')
      .get(registerPageLocator.txt_pass).clear().type('Adam123')

    cy.get(registerPageLocator.txt_passConfirm).type('abc')
      .get(registerPageLocator.txt_name).click()
      .get(registerPageLocator.mes_error).should('contain', 'The password_confirmation field must be at least 6 characters.')
      .get(registerPageLocator.txt_passConfirm).clear().type('Adam123')

  })

  it('TC2: User can sign in the system with the created account',()=>{
    cy.visit('https://app.eklipse.gg/login')
      .get(registerPageLocator.txt_username).type('joseph.phaman@gmail.com')
      .get(registerPageLocator.txt_pass).type('123456789')
      .get(registerPageLocator.btn_login).click()
      .url().should('eq','https://app.eklipse.gg/home')
  })

})
