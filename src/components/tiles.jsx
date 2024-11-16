function Tiles({image, descriptionImg, title, children}) {
    return (
        <section>
            {image && <img src={image} alt={descriptionImg} />}
            <h2>{title}</h2>
            {children}
        </section>
    )
}
export default Tiles