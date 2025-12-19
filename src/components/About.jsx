import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}
            >
                {/* Text Content */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)' }}>À propos de moi</h2>
                        <div style={{ height: '1px', background: 'var(--text-secondary)', flex: 1, maxWidth: '200px', opacity: 0.3 }} />
                    </div>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Bonjour ! Je m'appelle Hanaa Amira Taha. Je suis une développeuse polyvalente et étudiante en sécurité informatique.
                    </p>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Mon parcours combine le développement logiciel (Web & Desktop) et l'administration réseau. Je suis passionnée par la création d'outils sécurisés et performants, que ce soit des applications de surveillance d'intégrité de fichiers ou des plateformes e-commerce.
                    </p>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Voici quelques technologies avec lesquelles je travaille :
                    </p>

                    <ul style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
                        gap: '0.5rem',
                        padding: 0
                    }}>
                        {['Python', 'Java', 'C', 'React', 'HTML / CSS', 'Réseaux & Sécurité'].map((tech) => (
                            <li key={tech} style={{
                                color: 'var(--text-secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '0.9rem',
                                fontFamily: 'var(--font-mono)'
                            }}>
                                <span style={{ color: 'var(--accent-primary)' }}>▹</span> {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image Placeholder */}
                <div style={{ position: 'relative', maxWidth: '400px', margin: '0 auto' }}>
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        width: '100%',
                        height: '100%',
                        border: '2px solid var(--accent-primary)',
                        borderRadius: 'var(--radius-md)',
                        zIndex: 0,
                        transition: 'all 0.3s ease'
                    }} />
                    <div style={{
                        position: 'relative',
                        background: 'var(--bg-card)',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        zIndex: 1,
                        filter: 'grayscale(100%)',
                        transition: 'all 0.3s ease',
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.filter = 'none';
                            e.currentTarget.nextElementSibling.style.top = '15px';
                            e.currentTarget.nextElementSibling.style.left = '15px';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.filter = 'grayscale(100%)';
                        }}
                    >
                        {/* Placeholder image, user can replace with real photo */}
                        <div style={{ width: '100%', height: '400px', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
                            PHOTO DE PROFIL
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
