import React from 'react';
import { BookOpen, HelpCircle, MessageSquare, Users, ExternalLink, PlayCircle } from 'lucide-react';

export default function Resources() {
  const growthSteps = [
    {
      title: "Read Your Bible Daily",
      desc: "Start with the Gospel of John in the New Testament. Read it with an open heart and obey what you learn.",
      icon: <BookOpen size={24} color="var(--gold)" />
    },
    {
      title: "Pray to God",
      desc: "Talk to Him daily like a friend. Praise Him, confess your faults, and ask Him for strength and guidance.",
      icon: <MessageSquare size={24} color="var(--gold)" />
    },
    {
      title: "Find a Good Church",
      desc: "Look for a local church that teaches directly from the Bible, honors Jesus, and values holiness and truth.",
      icon: <Users size={24} color="var(--gold)" />
    },
    {
      title: "Obey & Share Your Faith",
      desc: "Let your life reflect the grace you've received, and tell others the truth about God's law and His gift of salvation.",
      icon: <HelpCircle size={24} color="var(--gold)" />
    }
  ];

  const externalLinks = [
    {
      title: "Living Waters YouTube",
      desc: "Watch Ray Comfort strike up conversations on the streets and demonstrate biblical evangelism in action.",
      url: "https://www.youtube.com/@LivingWaters",
      icon: <PlayCircle size={20} />
    },
    {
      title: "Read the Gospel of John",
      desc: "Read the narrative account of Jesus' life, teachings, death, and resurrection online.",
      url: "https://www.biblegateway.com/passage/?search=John+1&version=ESV",
      icon: <BookOpen size={20} />
    }
  ];

  return (
    <section className="section-container animate-fade-in">
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
        <h2 style={{ fontFamily: 'var(--heading)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>
          Growing in Your Faith
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.5 }}>
          If you have repented and put your faith in Jesus Christ, you have passed from death to life. Here are four vital keys to spiritual growth.
        </p>
      </div>

      {/* 4 growth steps */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1000px',
        margin: '0 auto 64px auto'
      }}>
        {growthSteps.map((step, idx) => (
          <div key={idx} className="glass card-padding" style={{ textAlign: 'left' }}>
            <div style={{
              display: 'inline-flex',
              padding: '10px',
              background: 'rgba(204, 164, 59, 0.05)',
              borderRadius: '8px',
              marginBottom: '16px',
              border: '1px solid rgba(204, 164, 59, 0.1)'
            }}>
              {step.icon}
            </div>
            <h3 style={{ fontFamily: 'var(--heading)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px' }}>
              {step.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* External Resources */}
      <div className="glass card-padding" style={{
        maxWidth: '800px',
        margin: '0 auto',
        border: '1px solid var(--border)'
      }}>
        <h3 style={{ fontFamily: 'var(--heading)', fontSize: '1.5rem', marginBottom: '24px', textAlign: 'center' }}>
          Recommended Free Resources
        </h3>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {externalLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-interactive card-padding"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'inherit',
                textAlign: 'left',
                textDecoration: 'none',
                gap: '16px',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ color: 'var(--gold)', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '4px', color: 'var(--text-primary)' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.4 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--gold)', fontSize: '0.9rem', fontWeight: 600 }}>
                Visit <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
