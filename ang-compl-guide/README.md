# Angular - The Complete Guide

## 6 - [Directives](directives)
* Use ngClass and ngStyle directives
* Create custom directives
* Use HostListener decorator to listen to html element events
* Use HostBinding to bind to host properties
* Use binding to directive properties

## 5 - [Shopping List / Recipe Book - ver.2](shoplist)
* Use binding to implement Navigation
* Move html from recipe-list to recipe-item component
* Use binding to show selected recipe details
* Allow the User to add ingredients to the shopping list

## 4 - [Assignment: Odd Even Game](odd-even)

### To do:
1. Create 3 new components: GameControl, Odd and Even
2. The GameControl Component should have buttons to stat and stop the game
3. When starting the game, and event (holding an incrementing number) should get emitted each second (ref = setInterval())
4. The event should be listenable from outside the component
5. When stopping the game, no more events should get emitted (clearInterval(ref))
6. A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers)
7. Simply output Odd - NUMBER or Even - NUMBER in the two components
8. Style the element (e.g. paragraph) holding your output text differently in both components

### Done:
* Create empty project
* Add components
* Use EventEmitter in GameControl component to emit events and handle in parent AppComponent
* Use Input decorator to pass event data into child components

## 3 - [Databinding App](databinding)
* Create empty project
* Add Bootstrap
* Add code for start
* Split app into components
* Binding to custom properties
* Binding to custom events
* Use Local Rerefences
* Get access to template and DOM with @ViewChild decorator
* Use ng-content directive to project into component any html from outside
* Access template from Lifecycle hooks using ViewChild decorator
* Access ng-content with ContentChild decorator

## 2 - [Shopping List / Recipe Book](shoplist)
* Add Bootstrap to project: `npm install --save bootstrap'
* Add Components and classes

## 1 - [First App](first-app)

* Create initial base project
* Add link Bootstrap styles in angular.json
* Add ServerComponent, register it in app.module.ts
* Use styles in components
* Property binding
* String interpolation
* Two-way databinding
* Use ngIf structural directive with an else condition
* Styling elements dynamically with ngStyle
* Applying CSS classes dynamically with ngClass
* Output lists with ngFor

