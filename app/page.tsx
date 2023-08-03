import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
      <main className={styles.main}>
          <div className={styles.wrapper}>
              <div>
                  <div className={styles.sticky}>
                      sticky
                  </div>
              </div>
              <div className={styles.side1}>
                  <h1 className={styles.theComposant}>start</h1>
                  <h1 className={styles.theComposant}>test </h1>
                  <h1 className={styles.theComposant}>test</h1>
                  <h1 className={styles.theComposant}>test</h1>
                  <div className={`${styles.theComposant} ${styles.theComposant2}`}>
                       <h1 className={styles.theComposant2}>test</h1>
                       <h1 className={styles.theComposant2}>test</h1>
                       <h1 className={styles.theComposant2}>test</h1>
                       <h1 className={styles.theComposant2}>test</h1>
                       <h1 className={styles.theComposant2}>test</h1>
                       <h1 className={styles.theComposant2}>test</h1>
                       <h1 className={styles.theComposant2}>test</h1>
                       <h1 className={styles.theComposant2}>test</h1>
                       <h1 className={styles.theComposant2}>test</h1>
                       <h1 className={styles.theComposant2}>test</h1>
                  </div>
                  <h1 className={styles.theComposant}>test</h1>
                  <h1 className={styles.theComposant}>test</h1>
                  <h1 className={styles.theComposant}>test</h1>
                  <h1 className={styles.theComposant}>test</h1>
                  <h1 className={styles.theComposant}>test</h1>
                  <h1 className={styles.theComposant}>test</h1>
                  <h1 className={styles.theComposant}>test</h1>
                  <h1 className={styles.theComposant}>end</h1>
              </div>
          </div>
      </main>
  )
}
