import Head from 'next/head';
import { Content } from '../components/content';
import { Description } from '../components/description';

export default function Home() {
  return (
    <>
      <Head>
        <title>Health+</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Content>
          <Description/>
        </Content>
      </main>
    </>
  );
};
