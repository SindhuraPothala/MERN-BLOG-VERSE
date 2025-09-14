function ProductCard() {

    return (
        <div className="border-2 border-gray-600 w-[350px] flex flex-col items-center gap-4 py-4 rounded-3xl bg-blue-200">
            <img src="vite.svg" alt=" " className="w-[150px] h-[150px] border-1 border-blue-600 rounded-full" />
            <div className=" border-2 border-gray-600 rounded-4xl p-5 gap-2 w-[250px] flex flex-col items-center gap=4 ">
                <h2 className="font-bold text-4xl text-fuchsia-600 font-sans ">Product 1</h2>
                <p className="text-xl text-blue-600 text-center font-serif">This is product for testing purpose </p>
                <p className="font-bold text-emerald-800 text-xl">Rs.30</p>

            </div>
            <button className="bg-blue-600 text-white rounded-3xl cursor-pointer w-[80%] py-2 hover:bg-blue-800">Add to Cart</button>
        </div>
    )
}

export default ProductCard;