import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            fontFamily: 'var(--font-mono)'
        }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <a href="#" style={{ transition: 'color 0.3s' }} className="social-link"><Github size={20} /></a>
                <a href="#" style={{ transition: 'color 0.3s' }} className="social-link"><Linkedin size={20} /></a>
                <a href="#" style={{ transition: 'color 0.3s' }} className="social-link"><Twitter size={20} /></a>
            </div>
            <p>
                Built with React & Vanilla CSS by Alex Developer.
            </p>

            <style>{`
        .social-link:hover { color: var(--accent-primary); }
      `}</style>
        </footer>
    );
};

export default Footer;
