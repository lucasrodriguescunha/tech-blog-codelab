import {render} from '@testing-library/react';
import ContactForm from '@/components/ContactForm/ContactForm';

describe('ContactForm Component', () => {
    it('Renderiza o ContactForm', () => {
        render(<ContactForm/>);
    });
});