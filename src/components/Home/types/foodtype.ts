export type foodType= {
    _id:string,
    name: string,
    categoryId:{
      name:string,
      _id:string,
    }
    image:string,
    price:number,
    discount:number,
    ingredients:string[]
    }