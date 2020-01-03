import ioContext from '../../utils/http'

ioContext.create('my', {
    test: {
      url: 'm.app.haosou.com/index/getData',
      method: "GET",
    }
  })
  export default ioContext.api.my