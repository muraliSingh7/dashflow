
import type { PizzaOrder, OrderStatus } from "@/types";

export const pizzaOrdersData: PizzaOrder[] = [
  { id: "ORD001", customerName: "Alice Wonderland", pizzaType: "Margherita", quantity: 1, orderDate: new Date("2024-07-15T10:30:00Z"), status: "Delivered" },
  { id: "ORD002", customerName: "Bob The Builder", pizzaType: "Pepperoni", quantity: 2, orderDate: new Date("2024-07-16T11:00:00Z"), status: "In Progress" },
  { id: "ORD003", customerName: "Charlie Brown", pizzaType: "Vegetarian", quantity: 1, orderDate: new Date("2024-07-16T12:15:00Z"), status: "Pending" },
  { id: "ORD004", customerName: "Diana Prince", pizzaType: "Hawaiian", quantity: 1, orderDate: new Date("2024-07-17T09:45:00Z"), status: "Cancelled" },
  { id: "ORD005", customerName: "Edward Scissorhands", pizzaType: "BBQ Chicken", quantity: 3, orderDate: new Date("2024-07-18T14:00:00Z"), status: "Delivered" },
  { id: "ORD006", customerName: "Fiona Apple", pizzaType: "Margherita", quantity: 1, orderDate: new Date("2024-07-19T18:30:00Z"), status: "In Progress" },
  { id: "ORD007", customerName: "George Costanza", pizzaType: "Pepperoni", quantity: 2, orderDate: new Date("2024-07-20T19:00:00Z"), status: "Pending" },
  { id: "ORD008", customerName: "Harry Potter", pizzaType: "Four Cheese", quantity: 1, orderDate: new Date("2024-07-21T13:00:00Z"), status: "Delivered" },
  { id: "ORD009", customerName: "Ivy Ling", pizzaType: "Spicy Italian", quantity: 1, orderDate: new Date("2024-07-22T20:00:00Z"), status: "Pending" },
  { id: "ORD010", customerName: "Jack Sparrow", pizzaType: "Seafood Special", quantity: 1, orderDate: new Date("2024-07-23T12:30:00Z"), status: "Cancelled" },
];
