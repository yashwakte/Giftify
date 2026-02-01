export interface Gift {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  ageGroup?: string;
  gender?: string;
  role?: string;
}
