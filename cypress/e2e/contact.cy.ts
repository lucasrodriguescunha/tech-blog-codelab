describe('Formulário de Contato', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve exibir o formulário de contato', () => {
        // Verifica se o título do formulário está presente
        cy.contains('Entre em contato').should('be.visible')

        // Verifica se todos os campos do formulário estão presentes
        cy.get('input[placeholder="Nome"]').should('be.visible')
        cy.get('input[placeholder="E-mail"]').should('be.visible')
        cy.get('textarea[placeholder="Digite sua mensagem"]').should('be.visible')

        // Verifica se o botão de envio está presente
        cy.get('button').contains('Entrar em contato').should('be.visible')
    })

    it('Deve permitir preenchimento do formulário', () => {
        // Preenche o formulário
        cy.get('input[placeholder="Nome"]').type('João Silva')
        cy.get('input[placeholder="E-mail"]').type('joao@exemplo.com')
        cy.get('textarea[placeholder="Digite sua mensagem"]').type('Olá, gostaria de mais informações sobre os artigos.')

        // Verifica se os valores foram preenchidos
        cy.get('input[placeholder="Nome"]').should('have.value', 'João Silva')
        cy.get('input[placeholder="E-mail"]').should('have.value', 'joao@exemplo.com')
        cy.get('textarea[placeholder="Digite sua mensagem"]').should('have.value', 'Olá, gostaria de mais informações sobre os artigos.')
    })

    it('Deve validar campos obrigatórios', () => {
        // Tenta enviar formulário vazio
        cy.get('button').contains('Entrar em contato').click()

        // Verifica se os campos são obrigatórios (HTML5 validation)
        cy.get('input[placeholder="Nome"]').should('have.attr', 'required')
        cy.get('input[placeholder="E-mail"]').should('have.attr', 'required')
        cy.get('textarea[placeholder="Digite sua mensagem"]').should('have.attr', 'required')
    })

    it('Deve validar formato do email', () => {
        // Preenche com email inválido
        cy.get('input[placeholder="Nome"]').type('João Silva')
        cy.get('input[placeholder="E-mail"]').type('email-invalido')
        cy.get('textarea[placeholder="Digite sua mensagem"]').type('Teste')

        // Verifica se o campo de email tem tipo email
        cy.get('input[placeholder="E-mail"]').should('have.attr', 'type', 'email')
    })

    it('Deve ser responsivo no formulário', () => {
        // Testa em viewport mobile
        cy.viewport(375, 667)

        cy.contains('Entre em contato').should('be.visible')
        cy.get('input[placeholder="Nome"]').should('be.visible')
        cy.get('input[placeholder="E-mail"]').should('be.visible')
        cy.get('textarea[placeholder="Digite sua mensagem"]').should('be.visible')

        // Testa preenchimento em mobile
        cy.get('input[placeholder="Nome"]').type('Teste Mobile')
        cy.get('input[placeholder="Nome"]').should('have.value', 'Teste Mobile')

        // Volta para desktop
        cy.viewport(1280, 720)
    })

    it('Deve ter acessibilidade adequada', () => {
        // Verifica atributos de acessibilidade
        cy.get('input[placeholder="Nome"]').should('have.attr', 'aria-required', 'true')
        cy.get('input[placeholder="E-mail"]').should('have.attr', 'aria-required', 'true')
        cy.get('textarea[placeholder="Digite sua mensagem"]').should('have.attr', 'aria-required', 'true')
    })
})
