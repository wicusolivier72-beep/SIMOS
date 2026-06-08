import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer style={{
      marginTop: 'auto',
      borderTop: '1px solid var(--border)',
      background: 'rgba(9, 10, 15, 0.95)',
      padding: '48px 24px 32px 24px',
      fontSize: '0.9rem',
      color: 'var(--text-muted)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        {/* Brand */}
        <div 
          onClick={() => onNavigate('hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}
        >
          <Shield size={20} color="var(--gold)" />
          <span style={{
            fontFamily: 'var(--heading)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '1px'
          }}>
            THE GOOD TEST
          </span>
        </div>

        {/* Links */}
        <div style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <button onClick={() => onNavigate('hero')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '0.9rem' }}>Home</button>
          <button onClick={() => onNavigate('test')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '0.9rem' }}>The Test</button>
          <button onClick={() => onNavigate('court')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '0.9rem' }}>The Courtroom</button>
          <button onClick={() => onNavigate('gospel')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '0.9rem' }}>Good News</button>
          <button onClick={() => onNavigate('resources')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '0.9rem' }}>Resources</button>
        </div>

        {/* Disclaimer */}
        <p style={{
          maxWidth: '600px',
          textAlign: 'center',
          lineHeight: 1.6,
          fontSize: '0.8rem'
        }}>
          Disclaimer: This website is an interactive Gospel presentation inspired by the biblical evangelism principles taught by Ray Comfort (Living Waters). We are not officially affiliated with Living Waters, but share the same mission to preach the Gospel to every creature (Mark 16:15).
        </p>

        {/* Copyright */}
        <p style={{ fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} The Good Test. All rights reserved. Scripture quotations are from The Holy Bible, English Standard Version&reg;.
        </p>
      </div>
    </footer>
  );
}
