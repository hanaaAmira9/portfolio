import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" style={{
            padding: '8rem 2rem',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <p style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>
                    04. La suite ?
                </p>
                <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                    Contactez-moi
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                    Je suis actuellement à l'écoute de nouvelles opportunités. Mon e-mail est toujours ouvert, que ce soit pour une question ou juste pour dire bonjour, je ferai de mon mieux pour vous répondre !
                </p>

                <motion.a
                    href="mailto:hanaaamira9@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        display: 'inline-block',
                        padding: '1.2rem 3rem',
                        border: '1px solid var(--accent-primary)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--accent-primary)',
                        fontSize: '1rem',
                        fontWeight: '600',
                        background: 'transparent',
                        cursor: 'pointer',
                        transition: 'background 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.background = 'rgba(0, 255, 157, 0.1)'}
                    onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                    Envoyer un message
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Contact;
