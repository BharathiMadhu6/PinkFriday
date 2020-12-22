const dealsList = {
    1: {
        id: 1,
        itemName : 'Nintendo Switch',
        websiteLink : 'https://www.target.com/p/nintendo-switch-animal-crossing-new-horizons-edition/-/A-79494599?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&DFA=71700000012767085&CPNG=PLA_Electronics_Priority%2BShopping_Local&adgroup=Electronics_Priority+TCINs&LID=700000001170770pgs&LNM=PRODUCT_GROUP&network=g&device=c&location=9033320&targetid=pla-839853773029&ds_rl=1246978&ds_rl=1248099&gclid=EAIaIQobChMIyJaOyIyY7QIVYj2tBh04QATqEAQYASABEgLTDfD_BwE&gclsrc=aw.ds',
        price: '$299.99',
        image: 'https://target.scene7.com/is/image/Target/GUEST_6aa89bd1-fa0d-4962-b84b-a5dfeea4c381?fmt=webp&wid=1400&qlt=80',
        description: 'The Nintendo Switch Animal Crossing New Horizons Edition system takes design inspiration from the new Animal Crossing: New Horizons game, with lovely pastel green and blue Joy-Con controllers and a white Nintendo Switch Dock, adorned with images of recognizable characters Tom Nook and Nooklings Timmy and Tommy.',
        expirationDate: '20 December 2020',
        category: 'Gaming'
    },
    2: {
        id: 2,
        itemName: 'Samsung Galaxy S20',
        websiteLink: 'https://www.samsung.com/us/smartphones/galaxy-note20-5g/buy/galaxy-note20-5g-128gb-sprint-sm-n981uznaspr/?modelCode=SM-N981UZNASPR',
        price: '$524.99',
        image: 'https://image-us.samsung.com/SamsungUS/sis/N20/Desktop/1.jpg',
        description: 'HyperFast Processor : Our latest S20 chipset innovation and the enhanced NPU takes performance to a new level, so switching from app to app is seamless, livestreams come through clear, and you have got power enabling you to game on to victory. Night Mode Our biggest dual pixel sensor for vivid, clear night photos. The rear camera on Galaxy S20 FE adjusts to pull in light even when its dark so your shots come out detailed and colorful',
        expirationDate: '22 December 2020',
        category: 'Phones'
    },
    3: {
        id: 3,
        itemName: 'Instant Pot',
        websiteLink: 'https://www.macys.com/shop/product/instant-pot-duo-nova-8-qt.-7-in-1-one-touch-multi-cooker?ID=9633277&CategoryID=7554&ranMID=3184&ranEAID=4QPKHPmzAqA&ranSiteID=4QPKHPmzAqA-vqExA1PoBE6rbhhYdlPlvw&LinkshareID=4QPKHPmzAqA-vqExA1PoBE6rbhhYdlPlvw&m_sc=aff&PartnerID=LINKSHARE&cm_mmc=LINKSHARE-_-5-_-63-_-MP563',
        price: '$69.99',
        image: 'https://slimages.macys.com/is/image/MCY/products/1/optimized/15900951_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
        description: 'The Instant Pot® Duo™ Nova™ is the latest generation 7-in-1 multi-tasking, space-saving, time-saving appliance that pressure cooks quickly, sautés, steams, slow cooks, warms, and makes delicious meats, eggs, rice, soup, yogurt and more — all in one healthy, dishwasher-safe, stainless steel pot',
        expirationDate: '22 December 2020',
        category: 'Kitchen'
    },
    4: {
        id: 4,
        itemName: 'Calvin Klein 4-Pc. Womens Fragrances Gift Set',
        websiteLink: 'https://www.macys.com/shop/product/calvin-klein-4-pc.-womens-fragrances-gift-set?ID=11268499&CategoryID=277259',
        price: '$45.00',
        image: 'https://slimages.macys.com/is/image/MCY/products/1/optimized/17640711_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
        description: 'Enjoy the best of Calvin Klein fragrances for women with this gift set of portable mini fragrances that are perfect for travel.',
        expirationDate: '25 December 2020',
        category: 'Perfumes'
    },
    5: {
        id: 5,
        itemName: 'Copper Moscow Mule Mugs',
        websiteLink: 'https://www.macys.com/shop/product/thirstystone-by-cambridge-2-pack-of-20-oz-faceted-copper-moscow-mule-mugs?ID=11324995&CategoryID=91545',
        price: '$15.99',
        image: 'https://slimages.macys.com/is/image/MCY/products/6/optimized/17565366_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
        description: 'The brilliant hue of these Hammered Stainless Steel Moscow Mule Mugs adds a timeless touch to any happy hour.',
        expirationDate: '28 January 2021',
        category: 'Dining'
    },
    6: {
        id: 6,
        itemName: 'The Cellar Holiday Cheer Collection',
        websiteLink: 'https://www.macys.com/shop/product/the-cellar-holiday-cheer-collection-created-for-macys?ID=11253740&CategoryID=91545',
        price: '$47.99',
        image: 'https://slimages.macys.com/is/image/MCY/products/0/optimized/17476710_fpx.tif?op_sharpen=1&wid=591&fit=fit,1&$filtersm$&fmt=webp',
        description: 'Bring merriment to the table with The Cellars Holiday Cheer Collection of dishwasher-safe porcelain mugs, plates and trays decorated with colorful nutcrackers and gold-tone stars. The collections tree-shaped serving set, complete with a wooden tray, is a great choice for entertaining.',
        expirationDate: '28 January 2021',
        category: 'Dining'
    },
    7: {
        id: 7,
        itemName: 'Casio Womens Digital Vintage Gold-Tone',
        websiteLink: 'https://www.macys.com/shop/product/casio-womens-digital-vintage-gold-tone-stainless-steel-bracelet-watch-39x39mm-la680wga-9mv?ID=4639317&RVI=PDP_5&tdp=cm_choiceId~z4639317~xcm_pos~zPos5',
        price: '$55.00',
        image: 'https://slimages.macys.com/is/image/MCY/products/7/optimized/8459517_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
        description: 'Slender and sophisticated in gold-tone stainless steel, this Vintage collection watch provides a contrasting digital face and favored Casio features such as LED lighting and alarm',
        expirationDate: '22 December 2020',
        category: 'Watches'
    },
    8: {
        id: 8,
        itemName: 'Mini Cake Pop maker',
        websiteLink: 'https://www.macys.com/shop/product/bella-mini-cake-pop-maker?ID=11328136&CategoryID=91543&swatchColor=Red',
        price: '$9.99',
        image: 'https://slimages.macys.com/is/image/MCY/products/3/optimized/17997903_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
        description: 'Satisfy your sweet tooth with cake pops at home. Sugared, iced, glazed or plain, the possibilities are endless. Powerful 350 watt heating system makes 3 delicious cake pops in minutes. Ready indicator light for hassle free cooking and PFOA free, nonstick coating for easy clean up.',
        expirationDate: '28 December 2020',
        category: 'Kitchen'
    },
    9: {
        id: 9,
        itemName: 'TOA-60 Air Fryer Toaster Oven',
        websiteLink: 'https://www.macys.com/shop/product/cuisinart-toa-60-air-fryer-toaster-oven?ID=4542191&CategoryID=91543',
        price: '$139.99',
        image: 'https://slimages.macys.com/is/image/MCY/products/1/optimized/10340261_fpx.tif?op_sharpen=1&wid=591&fit=fit,1&$filtersm$&fmt=webp',
        description: 'Bring powerful convenience to your counter in this Cuisinart oven, a combination of convection, conventional and air-frying power that easily replaces your toaster, broiler oven and more. It has 1,800 watts of power, seven functions and a 3-lb. capacity that increases its utility.',
        expirationDate: '28 December 2020',
        category: 'Kitchen'
    },
    10: {
        id: 10,
        itemName: 'Nespresso Deluxe Coffee',
        websiteLink: 'https://www.macys.com/shop/product/nespresso-by-delonghi-vertuo-plus-deluxe-coffee-espresso-maker-with-aerocinno-frother?ID=9366582&CategoryID=91543',
        price: '$124.99',
        image: 'https://slimages.macys.com/is/image/MCY/products/5/optimized/17448185_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
        description: 'Offering freshly brewed coffee with crema as well as authentic espresso, the Nespresso by DeLonghi VertuoPlus Deluxe machine provides an exceptional brewing experience in your own home. Innovative bar-code technology delivers the optimal in-cup results for each blend while the included Aeroccino allows you to top beverages with a frothy foam.',
        expirationDate: '23 December 2020',
        category: 'Kitchen'
    }
}


module.exports = dealsList;
