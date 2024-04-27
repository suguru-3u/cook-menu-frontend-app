import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('mock/db.json')
const middlewares = jsonServer.defaults()

// Middleware(前処理)
server.use(middlewares)
server.use((req, res, next) => {
  // 受け取ったリクエストに前処理を行う場合はここに書く
  if (req.method === 'PUT') {
    req.method = 'GET'
  }
  next()
})

// ルーティングを使用する場合はここに書く
server.use(
  jsonServer.rewriter({
    '/api/cook-menu?_start=:start&_limit=:limit': '/users?_start=:start&_limit=:limit',
    '/api/cook-menu/:id': '/users/:id',
    '/api/cook-menu': '/users'
  })
)
server.use(router)

// モックサーバ起動
server.listen(3000, () => {
  console.log('JSON Server is running')
})
