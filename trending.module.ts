import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TrendingComponent } from './components/trending/trending.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import{ChartsModule} from '@progress/kendo-angular-charts';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';
import { SignalchartComponent } from './components/signalchart/signalchart.component';

@NgModule({
  declarations: [
    TrendingComponent,
    SignalchartComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatProgressBarModule,
    GridModule,
    ButtonsModule,
    ChartsModule,
    DateInputsModule,
    ComboBoxModule
  ]
})
export class TrendingModule { }
