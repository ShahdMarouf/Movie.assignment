import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

export const routes: Routes = [
    {path:"page",component:PageComponent,title:"page"},

{path:"",redirectTo:"page",pathMatch:"full"},



];
