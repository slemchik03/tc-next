import { Layout } from '../components/Sections/Layout';
import NextNProgress from "nextjs-progressbar";
import '../styles/scss/style.scss'

import 'swiper/css';
import 'swiper/css/navigation';


function MyApp({ Component, pageProps }) {
  return (
       <Layout>
         <NextNProgress
          color="red"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
         />
         <Component {...pageProps} />
       </Layout>
  );
  
}


export default MyApp