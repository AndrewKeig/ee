const products = [
  { id: 1, name: 'Dove Soap', price: 39.99 },
  { id: 2, name: 'Axe Deo', price: 99.99 }
]

export const getProduct = id => {
  return products.find(product => product.id === id)
}
