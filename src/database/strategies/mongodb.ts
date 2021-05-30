import ICrud from './interfaces/interfaceICrud'

export default class MongoDB extends ICrud {
  constructor() {
    super()
  }
  create(item) {
    console.log('item saved in the database')
  }
}
