# HealthcareApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

### OOP Principles:

## Abstraction:

BaseApiService and BaseListComponent abstract common logic, making the app easier to extend (e.g., for doctors, prescriptions).
BaseApiService defines a generic CRUD interface for any entity type (T), hiding implementation details.

## Inheritance:

Reusable base classes reduce boilerplate and enforce consistency.
PatientApiService extends BaseApiService, inheriting common HTTP methods and customizing them for patients.
PatientListComponent inherits from BaseListComponent, reusing the loadItems logic.

## Encapsulation:

Services and components hide implementation details, exposing only necessary methods.
The baseUrl and http are protected, ensuring subclasses can use them while keeping them private to external code.
The items array and apiService are managed within the base class, exposing only what’s necessary.

## Scalability:

You can create similar services (e.g., AppointmentApiService) by extending BaseApiService.

## Polymorphism

Custom behavior (e.g., displayItem) adapts to different entities (patients, appointments).
The displayItem method is abstract, allowing each subclass to define how items are displayed (e.g., in a table, list, or modal).
