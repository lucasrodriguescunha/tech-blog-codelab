import {render} from '@testing-library/react';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

describe('SectionTitle Component', () => {
    it('Renderiza o SectionTitle', () => {
        render(<SectionTitle/>);
    });
});