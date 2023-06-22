import Head from "next/head";

import Home from "@/components/Home";

export default function Index() {

	return (
    <>
      <Head>
        <title>Scoop</title>
        <meta
          name="description"
          content="Scoop voice and video caller"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale = 1.0, minimum-scale = 1.0, user-scalable = 0, minimal-ui" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
            <Home />
        </div>
	</>
	);
}
