export interface Certification {
  name: string;
  issuer: string;
  date: string;
  verificationUrl: string;
}

export interface Hobby {
  name: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  relation: string;
}