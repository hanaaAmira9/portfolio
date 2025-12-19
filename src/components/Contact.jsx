import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Contact Portfolio de ${formData.name}`);
        const body = encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        window.location.href = `mailto:hanaaamira9@gmail.com?subject=${subject}&body=${body}`;
    };

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
                <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '2rem' }}>
                    Contactez-moi
                </h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Votre Nom</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                transition: 'border 0.3s'
                            }}
                            onFocus={(e) => e.target.style.border = '1px solid var(--accent-primary)'}
                            onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Votre Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                transition: 'border 0.3s'
                            }}
                            onFocus={(e) => e.target.style.border = '1px solid var(--accent-primary)'}
                            onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Votre Message</label>
                        <textarea
                            name="message"
                            required
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 'var(--radius-sm)',
                                color: 'var(--text-primary)',
                                outline: 'none',
                                fontFamily: 'inherit',
                                resize: 'vertical',
                                transition: 'border 0.3s'
                            }}
                            onFocus={(e) => e.target.style.border = '1px solid var(--accent-primary)'}
                            onBlur={(e) => e.target.style.border = '1px solid rgba(255,255,255,0.1)'}
                        />
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            marginTop: '1rem',
                            padding: '1.2rem',
                            background: 'transparent',
                            border: '1px solid var(--accent-primary)',
                            borderRadius: 'var(--radius-sm)',
                            color: 'var(--accent-primary)',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'background 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'rgba(0, 255, 157, 0.1)'}
                        onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                        Envoyer le message
                    </motion.button>
                </form>

            </motion.div>
        </section>
    );
};

export default Contact;
