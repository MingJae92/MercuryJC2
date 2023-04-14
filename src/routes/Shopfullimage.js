import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"



const Shopfullimage =()=>{
    const[ shopFullImage, setShopFullImage] = useState([])

    let {shop_item_url_path} = useParams()
    const url = `http:localhost:7000/Shop/:${shop_item_url_path}`
    useEffect(()=>{
        axios.get(url)
    }).then(res=>{
        const shopFullImageData = res.data
        // setShopFullImage(shopFullImageData)
        console.log(shopFullImageData)
    }, [])
    return(
        <div>
            {shopFullImage.map((item)=>(<div>{item.image_preview}{item.images_main}</div>))}
        </div>
    )
}

export default Shopfullimage