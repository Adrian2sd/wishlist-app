// src/global.d.ts
interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  link: string;
  priority: 'alta' | 'media' | 'baja';
  category: string;
}