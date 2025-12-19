import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#home' },
        { name: 'À propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Projets', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const navbarStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '1rem 2rem',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const logoStyles = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'var(--accent-primary)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
    };

    const desktopMenuStyles = {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
    };

    const linkStyles = {
        color: 'var(--text-secondary)',
        transition: 'color 0.3s ease',
        fontSize: '0.95rem',
        fontWeight: '500',
        cursor: 'pointer',
    };

    return (
        <>
            <nav style={navbarStyles}>
                <div style={logoStyles} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Code2 size={24} />
                    <span>HanaaPortfolio</span>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={desktopMenuStyles}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={linkStyles}
                            onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'fixed',
                            top: '70px',
                            left: 0,
                            right: 0,
                            background: 'rgba(10, 10, 10, 0.95)',
                            backdropFilter: 'blur(10px)',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            alignItems: 'center',
                            zIndex: 49,
                            borderBottom: '1px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                style={{ ...linkStyles, fontSize: '1.2rem', color: 'var(--text-primary)' }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Responsive CSS Injection */}
            <style>{`
            .desktop-menu { display: flex; }
            .mobile-toggle { display: none; cursor: pointer; color: var(--text-primary); }

            @media (max-width: 768px) {
                .desktop-menu { display: none !important; }
                .mobile-toggle { display: block !important; }
            }
        `}</style>
        </>
    );
};

export default Navbar;
