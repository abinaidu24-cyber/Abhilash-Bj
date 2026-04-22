export interface Product {
  id: string;
  name: string;
  description: string;
  useCases: string[];
  image: string;
}

export interface InquiryFormData {
  product: string;
  quantity: string;
  destination: string;
  buyerType: string;
  email: string;
  whatsapp: string;
}
