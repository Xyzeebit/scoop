import Head from "next/head";
import Script from "next/script"

import styles from '@/styles/Home.module.css';

export default function Index() {

	return (
    <>
      <Head>
        <title>Phaser App</title>
        <meta
          name="description"
          content="Scoop voice and video caller"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale = 1.0, minimum-scale = 1.0, user-scalable = 0, minimal-ui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

			{/*<Script*/}
			{/*	src="/scripts/phaser.min.js"*/}
			{/*	onError={() => console.log("on Error")}*/}
			{/*	onLoad={() => console.log("on Load")}*/}
			{/*	onReady={setup}*/}
			{/*/>*/}
	</>
	);
}
