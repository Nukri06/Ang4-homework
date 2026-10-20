import { Component,OnInit } from '@angular/core';
import { ActivatedRoute , RouterLink} from '@angular/router';



export interface Product{
  id:number;
  image:string;
  brand:string;
  model:string;
  price:number;
  stock:number;
}

@Component({
  imports: [RouterLink],
  selector: 'app-details',
  styleUrl: './details.css',
  templateUrl: './details.html',
})



export class Details {

productsList: Product[] = [
    { id: 1, image: 'https://imgstore.alta.ge/images/400/145/145226_6322_4.webp', brand: 'Apple', model: 'iPhone 15', price: 1200, stock: 5 },
    { id: 2, image: 'https://imgstore.alta.ge/images/400/158/158691_5927_4.webp', brand: 'Samsung', model: 'Galaxy S24', price: 1100, stock: 8 },
    { id: 3, image: 'https://s3.zoommer.ge/site/d39840ec-a367-4778-bf23-19daaad14ede_Thumb.jpeg', brand: 'Xiaomi', model: 'Redmi Note 13', price: 400, stock: 15 },
    { id: 4, image: 'https://static.tnet.ge/mymarket/photos/large/0911/31495927_1.jpg?v=11', brand: 'Sony', model: 'PlayStation 5', price: 500, stock: 3 },
    { id: 5, image: 'https://imgstore.alta.ge/images/c41032cf-0c3a-4764-872f-238b4ea8723e_Thumb.jpeg', brand: 'Asus', model: 'ROG Zephyrus', price: 1800, stock: 2 },
    { id: 6, image: 'https://media.wired.com/photos/6169f03b58660fcbc5f4ec3b/master/w_1600%2Cc_limit/Gear-Dell-XPS-15-OLED-1.jpg', brand: 'Dell', model: 'XPS 15', price: 1500, stock: 4 },
    { id: 7, image: 'https://imgstore.alta.ge/images/400/147/147583_3251_7.webp', brand: 'HP', model: 'Pavilion x360', price: 700, stock: 10 },
    { id: 8, image: 'https://imgstore.alta.ge/images/6c05f4cb-f7b5-4187-9876-4d8603dd01c8_Thumb.png', brand: 'Lenovo', model: 'ThinkPad X1', price: 1300, stock: 6 },
    { id: 9, image: 'https://www.dxomark.com/wp-content/uploads/medias/post-151145/Microsoft-Surface-Pro-9-_featured-image-packshot-review.jpg', brand: 'Microsoft', model: 'Surface Pro 9', price: 1000, stock: 7 },
    { id: 10, image: 'https://imgstore.alta.ge/images/400/151/151720_4840_1.webp', brand: 'Google', model: 'Pixel 8 Pro', price: 900, stock: 9 }
  ];

  //აქ ვქმნი ცვლადს ნაპოვნი პროდუქტებისთვის
  selectedProduct:Product|undefined;
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.route.params.subscribe((params)=> {
      const productID= +params['id']
      this.selectedProduct=this.productsList.find(p=>p.id===productID)
    
    });
    }
  }


