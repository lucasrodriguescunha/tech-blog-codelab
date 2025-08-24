import {render} from '@testing-library/react'
import Page from './page';

describe('Page', () => {
    it('renderiza o Page', () => {
        render(<Page/>);
    });
});