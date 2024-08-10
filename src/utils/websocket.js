export default class ReconnectingWebSocket {
  constructor(url, opts = {}) {
    this.url = url
    this.websocket = null
    this.isConnecting = false
    this.isClosing = false
    this.reconnectInterval = 3000
    this.heartbeatInterval = 5000
    this.heartbeatTimer = null
    this.vm = opts.vm

    this.connect()
  }

  connect() {
    console.log("browser: connecting...")
    if (this.isConnecting || this.websocket) {
      return
    }
    
    this.isConnecting = true
    this.websocket = new WebSocket(this.url)
    
    this.websocket.onopen = () => {
      this.isConnecting = false
      console.log("browser: connected")
      this.startHeartbeat()
      const customEvent = new CustomEvent('websocketMessage', {
        detail: {
          type: 'open'
        }
      })
      document.dispatchEvent(customEvent)
    }

    this.websocket.onmessage = (event) => {
      // 处理收到的消息
      // this.vm.$emit('my-event', { data: 'some data' })
      const customEvent = new CustomEvent('websocketMessage', {
        detail: {
          type: 'message',
          event,
          data: event.data
        }
      })
      document.dispatchEvent(customEvent)
      console.log('Received message:', event.data)
    }

    this.websocket.onclose = () => {
      console.log("browser: closed by server")
      this.stopHeartbeat()
      if (!this.isClosing) {
        setTimeout(() => {
          this.connect()
        }, this.reconnectInterval)
      }
    }
    this.websocket.onerror = (error) => {
      console.log("browser: error occured, ", error)
      this.stopHeartbeat()
      if (!this.isClosing) {
        setTimeout(() => {
          this.connect()
        }, this.reconnectInterval)
      }
    }
  }

  send(data) {
    if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
      this.websocket.send(data)
    } else {
      console.log('browser: WebSocket is not connected.')
    }
  }

  close() {
    this.isClosing = true
    if (this.websocket) {
      this.websocket.close()
      this.websocket = null
    }
  }

  startHeartbeat() {
    this.stopHeartbeat()
    this.heartbeatTimer = setInterval(() => {
      if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
        this.websocket.send('ping')
      } else {
        this.stopHeartbeat()
        this.connect()
      }
    }, this.heartbeatInterval)
  }

  stopHeartbeat() {
    clearInterval(this.heartbeatTimer)
  }
}

//   // 使用示例
//   const websocket = new ReconnectingWebSocket('wss://example.com');

//   // 发送消息
//   websocket.send('Hello, WebSocket!');

//   // 关闭连接
//   websocket.close();
//   以上代码封装了一个ReconnectingWebSocket类，它可以进行WebSocket连接、心跳检测和短线重连。使用时，创建一个ReconnectingWebSocket实例，并传入WebSocket服务器的URL。然后可以使用send方法发送消息，使用close方法关闭连接。

//   请注意，以上代码仅为示例，实际使用时可能需要根据具体情况进行适当的修改和调整。
