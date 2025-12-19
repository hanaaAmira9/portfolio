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
                    04. What's Next?
                </p>
                <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                    Get In Touch
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <motion.a
                    href="mailto:example@email.com"
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
                    Say Hello
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Contact;
