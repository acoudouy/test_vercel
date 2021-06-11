import "../styles/tailwind.prod.css";
import "../styles/font.css";

export default function MyApp({ Component, pageProps }) {
  return (<div>
    <Component {...pageProps} />
  </div>);
}
