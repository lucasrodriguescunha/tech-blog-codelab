import {render} from '@testing-library/react';
import Container from '@/components/Container/Container';

describe('Container Component', () => {
    it('renderiza o Container', () => {
        render(<Container/>);
    });
});