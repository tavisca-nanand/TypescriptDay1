import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/productcompopnent/app.product.component';
import { CustSenderComponent } from './components/customer-ordercomponent/app.custsender.component';
import { OrderReceiverComponent } from './components/customer-ordercomponent/app.orderreciever.component';
import { SearchComponent } from './components/customer-ordercomponent/app.searchcomponent';
import { HttpClientModule } from '@angular/common/http';
import { UniqueDirective } from './directives/app.uniquedirective';
import { UniqueDirectiveComponent } from './components/directivecomponent/app.unique.directive.component';

// imports: array that imports all standard Angular moaulds and custom
// extenal modules for the current NG App.

// declatrations: array, used for declaring all components, deirectives
// for the current NG app. All components will be initialized in declartion

// providers: array, this is a DI container to register all NG
// services so that they can be injected in other NG Objects

// bootstrap : array, that contains one or more components to be
// rendered when AppModule is loaded in browser

// entryComponent: for Custom Elements (Depricated in NG 9)

// BrowserModule: The mandatory module for BootStrap NGModule
// Per NG Application we can have 'Only-One' instance of BrowserModule

@NgModule({
  declarations: [
    AppComponent, ProductComponent,CustSenderComponent,OrderReceiverComponent,SearchComponent,
    UniqueDirective,
    UniqueDirectiveComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,HttpClientModule,
  ],
  
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [UniqueDirectiveComponent]
})
export class AppModule { }
