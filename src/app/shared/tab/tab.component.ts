import { CommonModule } from '@angular/common';
import { Component, Directive } from '@angular/core';
import { HomeComponent } from "../../home/home.component";
import { ToDoListComponent } from "../../to-do-list/to-do-list.component";

@Component
({
    selector: 'app-tab',
    standalone: true,
    template: `
  <div class="tabs w-full">
    <div class="flex justify-center p-3">
      <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" (click)="tab=1" [ngClass]="{'btn-success':tab===1}">Home</button>
      <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" (click)="tab=2" [ngClass]="{'btn-success':tab===2}">To-do-List</button>
    </div>
  </div>

  <div>
    @if (tab === 1) {
      <app-home></app-home>
    }@else if (tab === 2) {
      <app-to-do-list></app-to-do-list>
    }
  </div>

  `,
    styles: ``,
    imports: [CommonModule, HomeComponent, ToDoListComponent]
})
export class TabComponent {
    tab : number = 1;
}

