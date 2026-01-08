export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: Date;
  expiryDate?: Date | null;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  description?: string;
}
