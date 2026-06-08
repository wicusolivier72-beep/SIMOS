import React from 'react';
import { HelpCircle, AlertTriangle, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export default function Hero({ onStartTest }) {
  return (
    <section className="section-container animate-fade-in" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      textAlign: 'center',
      position: 'relative'
    }}>
      {/* Visual background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(204, 164, 59, 0.08) 0%, transparent 70%)',
        zIndex: -1,
        pointerEvents: 'none'
      }}></div>

      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 16px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: 600,
        color: 'var(--gold)',
        letterSpacing: '0.5px',
        marginBottom: '24px'
      }}>
        <HelpCircle size={14} />
        THE ULTIMATE QUESTION
      </div>

      <h1 style={{
        fontFamily: 'var(--heading)',
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-2px',
        maxWidth: '850px',
        marginBottom: '24px',
        background: 'linear-gradient(135deg, #ffffff 30%, #a3a3a3 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Are You a <span style={{ color: 'var(--gold)', WebkitTextFillColor: 'initial', filter: 'drop-shadow(0 0 15px rgba(204, 164, 59, 0.3))' }}>Good Person?</span>
      </h1>

      <p style={{
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        color: 'var(--text-secondary)',
        maxWidth: '650px',
        lineHeight: 1.6,
        marginBottom: '40px'
      }}>
        Most of us think we're good enough to go to Heaven. But have you ever actually measured yourself against the standard of absolute moral perfection?
      </p>

      <div className="mobile-stack" style={{ marginBottom: '64px' }}>
        <button className="btn-primary" onClick={onStartTest} style={{ fontSize: '1.1rem', padding: '14px 36px' }}>
          Take the Good Test <ArrowRight size={18} />
        </button>
      </div>

      {/* Modern stat cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        width: '100%',
        maxWidth: '900px',
        marginTop: '20px'
      }}>
        <div className="glass-interactive card-padding" style={{ textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <AlertTriangle size={24} color="var(--crimson)" style={{ flexShrink: 0 }} />
            <h3 style={{ fontFamily: 'var(--heading)', fontSize: '1.2rem', fontWeight: 600 }}>The Grim Reality</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
            Over 150,000 people enter eternity every single day. If today was your day, where would you stand?
          </p>
        </div>

        <div className="glass-interactive card-padding" style={{ textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <ShieldCheck size={24} color="var(--gold)" style={{ flexShrink: 0 }} />
            <h3 style={{ fontFamily: 'var(--heading)', fontSize: '1.2rem', fontWeight: 600 }}>God's Standard</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
            God is perfectly holy, just, and good. He judges according to the standard of absolute righteousness—the Ten Commandments.
          </p>
        </div>

        <div className="glass-interactive card-padding" style={{ textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <Heart size={24} color="#10b981" style={{ flexShrink: 0 }} />
            <h3 style={{ fontFamily: 'var(--heading)', fontSize: '1.2rem', fontWeight: 600 }}>The Good News</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
            Even though we have fallen short, God provided a way of escape so that mercy could triumph over judgment.
          </p>
        </div>
      </div>
    </section>
  );
}
