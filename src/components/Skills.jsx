import { motion } from 'framer-motion';
import { Code2, Database, Layout, Smartphone, Terminal, Cpu } from 'lucide-react';

const skillsData = [
    {
        category: "Frontend Development",
        icon: <Layout size={32} />,
        desc: "Building responsive, accessible web interfaces",
        techs: ["React", "HTML5", "CSS3", "Framer Motion", "Tailwind"]
    },
    {
        category: "Backend Development",
        icon: <Database size={32} />,
        desc: "Creating robust APIs and server-side logic",
        techs: ["Node.js", "Express", "Python", "SQL", "MongoDB"]
    },
    {
        category: "Mobile App Dev",
        icon: <Smartphone size={32} />,
        desc: "Developing cross-platform mobile applications",
        techs: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
        category: "DevOps & Tools",
        icon: <Terminal size={32} />,
        desc: "Streamlining deployment and development workflows",
        techs: ["Git", "Docker", "AWS", "CI/CD", "Linux"]
    }
];

const Skills = () => {
    return (
        <section id="skills" style={{
            padding: '6rem 2rem',
            background: 'var(--bg-secondary)' // Subtle bg shift
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>02.</span> My Skills
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        A look at the languages and tools I use to bring ideas to life.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            style={{
                                background: 'var(--bg-card)',
                                padding: '2rem',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: '0 10px 30px -15px rgba(0,0,0,0.5)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                transition: 'border 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.border = '1px solid var(--accent-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.border = '1px solid rgba(255,255,255,0.05)'}
                        >
                            <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem' }}>
                                {skill.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                                {skill.category}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '3rem' }}>
                                {skill.desc}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {skill.techs.map(tech => (
                                    <span key={tech} style={{
                                        fontSize: '0.85rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--text-primary)',
                                        background: 'rgba(255,255,255,0.1)',
                                        padding: '0.2rem 0.6rem',
                                        borderRadius: 'var(--radius-sm)'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
