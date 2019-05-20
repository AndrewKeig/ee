import {
  getBasket,
  addItemBasket,
  getBasketTotal,
  clearBasket,
  getSalesTax,
  getGrandTotal
} from './basket'
import { getProduct } from './product'

describe('Given An empty shopping cart', () => {
  describe('When the user adds 5 Dove Soaps to the shopping cart', () => {
    const userId = 1
    let basket

    beforeAll(() => {
      clearBasket()
      const product = getProduct(1)
      addItemBasket(userId, product, 5)
      basket = getBasket(userId)
    })

    it('Then the shopping cart should contain 5 Dove Soaps each with a unit price of 39.99', () => {
      const expoected = {
        userId,
        items: [{ id: 1, price: 39.99, name: 'Dove Soap', quantity: 5 }]
      }
      expect(basket).toEqual(expoected)
    })

    it('Then the shopping carts total price should equal 199.95', () => {
      const total = getBasketTotal(basket)
      expect(total).toEqual(199.95)
    })
  })

  describe('When the user adds 5 Dove Soaps, and another 3 Dove Soaps to the shopping cart', () => {
    const userId = 1
    let basket

    beforeAll(() => {
      clearBasket()
      const product = getProduct(1)
      addItemBasket(userId, product, 5)
      addItemBasket(userId, product, 3)
      basket = getBasket(userId)
    })

    it('Then the shopping cart should contain 8 Dove Soaps each with a unit price of 39.99', () => {
      const basket = getBasket(userId)
      const expoected = {
        userId,
        items: [{ id: 1, price: 39.99, name: 'Dove Soap', quantity: 8 }]
      }

      expect(basket).toEqual(expoected)
    })

    it('Then the shopping carts total price should equal 319.92', () => {
      const total = getBasketTotal(basket)
      expect(total).toEqual(319.92)
    })
  })

  describe('When the user adds 2 Dove Soaps add 2 Axe Deos to the shopping cart', () => {
    const userId = 1
    let basket

    beforeAll(() => {
      clearBasket()
      const product1 = getProduct(1)
      addItemBasket(userId, product1, 2)
      const product2 = getProduct(2)
      addItemBasket(userId, product2, 2)
      basket = getBasket(userId)
    })

    it('Then the shopping cart should contain 2 Dove Soaps each with a unit price of 39.99', () => {
      const basket = getBasket(userId)
      const expoected = {
        userId,
        items: [
          { id: 1, price: 39.99, name: 'Dove Soap', quantity: 2 },
          { id: 2, price: 99.99, name: 'Axe Deo', quantity: 2 }
        ]
      }

      expect(basket).toEqual(expoected)
    })

    it('Then the shopping carts total price should equal 314.96', () => {
      const total = getBasketTotal(basket)
      const tax = getSalesTax(total)
      const grandTotal = getGrandTotal(total, tax)
      expect(grandTotal).toEqual(314.96)
    })

    it('Then the total sales tax amount for the shopping cart should equal 35.0', () => {
      const total = getBasketTotal(basket)
      const tax = getSalesTax(total)
      expect(tax).toEqual(35.0)
    })
  })
})
