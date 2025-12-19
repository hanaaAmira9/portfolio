import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '2rem',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '300px',
                height: '300px',
                background: 'var(--accent-glow)',
                filter: 'blur(100px)',
                borderRadius: '50%',
                zIndex: -1
            }} />

            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '20%',
                width: '250px',
                height: '250px',
                background: 'rgba(112, 0, 255, 0.2)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                zIndex: -1
            }} />

            <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'left', zIndex: 1 }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        color: 'var(--accent-primary)',
                        fontWeight: '600',
                        letterSpacing: '2px',
                        marginBottom: '1rem'
                    }}
                >
                    BONJOUR, JE SUIS
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, #fff, #aaa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Hanaa Amira Taha.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        fontWeight: '700',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem'
                    }}
                >
                    Développeuse Web & Sécurité.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{
                        maxWidth: '600px',
                        fontSize: '1.1rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem'
                    }}
                >
                    Je suis une développeuse passionnée par le web et les applications desktop (Python), et étudiante en sécurité informatique. Je maîtrise également l'administration réseau.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}
                >
                    <a href="#projects" style={{
                        padding: '1rem 2rem',
                        border: '1px solid var(--accent-primary)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--accent-primary)',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s ease',
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(0, 255, 157, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                        }}
                    >
                        Voir mes projets <ArrowRight size={18} />
                    </a>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <motion.a href="https://github.com/hanaaAmira9" target="_blank" whileHover={{ y: -3, color: 'var(--accent-primary)' }} style={{ color: 'var(--text-secondary)' }}>
                            <Github size={24} />
                        </motion.a>
                        <motion.a href="#" whileHover={{ y: -3, color: 'var(--accent-primary)' }} style={{ color: 'var(--text-secondary)' }}>
                            <Linkedin size={24} />
                        </motion.a>
                        <motion.a href="mailto:hanaaamira9@gmail.com" whileHover={{ y: -3, color: 'var(--accent-primary)' }} style={{ color: 'var(--text-secondary)' }}>
                            <Mail size={24} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
