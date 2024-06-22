import  { envs } from'./config/env.js'
import  { startServer } from'./server/server.js'


async function main() {
  //const result = await fetch('https://jsonplaceholder.typicode.com/todos')
  //const data = await result.json()
  //console.log(data)

  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  })
}

//Funcion agnostica autoconvocada
(async () => {
  main()
})()