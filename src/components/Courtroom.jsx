import React from 'react';
import { Scale, Heart, ShieldAlert, ArrowRight, BookOpen } from 'lucide-react';

export default function Courtroom({ onNavigateToGospel }) {
  return (
    <section className="section-container animate-fade-in" style={{ position: 'relative' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
          marginBottom: '16px'
        }}>
          <Scale size={14} />
          THE COURTROOM ANALOGY
        </div>
        <h2 style={{ fontFamily: 'var(--heading)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>
          How Can God Forgive You?
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.5 }}>
          If God is perfectly good and just, He cannot simply "let your sins go." That would make Him a corrupt Judge. Here is how justice and mercy meet.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto 56px auto'
      }}>
        {/* Card 1: The Dilemma */}
        <div className="glass card-padding" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '4px',
            height: '100%',
            background: 'var(--crimson)'
          }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <ShieldAlert size={28} color="var(--crimson)" style={{ flexShrink: 0 }} />
            <h3 style={{ fontFamily: 'var(--heading)', fontSize: '1.4rem', fontWeight: 700 }}>1. The Dilemma</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
            Imagine standing in a human court of law with a stack of serious crimes. If you tell the judge, "I'm sorry, and I do a lot of good things for charity," the judge will say:
          </p>
          <div style={{
            background: 'rgba(230, 57, 70, 0.05)',
            border: '1px solid rgba(230, 57, 70, 0.15)',
            padding: '16px',
            borderRadius: '8px',
            fontStyle: 'italic',
            fontSize: '0.95rem',
            lineHeight: 1.5,
            marginBottom: '16px'
          }}>
            "Your good deeds cannot wash away your crimes. The law demands justice, and a fine must be paid."
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            In the same way, your good deeds can never erase the lies, theft, lust, and blasphemy. God's holiness demands that justice be served. The fine for sin is death and Hell.
          </p>
        </div>

        {/* Card 2: The Ransom */}
        <div className="glass card-padding" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '4px',
            height: '100%',
            background: '#10b981'
          }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <Heart size={28} color="#10b981" style={{ flexShrink: 0 }} />
            <h3 style={{ fontFamily: 'var(--heading)', fontSize: '1.4rem', fontWeight: 700 }}>2. The Ransom</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
            Now imagine someone you don't even know steps forward in the courtroom and pays your multi-million dollar fine in full.
          </p>
          <div style={{
            background: 'rgba(16, 185, 129, 0.05)',
            border: '1px solid rgba(16, 185, 129, 0.15)',
            padding: '16px',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '0.95rem',
            lineHeight: 1.5,
            marginBottom: '16px',
            color: '#10b981'
          }}>
            The fine is paid. The law is satisfied. The judge can now legally let you go free.
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            2,000 years ago, Jesus Christ—God manifest in the flesh—suffered and died on the cross. He took your place and paid your fine. He took the wrath you deserved, so that God could legally forgive you.
          </p>
        </div>
      </div>

      {/* Center quote */}
      <div className="glass card-padding" style={{
        maxWidth: '800px',
        margin: '0 auto 64px auto',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(204, 164, 59, 0.03) 0%, rgba(255, 255, 255, 0.02) 100%)',
        border: '1px solid var(--border)'
      }}>
        <BookOpen size={32} color="var(--gold)" style={{ marginBottom: '16px' }} />
        <p style={{
          fontSize: '1.15rem',
          fontStyle: 'italic',
          lineHeight: 1.6,
          color: 'var(--text-primary)',
          marginBottom: '12px'
        }}>
          "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."
        </p>
        <span style={{ fontSize: '0.9rem', color: 'var(--gold)', fontWeight: 600 }}>JOHN 3:16</span>
      </div>

      <div className="mobile-stack">
        <button className="btn-primary" onClick={onNavigateToGospel} style={{ fontSize: '1.1rem', padding: '14px 36px' }}>
          Discover the Gospel Gift <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
