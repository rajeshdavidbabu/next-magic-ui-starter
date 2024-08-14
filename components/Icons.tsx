import { Home, FileText, Phone, Users, Rocket, Mail, MapPin, Github, Twitter, Facebook, Shield, MonitorSmartphone, BarChart3, Bot, Smartphone } from 'lucide-react';
import { HospitalIcon, DoctorIcon, MedicalResearchIcon } from './HealthIcons';

const WhatsApp = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path fill="#25D366" d="M128 0C57.307 0 0 57.307 0 128c0 28.151 9.158 54.196 24.664 75.322l-16.193 48.225l50.341-15.871C78.902 247.68 102.457 256 128 256c70.693 0 128-57.307 128-128S198.693 0 128 0z"/>
    <path fill="#FFF" d="m186.061 140.807c-2.091-3.478-4.28-3.555-6.265-3.615c-1.621-.047-3.477-.045-5.332-.045c-1.854 0-4.871.698-7.416 3.477s-9.742 9.519-9.742 23.221s9.964 26.923 11.352 28.777c1.389 1.855 19.188 30.723 47.26 41.849c23.349 9.27 28.107 7.43 33.178 6.962c5.072-.465 16.334-6.679 18.633-13.125c2.299-6.448 2.299-11.986 1.611-13.125c-.687-1.139-2.54-1.834-5.332-3.214c-2.793-1.376-16.496-8.141-19.057-9.066c-2.561-.925-4.42-.93-6.273 1.39c-1.854 2.32-7.15 8.989-8.771 10.844c-1.621 1.855-3.244 2.087-6.033.713c-2.793-1.379-11.779-4.344-22.434-13.844c-8.291-7.394-13.891-16.505-15.514-19.295c-1.621-2.787-.173-4.296 1.219-5.683c1.256-1.248 2.793-3.26 4.186-3.891c1.389-.63 1.852-1.049 2.777-1.855c.924-.803.691-1.576.283-2.319c-.408-.744-6.025-14.497-8.277-19.852z"/>
  </svg>
);

const Notion = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28zm-39.5 107.5L88 184a8.1 8.1 0 0 1-6.1 2a7.6 7.6 0 0 1-5.5-2.9l-7.6-10.2a7.9 7.9 0 0 1 1.6-11.2l34.7-25.1l43.1-31.2a7.8 7.8 0 0 1 8.4-.6l.6.4a8 8 0 0 1 3.3 6.5v100.1a8 8 0 0 1-12.9 6.3z" fill="#000"/>
  </svg>
);

const GoogleDrive = () => (
  <svg width="24" height="24" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
    <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
    <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
    <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
    <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
    <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
  </svg>
);

export const Icons = {
  Home,
  FileText,
  Phone,
  Users,
  Rocket,
  Mail,
  MapPin,
  Github,
  Twitter,
  Facebook,
  Shield,
  HospitalIcon,
  DoctorIcon,
  MedicalResearchIcon,
  MonitorSmartphone,
  BarChart3,
  Bot,
  Smartphone,
  whatsapp: WhatsApp,
  notion: Notion,
  googleDrive: GoogleDrive,
  gitHub: Github,
} as const;

export type IconName = keyof typeof Icons;