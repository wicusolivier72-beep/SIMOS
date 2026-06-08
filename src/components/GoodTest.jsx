import React, { useState } from 'react';
import { ShieldAlert, ThumbsUp, ThumbsDown, HelpCircle, ArrowRight, RefreshCw, AlertTriangle } from 'lucide-react';

export default function GoodTest({ onCompleteTest, setTestProgress }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    lying: null,
    stealing: null,
    blasphemy: null,
    lust: null
  });
  const [doubleCheck, setDoubleCheck] = useState(false);
  const [innocentGuiltyResponse, setInnocentGuiltyResponse] = useState(null);

  // Total steps in this component's local wizard
  const totalSteps = 7;

  const updateProgress = (nextStep) => {
    // Progress is between 0% and 100% of this test
    const percentage = Math.round((nextStep / (totalSteps - 1)) * 100);
    setTestProgress(percentage);
  };

  const handleNextStep = (nextStep) => {
    setStep(nextStep);
    setDoubleCheck(false);
    updateProgress(nextStep);
  };

  const handleAnswer = (field, val) => {
    if (val === false && (field === 'lying' || field === 'stealing' || field === 'lust')) {
      // Prompt user to double-check their honesty
      setDoubleCheck(true);
    } else {
      setAnswers(prev => ({ ...prev, [field]: val }));
      handleNextStep(step + 1);
    }
  };

  const forceAnswer = (field, val) => {
    setAnswers(prev => ({ ...prev, [field]: val }));
    handleNextStep(step + 1);
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({ lying: null, stealing: null, blasphemy: null, lust: null });
    setDoubleCheck(false);
    setInnocentGuiltyResponse(null);
    setTestProgress(0);
  };

  const getGuiltyLabels = () => {
    const list = [];
    if (answers.lying) list.push('a liar');
    if (answers.stealing) list.push('a thief');
    if (answers.blasphemy) list.push('a blasphemer');
    if (answers.lust) list.push('an adulterer at heart');
    
    if (list.length === 0) return 'innocent in your own eyes';
    if (list.length === 1) return list[0];
    if (list.length === 2) return `${list[0]} and ${list[1]}`;
    return `${list.slice(0, -1).join(', ')}, and ${list[list.length - 1]}`;
  };

  const renderStep = () => {
    switch (step) {
      case 0: // Intro
        return (
          <div className="animate-slide-up" style={{ textAlign: 'center' }}>
            <ShieldAlert size={64} color="var(--gold)" style={{ marginBottom: '24px', filter: 'drop-shadow(0 0 12px var(--gold-glow))' }} />
            <h2 style={{ fontFamily: 'var(--heading)', fontSize: '2rem', marginBottom: '16px' }}>Before We Begin...</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 32px auto' }}>
              This test is not to judge you, but to serve as a mirror to your soul. Be completely honest. Nobody is watching this test except you and Creator God.
            </p>
            <button className="btn-primary" onClick={() => handleNextStep(1)}>
              Start the Test <ArrowRight size={18} />
            </button>
          </div>
        );

      case 1: // Question 1: Lying
        return (
          <div className="animate-slide-up" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--gold)', letterSpacing: '2px', marginBottom: '12px', fontWeight: 700 }}>COMMANDMENT #9</h3>
            <h2 style={{ fontFamily: 'var(--heading)', fontSize: '1.8rem', marginBottom: '24px', lineHeight: 1.3 }}>
              Have you ever told a lie?
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.5 }}>
              This includes fibs, white lies, half-truths, and exaggerations.
            </p>

            {doubleCheck ? (
              <div className="glass" style={{ padding: '24px', marginBottom: '24px', border: '1px solid var(--crimson)' }}>
                <p style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '16px' }}>
                  Be honest... Have you really never told a single lie in your entire life?
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                  <button className="btn-primary" onClick={() => forceAnswer('lying', true)}>
                    Actually, I have.
                  </button>
                  <button className="btn-secondary" onClick={() => forceAnswer('lying', false)}>
                    No, I never have.
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <button className="btn-danger" style={{ minWidth: '150px' }} onClick={() => handleAnswer('lying', true)}>
                  <ThumbsUp size={18} style={{ marginRight: '6px' }} /> Yes, I have
                </button>
                <button className="btn-secondary" style={{ minWidth: '150px' }} onClick={() => handleAnswer('lying', false)}>
                  <ThumbsDown size={18} style={{ marginRight: '6px' }} /> No, never
                </button>
              </div>
            )}
          </div>
        );

      case 2: // Question 2: Stealing
        return (
          <div className="animate-slide-up" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--gold)', letterSpacing: '2px', marginBottom: '12px', fontWeight: 700 }}>COMMANDMENT #8</h3>
            <h2 style={{ fontFamily: 'var(--heading)', fontSize: '1.8rem', marginBottom: '24px', lineHeight: 1.3 }}>
              Have you ever stolen anything?
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.5 }}>
              Regardless of its value—a pen from school, office supplies, piracy, music files, cheating on a test, or a small coin from your parents?
            </p>

            {doubleCheck ? (
              <div className="glass" style={{ padding: '24px', marginBottom: '24px', border: '1px solid var(--crimson)' }}>
                <p style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '16px' }}>
                  Remember, the value doesn't change the act of theft. Have you truly never taken anything that didn't belong to you?
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                  <button className="btn-primary" onClick={() => forceAnswer('stealing', true)}>
                    I guess I have.
                  </button>
                  <button className="btn-secondary" onClick={() => forceAnswer('stealing', false)}>
                    No, never.
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <button className="btn-danger" style={{ minWidth: '150px' }} onClick={() => handleAnswer('stealing', true)}>
                  <ThumbsUp size={18} style={{ marginRight: '6px' }} /> Yes, I have
                </button>
                <button className="btn-secondary" style={{ minWidth: '150px' }} onClick={() => handleAnswer('stealing', false)}>
                  <ThumbsDown size={18} style={{ marginRight: '6px' }} /> No, never
                </button>
              </div>
            )}
          </div>
        );

      case 3: // Question 3: Blasphemy
        return (
          <div className="animate-slide-up" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--gold)', letterSpacing: '2px', marginBottom: '12px', fontWeight: 700 }}>COMMANDMENT #3</h3>
            <h2 style={{ fontFamily: 'var(--heading)', fontSize: '1.8rem', marginBottom: '24px', lineHeight: 1.3 }}>
              Have you ever used God's name in vain?
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.5 }}>
              This means using 'God' or 'Jesus' as a curse word to express disgust or anger. In a court of law, this is called blasphemy, and it carries the highest penalty.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <button className="btn-danger" style={{ minWidth: '150px' }} onClick={() => handleAnswer('blasphemy', true)}>
                <ThumbsUp size={18} style={{ marginRight: '6px' }} /> Yes, I have
              </button>
              <button className="btn-secondary" style={{ minWidth: '150px' }} onClick={() => handleAnswer('blasphemy', false)}>
                <ThumbsDown size={18} style={{ marginRight: '6px' }} /> No, never
              </button>
            </div>
          </div>
        );

      case 4: // Question 4: Lust
        return (
          <div className="animate-slide-up" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '0.85rem', color: 'var(--gold)', letterSpacing: '2px', marginBottom: '12px', fontWeight: 700 }}>COMMANDMENT #7</h3>
            <h2 style={{ fontFamily: 'var(--heading)', fontSize: '1.8rem', marginBottom: '24px', lineHeight: 1.3 }}>
              Have you ever looked at someone with lust?
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.5 }}>
              Jesus warned: <span style={{ fontStyle: 'italic', color: 'var(--text-primary)' }}>"Whoever looks at a woman to lust for her has already committed adultery with her in his heart."</span>
            </p>

            {doubleCheck ? (
              <div className="glass" style={{ padding: '24px', marginBottom: '24px', border: '1px solid var(--crimson)' }}>
                <p style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '16px' }}>
                  Have you really never looked at another human being with passionate desire or lust?
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                  <button className="btn-primary" onClick={() => forceAnswer('lust', true)}>
                    I have.
                  </button>
                  <button className="btn-secondary" onClick={() => forceAnswer('lust', false)}>
                    No, never.
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <button className="btn-danger" style={{ minWidth: '150px' }} onClick={() => handleAnswer('lust', true)}>
                  <ThumbsUp size={18} style={{ marginRight: '6px' }} /> Yes, I have
                </button>
                <button className="btn-secondary" style={{ minWidth: '150px' }} onClick={() => handleAnswer('lust', false)}>
                  <ThumbsDown size={18} style={{ marginRight: '6px' }} /> No, never
                </button>
              </div>
            )}
          </div>
        );

      case 5: // Diagnosis
        return (
          <div className="animate-slide-up" style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
            <AlertTriangle size={56} color="var(--crimson)" style={{ marginBottom: '20px', filter: 'drop-shadow(0 0 8px var(--crimson-glow))' }} />
            <h2 style={{ fontFamily: 'var(--heading)', fontSize: '2rem', marginBottom: '20px' }}>The Moral Diagnosis</h2>
            
            <p style={{ fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '24px' }}>
              By your own admission, you have confessed to being <span style={{ color: 'var(--crimson)', fontWeight: 700 }}>{getGuiltyLabels()}</span>.
            </p>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '36px', lineHeight: 1.6 }}>
              If God judges you by the Ten Commandments on Judgment Day, will you be innocent or guilty of breaking His laws?
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <button className="btn-danger" style={{ minWidth: '160px' }} onClick={() => { setInnocentGuiltyResponse('guilty'); handleNextStep(6); }}>
                Guilty
              </button>
              <button className="btn-secondary" style={{ minWidth: '160px' }} onClick={() => { setInnocentGuiltyResponse('innocent'); handleNextStep(6); }}>
                Innocent
              </button>
            </div>
          </div>
        );

      case 6: // Heaven or Hell
        return (
          <div className="animate-slide-up" style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--heading)', fontSize: '2rem', marginBottom: '24px' }}>Judgment Day</h2>
            
            {innocentGuiltyResponse === 'innocent' ? (
              <div className="glass" style={{ padding: '24px', marginBottom: '32px', borderLeft: '4px solid var(--crimson)', textAlign: 'left' }}>
                <p style={{ fontWeight: 600, color: 'var(--crimson)', marginBottom: '8px' }}>Wait, innocent?</p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  If you have lied, stolen, blasphemed, and lusted, you are factually guilty of breaking God's moral law. A good, just judge cannot let a criminal go just because the criminal thinks they are innocent. That would be corruption. God must punish sin.
                </p>
              </div>
            ) : (
              <div className="glass" style={{ padding: '24px', marginBottom: '32px', borderLeft: '4px solid var(--gold)', textAlign: 'left' }}>
                <p style={{ fontWeight: 600, color: 'var(--gold)', marginBottom: '8px' }}>Acknowledging Guilt</p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  That honesty is a crucial first step. The Bible says that God opposes the proud, but gives grace to the humble. You recognize that you have broken His laws.
                </p>
              </div>
            )}

            <p style={{ fontSize: '1.2rem', marginBottom: '32px', lineHeight: 1.5 }}>
              Based on your guilt, would you go to <span style={{ color: 'var(--crimson)', fontWeight: 700 }}>Heaven</span> or <span style={{ color: 'var(--crimson)', fontWeight: 700 }}>Hell</span>?
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '16px', width: '100%', justifyContent: 'center' }}>
                <button className="btn-danger" style={{ minWidth: '150px' }} onClick={() => handleNextStep(7)}>
                  Hell
                </button>
                <button className="btn-secondary" style={{ minWidth: '150px' }} onClick={() => handleNextStep(7)}>
                  Heaven
                </button>
              </div>
              <button 
                onClick={handleReset} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--text-muted)', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  marginTop: '16px'
                }}
              >
                <RefreshCw size={12} /> Start Over
              </button>
            </div>
          </div>
        );

      case 7: // Escape / Courtroom CTA
        return (
          <div className="animate-slide-up" style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--heading)', fontSize: '2.2rem', marginBottom: '20px' }}>Does that concern you?</h2>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px' }}>
              If you are honest, you know you deserve justice. But God doesn't want you to go to Hell. He is rich in mercy and love, and made a way for you to be declared legally innocent.
            </p>

            <div className="glass" style={{ padding: '24px', marginBottom: '40px', border: '1px solid rgba(16, 185, 129, 0.2)', background: 'rgba(16, 185, 129, 0.03)' }}>
              <h3 style={{ fontFamily: 'var(--heading)', color: '#10b981', marginBottom: '8px', fontSize: '1.25rem', fontWeight: 600 }}>The Way of Escape</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                Discover how God can legally dismiss your case, forgive your sins, and grant you everlasting life—without compromising His perfect justice.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <button className="btn-primary" onClick={onCompleteTest} style={{ fontSize: '1.1rem', padding: '14px 32px' }}>
                Go to the Courtroom <ArrowRight size={18} />
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="section-container" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '65vh'
    }}>
      <div className="glass" style={{
        width: '100%',
        maxWidth: '720px',
        padding: '48px 32px',
        border: '1px solid var(--border)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
      }}>
        {renderStep()}
      </div>
    </section>
  );
}
