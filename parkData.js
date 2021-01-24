const parkData = {
  national: [
    {
      name: 'Acadia',
      state: 'ME',
      image: 'https://www.national-park.com/wp-content/uploads/2016/04/Welcome-to-Acadia-National-Park.jpeg',
      parkCode: 'acad',
      reviews: []
    },
    {
      name: 'Arches',
      state: 'UT',
      image: 'https://www.treehugger.com/thmb/eUdkL7RNPgpiEldNo4h2aUwzbNc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2011__07__shutterstock_1164019927-82525a1b70524d56bd557edd7e191405.jpg',
      parkCode: 'arch',
      reviews: []
    },
    {
      name: 'Badlands',
      state: 'SD',
      image: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1047&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F39%2F2019%2F05%2F20222218%2F1-YellowMounds.jpg',
      parkCode: 'badl',
      reviews: [
        {id: 1, name: 'bailey', parkReview: '10/10 would recommend'}
      ]
    },
    {
      name: 'Big Bend',
      state: 'TX',
      image: 'https://www.fodors.com/wp-content/uploads/2019/10/shutterstock_1504296464-resized-1.png',
      parkCode: 'bibe',
      reviews: []
    },
    {
      name: 'Biscayne',
      state: 'FL',
      image: 'https://gdb.voanews.com/F623BC35-CAC8-4A0A-8B01-D4B5C60537C4_cx0_cy2_cw0_w1023_r1_s.jpg',
      parkCode: 'bisc',
      reviews: []
    },
    {
      name: 'Black Canyon of the Gunnison',
      state: 'CO',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Black_Canyon_and_Gunnison_River_2008.jpg/1200px-Black_Canyon_and_Gunnison_River_2008.jpg',
      parkCode: 'blca',
      reviews: []
    },
    {
      name: 'Bryce Canyon',
      state: 'UT',
      image: 'https://www.planetware.com/wpimages/2020/02/las-vegas-to-bryce-canyon-national-park-best-ways-to-get-there-by-tour.jpg',
      parkCode: 'brca',
      reviews: []
    },
    {
      name: 'Canyonlands',
      state: 'UT',
      image: 'https://lp-cms-production.imgix.net/2019-06/b0e4aed8ae09f8b72d917a8a9f4b6cc1-canyonlands-national-park.jpg',
      parkCode: 'cany',
      reviews: []
    },
    {
      name: 'Capitol Reef',
      state: 'UT',
      image: 'https://capitolreef.org/wp-content/uploads/2017/10/Home_Main.jpg',
      parkCode: 'care',
      reviews: []
    },
    {
      name: 'Carlsbad Caverns',
      state: 'NM',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Carlsbad_Interior_Formations.jpg',
      parkCode: 'cave',
      reviews: []
    },
    {
      name: 'Channel Islands',
      state: 'CA',
      image: 'https://www.national-park.com/wp-content/uploads/2016/04/Welcome-to-Channel-Islands-National-Park.jpg',
      parkCode: 'chis',
      reviews: []
    },
    {
      name: 'Congaree',
      state: 'SC',
      image: 'https://www.nationalgeographic.com/content/dam/travel/photos/000/929/92934.ngsversion.1483650025298.adapt.1900.1.jpg',
      parkCode: 'cong',
      reviews: []
    },
    {
      name: 'Crater Lake',
      state: 'OR',
      image: 'https://thumbor.thedailymeal.com/MA_8kLI3UOyIqDi6-Gn7bIyx0q0=/870x565/https://www.theactivetimes.com/sites/default/files/uploads/c/crater_lake_2_shutterstock_p.jpg',
      parkCode: 'crla',
      reviews: []
    },
    {
      name: 'Cuyahoga Valley',
      state: 'OH',
      image: 'https://www.national-park.com/wp-content/uploads/2016/04/Welcome-to-Cuyahoga-Valley-National-Park.jpg',
      parkCode: 'cuva',
      reviews: []
    },
    {
      name: 'Denali',
      state: 'AK',
      image: 'https://media.nationalgeographic.org/assets/photos/172/369/81ad2d66-4da3-43c1-b5ff-5d30ace2ca2e.jpg',
      parkCode: 'dena',
      reviews: []
    },
    {
      name: 'Death Valley',
      state: 'CA, NV',
      image: 'https://sgl-assets.imgix.net/files/article_hero/death-valley-national-park-winter-via-magazine-shutterstock_385947175.jpg?w=1440&h=720&crop=faces,edges',
      parkCode: 'deva',
      reviews: []
    },
    {
      name: 'Dry Tortugas',
      state: 'FL',
      image: 'https://www.national-park.com/wp-content/uploads/2016/04/Welcome-to-Dry-Tortugas-National-Park.jpg',
      parkCode: 'drto',
      reviews: []
    },
    {
      name: 'Everglades',
      state: 'FL',
      image: 'https://npca.s3.amazonaws.com/images/10972/c65cfe3a-63cf-4777-b148-26fac89d6bf7-banner.jpg?1487949865',
      parkCode: 'ever',
      reviews: []
    },
    {
      name: 'Gates of the Arctic',
      state: 'AK',
      image: 'https://www.expeditionsalaska.com/wp-content/uploads/2017/03/11_aug7671.jpg',
      parkCode: 'gaar',
      reviews: []
    },
    {
      name: 'Gateway Arch',
      state: 'MO',
      image: 'https://www.gatewayarch.com/wp-content/uploads/2020/01/Capture-e1578063684447.jpg',
      parkCode: 'jeff',
      reviews: []
    },
    {
      name: 'Glacier',
      state: 'MT',
      image: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F01%2Fglacier-national-park-GLACIERSIGNS0120.jpg',
      parkCode: 'glac',
      reviews: []
    },
    {
      name: 'Glacier Bay',
      state: 'AK',
      image: 'https://www.tripsavvy.com/thmb/6fHSy0KWVuP124P2rJ5A4ZKNwlI=/2124x1414/filters:fill(auto,1)/GlacierBayNationalParkDaveBartuff-Getty-571138833df78c3fa2a43ea4.jpg',
      parkCode: 'glba',
      reviews: []
    },
    {
      name: 'Great Basin',
      state: 'NV',
      image: 'https://travelnevada.com/wp-content/uploads/2014/04/GBNP6_SM-opt.jpg',
      parkCode: 'grba',
      reviews: []
    },
    {
      name: 'Grand Canyon',
      state: 'AZ',
      image: 'https://ewscripps.brightspotcdn.com/dims4/default/5a64170/2147483647/strip/true/crop/3000x1688+0+172/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F0b%2F77%2F2d7dc37a4c59ba8a3f9e2709d4e9%2Fgrand-canyon-deaths-shutterstock-via-cnn-040519.JPG',
      parkCode: 'grca',
      reviews: []
    },
    {
      name: 'Great Sand Dunes',
      state: 'CO',
      image: 'https://www.colorado.com/sites/default/files/sandunes_nps.jpg',
      parkCode: 'grsa',
      reviews: []
    },
    {
      name: 'Great Smoky Mountains',
      state: 'TN, NC',
      image: 'https://thumbor.thedailymeal.com/kYVFwevEyDu6BOU7vRKD3HHNZ7w=/870x565/https://www.theactivetimes.com/sites/default/files/uploads/r/rsz_shutterstock_356855126.jpg',
      parkCode: 'grsm',
      reviews: []
    },
    {
      name: 'Grand Teton',
      state: 'WY',
      image: 'https://www.national-park.com/wp-content/uploads/2016/04/Welcome-to-Grand-Teton-National-Park.jpg',
      parkCode: 'grte',
      reviews: []
    },
    {
      name: 'Guadalupe Mountains',
      state: 'TX',
      image: 'https://peakvisor.com/img/news/el-capitan-guadalupe.jpg',
      parkCode: 'gumo',
      reviews: []
    },
    {
      name: 'Haleakala',
      state: 'HI',
      image: 'https://gypsyguide.com/wp-content/uploads/2017/09/Haleakala-Tour-1.jpg',
      parkCode: 'hale',
      reviews: []
    },
    {
      name: 'Hawaii Volcanoes',
      state: 'HI',
      image: 'https://greatruns.com/wp-content/uploads/2017/12/20170831_surface_flow.jpg',
      parkCode: 'havo',
      reviews: []
    },
    {
      name: 'Hot Springs',
      state: 'AR',
      image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F01%2Fwaterfall-HOTSPRINGS0117.jpg&q=85',
      parkCode: 'hosp',
      reviews: []
    },
    {
      name: 'Indiana Dunes',
      state: 'IN',
      image: 'https://assets.nrdc.org/sites/default/files/styles/header_background/public/runningthroughtheblowout_1200.jpg?itok=StX_JQc7',
      parkCode: 'indu',
      reviews: []
    },
    {
      name: 'Isle Royale',
      state: 'MI',
      image: 'https://www.tripsavvy.com/thmb/wN2qHxu_hFpPAXYA_JWBrDyl65Y=/2129x1410/filters:fill(auto,1)/IsleRoyaleNationalParkPosnov-571147c25f9b588cc2ec6cc4.jpg',
      parkCode: 'isro',
      reviews: []
    },
    {
      name: 'Joshua Tree',
      state: 'CA',
      image: 'https://static.rootsrated.com/image/upload/s--kwlnjVIz--/t_rr_large_traditional/gastmsi6lpohixktxfuc.jpg',
      parkCode: 'jotr',
      reviews: []
    },
    {
      name: 'Katmai',
      state: 'AK',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Katmai_Crater_1980.jpg',
      parkCode: 'katm',
      reviews: []
    },
    {
      name: 'Kenai Fjords',
      state: 'AK',
      image: 'https://cdn.thecrazytourist.com/wp-content/uploads/2020/03/ccimage-shutterstock_727317349.jpg',
      parkCode: 'kefj',
      reviews: []
    },
    {
      name: 'Kings Canyon',
      state: 'CA',
      image: 'https://cdn1.matadornetwork.com/blogs/1/2019/02/A-landscape-view-of-Kings-Canyon-national-Park-in-California.jpg',
      parkCode: 'seki',
      reviews: []
    },
    {
      name: 'Kobuk Valley',
      state: 'AK',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Kobuk_Bendlova_235.jpg',
      parkCode: 'kova',
      reviews: []
    },
    {
      name: 'Lake Clark',
      state: 'AK',
      image: 'https://npca.s3.amazonaws.com/images/9035/bc89a87c-3a47-475e-ac77-d78adc2adc5e-banner.jpg?1445971696',
      parkCode: 'lacl',
      reviews: []
    },
    {
      name: 'Lassen Volcanic',
      state: 'CA',
      image: 'https://www.visitcalifornia.com/sites/visitcalifornia.com/files/vc_ca101_nationalparks_lassenvolcanic_manzanitalake_rf_628846294_1280x640.jpg',
      parkCode: 'lavo',
      reviews: []
    },
    {
      name: 'Mammoth Cave',
      state: 'KY',
      image: 'https://cdn.britannica.com/44/74644-050-8C10E7F3/Stalactites-Mammoth-Cave-National-Park-Kentucky.jpg',
      parkCode: 'maca',
      reviews: []
    },
    {
      name: 'Mesa Verde',
      state: 'CO',
      image: 'https://www.fodors.com/assets/destinations/662555/village-cliff-palace-mesa-verde-national-park-colorado-usa_980x650.jpg',
      parkCode: 'meve',
      reviews: []
    },
    {
      name: 'Mount Rainier',
      state: 'WA',
      image: 'https://www.aaronreedphotography.com/images/xl/The-Sweet-Smell-of-Summer-1800.jpg',
      parkCode: 'mora',
      reviews: []
    },
    {
      name: 'National Park of the American Samoa',
      state: 'American Samoa',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Pola_Islands_Tutuila_NPS.jpg',
      parkCode: 'npsa',
      reviews: []
    },
    {
      name: 'New River Gorge',
      state: 'WV',
      image: 'https://www.nps.gov/npgallery/GetAsset/3f422525-8835-462a-8cbf-8d701c066ac0/proxy/hires?',
      parkCode: 'neri',
      reviews: []
    },
    {
      name: 'North Cascades',
      state: 'WA',
      image: 'https://www.nationalparks.org/sites/default/files/northcascades_istock-839368842_banner.jpg',
      parkCode: 'noca',
      reviews: []
    },
    {
      name: 'Olympic',
      state: 'WA',
      image: 'https://image.kkday.com/v2/image/get/w_1900%2Cc_fit/s1.kkday.com/product_23367/20190422064923_2eQYL/jpg',
      parkCode: 'olym',
      reviews: []
    },
    {
      name: 'Petrified Forest',
      state: 'AZ',
      image: 'https://www.mygrandcanyonpark.com/.image/t_share/MTc0MzA5MDgyMjM5MzQ2NTU2/petrifiedforest-sandstoneformations-expansionlands_flickrandrewkearns_700.jpg',
      parkCode: 'pefo',
      reviews: []
    },
    {
      name: 'Pinnacles',
      state: 'CA',
      image: 'https://www.gannett-cdn.com/media/USATODAY/USATODAY/2013/05/30/1369970481002-XXX-HIGH-PEAKS-PINNACLES-NATIONAL-PARK-jy-7896-1305302324_16_9.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp',
      parkCode: 'pinn',
      reviews: []
    },
    {
      name: 'Redwoods',
      state: 'CA',
      image: 'https://www.thoughtco.com/thmb/5VtmxiSs4Pc3LQPm5aHQ7MsRUa8=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/11428980715_b603c15d09_k-6151cfe14b6a445fb0deb5b01d0fb348.jpg',
      parkCode: 'redw',
      reviews: []
    },
    {
      name: 'Rocky Mountain',
      state: 'CO',
      image: 'https://res.cloudinary.com/simpleview/image/upload/v1556666848/clients/longmontco/Rocky_Mountain_National_Park_2015_09_Visit_Estes_Park_Credit_Darcy_Kiefel_6__877a95fa-2093-412d-9a54-7743b8f534e0.jpg',
      parkCode: 'romo',
      reviews: []
    },
    {
      name: 'Saguaro',
      state: 'AZ',
      image: 'https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2016-10/Saguaro_0.jpg?itok=jhVyY56m',
      parkCode: 'sagu',
      reviews: []
    },
    {
      name: 'Shenandoah',
      state: 'VA',
      image: 'https://cdn.britannica.com/79/176979-050-DC64B229/Little-Stony-Man-Cliffs-Blue-Ridge-Mountains.jpg',
      parkCode: 'shen',
      reviews: []
    },
    {
      name: 'Theodore Roosevelt',
      state: 'ND',
      image: 'https://cdn.britannica.com/85/115485-050-91FE0364/Little-Missouri-River-Theodore-Roosevelt-National-Park.jpg',
      parkCode: 'thro',
      reviews: []
    },
    {
      name: 'Virgin Islands',
      state: 'Virgin Islands',
      image: 'https://www.national-park.com/wp-content/uploads/2016/04/Welcome-to-Virgin-Islands-National-Park.jpg',
      parkCode: 'viis',
      reviews: []
    },
    {
      name: 'Voyageurs',
      state: 'MN',
      image: 'https://images.squarespace-cdn.com/content/v1/586e92a19de4bbf6c852b6e0/1587125673420-M8J031HUZBS10IN6OU7Q/ke17ZwdGBToddI8pDm48kA_SSaoz4elkj-HsZd8gX3Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWPwZyNcweDIvdeL5kotwkIXjs9g0WibSO_cU-Ijy4Pwg6poS-6WGGnXqDacZer4yQ/70168516_10157836106475229_1103314520668897280_o.jpg',
      parkCode: 'voya',
      reviews: []
    },
    {
      name: 'White Sands',
      state: 'NM',
      image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2019%2F12%2Fwhite-sands-national-monument-WHITESANDS1219.jpg&q=85',
      parkCode: 'whsa',
      reviews: []
    },
    {
      name: 'Wind Cave',
      state: 'SD',
      image: 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555296873/shape/mentalfloss/wind_cave_primary.jpg',
      parkCode: 'wica',
      reviews: []
    },
    {
      name: 'Wrangell-St Elias',
      state: 'AK',
      image: 'https://www.doi.gov/sites/doi.gov/files/uploads/mt_st_elias_nps_photo_neal_herbert_2015.jpg',
      parkCode: 'wrst',
      reviews: []
    },
    {
      name: 'Yellowstone',
      state: 'WY, ID, MT',
      image: 'https://www.planetware.com/wpimages/2020/01/yellowstone-national-park-best-time-to-visit-best-time-of-year-to-visit.jpg',
      parkCode: 'yell',
      reviews: []
    },
    {
      name: 'Yosemite',
      state: 'CA',
      image: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/6/4/w1200X800/Walk_in_the_Woods.jpg',
      parkCode: 'yose',
      reviews: []
    },
    {
      name: 'Zion',
      state: 'UT',
      image: 'https://img.travelawaits.com/quill/1/8/1/b/3/8/181b38e00192a6977130d5681de1da2f7a17f0a4.jpg',
      parkCode: 'zion',
      reviews: []
    }
  ]
}

module.exports = parkData