import Image from 'next/image';
import MyImage from '../public/me.jpg'
const Header = () => {
  return (
    <>
      <div className="bg-black w-full h-[70px] border-b border-red-500 flex items-center font-serif justify-between p-10">
        <div className="text-white">3D Metaverse WorkSpace</div>
        <div className='mt-[5px]'>
          <Image
            src={MyImage}
            alt="Description of the image"
            width={50}
            height={50}
            style={{borderRadius: "100%"}}
          />
        </div>
      </div>
    </>
  )
}
export default Header