import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  // the event that will be emitted by sender and
  // will be subscribed by the receiver
    emitValue: EventEmitter<number>;
    emitSearchQuery: EventEmitter<string>;
    emitCustomerFilteration : EventEmitter<Array<number>>;
    constructor(){
       this.emitValue = new EventEmitter<number>();
       this.emitSearchQuery = new EventEmitter<string>();
       this.emitCustomerFilteration = new EventEmitter<Array<number>>();
    }
    // method that emits event. This method will be called
    // by sender
    onEmiteValue(data: number): void {
        this.emitValue.emit(data);
    }

    onInitiateSearch(searchQuery: string): void{
        this.emitSearchQuery.emit(searchQuery);
    }

    onCustomerFilteration(customerIds : Array<number>) : void {
        this.emitCustomerFilteration.emit(customerIds);
    }
}
