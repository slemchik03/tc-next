import { Layout } from '../components/Layout';
import '../styles/scss/style.scss'

import 'swiper/css';
import 'swiper/css/navigation';


//import Layout from './../components/layout'


function MyApp({ Component, pageProps }) {
  return (
       <Layout>
         <Component {...pageProps} />
       </Layout>
  );
  
}

export default MyApp