import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import CardArticle from '@/components/CardArticle/CardArticle';

describe('CardArticle Component', () => {
    const mockProps = {
        image: '/image1.png',
        title: 'O que é linguagem de programação? Conheça as principais',
        description: 'Uma das mais populares vertentes da tecnologia da informação, a área de...'
    };

    test('Renderiza o CardArticle com as propriedades corretas', () => {
        render(<CardArticle {...mockProps} />);

        expect(screen.getByText(mockProps.title)).toBeInTheDocument();
        expect(screen.getByText(mockProps.description)).toBeInTheDocument();
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('alt', 'Imagem do artigo');
        expect(image).toHaveAttribute('src', expect.stringContaining(encodeURIComponent(mockProps.image)));
    });
});