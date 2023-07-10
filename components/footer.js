import { GitHub, Logo } from './icons'

const Footer = () => (
  <footer className="p-4 flex items-center justify-between w-full bg-black z-10 relative font-serif">
    <a href="https://pmnd.rs/" target="_blank" rel="noreferrer">
      {/* <Logo /> */}
    </a>
    <p className="text-xs text-white text-[18px]">
      Made by{' '}
      <a
        className="underline hover:text-blue-600"
        href="https://twitter.com/NoahSim1921076"
        target="_blank"
        rel="noreferrer">
        @Noah
      </a>{' '}
      &{' '}
      <a
        className="underline hover:text-blue-600"
        href="https://github.com/pmndrs/gltf-react-three/graphs/contributors">
        contributors
      </a>{' '}
      inspired by the{' '}
      <a className="underline hover:text-blue-600" href="https://github.com/pmndrs/gltfjsx">
        gltfjsx cli
      </a>
    </p>
    <a href="https://github.com/pmndrs/gltf-react-three/" target="_blank" rel="noreferrer">
      <GitHub />
    </a>
  </footer>
)

export default Footer
