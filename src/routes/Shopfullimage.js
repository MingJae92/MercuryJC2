import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import Comments from "./Comments"

const Shopfullimage = () => {
    const [shopFullImage, setShopFullImage] = useState([])
    
    let { shop_item_url_path } = useParams()
    const url = `${process.env.REACT_APP_MERCURYJC_URL}/Shop/${shop_item_url_path}`

    useEffect(() => {
        axios.get(url).then((res) => {
            const shopFullImageData = res.data;
            console.log(shopFullImageData)
            setShopFullImage(shopFullImageData)
        }).catch(error => console.log(error))
    }
        , [])
    return (
        <div>
            {shopFullImage.map((item) => (
                <div key={item.id}>
                    <h1>{item.description}</h1>
                    {item.images_main.map((image_url) => (
                        <img src={image_url} />
                       
                    ))}
                   
            <Comments shopItemId={item._id}/>
                </div>))}
        </div>
    )
}

export default Shopfullimage