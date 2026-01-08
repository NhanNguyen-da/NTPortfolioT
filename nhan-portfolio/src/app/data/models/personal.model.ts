export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  bio: string;
  vision: string;
  profileImage: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  location: string;
}
