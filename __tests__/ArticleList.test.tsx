import {render} from '@testing-library/react';
import ArticleList from '@/components/ArticleList/ArticleList';

describe('ArticleList Component', () => {
    it('renderiza o ArticleList', () => {
        render(<ArticleList/>);
    });
});