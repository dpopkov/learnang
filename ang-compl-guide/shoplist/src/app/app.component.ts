import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature: string = 'recipes';

  displayRecipes(): boolean {
    return this.loadedFeature === 'recipes';
  }

  displayShoppingList(): boolean {
    return this.loadedFeature === 'shoppingList';
  }

  onNavigate(featureSelected: string) {
    this.loadedFeature = featureSelected;
  }
}
