type Props = {
  name: string;
  image: string;
  description: string;
}

const Class = ({name, image, description}: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[338px] w-[450px] flex-col item-center justify-center
  whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;
  
  return <li className="relative mx-5 inline-block h-[380px] w-[450px]">
    <div className={overlayStyles}>
      <p className="text-2xl">{name}</p>
      <p className="mt-5">{description}</p>
    </div>
    <img alt={`${image}`} src={image} />
  </li>
  
}

export default Class