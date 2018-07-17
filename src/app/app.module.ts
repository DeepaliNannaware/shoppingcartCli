import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import {Http,HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { SubCatComponent } from './sub-cat/sub-cat.component';
import { SubSubCatComponent } from './sub-sub-cat/sub-sub-cat.component';
import { BrandComponent } from './brand/brand.component';
import { ProductComponent } from './product/product.component';
import{Ng2SearchPipeModule} from 'ng2-search-filter'
import{NgxPaginationModule} from  'ngx-pagination'
import{Ng2OrderModule} from 'ng2-order-pipe'


var obj=[{  path:"ct",component:CatComponent},
{path:"sct",component:SubCatComponent},
{path:"ssct",component:SubSubCatComponent},
{path:"br",component:BrandComponent},
{path:"pr",component:ProductComponent}]

var ro=RouterModule.forRoot(obj)
@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    SubCatComponent,
    SubSubCatComponent,
    BrandComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,ro,FormsModule,HttpModule,NgxPaginationModule,Ng2SearchPipeModule,Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
