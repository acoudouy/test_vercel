import { Element } from 'react-scroll'
import { MainBanner } from '../components/mainBanner'


export const gradient = {
  backgroundImage: 'linear-gradient(to right, #0107f0, #ad00b7, #d6007e, #e2004e, #da1229)',
}

export default function Landing() {
  return (
    <div tw="bg-axoloBlack">
      <Element name="mainBanner">
        <MainBanner />
      </Element>

    </div>
  )
}