
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
  { id: "ORD011", customerName: "Kara Danvers", pizzaType: "Margherita", quantity: 2, orderDate: new Date("2024-07-24T11:00:00Z"), status: "In Progress" },
  { id: "ORD012", customerName: "Luke Skywalker", pizzaType: "Pepperoni", quantity: 1, orderDate: new Date("2024-07-24T14:00:00Z"), status: "Delivered" },
  { id: "ORD013", customerName: "Mindy Lahiri", pizzaType: "Vegetarian", quantity: 3, orderDate: new Date("2024-07-25T10:00:00Z"), status: "Pending" },
  { id: "ORD014", customerName: "Ned Flanders", pizzaType: "Hawaiian", quantity: 1, orderDate: new Date("2024-07-25T16:30:00Z"), status: "Cancelled" },
  { id: "ORD015", customerName: "Olivia Benson", pizzaType: "BBQ Chicken", quantity: 2, orderDate: new Date("2024-07-26T18:00:00Z"), status: "Delivered" },
  { id: "ORD016", customerName: "Peter Parker", pizzaType: "Margherita", quantity: 1, orderDate: new Date("2024-07-27T09:00:00Z"), status: "In Progress" },
  { id: "ORD017", customerName: "Quentin Coldwater", pizzaType: "Pepperoni", quantity: 3, orderDate: new Date("2024-07-27T11:30:00Z"), status: "Pending" },
  { id: "ORD018", customerName: "Raven Baxter", pizzaType: "Four Cheese", quantity: 2, orderDate: new Date("2024-07-28T14:30:00Z"), status: "Delivered" },
  { id: "ORD019", customerName: "Shawn Spencer", pizzaType: "Spicy Italian", quantity: 1, orderDate: new Date("2024-07-28T19:00:00Z"), status: "Pending" },
  { id: "ORD020", customerName: "Tina Belcher", pizzaType: "Seafood Special", quantity: 2, orderDate: new Date("2024-07-29T12:00:00Z"), status: "Cancelled" },
  { id: "ORD021", customerName: "Usain Bolt", pizzaType: "Vegetarian", quantity: 1, orderDate: new Date("2024-07-29T15:00:00Z"), status: "Delivered" },
  { id: "ORD022", customerName: "Veronica Mars", pizzaType: "Hawaiian", quantity: 3, orderDate: new Date("2024-07-30T10:30:00Z"), status: "In Progress" },
  { id: "ORD023", customerName: "Walter White", pizzaType: "BBQ Chicken", quantity: 1, orderDate: new Date("2024-07-30T13:00:00Z"), status: "Pending" },
  { id: "ORD024", customerName: "Xiaoyu Yan", pizzaType: "Margherita", quantity: 2, orderDate: new Date("2024-07-31T11:00:00Z"), status: "Delivered" },
  { id: "ORD025", customerName: "Yoda", pizzaType: "Pepperoni", quantity: 1, orderDate: new Date("2024-07-31T14:00:00Z"), status: "Cancelled" },
  { id: "ORD026", customerName: "Zelda Hyrule", pizzaType: "Four Cheese", quantity: 3, orderDate: new Date("2024-08-01T10:00:00Z"), status: "In Progress" },
  { id: "ORD027", customerName: "Anakin Skywalker", pizzaType: "Spicy Italian", quantity: 2, orderDate: new Date("2024-08-01T16:30:00Z"), status: "Pending" },
  { id: "ORD028", customerName: "Bruce Wayne", pizzaType: "Seafood Special", quantity: 1, orderDate: new Date("2024-08-02T18:00:00Z"), status: "Delivered" },
  { id: "ORD029", customerName: "Clark Kent", pizzaType: "Vegetarian", quantity: 2, orderDate: new Date("2024-08-02T09:00:00Z"), status: "In Progress" },
  { id: "ORD030", customerName: "Daenerys Targaryen", pizzaType: "Hawaiian", quantity: 1, orderDate: new Date("2024-08-03T11:30:00Z"), status: "Pending" },
];
