export interface Product {
    id:number
    name:string,
    supplierId:number,
    categoryId:number,
    quantityPerUnit:number,
    unitPrice:number,
    unitsInStock:number,
    unitsOnOrder:number,
    reorderLevel:number,
    discontinued:boolean,
    vendorId:number,
  }