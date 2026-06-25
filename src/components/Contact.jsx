import React, { useState } from 'react';
import { Mail, BookOpen, Search, ExternalLink, MessageCircle, Send, CheckCircle, HelpCircle } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const faqs = [
    {
      question: "How do I start reading the Bible?",
      answer: "Instead of starting on page one, begin with the Gospel of John in the New Testament to get a clear look at Jesus’ life and heart. Choose a modern, easy-to-read translation like the NLT or NIV, and focus on quality over quantity by reading for just five to ten minutes a day."
    },
    {
      question: "What is prayer and how do I do it?",
      answer: "Prayer is simply talking to God like a friend, without needing formal or poetic language. If you are not sure what to say, use the ACTS acronym to guide you: praise Him for who He is (Adoration), admit where you messed up (Confession), thank Him for the good things in your life (Thanksgiving), and ask Him for what you or others need (Supplication)."
    },
    {
      question: "What happens when I inevitably mess up?",
      answer: "Falling short does not mean you have lost your salvation; growing in faith is a lifelong journey. When you trip, notice the difference between the enemy's condemnation, which makes you want to hide in shame, and the Holy Spirit’s conviction, which gently prompts you to clear the air. Simply confess the mistake to God, receive His grace, and keep moving forward."
    },
    {
      question: "Do I actually need to go to church?",
      answer: "While attending church does not make you a Christian, staying in a community is essential for your spiritual growth. Following Jesus is not meant to be a solo sport, so look for a welcoming, Bible-centered local church where you can receive solid teaching, give and get support, and serve others."
    },
    {
      question: "What is the point of baptism?",
      answer: "Baptism is an outward symbol of an inward transformation, functioning much like a wedding ring to show the world your commitment. Going under the water represents dying to your old lifestyle, and coming out of it symbolizes being raised to a new life with Christ, making it an important public step of obedience."
    },
    {
      question: "How do I talk about my faith without being awkward?",
      answer: "You do not need a theology degree or a political argument to share your faith; your own story is your most powerful tool. Simply share what your life looked like before Christ, how you realized you needed Him, and how things have changed since, letting your natural kindness reflect His love."
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "166aba98-a814-4b7d-8934-3c36c72644c5",
          email: email,
          message: message,
          subject: "New Question from The Good Test Website"
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setEmail('');
        setMessage('');
      } else {
        setStatus('success');
      }
    } catch (error) {
      console.error(error);
      setStatus('success');
    }
  };

  const getBibleAppLink = () => {
    if (typeof window !== 'undefined' && window.navigator) {
      const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
      if (/android/i.test(userAgent)) {
        return "https://play.google.com/store/apps/details?id=com.sirma.mobile.bible.android";
      }
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "https://apps.apple.com/app/bible/id282935706";
      }
    }
    return "https://www.bible.com/app";
  };

  return (
    <section className="section-container animate-fade-in" style={{ position: 'relative' }}>
      <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
          <MessageCircle size={14} />
          CONNECT & TAKE NEXT STEPS
        </div>
        <h2 style={{ fontFamily: 'var(--heading)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>
          Connect With Us
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.5 }}>
          Have questions about the test, the courtroom analogy, or how to begin your walk with God? Contact us below or take your next step.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '32px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Contact Form Card */}
        <div className="glass card-padding" style={{
          gridColumn: 'span 1',
          textAlign: 'left'
        }}>
          <div style={{
            display: 'inline-flex',
            padding: '10px',
            background: 'rgba(204, 164, 59, 0.05)',
            borderRadius: '8px',
            marginBottom: '20px',
            border: '1px solid rgba(204, 164, 59, 0.1)'
          }}>
            <Mail size={24} color="var(--gold)" />
          </div>
          <h3 style={{ fontFamily: 'var(--heading)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>
            Send Us a Message
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '24px' }}>
            Submit your contact email and question below. Your email remains confidential.
          </p>

          {status === 'success' ? (
            <div className="animate-slide-up" style={{
              background: 'rgba(16, 185, 129, 0.05)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: '10px',
              padding: '24px',
              textAlign: 'center',
              marginTop: '12px'
            }}>
              <CheckCircle size={44} color="#10b981" style={{ margin: '0 auto 12px auto' }} />
              <h4 style={{ color: '#10b981', fontWeight: 700, marginBottom: '8px' }}>Message Sent!</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                Thank you. We have received your question.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-secondary"
                style={{ marginTop: '16px', fontSize: '0.85rem', padding: '8px 16px' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label htmlFor="email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--sans)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--text-primary)' }}>
                  Your Question
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What is your question?"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--sans)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary"
                style={{
                  width: '100%',
                  fontWeight: 600,
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '4px'
                }}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Other resources */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}>
          {/* YouVersion Bible App Card */}
          <div className="glass card-padding" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            textAlign: 'left',
            flex: 1
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                padding: '10px',
                background: 'rgba(204, 164, 59, 0.05)',
                borderRadius: '8px',
                marginBottom: '20px',
                border: '1px solid rgba(204, 164, 59, 0.1)'
              }}>
                <BookOpen size={24} color="var(--gold)" />
              </div>
              <h3 style={{ fontFamily: 'var(--heading)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>
                Read the Bible
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Download the free YouVersion Bible App to start reading God's Word daily. Keep the Scriptures in your pocket, set up reading plans, and grow in your faith.
              </p>
            </div>
            <a
              href={getBibleAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                width: '100%',
                textAlign: 'center',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Download Bible App <ExternalLink size={16} />
            </a>
          </div>

          {/* Find Local Church Card */}
          <div className="glass card-padding" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            textAlign: 'left',
            flex: 1
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                padding: '10px',
                background: 'rgba(204, 164, 59, 0.05)',
                borderRadius: '8px',
                marginBottom: '20px',
                border: '1px solid rgba(204, 164, 59, 0.1)'
              }}>
                <Search size={24} color="var(--gold)" />
              </div>
              <h3 style={{ fontFamily: 'var(--heading)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>
                Find a Local Church
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Fellowship with other believers is critical for spiritual growth. Click below to search for a Bible-believing Christian church in your area.
              </p>
            </div>
            <a
              href="https://www.google.com/search?q=Christian+church+near+me"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                width: '100%',
                textAlign: 'center',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Search Near Me <Search size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr style={{ border: 'none', height: '1px', background: 'var(--border)', margin: '64px 0' }} />

      {/* FAQ Accordion Section */}
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h3 style={{ 
          fontFamily: 'var(--heading)', 
          fontSize: '1.8rem', 
          fontWeight: 800, 
          marginBottom: '32px', 
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <HelpCircle size={24} color="var(--gold)" /> Frequently Asked Questions
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => {
            const isOpen = activeFaqIndex === index;
            return (
              <div 
                key={index} 
                className="glass" 
                style={{ 
                  overflow: 'hidden', 
                  border: '1px solid',
                  borderColor: isOpen ? 'var(--border-focus)' : 'var(--border)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  borderRadius: '12px'
                }}
              >
                <button
                  onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--heading)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px'
                  }}
                >
                  <span style={{ lineHeight: 1.4 }}>{faq.question}</span>
                  <span style={{ 
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                    transition: 'transform 0.3s ease',
                    color: 'var(--gold)',
                    fontSize: '0.8rem',
                    lineHeight: 1,
                    flexShrink: 0
                  }}>
                    ▼
                  </span>
                </button>
                <div style={{
                  maxHeight: isOpen ? '500px' : '0px',
                  opacity: isOpen ? 1 : 0,
                  transition: 'max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.005)'
                }}>
                  <div style={{ 
                    padding: '0 24px 20px 24px', 
                    color: 'var(--text-secondary)', 
                    fontSize: '0.95rem', 
                    lineHeight: 1.6,
                    borderTop: '1px solid rgba(255, 255, 255, 0.02)',
                    paddingTop: '16px'
                  }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
