
export class Product 
{
    Title(){
        return "Product Details";
    }
    Details(id, name, price){
        return `Id=${id}<br>Name=${name}<br>Price=${price}`;
    }
}