import { Certification, Hobby, Testimonial } from './types';

export const certifications: Certification[] = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2024 - May 2027",
    verificationUrl: "https://www.credly.com/badges/94fde236-10e8-46ac-beb0-0285e9a67207/linked_in_profile"
  },
  {
    name: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    date: "May 2024",
    verificationUrl: "https://trailhead.salesforce.com/en/credentials/verification/"
  }
];

export const hobbies: Hobby[] = [
  {
    name: "Competitive Programming",
    description: "Participating in coding competitions and algorithmic challenges",
    icon: "💻"
  },
  {
    name: "Open Source",
    description: "Contributing to open-source projects and communities",
    icon: "🌟"
  },
  {
    name: "Chess",
    description: "Strategic thinking and mental exercise through chess",
    icon: "♟️"
  },
  {
    name: "Language Learning",
    description: "Currently learning Japanese with intermediate understanding",
    icon: "🗣️"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Sandeep demonstrates exceptional problem-solving abilities and a deep understanding of AI/ML concepts.",
    author: "Dr. Rajesh Kumar",
    title: "Professor",
    relation: "AI/ML Department, KL University"
  },
  {
    quote: "His dedication to learning and ability to apply theoretical concepts to real-world problems is remarkable.",
    author: "Dr. Sarah Chen",
    title: "Research Mentor",
    relation: "Machine Learning Lab"
  }
];