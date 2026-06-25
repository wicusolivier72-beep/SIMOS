import React, { useState } from 'react';
import { Compass, Sparkles, Star, ChevronRight, HelpCircle, HeartHandshake, CheckCircle } from 'lucide-react';

export default function Gospel({ onNavigateToResources }) {
  const [activeTab, setActiveTab] = useState('repentance');

  const steps = {
    repentance: {
      title: "1. Repentance (Turning)",
      label: "Repentance",
      icon: <Compass size={24} color="var(--gold)" style={{ flexShrink: 0 }} />,
      subtitle: "Changing your mind and direction",
      content: "Repentance isn't just saying 'sorry.' It is a deep, heart-felt decision to turn away from sin (which God hates) and turn toward God. It means laying down your rebellion, confessing your crimes, and deciding to live in obedience to His truth.",
      quote: "Unless you repent, you will all likewise perish. — Luke 13:3"
    },
    faith: {
      title: "2. Faith (Trusting)",
      label: "Faith",
      icon: <HeartHandshake size={24} color="var(--gold)" style={{ flexShrink: 0 }} />,
      subtitle: "Placing your complete trust in Jesus",
      content: "Saving faith is not merely intellectual belief (even the demons believe in God). It is trust. Just as a passenger puts their entire weight on a parachute when jumping from a plane, you must put your entire life and eternity into the hands of Jesus, trusting in His death and resurrection alone.",
      quote: "Believe in the Lord Jesus, and you will be saved. — Acts 16:31"
    },
    parachute: {
      title: "3. The Parachute Analogy",
      label: "Parachute",
      icon: <HelpCircle size={24} color="var(--gold)" style={{ flexShrink: 0 }} />,
      subtitle: "Why are you putting on the Savior?",
      content: "If you put on a parachute to 'improve your flight,' you'll find it heavy and uncomfortable, and when other passengers laugh at you, you'll take it off. It didn't improve your flight—it made it worse. But if you put on a parachute because you know you must jump 10,000 feet out of the plane, you won't care about discomfort or mockery. You will cling to it for dear life. Don't come to Jesus to 'improve your life.' Come to Him to be saved from the jump into eternity.",
      quote: "Put on the Lord Jesus Christ... — Romans 13:14"
    }
  };

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
          <Sparkles size={14} />
          THE WAY OF LIFE
        </div>
        <h2 style={{ fontFamily: 'var(--heading)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>
          What Should You Do Now?
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.5 }}>
          God offers you a free gift: forgiveness, clean conscience, and eternal life. But like any gift, it must be received.
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        maxWidth: '900px',
        margin: '0 auto 48px auto'
      }}>
        {/* Tab selection */}
        <div className="glass" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          padding: '6px',
          border: '1px solid var(--border)'
        }}>
          {Object.keys(steps).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                padding: '14px 8px',
                background: activeTab === key ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                border: 'none',
                borderRadius: '10px',
                color: activeTab === key ? 'var(--gold)' : 'var(--text-secondary)',
                fontFamily: 'var(--heading)',
                fontWeight: 600,
                fontSize: 'clamp(0.85rem, 1.8vw, 1.05rem)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              {steps[key].icon}
              <span className="hidden-mobile">{steps[key].label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="glass card-padding animate-slide-up" style={{
          border: '1px solid var(--border)',
          background: 'linear-gradient(135deg, rgba(22, 24, 33, 0.4) 0%, rgba(17, 18, 26, 0.6) 100%)',
          minHeight: '260px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <Star size={20} color="var(--gold)" />
              <h3 style={{ fontFamily: 'var(--heading)', fontSize: '1.5rem', fontWeight: 700 }}>
                {steps[activeTab].title}
              </h3>
            </div>
            <p style={{ color: 'var(--gold)', fontSize: '0.95rem', fontWeight: 500, marginBottom: '20px' }}>
              {steps[activeTab].subtitle}
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.05rem', marginBottom: '24px' }}>
              {steps[activeTab].content}
            </p>
          </div>
          <div style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '20px',
            fontStyle: 'italic',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            fontWeight: 500
          }}>
            {steps[activeTab].quote}
          </div>
        </div>
      </div>

      {/* Guide to prayer / commitment */}
      <div className="glass card-padding" style={{
        maxWidth: '900px',
        margin: '0 auto 64px auto',
        border: '1px solid rgba(204, 164, 59, 0.15)',
        background: 'linear-gradient(135deg, rgba(204, 164, 59, 0.02) 0%, transparent 100%)'
      }}>
        <h3 style={{ fontFamily: 'var(--heading)', fontSize: '1.6rem', marginBottom: '24px', textAlign: 'center', color: 'var(--text-primary)' }}>
          How to Call Upon the Lord
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '28px', textAlign: 'center' }}>
          If you are ready to repent and put your faith in Jesus, you can pray to Him right now. Prayer is not a magic formula; it's talking to your Creator with sincerity.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          textAlign: 'left'
        }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <CheckCircle size={20} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '4px' }}>Admit Your Sin</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                Acknowledge that you have broken God's law and deserve His justice.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <CheckCircle size={20} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '4px' }}>Ask for Mercy</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                Ask God to forgive your sins because Jesus paid the fine on the cross.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <CheckCircle size={20} color="var(--gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ fontWeight: 600, marginBottom: '4px' }}>Trust in Jesus</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                Surrender your life and trust in Christ alone as your Savior and Lord.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-stack">
        <button className="btn-primary" onClick={onNavigateToResources} style={{ fontSize: '1.1rem', padding: '14px 36px' }}>
          Explore Growth Resources <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
