import {Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
import { HttpService } from '../services/app.http.service';


@Directive({
    selector: '[prdId]'
  })

 export class UniqueDirective
 {
     constructor(private ele:ElementRef,private renderer : Renderer2, private service : HttpService)
     {}

     @Input('prdId') prdId : string;

     private checkUnique(productID : string) : void {
         if(productID.length > 0)
         {
             this.service.get().subscribe((data) => {
                 console.log(`recieved response from service is ${JSON.stringify(data)}`);
                 if(data.find(p => p.ProductId == productID))
                 {
                     this.renderer.setStyle(this.ele.nativeElement,'border-color','red');
                 }
                 else{
                    this.renderer.setStyle(this.ele.nativeElement,'border-color','');
                 }

             },
             (error) => {
                console.log(`error in response ${error}`);
              });

         }
     }

      // host events inside the directive those will cause the
    // directive to be executed / activated and its logic to execute
    @HostListener('blur')
    onblur() : void {
        this.checkUnique(this.prdId);
    }
 }

