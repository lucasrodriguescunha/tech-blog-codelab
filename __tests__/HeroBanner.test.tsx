import {render} from '@testing-library/react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

describe('HeroBanner Component', () => {
    it('Renderiza o HeroBanner', () => {
        render(<HeroBanner/>);
    });
});