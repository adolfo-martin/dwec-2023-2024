import { Routes } from '@angular/router';
import { TabFrameworksComponent } from '../components/tab-frameworks/tab-frameworks.component';
import { TabAreasComponent } from '../components/tab-areas/tab-areas.component';

export const routes: Routes = [
    { path: 'areas', component: TabAreasComponent },
    { path: 'frameworks/:area', component: TabFrameworksComponent },
    { path: 'frameworks', component: TabFrameworksComponent },

];
