import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
    {
        title: "File Integrity Monitoring (FIM)",
        desc: "Application desktop de surveillance de l'intégrité des fichiers système. Détecte les modifications non autorisées en temps réel.",
        tech: ["Python", "Hashing", "Windows API"],
        links: { github: "https://github.com/hanaaAmira9", external: "#" }
    },
    {
        title: "Compilateur SNAKE",
        desc: "Conception et implémentation d’un compilateur pour le langage SNAKE. Le projet inclut l’analyse lexicale et syntaxique, la validation des instructions, la gestion des erreurs et la traduction du code source vers une représentation exécutable.",
        tech: ["Python", "PyQt6", "OOP"],
        links: { github: "https://github.com/hanaaAmira9", external: "#" }
    },
    {
        title: "E-Commerce Simple",
        desc: "Site e-commerce complet avec panier, gestion produits et checkout.",
        tech: ["React", "HTML/CSS", "JavaScript"],
        links: { github: "https://github.com/hanaaAmira9", external: "#" }
    },
    {
        title: "Mon Portfolio",
        desc: "Site personnel pour présenter mes compétences et projets (celui-ci !).",
        tech: ["React", "Vite", "Framer Motion"],
        links: { github: "https://github.com/hanaaAmira9", external: "#" }
    }
];

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ marginBottom: '4rem' }}
            >
                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>03.</span> Quelques Projets
                    <span style={{ height: '1px', background: 'var(--text-secondary)', flex: 1, maxWidth: '300px', opacity: 0.3 }}></span>
                </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -7 }}
                        style={{
                            background: 'var(--bg-card)',
                            padding: '2rem',
                            borderRadius: 'var(--radius-md)',
                            position: 'relative',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 10px 30px -15px rgba(0,0,0,0.5)',
                        }}
                    >
                        {/* Header Icons */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', alignItems: 'center' }}>
                            <Folder size={40} color="var(--accent-primary)" />
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href={project.links.github} target="_blank" style={{ color: 'var(--text-secondary)' }}><Github size={20} /></a>
                                <a href={project.links.external} style={{ color: 'var(--text-secondary)' }}><ExternalLink size={20} /></a>
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            {project.title}
                        </h3>

                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flex: 1 }}>
                            {project.desc}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: 'auto' }}>
                            {project.tech.map(t => (
                                <span key={t} style={{
                                    fontSize: '0.8rem',
                                    fontFamily: 'var(--font-mono)',
                                    color: 'var(--text-secondary)'
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
