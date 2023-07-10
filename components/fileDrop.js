import { useDropzone } from 'react-dropzone'
import DragDropImage from '../public/noun-drag-5299249.png'
import Image from 'next/image';

const FileDrop = ({ onDrop, useSuzanne }) => {
  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: '.gltf, .glb',
  })

  return (
    <div className="h-full w-screen flex flex-col items-center justify-center text-center">
      <input {...getInputProps()} />

      {isDragActive ? (
        <p className="text-4xl font-bold text-blue-600">Drop the files here...</p>
      ) : (
        <div  {...getRootProps()}>
          <Image
            src={DragDropImage}
            alt="Description of the image"
            width={100}
            height={100}
          />
        </div>
      )}
      {fileRejections.length ? (
        <p className="block text-center text-xl pt-4 text-red-300">Only .gltf or .glb files are accepted</p>
      ) : null}
    </div>
  )
}

export default FileDrop
