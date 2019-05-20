import {
  getBasket,
  addItemBasket,
  getBasketTotal,
  clearBasket
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
})
