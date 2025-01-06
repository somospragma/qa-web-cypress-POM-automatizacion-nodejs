export interface CheckoutData {
  product: Product;
  totalAmount: string;
  messageTextArea: string;
}

export interface Product {
  image: string;
  description: string;
  price: string;
  quantity: string;
}
