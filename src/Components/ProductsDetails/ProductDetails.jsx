
function ProductDetails(props) {
  const {product} = props;
  return (
   <div className="flex gap-2 mt-10 ">
    <div className="left-section flex gap-5 ml-40 ">
      <div className="left-img flex flex-col gap-2">
        <img className="w-16" src={product.image} alt="" />
        <img className="w-16" src={product.image} alt="" />
        <img className="w-16" src={product.image} alt="" />
        <img className="w-16" src={product.image} alt="" />
      </div>
      <div className="right-img w-[272px]">
        <img className=" w-full h-full" src={product.image} alt="" />
      </div>
    </div>
    <div className="right-section  ">
      <h1 className="text-2xl font-semibold">{product.name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consectetur cupiditate aut, nobis dicta ad accusamus accusantium saepe. Deleniti, necessitatibus!</p>

    </div>
   </div>
  )
}

export default ProductDetails
