# Shopping Cart

This solution, uses a mocked nosql datastore, a basket is simply respresented like so:

```
[
  {
    userId: 1,
    items: [
      { id: 1, price: 39.99, name: 'Dove Soap', quantity: 2 }
    ]
  }
]
```

This repository contains 3 branches:

* step-1: Add products to the shopping cart.
* step-2: Add additional products of the same type to the shopping cart.
* step-3: Calculate the tax rate of the shopping cart with multiple items

## version number
627d7be039e0085025a51d47e42bdd970409ec1c

## Setup
To setup this project:
* `npm install`

## Testing
To run tests:
* `npm test`

## Coverage
To run test coverage run:
* `npm run coverage`

## Lint
To run Lint:
* `npm run lint`

## Fix Lint
To fix lint issues:
* `npm run fix`
