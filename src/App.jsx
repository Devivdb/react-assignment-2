import './App.css'
import Button from "./components/buttons.jsx"
import Products from "./components/products.jsx";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brandPic from "./assets/brand.png"
import storyPic from "./assets/our_story.png"
import Tiles from "./components/tiles.jsx";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button text="to the collection" disabled={false}/>
                <Button text="shop all bags" disabled={false}/>
                <Button text="pre-orders" disabled={true}/>
            </nav>
            <main>
                <Products
                    textBox="Best seller"
                    image={bag1}
                    imageDis="Pink bag"
                    discription="The handy bag"
                    price="€400,-"
                />
                <Products
                    textBox="Best seller"
                    image={bag2}
                    imageDis="Brown bag"
                    discription="The stylish bag"
                    price="€250,-"
                />
                <Products
                    textBox="New collection"
                    image={bag3}
                    imageDis="Grey bag"
                    discription="The simple bag"
                    price="€300,-"
                />
                <Products
                    textBox="New collection"
                    image={bag4}
                    imageDis="Yellow bag"
                    discription="The trendy bag"
                    price="€150,-"
                />
            </main>
            <footer>
                <Tiles title="The brand">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem
                        illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque,
                        laboriosam nisi rerum sunt. At repellendus tenetur veniam!
                    </p>
                </Tiles>

                <Tiles image={brandPic} descriptionImg="Logo"/>
                <Tiles image={storyPic} descriptionImg="Profile pic"/>
                <Tiles title="Our story">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem
                        illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque,
                        laboriosam nisi rerum sunt. At repellendus tenetur veniam!
                    </p>
                </Tiles>

            </footer>
        </>
    )
}

export default App
