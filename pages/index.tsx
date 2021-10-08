import Link from 'next/link';
import Layout from '../components/layout';
import userHome from './userHome';
import admin from './admin';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/admin">
        <a>admin</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
