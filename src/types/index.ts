
export type OrderStatus = "Pending" | "In Progress" | "Delivered" | "Cancelled";

export interface PizzaOrder {
  id: string;
  customerName: string;
  pizzaType: string;
  quantity: number;
  orderDate: Date;
  status: OrderStatus;
}
