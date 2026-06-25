import { Head } from '@inertiajs/react';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { toast } from "sonner"; 

export default function POS() {
    // Basic test trigger for the button clicks
    const handleCheckout = () => {
        toast.success("Order recorded successfully!");
    };

    return (
        <>
            <Head title="POS System" />
            <div className="flex h-full flex-1 flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold tracking-tight">DarsBBQ POS System</h1>
                </div>
                
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 flex-1 items-start">
                    {/* Left Panel: Menu Items inside a Card wrapper */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                Menu Items
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                <Button 
                                    variant="outline" 
                                    className="h-28 flex flex-col justify-between p-4 rounded-xl text-center items-center hover:bg-accent transition-all"
                                >
                                    <span className="font-medium text-base">Pork BBQ Cup</span>
                                    <span className="text-sm text-muted-foreground">₱60.00</span>
                                </Button>
                                
                                <Button 
                                    variant="outline" 
                                    className="h-28 flex flex-col justify-between p-4 rounded-xl text-center items-center hover:bg-accent transition-all"
                                >
                                    <span className="font-medium text-base">Chicken BBQ Cup</span>
                                    <span className="text-sm text-muted-foreground">₱60.00</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Right Panel: Active Cart Section Container */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                Current Order
                            </CardTitle>
                        </CardHeader>
                        
                        <CardContent className="space-y-6">
                            {/* Empty State Box */}
                            <div className="min-h-[160px] flex items-center justify-center border border-dashed rounded-xl border-border p-4">
                                <span className="text-sm text-muted-foreground">Cart is empty</span>
                            </div>

                            <Separator />

                            {/* Payment Options Row using ToggleGroup */}
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-muted-foreground block uppercase tracking-wider">
                                    Payment Method
                                </label>
                                <ToggleGroup type="single" defaultValue="cash" className="w-full gap-2">
                                    <ToggleGroupItem value="cash" className="flex-1 border border-input" variant="outline">
                                        Cash
                                    </ToggleGroupItem>
                                    <ToggleGroupItem value="digital" className="flex-1 border border-input" variant="outline">
                                        Digital
                                    </ToggleGroupItem>
                                </ToggleGroup>
                            </div>

                            <Separator />

                            {/* Totals Block */}
                            <div className="space-y-2 pt-2">
                                <div className="flex justify-between text-sm text-muted-foreground">
                                    <span>Subtotal</span>
                                    <span>₱0.00</span>
                                </div>
                                <div className="flex justify-between items-baseline pt-1">
                                    <span className="text-base font-medium">Total</span>
                                    <span className="text-2xl font-bold tracking-tight">₱0.00</span>
                                </div>
                            </div>

                            {/* Action Checkout Button */}
                            <Button className="w-full h-11 rounded-xl text-base font-medium shadow-xs" onClick={handleCheckout}>
                                Complete Transaction
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    );
}

POS.layout = {
    breadcrumbs: [
        {
            title: 'POS System',
            href: '/pos',
        },
    ],
};