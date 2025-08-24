import {render} from '@testing-library/react';
import ContactForm from '@/components/ContactForm/ContactForm';

describe('ContactForm Component', () => {
    it('renderiza o ContactForm', () => {
        render(<ContactForm/>);
    });
});