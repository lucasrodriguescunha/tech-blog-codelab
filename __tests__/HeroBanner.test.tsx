import {render} from '@testing-library/react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

describe('HeroBanner Component', () => {
    it('renderiza o HeroBanner', () => {
        render(<HeroBanner/>);
    });
});