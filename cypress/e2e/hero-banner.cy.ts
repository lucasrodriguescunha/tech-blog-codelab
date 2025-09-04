describe('Hero Banner', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve exibir o hero banner com conteúdo correto', () => {
        // Verifica se o header está presente
        cy.get('header').should('be.visible')

        // Verifica se o título principal está presente
        cy.contains('Encontre os melhores artigos de programação em um só lugar').should('be.visible')

        // Verifica se o subtítulo está presente
        cy.contains('Explore o topo da programação em um só lugar!').should('be.visible')

        // Verifica se o botão de buscar artigos está presente
        cy.contains('Buscar artigos').should('be.visible')

        // Verifica se a imagem está presente
        cy.get('img[alt="Imagem de uma pessoa segurando um notebook"]').should('be.visible')
    })

    it('Deve ter elementos com estrutura correta', () => {
        // Verifica se o título está dentro de um h1
        cy.get('h1').should('contain.text', 'Encontre os melhores artigos')

        // Verifica se existe um parágrafo com o subtítulo
        cy.get('p').should('contain.text', 'Explore o topo da programação')

        // Verifica se o botão é clicável
        cy.contains('Buscar artigos').should('be.visible').and('not.be.disabled')
    })

    it('Deve ser responsivo em dispositivos móveis', () => {
        // Testa em viewport mobile
        cy.viewport(375, 667)

        // Elementos devem continuar visíveis
        cy.get('header').should('be.visible')
        cy.contains('Encontre os melhores artigos').should('be.visible')
        cy.get('img[alt="Imagem de uma pessoa segurando um notebook"]').should('be.visible')

        // Volta para desktop
        cy.viewport(1280, 720)
    })
})
