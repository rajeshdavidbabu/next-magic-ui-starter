import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
}

export const HospitalIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33 11H15C13.8954 11 13 11.8954 13 13V39C13 40.1046 13.8954 41 15 41H33C34.1046 41 35 40.1046 35 39V13C35 11.8954 34.1046 11 33 11Z" fill={color}/>
    <path d="M17 7H31V11H17V7Z" fill={color}/>
    <path d="M23 21V31" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 26H28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const DoctorIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44ZM24 25C27.866 25 31 21.866 31 18C31 14.134 27.866 11 24 11C20.134 11 17 14.134 17 18C17 21.866 20.134 25 24 25ZM36.6793 37.941C33.9141 34.9706 29.1875 33 24 33C18.8125 33 14.0859 34.9706 11.3207 37.941C14.1555 41.2898 18.7968 43.5 24 43.5C29.2032 43.5 33.8445 41.2898 36.6793 37.941Z" fill={color}/>
  </svg>
);

export const MedicalResearchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 8H13C11.3431 8 10 9.34315 10 11V37C10 38.6569 11.3431 40 13 40H35C36.6569 40 38 38.6569 38 37V11C38 9.34315 36.6569 8 35 8Z" stroke={color} strokeWidth="2"/>
    <path d="M18 16H30" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 24H30" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 32H24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="34" cy="32" r="6" fill={color}/>
    <path d="M34 29V35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M31 32H37" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Přidejte další ikony podle potřeby