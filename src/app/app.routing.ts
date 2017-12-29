import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { TableComponent } from './table/table.component';
import { DownlaodComponent } from './downlaod/downlaod.component';

const routes: Routes = [
    {
        path: '', component: AppComponent, pathMatch: 'full'
    },
    {
        path: '/home', component: AppComponent
    },
    {
        path: '/create', component: TableComponent
    },
    {
        path: '/download', component: DownlaodComponent
    }
]

export const Router = RouterModule.forRoot(routes);