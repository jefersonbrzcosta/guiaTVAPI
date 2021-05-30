class NotImplemented extends Error {
  constructor() {
    super('NotImplemented')
  }
}

export default class ICrud {
  create(item) {
    throw new NotImplemented()
  }

  read(query) {
    throw new NotImplemented()
  }

  update(id, item) {
    throw new NotImplemented()
  }

  delete(id) {
    throw new NotImplemented()
  }
}
