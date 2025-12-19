import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

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
                <a href="https://github.com/hanaaAmira9" target="_blank" style={{ transition: 'color 0.3s' }} className="social-link"><Github size={20} /></a>
                <a href="#" style={{ transition: 'color 0.3s' }} className="social-link"><Linkedin size={20} /></a>
                <a href="mailto:hanaaamira9@gmail.com" style={{ transition: 'color 0.3s' }} className="social-link"><Mail size={20} /></a>
            </div>
            <p>
                Conçu & Développé par Hanaa Amira Taha.
            </p>

            <style>{`
        .social-link:hover { color: var(--accent-primary); }
      `}</style>
        </footer>
    );
};

export default Footer;
