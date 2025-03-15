import { Component, OnInit, signal } from '@angular/core';
import { BaseApiService } from '../../../core/services/base-api.service';

@Component({
  selector: 'app-base-list',
  imports: [],
  templateUrl: './base-list.component.html',
  styleUrl: './base-list.component.scss'
})
// Abstract base List component
export abstract class BaseListComponent<T> implements OnInit {
  items = signal<T[]>([]); // Signal for reactive state
  loading = signal(true);

  constructor(protected apiService: BaseApiService<T>) { }

  ngOnInit(): void {
    this.loadItems();
  }

  protected loadItems(): void {
    this.loading.set(true);
    this.apiService.getAll().subscribe({
      next: (data) => {
        this.items.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  abstract displayItem(item: T): void; // Polymorphism: Subclasses define how to display items
}
