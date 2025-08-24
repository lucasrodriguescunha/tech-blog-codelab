import styles from './ContactForm.module.css';

export default function ContactForm() {
    return (
        <div className={styles.contactFormContainer}>
            <section className={styles.contactFormContent}>
                <form className={styles.contactForm}>
                    <h4 className={styles.contactFormTitle}>Entre em contato</h4>

                    <div className={styles.contactFormFieldGroup}>
                        <div className={styles.contactFormField}>
                            <input
                                id='name'
                                name='name'
                                type='text'
                                placeholder='Nome'
                                className={styles.contactFormInputField}
                                required
                                aria-required='true'
                            />
                        </div>

                        <div className={styles.contactFormField}>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                placeholder='E-mail'
                                className={styles.contactFormInputField}
                                required
                                aria-required='true'
                            />
                        </div>

                        <div className={styles.contactFormField}>
                            <textarea
                                id='message'
                                name='message'
                                placeholder='Digite sua mensagem'
                                className={styles.contactFormTextareaField}
                                required
                                aria-required='true'
                                rows={5}
                            />
                        </div>

                        <div className={styles.contactFormButton}>
                            <button className={styles.contactFormSubmitButton}>Entrar em contato</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}