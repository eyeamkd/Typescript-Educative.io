>Users place orders for products. Users have contact information, email or postal addresses, and at least one is required. Orders should include price, product name, quantity, payment date, paid amount, sending date, and delivery date. 

``` 
type email : string 
type postal : number  

type User{
    contact : email | postal 
    orders : Array<order>
} 

type Order{
    price : number;
    productName: string;
    quantity: number;
    paymentDate: date;
    paidAmount: number;
    sendingDate: date;
    deliveryDate: date;
}

```