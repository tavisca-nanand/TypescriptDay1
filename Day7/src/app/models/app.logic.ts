import { Product } from './app.product';
import { Products } from './app.constants';

export class Logic {
    private products: Array<Product>;
    private prds = Products;
    constructor(){
      this.products = new Array<Product>();
      this.prds.forEach((p,i)=> {
         this.products.push(
           new Product(p.ProductId,p.ProductName,p.Price,p.Catgory)
         );
      });
    }
    retrieveIndex(prd: Product): number{
      return this.products.findIndex(x => x.ProductId == prd.ProductId)
    }

    getProducts(): Array<Product> {
      return this.products;
    }

    saveProducts(prd: Product): Array<Product> {
      this.products.push(prd);
      return this.products;
    }

    sortProductsByName() : Array<Product>
    {
      return this.products.sort(function(a, b){
        if(a.ProductName < b.ProductName) { return -1; }
        if(a.ProductName > b.ProductName) { return 1; }
        return 0;
      })
    }
    
    reverseProductsByName() : Array<Product>
    {
      return this.products.sort(function(a, b){
        if(b.ProductName < a.ProductName) { return -1; }
        if(b.ProductName > a.ProductName) { return 1; }
        return 0;
      })
    }

    updateProduct(prd: Product): Array<Product> {
        let indexToBeUpdated = this.retrieveIndex(prd);
        if(indexToBeUpdated == -1)
          alert("No such product exists");
        else 
          this.products.splice(indexToBeUpdated, 1, prd)
        return this.products;
    }

    deleteProduct(prd: Product): Array<Product>
    {
      let indexToDelete = this.retrieveIndex(prd);
      if(indexToDelete == -1)
        console.log("No such product exists");
      else
        this.products.splice(indexToDelete, 1)
      return this.products;
    }

    searchProducts(searchText: string): Array<Product> {
      return this.products.filter(p => p.ProductName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) || 
            p.Category.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    }

    
}
