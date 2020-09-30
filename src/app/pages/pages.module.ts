
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';


// ng2-charts
import { PagesComponent } from './pages.component';
import { UserComponent } from './user/user.component';

// temporal
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Primeng
/* import {DropdownModule} from 'primeng/dropdown';
 */
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

@NgModule({
    declarations: [
        PagesComponent,
        UserComponent
    ],
    exports: [
        UserComponent
    ],
    imports: [
        BrowserAnimationsModule,
        PAGES_ROUTES,
        FormsModule,
        TableModule,
        ButtonModule,
        CommonModule,
        DialogModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class PagesModule { }
