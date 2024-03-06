import '../product/ProductCardStyle.css'

function ProductCard(prop){
    return (
        <div className="pc-sec">
            <div>
                <p>Product Name</p>
                <input type='text' value={prop.name}/>
            </div>
            <div>
                <p>Product Price</p>
                <input type='text' value={prop.price}/>
            </div>
            <div>
                <p>Product Description</p>
                <input type='text' value={prop.desc}/>
            </div>
        </div>
    );
}

export default ProductCard;