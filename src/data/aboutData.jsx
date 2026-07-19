import React from 'react';
import { 
  FaBirthdayCake, 
  FaPhone, 
  FaFlag, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaLanguage, 
  FaGraduationCap, 
  FaUserCheck 
} from 'react-icons/fa';

export const infoItems = [
  { icon: <FaBirthdayCake />, label: 'Birthday', value: '2005.03.05' },
  { icon: <FaPhone />, label: 'Phone', value: '+94 776559959' },
  { icon: <FaFlag />, label: 'Nationality', value: 'Sri Lankan' },
  { icon: <FaEnvelope />, label: 'Email', value: 'mirshadhhussain@gmail.com' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Weligama, Sri Lanka' },
  { icon: <FaLanguage />, label: 'Languages', value: 'English, Sinhala' },
  { icon: <FaGraduationCap />, label: 'Education', value: 'BSc Data Science' },
  { icon: <FaUserCheck />, label: 'Availability', value: 'Open for Hire' }
];

export const experienceData = [
  { role: 'Freelance Developer', company: 'Self Employed', period: '2025 - NOW', description: 'Building desktop and SaaS applications for real clients including gym management systems and shop management platforms.' },
  { role: 'Data Science Undergraduate', company: 'Sri Lanka Technology Campus (SLTC)', period: '2025 - NOW', description: 'Studying BSc (Hons) in Data Science focusing on machine learning, statistics, data visualization, business analytics, and database management.' },
  { role: 'Head Prefect & Student Leader', company: 'Arafat National School', period: '2024 - 2025', description: 'Led the student body, managed school events, and demonstrated team leadership, personal discipline, and effective communication.' }
];

export const educationData = [
  { role: 'BSc (Hons) in Data Science', company: 'Sri Lanka Technology Campus (SLTC)', period: '2025 - 2029', description: "Bachelor's degree focusing on data science, machine learning, statistics, data analytics, and business intelligence." },
  { role: 'Diploma in Cyber Security', company: 'Professional Qualification', period: '2025', description: 'Specialized training covering data protection protocols, network security fundamentals, threat analysis, and system integrity.' },
  { role: 'Leadership Development & Athletics', company: 'Arafat National School', period: '2024 - 2025', description: 'Completed formal Leadership Development Program; recognized as School Athletic Champion demonstrating competitive drive and discipline.' }
];
