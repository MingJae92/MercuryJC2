import express from "express"
import cors from "cors"
import nodemailer from "nodemailer"
import Pusher from 'pusher'
import bodyParser from "body-parser"
import mongoose, { model } from "mongoose"
import dotenv from "dotenv"
dotenv.config({ path: '../../config/.env' })
import cloudinary from 'cloudinary'

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const shopItemsToInsert = [
    {
        description:"Animal Crossing",
        shop_item_url_path:"Animal-Crossing",
        image_preview: ["http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157753/samples/ShopItemBag/ShopItemBagPreview/ac_bu3kqf.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157753/samples/ShopItemBag/ShopItemBagPreview/ac_bu3kqf.jpg"]
        
    },
    {
        description:"Butter Cat Stickers",
        shop_item_url_path:"Butter-Cat-Stickers",
        image_preview: ["http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157777/samples/ShopItemBag/ShopItemBagPreview/bcs_rlm5cg.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157777/samples/ShopItemBag/ShopItemBagPreview/bcs_rlm5cg.jpg"]
        
    },
    {
        description:"BTS Permission To Dance Metallic Sticker",
        shop_item_url_path:"BTS-Permission-To-Dance-Metallic-Sticker",
        image_preview: ["http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157777/samples/ShopItemBag/ShopItemBagPreview/bts_iaf7dh.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157777/samples/ShopItemBag/ShopItemBagPreview/bts_iaf7dh.jpg"]
        

    },
    {
        description:"Candy Paw Subscriber Badges",
        shop_item_url_path:"Candy-Paw-Subscriber-Badges",
        image_preview: ["http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157824/samples/ShopItemBag/ShopItemBagPreview/cpsb_v1ff0v.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157824/samples/ShopItemBag/ShopItemBagPreview/cpsb_v1ff0v.jpg"]
        
    },
    {
        description:"Cat Succulent Planter Subscriber-Badges-A",
        shop_item_url_path:"Cat-Succulent-Planter-Subscriber-Badges-A",
        image_preview: ["http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157823/samples/ShopItemBag/ShopItemBagPreview/cspsba1_eajxwf.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157823/samples/ShopItemBag/ShopItemBagPreview/cspsba1_eajxwf.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884427/samples/ShopItemBag/ShopItemBagCollection/cspsba2_flramd.jpg"]
        
    },
    {
        description:"Cat Succulent Planter Subscriber-Badges-B",
        shop_item_url_path:"Cat-Succulent-Planter-Subscriber-Badges-B",
        image_preview: ["http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157878/samples/ShopItemBag/ShopItemBagPreview/cspsbb1_ktm0el.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157878/samples/ShopItemBag/ShopItemBagPreview/cspsbb1_ktm0el.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884426/samples/ShopItemBag/ShopItemBagCollection/cspsbb2_sovwzm.jpg"]
        
    },
    {
        description: "Drunk-Dazed Holographic Vinyl Sticker",
        shop_item_url_path:"Drunk-Dazed-Holographic-Vinyl-Sticker",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157903/samples/ShopItemBag/ShopItemBagPreview/ddhvs1_co7as1.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157903/samples/ShopItemBag/ShopItemBagPreview/ddhvs1_co7as1.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884401/samples/ShopItemBag/ShopItemBagCollection/mahvs2_pthn6q.jpg"]
        
    },
    {
        description: "Genshin Impact Music Clear Acrylic Charm - CHILDE TARTAGLIA",
        shop_item_url_path:"Genshin-Impact-Music-Clear-Acrylic-Charm-CHILDE TARTAGLIA",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157997/samples/ShopItemBag/ShopItemBagPreview/gic1_ss1nvl.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1678157997/samples/ShopItemBag/ShopItemBagPreview/gic1_ss1nvl.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884425/samples/ShopItemBag/ShopItemBagCollection/gic1_ckojdb.jpg"]
        
    },
    {
        description: "Genshin Impact Character Vinyl Stickers",
        shop_item_url_path:"Genshin-Impact-Character-Vinyl-Stickers",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884424/samples/ShopItemBag/ShopItemBagCollection/gicvs1_tir60e.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884424/samples/ShopItemBag/ShopItemBagCollection/gicvs1_tir60e.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884426/samples/ShopItemBag/ShopItemBagCollection/gicvs2_s9wztf.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884423/samples/ShopItemBag/ShopItemBagCollection/gicvs3_rrjpth.jpg"]
        
    },
    {
        description: "Genshin Impact Music Clear Acrylic Charm - EULA",
        shop_item_url_path:"Genshin-Impact-Music-Clear-Acrylic-Charm-EULA",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884422/samples/ShopItemBag/ShopItemBagCollection/gie1_hvp4j2.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884422/samples/ShopItemBag/ShopItemBagCollection/gie1_hvp4j2.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884423/samples/ShopItemBag/ShopItemBagCollection/gie2_sgeccf.jpg"]
        
    },
    {
        description: "Genshin Impact Elemental Subscriber Badges",
        shop_item_url_path:"Genshin-Impact-Elemental-Subscriber-Badges",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884421/samples/ShopItemBag/ShopItemBagCollection/giesb_qdcqlr.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884421/samples/ShopItemBag/ShopItemBagCollection/giesb_qdcqlr.jpg"]
        
    },
    {
        description: "Genshin-Impact-Music-Clear-Acrylic-Charm-GANYU",
        shop_item_url_path:"Genshin-Impact-Music-Clear-Acrylic-Charm-GANYU",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884422/samples/ShopItemBag/ShopItemBagCollection/gig1_gm6u0t.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884422/samples/ShopItemBag/ShopItemBagCollection/gig1_gm6u0t.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884422/samples/ShopItemBag/ShopItemBagCollection/gig2_ozf4ls.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884419/samples/ShopItemBag/ShopItemBagCollection/gig3_gymq0t.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884420/samples/ShopItemBag/ShopItemBagCollection/gig4_lpk9ae.jpg"
        ]
    },
    {
        description: "Genshin-Impact-Music-Clear-Acrylic-Charm-HUTAO",
        shop_item_url_path:"Genshin-Impact-Music-Clear-Acrylic-Charm-HUTAO",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884420/samples/ShopItemBag/ShopItemBagCollection/gih1_a8nhts.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884420/samples/ShopItemBag/ShopItemBagCollection/gih1_a8nhts.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884421/samples/ShopItemBag/ShopItemBagCollection/gih2_tl2rgq.jpg"]
        
    },
    {
        description: "Genshin-Impact-Music-Clear-Acrylic-Charm-JEAN",
        shop_item_url_path:"Genshin-Impact-Music-Clear-Acrylic-Charm-JEAN",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884419/samples/ShopItemBag/ShopItemBagCollection/gij1_myuzc4.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884419/samples/ShopItemBag/ShopItemBagCollection/gij1_myuzc4.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884419/samples/ShopItemBag/ShopItemBagCollection/gij2_ckftyf.jpg"]
        
    },
    {
        description: "Genshin-Impact-Music-Clear-Acrylic-Charm-KLEE",
        shop_item_url_path:"Genshin-Impact-Music-Clear-Acrylic-Charm-KLEE",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884417/samples/ShopItemBag/ShopItemBagCollection/gik1_ccc2ax.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884417/samples/ShopItemBag/ShopItemBagCollection/gik1_ccc2ax.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884417/samples/ShopItemBag/ShopItemBagCollection/gik2_qqp1lx.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884417/samples/ShopItemBag/ShopItemBagCollection/gik3_buchzj.jpg"]
        
    },
    {
        description: "Genshin-Impact-Music-Clear-Acrylic-Charm-KAMISATO-AYAKA",
        shop_item_url_path:"Genshin-Impact-Music-Clear-Acrylic-Charm-KAMISATO-AYAKA",
        image_preview:["https://res.cloudinary.com/dzspnmwcq/image/upload/v1672884416/samples/ShopItemBag/ShopItemBagCollection/gikam1_xpnjxz.jpg"],
        images_main:[
            "res.cloudinary.com/dzspnmwcq/image/upload/v1672884416/samples/ShopItemBag/ShopItemBagCollection/gikam1_xpnjxz.jpg",
            "res.cloudinary.com/dzspnmwcq/image/upload/v1672884416/samples/ShopItemBag/ShopItemBagCollection/gikam2_kxzjgm.jpg"]
        
    },
    {
        description: "Genshin Impact Music Clear Acrylic Charm - KAZUHA",
        shop_item_url_path:"Genshin-Impact-Music-Clear-Acrylic-Charm-KAZUHA",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884416/samples/ShopItemBag/ShopItemBagCollection/gikaz1_lxf9wg.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884416/samples/ShopItemBag/ShopItemBagCollection/gikaz1_lxf9wg.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884415/samples/ShopItemBag/ShopItemBagCollection/gikaz2_svh58p.jpg"]
        
    },
    {
        description: "Genshin-Impact-Music-Clear-Acrylic-Charm-MONA",
        shop_item_url_path:"Genshin-Impact-Music-Clear-Acrylic-Charm-MONA",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884414/samples/ShopItemBag/ShopItemBagCollection/gim1_dbmtpg.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884414/samples/ShopItemBag/ShopItemBagCollection/gim1_dbmtpg.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884412/samples/ShopItemBag/ShopItemBagCollection/gim2_slhyhj.jpg"]
        
    },
    {
        description: "Genshin-Impact-Music-Clear-Acrylic-Charm-QIQI",
        shop_item_url_path:"Genshin-Impact-Music-Clear-Acrylic-Charm-QIQI",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884413/samples/ShopItemBag/ShopItemBagCollection/giq1_javqlo.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884413/samples/ShopItemBag/ShopItemBagCollection/giq1_javqlo.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884413/samples/ShopItemBag/ShopItemBagCollection/giq2_pfympx.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884414/samples/ShopItemBag/ShopItemBagCollection/giq3_csioh9.jpg"]
        
    },
    {
        description: "A5-Genshin-Impact-Weekly-Planner",
        shop_item_url_path:"A5-Genshin-Impact-Weekly-Planner",
        image_preview:["https://res.cloudinary.com/dzspnmwcq/image/upload/v1672884413/samples/ShopItemBag/ShopItemBagCollection/giwp_tpmmon.jpg"],
        images_main:[
            "https://res.cloudinary.com/dzspnmwcq/image/upload/v1672884413/samples/ShopItemBag/ShopItemBagCollection/giwp_tpmmon.jpg"]
        
    },
    {
        description: "Genshin-Impact-Music-Clear-Acrylic-Charm-YOIMIYA",
        shop_item_url_path:"Genshin-Impact-Music-Clear-Acrylic-Charm-YOIMIYA",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884410/samples/ShopItemBag/ShopItemBagCollection/giy1_e0nf4k.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884410/samples/ShopItemBag/ShopItemBagCollection/giy1_e0nf4k.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884410/samples/ShopItemBag/ShopItemBagCollection/giy2_gorhr2.jpg"]
        
    },
    {
        description: "Genshin-Impact-Music-Clear-Acrylic-Charm-ZHONGLI",
        shop_item_url_path:"Genshin-Impact-Music-Clear-Acrylic-Charm-ZHONGLI",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884409/samples/ShopItemBag/ShopItemBagCollection/giz1_rlnkhm.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884409/samples/ShopItemBag/ShopItemBagCollection/giz1_rlnkhm.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884410/samples/ShopItemBag/ShopItemBagCollection/giz2_ljrqov.jpg"]
        
    },
    {
        description: "Jelly-Neko-Subscriber-Badges",
        shop_item_url_path:"Jelly-Neko-Subscriber-Badges",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884409/samples/ShopItemBag/ShopItemBagCollection/giz1_rlnkhm.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884408/samples/ShopItemBag/ShopItemBagCollection/jnsb_yftgpu.jpg"]
        
    },
    {
        description: "K/DA-Inspired-Stream",
        shop_item_url_path:"K/DA-Inspired-Stream",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884405/samples/ShopItemBag/ShopItemBagCollection/kda1_h4bfeo.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884405/samples/ShopItemBag/ShopItemBagCollection/kda1_h4bfeo.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884409/samples/ShopItemBag/ShopItemBagCollection/kda2_ht0lpc.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884406/samples/ShopItemBag/ShopItemBagCollection/kda3_jtpz76.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884404/samples/ShopItemBag/ShopItemBagCollection/kda4_kc8wkb.jpg"]
        
    },
    {
        description: "LIMITED-ADD-ON-Cat-Succulent-Planter-Subscriber-Badge",
        shop_item_url_path:"LIMITED-ADD-ON-Cat-Succulent-Planter-Subscriber-Badge",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884404/samples/ShopItemBag/ShopItemBagCollection/lacspsb_eugx3d.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884404/samples/ShopItemBag/ShopItemBagCollection/lacspsb_eugx3d.jpg"]
        
    },
    {
        description: "Moonboat-Adventure-Holographic-Vinyl-Sticker",
        shop_item_url_path:"Moonboat-Adventure-Holographic-Vinyl-Sticker",
        image_preview:["https://res.cloudinary.com/dzspnmwcq/image/upload/v1672884402/samples/ShopItemBag/ShopItemBagCollection/mahvs1_aw62w2.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884402/samples/ShopItemBag/ShopItemBagCollection/mahvs1_aw62w2.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884401/samples/ShopItemBag/ShopItemBagCollection/mahvs2_pthn6q.jpg"]
        
    },
    {
        description: "Milk-Carton-Subscriber-Badges",
        shop_item_url_path:"Milk-Carton-Subscriber-Badges",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884401/samples/ShopItemBag/ShopItemBagCollection/mcsb_ntbbuo.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884401/samples/ShopItemBag/ShopItemBagCollection/mcsb_ntbbuo.jpg"]
        
    },
    {
        description: "Magic-Girl-Subscriber-Badges",
        shop_item_url_path:"Magic-Girl-Subscriber-Badges",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884397/samples/ShopItemBag/ShopItemBagCollection/mgsb_qw8c1b.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884397/samples/ShopItemBag/ShopItemBagCollection/mgsb_qw8c1b.jpg"]
        
    },
    {
        description: "Sakura-Blossom-Subscriber-Badges",
        shop_item_url_path:"Sakura-Blossom-Subscriber-Badges",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884397/samples/ShopItemBag/ShopItemBagCollection/sbsb1_yrqkzo.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884397/samples/ShopItemBag/ShopItemBagCollection/sbsb1_yrqkzo.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884397/samples/ShopItemBag/ShopItemBagCollection/sbsb2_hsl089.jpg"]
        
    },
    {
        description: "Sakura-Blossom-Stream-Package-A",
        shop_item_url_path:"Sakura-Blossom-Stream-Package-A",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884408/samples/ShopItemBag/ShopItemBagCollection/sbspa_shqqpt.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884397/samples/ShopItemBag/ShopItemBagCollection/sbsb1_yrqkzo.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884397/samples/ShopItemBag/ShopItemBagCollection/sbsb2_hsl089.jpg"]
        
    },
    {
        description: "Sakura-Blossom-Stream-Package-B",
        shop_item_url_path:"Sakura-Blossom-Stream-Package-B",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884407/samples/ShopItemBag/ShopItemBagCollection/sbspb1_iqrf1x.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884407/samples/ShopItemBag/ShopItemBagCollection/sbspb1_iqrf1x.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884408/samples/ShopItemBag/ShopItemBagCollection/sbspb2_jzbyoc.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884404/samples/ShopItemBag/ShopItemBagCollection/sbspb3_aylqkv.jpg"]
        
    },
    {
        description: "Strawberry-Shibe-Subscriber-Badges",
        shop_item_url_path:"Strawberry-Shibe-Subscriber-Badges",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884404/samples/ShopItemBag/ShopItemBagCollection/sssb1_yvt1t6.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884404/samples/ShopItemBag/ShopItemBagCollection/sssb1_yvt1t6.jpg","http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884404/samples/ShopItemBag/ShopItemBagCollection/sssb1_yvt1t6.jpg"],
            
        
    },
    {
        description: "Usagi-Pastel-Moon-Subscriber-Badges",
        shop_item_url_path:"Usagi-Pastel-Moon-Subscriber-Badges",
        image_preview:["https://res.cloudinary.com/dzspnmwcq/image/upload/v1672884403/samples/ShopItemBag/ShopItemBagCollection/upmsb1_et4exa.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884403/samples/ShopItemBag/ShopItemBagCollection/upmsb1_et4exa.jpg", "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884402/samples/ShopItemBag/ShopItemBagCollection/upmsb2_elg0ij.jpg"],

        
    },
    {
        description: "Vitasoy Neko Matte Vinyl Stickers",
        shop_item_url_path:"Vitasoy-Neko-Matte-Vinyl-Stickers",
        image_preview:["http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884401/samples/ShopItemBag/ShopItemBagCollection/vnmvs1_c87daa.jpg"],
        images_main:[
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884401/samples/ShopItemBag/ShopItemBagCollection/vnmvs1_c87daa.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884398/samples/ShopItemBag/ShopItemBagCollection/vnmvs2_jui8gh.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884402/samples/ShopItemBag/ShopItemBagCollection/vnmvs3_aqdesh.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884400/samples/ShopItemBag/ShopItemBagCollection/vnmvs4_yy3pcv.jpg",
            "http://res.cloudinary.com/dzspnmwcq/image/upload/v1672884406/samples/ShopItemBag/ShopItemBagCollection/vnmvs5_iwefcx.jpg"]
        
    }
]

const ShopItemSchema = new mongoose.Schema(
    {
        
        description:{
            type:String,
            required: true
        },
        image_preview:[{
            type:String,
            required: true
        }],
        images_main:[{
            type:String,
            required: true
        }],
        shop_item_url_path:{
            type:String,
            required: true
        }
        
        
    }
)

const ShopItems = mongoose.model("ShopItems", ShopItemSchema )

ShopItems.bulkWrite(shopItemsToInsert.map(doc => ({
    updateOne: {
        filter: {
            shop_item_url_path: doc.shop_item_url_path
        },
        update: doc,
        upsert: true
    }
}))).then((updateResponse) => {
    // console.log("Art work images updates: " + updateResponse.esources.length + " Count updated")
   
    console.log(updateResponse)
    // res.send("Art work images updated! Updated: \n" + JSON.stringify(updateResponse))
})



const ArtWorkImagesSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true,
        }
    }

)


const ArtWorkImages = mongoose.model("ArtWorkImages", ArtWorkImagesSchema)

const CommissionImagesSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
    }

})

const CommissionImages = mongoose.model("Commissionimages", CommissionImagesSchema)

const ShopItemBagCollectionsSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true,
        }
    }

)

const ShopItemBagCollections = mongoose.model("ShopItemBagCollections", ShopItemBagCollectionsSchema)

const ShopItemBagPreviewSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true,
        }
    }

)

const ShopItemBagPreviews = mongoose.model("ShopItemBagPreviews", ShopItemBagPreviewSchema)

const queryInsertdataIntoDB = (queryPrefix, model) => {
    cloudinary.v2.api
        .resources(
            {
                type: 'upload', max_results: 100,
                prefix: queryPrefix
            })
        .then(result => {
            // console.log(result)
            if (false) {
                // next(err)
            } else {
                console.log("processing shop item bag collection for" + queryPrefix)
                const newShopItemBagCollections = []
                const resultArray = result.resources
                for (let i = 0; i < resultArray.length; i++) {

                    const newShopItemBagCollection = {
                        id: resultArray[i].asset_id,
                        description: resultArray[i].secure_url,
                        imageUrl: resultArray[i].url,


                    }
                    newShopItemBagCollections.push(newShopItemBagCollection)
                }
                console.log("Writing image updates for " + queryPrefix)
                // console.log(newShopItemBagCollections)
                model.bulkWrite(newShopItemBagCollections.map(doc => ({
                    updateOne: {
                        filter: {
                            id: doc.id
                        },
                        update: doc,
                        upsert: true
                    }
                }))).then((updateResponse) => {
                    // console.log("Art work images updates: " + updateResponse.esources.length + " Count updated")
                    console.log(queryPrefix + " : ")
                    console.log(updateResponse)
                    // res.send("Art work images updated! Updated: \n" + JSON.stringify(updateResponse))
                })
            }

        });
}

const app = express();
const databaseURL = process.env.MONGO_URL

const connectDB = async () => {
    try {
        mongoose.connect(databaseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    mongoose.connection.on('error', err => {
        console.log(err);
    });

    queryInsertdataIntoDB("samples/ShopItemBag/ShopItemBagCollection", ShopItemBagCollections)
    queryInsertdataIntoDB("samples/ShopItembag/ShopItemBagPreview", ShopItemBagPreviews)
    queryInsertdataIntoDB("samples/ArtCommissionImages", CommissionImages)
    queryInsertdataIntoDB("samples/ArtWorkImages", ArtWorkImages)
    // checkCloudinaryForShopItemBagPreview();
    // checkCloudinaryForComissionsImages();
    // checkCloudinaryForImage();

}

const route = express.Router();
const port = process.env.APISERVERPORT

connectDB()
const schema = new mongoose.Schema({ firstname: 'string', comment: 'string' });
const Comments = mongoose.model('Comments', schema);

// Comments.create({ firstname: 'Legend', lastname:'Lee', comment:'Hello' }, function (err, small) {
//     if (err) 
//     console.log(err)
//     // saved!
//   });

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/comments", (req, res) => {
    Comments.find({}, (err, data) => {
        if (err) return res.status(500).send(err);
        res.json(data)
    })
})

app.post("/comments", (req, res) => {
    console.log(JSON.stringify(req.body))
    Comments.create({ firstname: req.body.firstname, comment: req.body.comment }, function (err, newComment) {
        console.log(JSON.stringify(err))
        console.log(JSON.stringify(newComment))
        if (err) {
            return res.status(500).send(err);
        }
        pusher.trigger("comments", "newComment", {
            comment: newComment,
        }).then(res.status(200).send("OK"))

    })
})

app.get("/My-Work-Collection", (req, res) => {
    ArtWorkImages.find({}, (err, data) => {
        if (err) return res.status(500).send(err);
        res.json(data)
        console.log(data)
    })
})

app.get("/commissions-images", (req, res) => {
    CommissionImages.find({}, (err, data) => {
        if (err) return res.status(500).send(err);
        res.json(data)
        console.log(data)
    })
})

app.get("/shop-item-bag-preview-images", (req, res) => {
    
    ShopItemBagPreviews.find({}, (err, data) => {
        if (err) return res.status(500).send(err);
        res.json(data)
        // console.log(data)
    }
    )
})

app.get("/Shop/shop-items", (req, res)=>{
    ShopItems.find({}, (err, data) => {
        if (err) return res.status(500).send(err);
        res.json(data)
        // console.log(data)
    } )
})

app.get("/Shop/:shop_item_url_path", (req, res)=>{
    const{shop_item_url_path } = req.params
   
    ShopItems.find({
        shop_item_url_path
        :shop_item_url_path,
        
    }, (err, data)=>{
        if (err) return res.status(500).send(err);
        res.json(data)
    })
})

app.use("/v1", route);

app.listen(port, () => {
    console.log(`Listening on port ${port} here we go!`);
})
console.log(process.env)
const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    useTLS: true,
});

const emailContactSchema = new mongoose.Schema(
    {

        name: {
            type: String,

        },
        email: {
            type: String,

        },
        message: {
            type: String,

        }
    }
)

const emailStorage = mongoose.model("Emailmessages", emailContactSchema)

pusher.trigger("my-channel", "my-event", {
    message: "hello world"
});
//While the response is being sent through to the API, nodemailer will create an SMTP connection to the nodemailer server.
const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS

    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Ready to send!")
    }
})
//Once user has sent off thier details the API then receives a request.
//All the users details is then stored in the mail variable ready to be displayed as HTML in the artists inbox. 
app.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    emailStorage.create({ name: req.body.name, email: req.body.email, message: req.body.message }, (err) => {
        console.log(JSON.stringify(err))
        if (err) {
            return res.status(500).send(err);
        }
    })
    const mail = {
        from: name,
        to: "drloveiscrazy@gmail.com",
        html: `<p>${email}</p>
              <p>${name}</p>
              <p>${message}</p>`,
    };
    console.log(mail)
    //If mail is successfully sent a status will be shown in the console with an "ERROR" else it would display a message saying "Message sent".
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message sent" });
        }
    });
});

