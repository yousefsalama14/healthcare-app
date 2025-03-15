import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApiService } from '../../core/services/base-api.service';

@Component({
  selector: 'app-base-list',
  imports: [],
  templateUrl: './base-list.component.html',
  styleUrl: './base-list.component.scss'
})

// Abstract base component

export abstract class BaseListComponent<T> implements OnInit {
  items: T[] = [];

  constructor(protected apiService: BaseApiService<T>) { }

  ngOnInit(): void {
    this.loadItems();
  }

  protected loadItems(): void {
    this.apiService.getAll().subscribe((data) => {
      this.items = data;
    });
  }

  abstract displayItem(item: T): void; // Polymorphism: Subclasses define how to display items
}
