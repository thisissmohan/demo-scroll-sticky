"use client"
import { useEffect, useState } from 'react';
import styles from './globals.module.css';

interface Section {
  id: string;
  title: string;
  description: string;
}

const sections: Section[] = [
  { id: 'section-1', title: 'Access World-Class Raffles', description: 'Use CapRelic tokens to enter raffles for premium items like supercars, yachts, and more. Your tokens unlock a world of exclusive prizes.' },
  { id: 'section-2', title: 'Burn to Win, Burn to Earn', description: 'Every time tokens are used for a raffle, they are burned, reducing supply and creating scarcity that benefits all holders over time.' },
  { id: 'section-3', title: 'Stake for Exclusive Access', description: 'Stake CapRelic tokens to gain access to exclusive raffles, reduced burn rates, and VIP perks, giving you a long-term edge.' },
];

const ScrollableContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  const handleScroll = () => {
    const sectionElements = sections.map((section) => document.getElementById(section.id) as HTMLElement);

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = sectionElements.length - 1; i >= 0; i--) {
      if (scrollPosition >= sectionElements[i].offsetTop) {
        setActiveSection(sectionElements[i].id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.verticalLine} ${activeSection ? styles.active : ''}`}></div>
      <div className={styles.left}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`${styles.content} ${activeSection === section.id ? styles.active : ''}`}
          >
            <div className={styles.number}>0{index + 1}</div>
          </div>
        ))}
      </div>
      <div className={styles.right}>
        {sections.map((section) => (
          <div id={section.id} key={section.id} className={styles.section}>
            <h3 style={{ fontSize: 100 }}>{section.title}</h3>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableContent;
