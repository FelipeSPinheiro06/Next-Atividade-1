import Image from 'next/image'

export default function Home() {
  
  const lista = [{
    nome: 'Felipe',
    idade: 19,
    rm:1
  },{
    nome:'Gabriel',
    idade: 2010,
    rm:2
  }, {
    nome: 'Chaves',
    idade: 24,
    rm:3
  },{}]
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next.js</h1>
      <ul></ul>
    </main>
  )
}
