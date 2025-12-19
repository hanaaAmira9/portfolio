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
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)' }}>About Me</h2>
                        <div style={{ height: '1px', background: 'var(--text-secondary)', flex: 1, maxWidth: '200px', opacity: 0.3 }} />
                    </div>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Hello! My name is Hanaa and I enjoy creating things that live on the internet. My interest in web development started back in 2022 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was pretty fun!
                    </p><picture>
                        <source media="(min-width: )" srcset="" />
                        <img src="" alt="" />
                    </picture>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences.
                    </p>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Here are a few technologies I've been working with recently:
                    </p>

                    <ul style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
                        gap: '0.5rem',
                        padding: 0
                    }}>
                        {['JavaScript (ES6+)', 'React', 'Node.js', 'Python', 'TypeScript', 'Framer Motion'].map((tech) => (
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
                        <img
                            src="https://via.placeholder.com/400x500/222/fff?text=Profile"
                            alt="Profile"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
