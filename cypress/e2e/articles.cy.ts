describe('Artigos', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve exibir a seção de artigos recomendados', () => {
        // Verifica se o título da seção está presente
        cy.contains('Artigos recomendados').should('be.visible')

        // Verifica se existem artigos listados
        cy.contains('O que é linguagem de programação?').should('be.visible')
        cy.contains('Python: por que a linguagem é tão usada').should('be.visible')
        cy.contains('GitHub tem receita de US$ 1 bilhão').should('be.visible')
    })

    it('Deve exibir todos os 6 artigos com informações completas', () => {
        // Verifica se todos os títulos dos artigos estão presentes
        const artigos = [
            'O que é linguagem de programação? Conheça as principais',
            'Python: por que a linguagem é tão usada para Data Science e finanças?',
            'GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários',
            '15 comandos no GIT que os desenvolvedores precisam saber',
            'GIT e GitHub: o que são e quais as diferenças entre eles?',
            'GitHub Copilot ganha integração com GPT-4'
        ]

        artigos.forEach(titulo => {
            cy.contains(titulo).should('be.visible')
        })
    })

    it('Deve exibir as imagens dos artigos', () => {
        // Verifica se existem pelo menos 6 imagens de artigos
        cy.get('img[alt="Imagem do artigo"]').should('have.length', 6)

        // Verifica se as primeiras imagens estão visíveis
        cy.get('img[alt="Imagem do artigo"]').eq(0).should('be.visible')
        cy.get('img[alt="Imagem do artigo"]').eq(1).should('be.visible')
        cy.get('img[alt="Imagem do artigo"]').eq(2).should('be.visible')
    })

    it('Deve ter descrições para cada artigo', () => {
        // Verifica algumas descrições específicas
        cy.contains('Uma das mais populares vertentes da tecnologia da informação').should('be.visible')
        cy.contains('O mundo da programação conta com algumas opções de linguagem').should('be.visible')
        cy.contains('O popular serviço de repositório de código GitHub').should('be.visible')
    })

    it('Deve exibir artigos como elementos article', () => {
        // Verifica se os artigos estão em elementos article (semântica correta)
        cy.get('article').should('have.length.at.least', 6)

        // Cada artigo deve ter título e descrição
        cy.get('article').each(($article) => {
            cy.wrap($article).find('h3').should('exist')
            cy.wrap($article).find('p').should('exist')
            cy.wrap($article).find('img').should('exist')
        })
    })

    it('Deve ser responsivo na seção de artigos', () => {
        // Testa em viewport mobile
        cy.viewport(375, 667)

        cy.contains('Artigos recomendados').should('be.visible')
        cy.contains('O que é linguagem de programação?').should('be.visible')

        // Volta para desktop
        cy.viewport(1280, 720)
        cy.contains('Artigos recomendados').should('be.visible')
    })
})
