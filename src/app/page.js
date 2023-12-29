'use client'

import styles from './page.module.css'
import { useState, useEffect } from 'react'

export default function Home() {

  // 声明一个 count 的 state 变量
  const [count, setCount] = useState(0)

  // 类似 componentDidMount | componentDidUpdate
  useEffect(() => {
    console.log('useEffect')
    // update dom
    document.title = `You clicked ${count} times`
  })

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>click me</button>
      </div>
    </main>
  )
}
