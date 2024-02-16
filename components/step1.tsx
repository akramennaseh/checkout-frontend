"use client"
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';


type Product = {
    id: number;
    name: string;
    price: string;
    Instead: string;
    UseToo: string;
    periode: string;
};

export default function CheckoutPage() {
    

    const products: Product[] = [
        { id: 1, name: '6 Month Pass', price: '30', Instead: 'Instead of €9.99 per month', UseToo: '40', periode: '6Mon' },
        { id: 2, name: '12 Month Pass', price: '70', Instead: 'Instead of €9.99 per month', UseToo: '40', periode: '6Mon' },
        


        // Add more products as needed
    ];
    const [selectedProduct, setSelectedProduct] = useState(products.find(product => product.id === 2));

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    return (
        <div className='flex flex-col  sm:flex-row'>  {products.map((product) => (
                <div 
                    className=' flex-1 mx-5 my-8'
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    style={{
                        border: selectedProduct?.id === product.id ? '2px ' : 'none',
                        cursor: 'pointer',
                    }}
                >
                    <Card className={`card ${selectedProduct?.id === product.id ? 'card-selected' : ''}`}>
                        <CardHeader>
                            <CardTitle>{product.name}</CardTitle>
                            <CardDescription>Seamless Streaming. Unrivaled Quality.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <h1 style={{ display: "inline-block" }} className="text-4xl font-bold text-blue-700">{product.price}€</h1>
                            <h1 className=" ml-2" style={{ display: "inline-block" }}>/month</h1>
                            <h1 className="line-through ml-2 text-primary">{product.Instead}</h1>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <CardDescription>30-day money-back guarantee</CardDescription>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>
    );
}