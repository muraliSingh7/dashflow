
import { OrdersDataTable } from "@/components/orders/orders-data-table";
import { columns } from "@/components/orders/orders-table-columns";
import { pizzaOrdersData } from "@/lib/pizza-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

export default function PizzaOrdersPage() {
  return (
    <div className="container mx-auto py-8">
      <Card className="shadow-lg">
        <CardHeader>
           <div className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl font-bold">Pizza Orders</CardTitle>
          </div>
          <CardDescription>
            View and manage all pizza orders. You can sort by Order ID or Order Date, and filter by status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OrdersDataTable columns={columns} data={pizzaOrdersData} />
        </CardContent>
      </Card>
    </div>
  );
}
