import React from 'react';
import { Shield, Sparkles } from 'lucide-react';

export default function Header({ currentSection, testProgress, onNavigate }) {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'test', label: 'The Test' },
    { id: 'court', label: 'The Courtroom' },
    { id: 'gospel', label: 'Good News' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Connect' }
  ];

  return (
    <header className="glass header-container">
      <div 
        onClick={() => onNavigate('hero')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer'
        }}
      >
        <Shield size={26} color="#cca43b" style={{ filter: 'drop-shadow(0 0 8px rgba(204, 164, 59, 0.4))' }} />
        <span style={{
          fontFamily: 'var(--heading)',
          fontWeight: 800,
          fontSize: '1.2rem',
          letterSpacing: '1px',
          background: 'linear-gradient(135deg, #f3f4f6, #9ca3af)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          THE GOOD TEST
        </span>
      </div>

      <nav className="nav-container">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            style={{
              padding: '8px 14px',
              background: currentSection === item.id ? 'rgba(204, 164, 59, 0.15)' : 'transparent',
              border: '1px solid',
              borderColor: currentSection === item.id ? 'var(--gold)' : 'transparent',
              borderRadius: '8px',
              color: currentSection === item.id ? 'var(--gold-hover)' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: 'var(--heading)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mini Progress Indicator */}
      {testProgress > 0 && testProgress <= 100 && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.8rem',
          color: 'var(--gold)',
          fontWeight: 600
        }}>
          <Sparkles size={14} className="animate-pulse" />
          <span>Progress: {testProgress}%</span>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${testProgress}%`,
              height: '100%',
              background: 'var(--gold)',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
        </div>
      )}
    </header>
  );
}
