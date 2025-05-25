function Card({name, id, image, onClick}) {
  return(
    <div className="flex items-center justify-center">
      <div className="card bg-slate-200 w-[400px] rounded overflow-hidden p-2 cursor-pointer  transition transform active:scale-95 duration-100" onClick={onClick}>
          <img src={image} alt={name} id={id} className="rounded w-full h-[300px] object-cover block"/>
          <p className="image-text break-words">{name}</p>   
      </div>
    </div>
  )
}
export default Card