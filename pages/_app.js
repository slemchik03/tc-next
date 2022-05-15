import { Layout } from '../components/Sections/Layout';
import AdminLayout  from '../components/Admin/Layout';
import { useRouter } from 'next/router';

import '../styles/scss/style.scss'

import 'swiper/css';
import 'swiper/css/navigation';


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  if (router.pathname.startsWith("/admin")) {
    return (
      <AdminLayout>
        <Component {...pageProps} />
      </AdminLayout>
    )
  }
  return (
       <Layout>
         <Component {...pageProps} />
       </Layout>
  );
  
}


export default MyApp