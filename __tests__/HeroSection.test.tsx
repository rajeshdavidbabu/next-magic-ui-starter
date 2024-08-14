import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import HeroSection from '../components/HeroSection';

describe('HeroSection', () => {
  it('renders the hero section', () => {
    render(<HeroSection />);
    const heroElement = screen.getByRole('heading', { name: /DigiMedic/i });
    expect(heroElement).toBeInTheDocument();
  });
});