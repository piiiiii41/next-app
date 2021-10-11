import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/admin">
        <a>admin</a>
      </Link>
      <br />
      <Link href="/reviewRegister">
        <a>レビュー登録</a>
      </Link>
      <br />
    </p>
  </Layout>
);

export default IndexPage;
