import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Dashboard",
        desc: "A comprehensive dashboard for managing data, visualizing stats, and tracking orders. Built with React and Recharts.",
        tech: ["React", "Express", "MongoDB", "Recharts"],
        links: { github: "#", external: "#" }
    },
    {
        title: "AI Chat Application",
        desc: "Real-time chat application with AI integration for smart replies and translations.",
        tech: ["Next.js", "OpenAI API", "Socket.io", "Tailwind"],
        links: { github: "#", external: "#" }
    },
    {
        title: "Task Management Tool",
        desc: "Collaborative task manager with drag-and-drop functionality and team workspaces.",
        tech: ["Vue.js", "Firebase", "Pinia", "Sass"],
        links: { github: "#", external: "#" }
    },
    {
        title: "Crypto Portfolio Tracker",
        desc: "Track cryptocurrency prices in real-time with detailed charts and alerts.",
        tech: ["React Native", "CoinGecko API", "Redux"],
        links: { github: "#", external: "#" }
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
                    <span style={{ color: 'var(--accent-primary)' }}>03.</span> Some Things I've Built
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
                                <a href={project.links.github} style={{ color: 'var(--text-secondary)' }}><Github size={20} /></a>
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
