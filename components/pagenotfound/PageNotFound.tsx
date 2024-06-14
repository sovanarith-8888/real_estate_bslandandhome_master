'use client'
import Link from 'next/link'
import { audiowide } from "@/app/[locale]/(home)/fonts";
import styles from "./index.module.css";
import notfoundImage from "@/assets/images/pagenotfound.svg";
import Image from 'next/image';
import "@/app/globals.css";
import {SvgRepo} from "@/components/icons/svgrepo"

const PageNotFound = () => {
  return (
    <main className={`${styles.main} ${styles.defaultStyle}`}>
      <section className={`${styles.des}`}>
        <h1 className={`${audiowide.variable} fontAudiowide ${styles.fontAudiowide}`}>404 page not found</h1>
        <br />
        <p className={`${styles.title}`}>{`We're sorry, but the page you were looking for could not be found. (or "The link you clicked may be broken.")`}
        </p>
        <p className={`${styles.pp}`}>If you want back please click this secure link  <Link href="/" className={`${styles.a}`}><SvgRepo.ShareSvg/> <p>home page</p></Link>.</p>
      </section>
      <section>
        <Image 
          className={`${styles.imageNotfound}`}
          src={notfoundImage}
          alt="page not found"/>
      </section>
      
    </main>
  )
}

export default PageNotFound