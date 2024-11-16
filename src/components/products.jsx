function Products({textBox, image, imageDis, discription, price}) {
    return (
        <article>
            <span>{textBox}</span>
            <img src={image} alt={imageDis}/>
            <p>{discription}</p>
            <h4>{price}</h4>
        </article>
    )
}
export default Products