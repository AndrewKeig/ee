let baskets = []

export const clearBasket = () => (baskets = [])

export const getBasketTotal = basket => {
  const total = basket.items.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  )
  return round(total, 2)
}

export const getBasket = userId => {
  const basket = baskets.find(basket => basket.userId === userId)
  return basket === undefined ? createEmptyBasketForUser(userId) : basket
}

export const addItemBasket = (userId, product, quantity) => {
  const basket = getBasket(userId)
  const index = findProductInBasket(basket, product.id)

  index < 0
    ? addNewItemToBasket(userId, basket, quantity, product)
    : updateItemQuantity(userId, basket, quantity, index)
}

const findProductInBasket = (basket, id) => {
  return basket.items.findIndex(item => item.id === id)
}

const updateItemQuantity = (userId, basket, quantity, index) => {
  const items = basket.items.slice(0)
  items[index] = { ...items[index], quantity: items[index].quantity + quantity }
  const newBasket = { ...basket, items }
  save(userId, newBasket)
}

const addNewItemToBasket = (userId, basket, quantity, product) => {
  const items = [...basket.items, { ...product, quantity }]
  const newBaket = { userId: basket.userId, items }
  save(userId, newBaket)
}

const createEmptyBasketForUser = userId => {
  const basket = { userId, items: [] }
  baskets = baskets.concat([basket])
  return basket
}

const save = (userId, basket) => {
  const index = baskets.findIndex(b => b.userId === userId)
  const newBaskets = baskets.slice(0)
  newBaskets[index] = basket
  baskets = newBaskets
}

const round = (value, places) =>
  +(Math.round(value + 'e+' + places) + 'e-' + places)
