import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GoodTest from './components/GoodTest';
import Courtroom from './components/Courtroom';
import Gospel from './components/Gospel';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [testProgress, setTestProgress] = useState(0);

  const handleNavigate = (sectionId) => {
    setCurrentSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartTest = () => {
    handleNavigate('test');
    setTestProgress(0);
  };

  const handleCompleteTest = () => {
    handleNavigate('court');
    setTestProgress(100);
  };

  const renderActiveSection = () => {
    switch (currentSection) {
      case 'hero':
        return <Hero onStartTest={handleStartTest} />;
      case 'test':
        return (
          <GoodTest 
            onCompleteTest={handleCompleteTest} 
            setTestProgress={setTestProgress} 
          />
        );
      case 'court':
        return <Courtroom onNavigateToGospel={() => handleNavigate('gospel')} />;
      case 'gospel':
        return <Gospel onNavigateToResources={() => handleNavigate('resources')} />;
      case 'resources':
        return <Resources />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onStartTest={handleStartTest} />;
    }
  };

  return (
    <>
      <Header 
        currentSection={currentSection} 
        testProgress={testProgress} 
        onNavigate={handleNavigate} 
      />
      
      <main style={{ flex: 1 }}>
        {renderActiveSection()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </>
  );
}

export default App;
