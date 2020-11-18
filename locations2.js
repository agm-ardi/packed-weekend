var locationsObject = [
    {
      title: 'Pasadena Humane Shelter Shop - Los Angeles',
      address: '361 S Raymond Ave, Pasadena, CA 91105',
      lat: 34.139969,
      lng: -118.149243,
      custom: 'Come by the Shelter Shop over Packed Weekend to receive 20% off your purchase when you mention THE PACK. Plus, free swag on behalf of The Pack, while supplies last!',
      url: 'https://pasadenahumane.org/services/shelter-shop-boarding/retail-store/',
      tags: [
        'tag_shelter'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
    },
    {
      title: 'SPCA of Anne Arundel County',
      address: '1815 Bay Ridge Ave, Annapolis, MD 21403',
      lat: 38.955959,
      lng: -76.490273,
      custom: 'The SPCA of Anne Arundel County is pleased to offer free prize packs from The Pack for all dog adoptions over Packed Weekend! Check out available dogs and schedule an appointment to meet them today!',
      url: 'https://aacspca.org/adoptable-animal-search/',
      tags: [
        'tag_shelter'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
    },
    {
      title: 'Beasty Feast - NEW YORK',
      address: '327 W 14th St, New York, NY 10014',
      lat: 40.74062,
      lng: -74.003677,
      custom: 'Visit us all weekend to receive 15% off retail store orders + 10% off dog grooming appointments made 11/20-11/22.',
      url: 'https://www.instagram.com/beastyfeast/?hl=en',
      tags: [
        'tag_pet'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
    },
    {
      title: 'Wet Noses Mobile Grooming - Chicago-Land Metro area',
      address: '869 E Schaumburg Rd #134 Schaumburg IL 60194',
      lat: 42.02816,
      lng: -88.05819,
      custom: 'Follow Wet Noses Mobile Grooming on social media or visit their website to see how you can win The Pack branded promotional items!',
      url: 'https://wetnosesgrooming.com/',
      tags: [
        'tag_pet'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
    },
    {
      title: 'The Ruff Life Mobile Grooming Salon & Spa - NEW YORK',
      address: '158 N. Kings Ave., Massapequa, NY 11758',
      lat: 40.69604,
      lng: -73.46036,
      custom: 'On Sunday 11/22 9AM-4PM bring your pup for a free bath, nail trim, & or color chalking! First come first serve!',
      url: 'https://www.instagram.com/therufflifemobile/',
      tags: [
        'tag_pet'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
    },
    {
      title: 'WildWash - Natural Skin & Coat care for Pets',
      address: '221 Westbourne park Road, Notting Hill, London, W11 1EA, United Kingdom',
      lat: 51.517812,
      lng: -0.201488,
      custom: 'WildWash is a brand of natural pH balanced pet care products that contain no parabens, phosphates, petrochemicals, phthalates, palm oils, sulphates and PEGs. Great for your pets and great for the environment.',
      url: 'http://www.wildwash.co.uk',
      tags: [
        'tag_pet'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
    },
    {
      title: 'Laundro Mutt',
      address: '11307 Jupiter Rd, Dallas, TX 75218',
      lat: 32.847132,
      lng: -96.683468,
      custom: 'Stop by Vheas Laundro Mutt on Saturday, November 21st from 9am to 6pm for a free nail trim and buy one get one free on self-serve baths!',
      url: 'https://www.facebook.com/getyourMuttOn/',
      tags: [
        'tag_pet'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
    },
    {
      title: 'Red Roof Inn Tampa Fairgrounds - Casino',
      address: '5001 North US Route 301, Tampa, FL 33610',
      lat: 27.992503,
      lng: -82.357018,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof PLUS+ Austin South',
      address: '4701 South I-35, Austin, TX 78744',
      lat: 30.208107,
      lng: -97.755239,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof PLUS+ Orlando-Convention Center/ Int\'l Dr',
      address: '8342 Jamaican Ct, Orlando, FL 32819',
      lat: 28.444635,
      lng: -81.473559,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof PLUS+ Atlanta - Buckhead',
      address: '1960 N Druid Hills Rd NE, Atlanta, GA 30329',
      lat: 33.834507,
      lng: -84.340284,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof Inn Cincinnati Northeast - Blue Ash',
      address: '5900 Pfeiffer Rd, Blue Ash, OH 45242',
      lat: 39.250441,
      lng: -84.367853,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof PLUS+ Miami Airport',
      address: '3401 NW LeJeune Rd, Miami, FL 33142',
      lat: 25.805141,
      lng: -80.263349,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof PLUS+ Nashville Airport',
      address: '510 Claridge Dr, Nashville, TN 37214',
      lat: 36.145213,
      lng: -86.668295,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof Inn Houston East - I-10',
      address: '11999 East Fwy, Houston, TX 77029',
      lat: 29.772428,
      lng: -95.225403,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof PLUS+ Columbus Downtown-Convention Center',
      address: '111 E Nationwide Blvd, Columbus, OH 43215',
      lat: 39.968351,
      lng: -82.998393,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof PLUS+ Boston - Logan',
      address: '920 Broadway, Saugus, MA 01906',
      lat: 42.468729,
      lng: -71.024565,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof PLUS+ Raleigh NCSU - Convention Center',
      address: '1813 S Saunders St, Raleigh, NC 27603',
      lat: 35.754932,
      lng: -78.647978,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof PLUS+ Pittsburgh East - Monroeville',
      address: '2729 Mosside Blvd, Monroeville, PA 15146',
      lat: 40.435228,
      lng: -79.757575,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof Inn Fort Wayne',
      address: '3017 W Coliseum Blvd, Fort Wayne, IN 46808',
      lat: 41.11671,
      lng: -85.183877,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof Inn Louisville Fair And Expo',
      address: '3322 Red Roof Inn Pl, Louisville, KY 40218',
      lat: 38.200421,
      lng: -85.687366,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof Inn & Suites Sacramento North',
      address: '4325 Watt Ave, Sacramento, CA 95821',
      lat: 38.643058,
      lng: -121.383889,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof Inn & Suites Philadelphia - Bellmawr',
      address: '217 S Black Horse Pike, Bellmawr, NJ 08031',
      lat: 39.864411,
      lng: -75.07814,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof Inn & Suites Indianapolis Airport',
      address: '2631 S Lynhurst Dr, Indianapolis, IN 46241',
      lat: 39.727096,
      lng: -86.249141,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof Inn Cleveland - Independence',
      address: '6020 Quarry Ln, Independence, OH 44131',
      lat: 41.394731,
      lng: -81.649813,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: 'https://www.redroof.com/',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Red Roof Inn Dallas - Mesquite',
      address: '3447 Interstate 30, Mesquite TX',
      lat: 32.812589,
      lng: -96.651243,
      custom: 'Guests checking in with their pets will receive a gift at check-in, while supplies last',
      url: '',
      tags: [
        'tag_hotel'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
    },
    {
      title: 'Paw Patch Pastries',
      address: '701 Pennsylvania Ave, San Francisco, CA 94107',
      lat: 37.75736,
      lng: -122.39284,
      custom: 'Use code THEPACK\' for a special online discount and free promo items with every order',
      url: 'https://www.pawpatchpastries.com/',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Hard Rock Cafe San Antonio',
      address: '111 W Crockett St, San Antonio, TX 78205',
      lat: 29.4251,
      lng: -98.4894,
      custom: 'Hard Rock Caf is pleased to offer a free Puppy Patty for dogs that come to dine on their patio, and a 15% discount on a meal for pet owners that come to dine with their dogs.',
      url: 'https://www.facebook.com/hardrockcafesanantonio',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Hard Rock Cafe Nashville',
      address: '100 Broadway, Nashville, TN 37201',
      lat: 36.16254,
      lng: -86.774742,
      custom: 'Hard Rock Caf is pleased to offer a free Puppy Patty for dogs that come to dine on their patio, and a 15% discount on a meal for pet owners that come to dine with their dogs.',
      url: 'https://www.facebook.com/hardrocknashville',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Hard Rock Cafe Pigeon Forge',
      address: '2050 Parkway, Pigeon Forge, TN 37863',
      lat: 35.82407,
      lng: -83.57905,
      custom: 'Hard Rock Caf is pleased to offer a free Puppy Patty for dogs that come to dine on their patio, and a 15% discount on a meal for pet owners that come to dine with their dogs.',
      url: 'https://www.facebook.com/hardrockcafepigeonforge',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Hard Rock Cafe Chicago',
      address: '63 W Ontario St, Chicago, IL 60654',
      lat: 41.53354,
      lng: -87.6301,
      custom: 'Hard Rock Caf is pleased to offer a free Puppy Patty for dogs that come to dine on their patio, and a 15% discount on a meal for pet owners that come to dine with their dogs.',
      url: 'https://www.facebook.com/hardrockcafechicago',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Hard Rock Cafe Washington, D.C.',
      address: '999 E St NW, Washington, DC 20004',
      lat: 38.89636,
      lng: -77.02551,
      custom: 'Hard Rock Caf is pleased to offer a free Puppy Patty for dogs that come to dine on their patio, and a 15% discount on a meal for pet owners that come to dine with their dogs.',
      url: 'https://www.facebook.com/hrcwashingtondc/',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Hard Rock Cafe Key West',
      address: '313 Duval St, Key West, FL 33040',
      lat: 24.55777,
      lng: -81.80384,
      custom: 'Hard Rock Caf is pleased to offer a free Puppy Patty for dogs that come to dine on their patio, and a 15% discount on a meal for pet owners that come to dine with their dogs.',
      url: 'https://www.facebook.com/hardrockcafekeywest',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Hard Rock Cafe Boston',
      address: '22-24 Clinton St, Boston, MA 02109',
      lat: 42.36093,
      lng: -71.05473,
      custom: 'Hard Rock Caf is pleased to offer a free Puppy Patty for dogs that come to dine on their patio, and a 15% discount on a meal for pet owners that come to dine with their dogs.',
      url: 'https://www.facebook.com/hardrockcafeboston',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'The Bean - NEW YORK',
      address: '771 Broadway, NY, NY 10003',
      lat: 40.7312,
      lng: -73.99197,
      custom: 'Bring your pup to The Bean on Broadway to enjoy a 2 for 1 special on The Pack Peanut Butter Smoothie, a yummy dairy & gluten free treat for both you + your dog.',
      url: 'https://www.instagram.com/thebeannyc/',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Ashland Hill - Santa Monica',
      address: '2807 Main St, Santa Monica, CA 90405',
      lat: 34.000196,
      lng: -118.481425,
      custom: 'Stop by Ashland Hill over Packed Weekend with your pup to see the first episode of THE PACK and to receive a complimentary order of \'Chicken & Woofles\' with the purchase of any menu item!',
      url: 'ashlandhill.com',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Coffee for Sasquatch - Los Angeles',
      address: '7020 Melrose Ave, Los Angeles, CA 90038',
      lat: 34.083281,
      lng: -118.343457,
      custom: 'Stop by Coffee for Sasquatch with your pup over Packed Weekend to get some The Pack swag  and to receive a complimentary \'Puppucino\' for your furry friend!',
      url: 'https://www.coffeeforsasquatch.com/',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Texas Jack\'s Barbecue',
      address: '2761 WASHINGTON BLVD, ARLINGTON, VA 22201',
      lat: 38.88118,
      lng: -77.09037,
      custom: 'Bring your pup to dine on the patio at Texas Jack\'s Barbecue, and order a free treat from the Packed Weekend Dog Menu! Head to @txjacksbarbecue on Instagram to see how to win a free meal for two!',
      url: 'https://www.txjacks.com/',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Cana Vineyards and Winery',
      address: '38600 John Mosby Hwy, Middleburg, VA 20117',
      lat: 38.978642,
      lng: -77.668953,
      custom: 'Calling all dog families to visit Cana Vineyards and Winery over Packed Weekend! All dogs that visit the winery will take home a prize pack from The Pack - a travel dog bowl and bag dispenser!',
      url: 'https://canavineyards.com/',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Dacha Beer Garden - Shaw',
      address: '1600 7th St NW, Washington, DC 20001',
      lat: 38.911301,
      lng: -77.022217,
      custom: 'Head to Dacha Beer Garden with your pup to enjoy a nice pint of beer, and receive a Free Puppuccino on Saturday, November 21st! Check out the Puppy Provisions menu for more fun treats while there!',
      url: 'https://dachadc.com/beer-garden-shaw/',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Dacha Beer Garden - Navy Yard',
      address: '79 Potomac Ave SE, Washington, DC 20003',
      lat: 38.87122,
      lng: -77.00666,
      custom: 'Head to Dacha Beer Garden with your pup to enjoy a nice pint of beer, and receive a Free Puppuccino on Saturday, November 21st! Check out the Puppy Provisions menu for more fun treats while there!',
      url: 'https://dachadc.com/beer-garden-navy-yard/',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Good Luck Cellars',
      address: '1025 Good Luck Road, Kilmarnock, VA 22482',
      lat: 37.73822,
      lng: -76.3809,
      custom: 'Good Luck Cellars will give you a free wine glass for visiting the winery with your pup and purchasing a bottle of wine over the Packed Weekend. And, your pup will receive a prize pack from The Pack!',
      url: 'https://www.goodluckcellars.com/',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Blue Agave - Chicago',
      address: '579 W Kinzie St, Chicago, IL 60654',
      lat: 41.88903,
      lng: -87.64278,
      custom: 'Receive a $10 Gift Card + Packed Weekend promo item with any dine in or curbside takeout purchase over $25 (before tax)',
      url: 'https://www.realdogmomsofchicago.com/events-blog/a-packed-weekend',
      tags: [
        'tag_food'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - ATLANTA',
      address: '3440 Peachtree Rd, Atlanta, GA 30326',
      lat: 33.85169,
      lng: -84.36232,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - BAL HARBOUR',
      address: '9700 Collins Ave, Bal Harbour, FL 33154',
      lat: 25.888378,
      lng: -80.125237,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - BEACHWOOD',
      address: '26100 Cedar Rd, Beachwood, OH 44122',
      lat: 41.49947,
      lng: -81.49414,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - BEVERLY HILLS',
      address: '9600 Wilshire Blvd, Beverly Hills, CA 90212',
      lat: 34.0667,
      lng: -118.403999,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - BIRMINGHAM',
      address: '129 Summit Blvd, Birmingham, AL 35243',
      lat: 33.445339,
      lng: -86.730911,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - BOCA RATON',
      address: '5800 Glades Rd, Boca Raton, FL 33431',
      lat: 26.365884,
      lng: -80.133615,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - BOSTON',
      address: '800 Boylston St, Boston, MA 02199',
      lat: 42.347376,
      lng: -71.082087,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - BRICKELL',
      address: '81 SW 8th St, Miami, FL 33130',
      lat: 25.766579,
      lng: -80.194168,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - CALGARY',
      address: '6455 Macleod Trail SW, Calgary, AB T2H 0K8, Canada',
      lat: 50.999213,
      lng: -114.074883,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - CHEVY CHASE',
      address: '5555 Wisconsin Ave, Chevy Chase, MD 20815',
      lat: 38.965063,
      lng: -77.087295,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - CHICAGO',
      address: '700 Michigan Ave, Chicago, IL 60611',
      lat: 41.895251,
      lng: -87.625192,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - CINCINNATI',
      address: '101 W 5th St, Cincinnati, OH 45202',
      lat: 39.10057,
      lng: -84.514932,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - COLUMBUS',
      address: '1500 Polaris Pkwy, Columbus, OH 43240',
      lat: 40.145628,
      lng: -82.982056,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - DADELAND',
      address: '7687 N Kendall Dr, Miami, FL 33156',
      lat: 25.68964,
      lng: -80.314828,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue  - GREENWICH',
      address: '205 Greenwich Ave, Greenwich, CT 06830',
      lat: 41.027503,
      lng: -73.625789,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue  - HAWAII',
      address: '2345 K≈´hi≈ç Ave., Honolulu, HI 96815',
      lat: 21.278296,
      lng: -157.825348,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - HOUSTON',
      address: '5175 Westheimer Rd, Houston, TX 77056',
      lat: 29.73966,
      lng: -95.466042,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - INDIANAPOLIS',
      address: '8701 Keystone Crossing, Indianapolis, IN 46240',
      lat: 39.913747,
      lng: -86.107866,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - LAS VEGAS',
      address: '3200 Las Vegas Blvd S, Las Vegas, NV 89109',
      lat: 36.127349,
      lng: -115.173099,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - LONG ISLAND',
      address: '230 Walt Whitman Rd, Huntington Station, NY 11746',
      lat: 40.822372,
      lng: -73.409121,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - NAPLES',
      address: '5395 Tamiami Trail N, Naples, FL 34108',
      lat: 26.212154,
      lng: -81.802457,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - NEW ORLEANS',
      address: '301 Canal St, New Orleans, LA 70130',
      lat: 29.951001,
      lng: -90.064968,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - NEW YORK',
      address: '611 5th Ave, New York, NY 10022',
      lat: 40.758106,
      lng: -73.976943,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue  - PALM BEACH',
      address: '172 Worth Ave, Palm Beach, FL 33480',
      lat: 26.700588,
      lng: -80.035767,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - PALM BEACH G.',
      address: '3109 PGA Boulevard, Palm Beach Gardens, FL 33410',
      lat: 26.848336,
      lng: -80.085505,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - PALM DESERT',
      address: '73555 El Paseo, Palm Desert, CA 92260',
      lat: 33.718702,
      lng: -116.381667,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - PHILADELPHIA',
      address: '2 Bala Plaza, Bala Cynwyd, PA 19004',
      lat: 40.006565,
      lng: -75.216586,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - PHOENIX',
      address: '2446 E Camelback Rd, Phoenix, AZ 85016',
      lat: 33.511174,
      lng: -112.027948,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - RALEIGH',
      address: '7700 Old Wake Forest Rd, Raleigh, NC 27616',
      lat: 35.866558,
      lng: -78.57429,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - RICHMOND',
      address: '9214 Stony Point Pkwy, Richmond, VA 23235',
      lat: 37.548981,
      lng: -77.570305,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - SAN ANTONIO',
      address: '7400 San Pedro Ave, San Antonio, TX 78216',
      lat: 29.519762,
      lng: -98.49413,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - SAN FRANCISCO',
      address: '384 Post St, San Francisco, CA 94108',
      lat: 37.788599,
      lng: -122.408184,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - SARASOTA',
      address: '120 University Town Center Dr, Sarasota, FL 34243',
      lat: 27.385211,
      lng: -82.453773,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - SOUTH COAST P.',
      address: '3333 Bristol St, Costa Mesa, CA 92626',
      lat: 33.6897,
      lng: -117.889991,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - ST. LOUIS',
      address: '1 Frontenac Pl Dr, St. Louis, MO 63131',
      lat: 38.631155,
      lng: -90.407424,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - TORONTO (CF SHERWAY GARDENS)',
      address: '25 The West Mall, Etobicoke, ON M9C 1B8, Canada',
      lat: 43.612071,
      lng: -79.5548,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - TORONTO (EATON CENTRE)',
      address: '176 Yonge St, Toronto, ON M5C 2L7, Canada',
      lat: 43.652228,
      lng: -79.37972,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - TROY',
      address: '2901 W Big Beaver Rd, Troy, MI 48084',
      lat: 42.55978,
      lng: -83.185405,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - TULSA',
      address: '1780 Utica Square, Tulsa, OK 74114',
      lat: 36.131545,
      lng: -95.966437,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Saks Fifth Avenue - TYSONS II',
      address: '2051 International Dr, McLean, VA 22102',
      lat: 38.923939,
      lng: -77.225361,
      custom: 'Visit Saks.com/ThePack to shop our doggie boutique!',
      url: 'https://Saks.com/ThePack',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Best Friends Lifesaving Center',
      address: '2005 South 1100 East, Salt Lake City, UT 84106',
      lat: 40.72657,
      lng: -111.85904,
      custom: 'Together, we can save them all!',
      url: 'https://utah.bestfriends.org/',
      tags: [
        'tag_shelter'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
    },
    {
      title: 'Best Friends Animal Sanctuary',
      address: '5001 Angel Canyon Road, Kanab, UT 84741',
      lat: 37.12576,
      lng: -112.54405,
      custom: 'Together, we can save them all!',
      url: 'https://bestfriends.org/sanctuary/about-sanctuary',
      tags: [
        'tag_shelter'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
    },
    {
      title: 'Best Friends Lifesaving Center',
      address: '15321 Brand Boulevard, Mission Hills, CA 91345',
      lat: 34.27074,
      lng: -118.46554,
      custom: 'Together, we can save them all!',
      url: 'https://la.bestfriends.org/',
      tags: [
        'tag_shelter'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
    },
    {
      title: 'NKLA Pet Adoption Center',
      address: '1845 Pontius Avenue, Los Angeles, CA 90025',
      lat: 34.04475,
      lng: -118.44268,
      custom: 'Together, we can save them all!',
      url: 'https://nkla.org/adopt-a-pet/pet-adoption-center',
      tags: [
        'tag_shelter'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
    },
    {
      title: 'Best Friends Lifesaving Center',
      address: '307 West Broadway, New York, NY 10013',
      lat: 40.721578,
      lng: -74.010488,
      custom: 'Together, we can save them all!',
      url: 'https://ny.bestfriends.org/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Best Friends Lifesaving Center',
      address: '4874 South Atlanta Road, Atlanta, GA 30339',
      lat: 33.835549,
      lng: -84.469909,
      custom: 'Together, we can save them all!',
      url: 'https://bestfriends.org/no-kill-2025/priorities-2025/regional-programs/best-friends-atlanta',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '7 W 34th St, New York, NY 10001',
      lat: 40.749022,
      lng: -73.985306,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '10250 Santa Monica Blvd, Los Angeles, CA 90067',
      lat: 34.059005,
      lng: -118.418866,
      custom: 'Stop by Amazon Books for complimentary gift wrapping (with purchase) and a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '9624 SW Washington Square Rd, Portland, OR 97223',
      lat: 45.448352,
      lng: -122.782611,
      custom: 'Stop by Amazon Books for complimentary gift wrapping (with purchase) and a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '1 Garden State Plaza Blvd, Paramus, NJ 07652',
      lat: 40.918167,
      lng: -74.076275,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '1259 Broadway Plaza, Walnut Creek, CA 94596',
      lat: 37.895827,
      lng: -122.058647,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '15125 N Scottsdale Road Scottsdale, AZ 85254',
      lat: 33.624401,
      lng: -111.922813,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '4752 Admiralty Way Marina del Rey, CA 90292',
      lat: 33.978278,
      lng: -118.437258,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '1000 N Swarthmore Avenue, Pacific Palisades, CA 90272',
      lat: 34.047425,
      lng: -118.525536,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '4545 La Jolla Village Drive San Diego, CA 92122',
      lat: 32.871051,
      lng: -117.213414,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '333 Santana Row, Ste. 1120 San Jose, CA 95128',
      lat: 37.32148,
      lng: -121.948148,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '1 W Flatiron Crossing Dr Broomfield, CO 80021',
      lat: 39.93362,
      lng: -105.133358,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '2787 E. 2nd Avenue Denver, CO 80206',
      lat: 39.719623,
      lng: -104.954919,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '3040 M Street NW Washington, D.C. 20007',
      lat: 38.904935,
      lng: -77.060494,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '3443 N Southport Ave Chicago, IL 60657',
      lat: 41.944734,
      lng: -87.663548,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '7117 Arlington Rd Bethesda, MD 20814',
      lat: 38.981097,
      lng: -77.098212,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '246 Legacy Place Dedham, MA 02026',
      lat: 42.232152,
      lng: -71.17745,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '1115 Market St Lynnfield, MA 01940',
      lat: 42.517123,
      lng: -71.036078,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '10 Columbus Circle New York, NY 10019',
      lat: 40.768551,
      lng: -73.983195,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '2126 Abbott Martin Road Nashville, TN 37215',
      lat: 36.107304,
      lng: -86.816074,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '11700 Rock Rose Austin, TX 78758',
      lat: 30.403347,
      lng: -97.722604,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '500 Baybrook Mall Friendswood, TX 77546',
      lat: 29.543688,
      lng: -95.149266,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '128 Bellevue Square Bellevue, WA 98004',
      lat: 47.615759,
      lng: -122.203388,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon Books',
      address: '4601 26th Avenue NE Seattle, WA 98105',
      lat: 47.661805,
      lng: -122.300107,
      custom: 'Stop by Amazon Books over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '8401 Park Meadows Center Dr, Lone Tree, CO 80124',
      lat: 39.561711,
      lng: -104.874727,
      custom: 'Stop by Amazon 4-star for complimentary gift wrapping (with purchase) and a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '2601 Preston Rd, Frisco, TX 75034',
      lat: 33.099203,
      lng: -96.811322,
      custom: 'Stop by Amazon 4-star for complimentary gift wrapping (with purchase) and a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '1787 Fourth St, Berkeley, CA 94710',
      lat: 37.870634,
      lng: -122.300666,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '7014 E Camelback Rd, Scottsdale, AZ 85251',
      lat: 33.502902,
      lng: -111.92948,
      custom: 'Stop by Amazon 4-star for complimentary gift wrapping (with purchase) and a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '1232 Burlingame Ave Burlingame, CA 94010',
      lat: 37.578988,
      lng: -122.347284,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '6600 Topanga Canyon Blvd Canoga Park, CA 91303',
      lat: 34.186216,
      lng: -118.605056,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '1702 Redwood Highway Corte Madera, CA 94925',
      lat: 37.930025,
      lng: -122.514218,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '839 Americana Way Glendale, CA 91210',
      lat: 34.144448,
      lng: -118.257026,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '6420 E. Pacific Coast Highway, Suite E115, Long Beach, CA 90803',
      lat: 33.757267,
      lng: -118.111943,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '100 N Water Street Norwalk, CT 06845',
      lat: 41.104441,
      lng: -73.41865,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '4200 Conroy Road Orlando, FL 32839',
      lat: 28.485468,
      lng: -81.432003,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '3101 PGA Boulevard Palm Beach Gardens, FL 33410',
      lat: 26.848419,
      lng: -80.083831,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '4400 Ashford-Dunwoody Rd Atlanta, GA 30346',
      lat: 33.924234,
      lng: -84.341577,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '2228 Oakbrook Center Oak Brook, IL 60523',
      lat: 41.851074,
      lng: -87.953706,
      custom: 'Stop by Amazon 4-star for complimentary gift wrapping (with purchase) and a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '4999 Old Orchard Center Skokie, IL 60077',
      lat: 42.061515,
      lng: -87.749039,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '7101 Democracy Blvd Bethesda, MD 20817',
      lat: 39.024138,
      lng: -77.146001,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '1245 Worcester St Natick, MA 01760',
      lat: 42.301041,
      lng: -71.383695,
      custom: 'Stop by Amazon 4-star for complimentary gift wrapping (with purchase) and a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '2800 W Big Beaver Rd Troy, MI 48084',
      lat: 42.562728,
      lng: -83.184685,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '200 South Ave Bloomington, MN 55425',
      lat: 44.85353,
      lng: -93.240513,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '1155 Saint Louis Galleria St. Louis, MO 63117',
      lat: 38.636079,
      lng: -90.348046,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '1400 Willowbrook Mall Wayne, NJ 07470',
      lat: 40.888708,
      lng: -74.259381,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '72 Spring Street New York, NY 10012',
      lat: 40.722426,
      lng: -73.997837,
      custom: 'Stop by Amazon 4-star for complimentary gift wrapping (with purchase) and a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '4325 Glenwood Avenue Raleigh NC, 27612',
      lat: 35.8383,
      lng: -78.678599,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '1201 Lake Woodlands Drive The Woodlands, TX 77380',
      lat: 30.164599,
      lng: -95.456055,
      custom: 'Stop by Amazon 4-star for complimentary gift wrapping (with purchase) and a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '3000 184th Street SW Lynnwood, WA 98037',
      lat: 47.830749,
      lng: -122.270902,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '2101 Westlake Avenue Seattle, WA 98121',
      lat: 47.616469,
      lng: -122.338177,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Amazon 4-star',
      address: '535 Southcenter Seattle WA 98188',
      lat: 47.45866,
      lng: -122.259525,
      custom: 'Stop by Amazon 4-star over Packed Weekend to snag a free The Pack dog bandana',
      url: 'https://www.amazon.com/b?ie=UTF8&node=17784699011',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Pawtiques',
      address: '4207 Tom Davis Dr, Annandale, VA 22003',
      lat: 38.83162,
      lng: -77.19105,
      custom: 'Pawtiques will be providing free nail trims to all dogs that stop by on Friday and Saturday! Show the Pawtiques Instagram post to receive this complimentary treat!',
      url: 'http://www.mypawtiques.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Fido To Go - Chicago',
      address: '400 East South Water Street, Chicago, IL 60601',
      lat: 41.88671,
      lng: -87.61675,
      custom: 'On Nov. 21st from 8am-12pm, buy 4 dog cookies get 1 cookie free + The Pack prize!',
      url: 'https://fido-to-go-inc-2.square.site/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Bow Wow Meow Menlo Park',
      address: '654 Santa Cruz Ave, Menlo Park, CA 94025',
      lat: 37.45241,
      lng: -122.18435,
      custom: 'On November 20th, the first 50 customers will receive a free specialty item + The Pack promo item (while supplies last)',
      url: 'https://bowwowmeow.net',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Bow Wow Meow SF',
      address: '2150 Polk St, San Francisco, CA 94109',
      lat: 37.79667,
      lng: -122.42162,
      custom: 'On November 20th, the first 50 customers will receive a free specialty item + The Pack promo item (while supplies last)',
      url: 'https://bowwowmeow.net',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Bow Wow Meow San Carlos',
      address: '737 Laurel St, San Carlos, CA 94070',
      lat: 37.50467,
      lng: -122.25891,
      custom: 'On November 20th, the first 50 customers will receive a free specialty item + The Pack promo item (while supplies last)',
      url: 'https://bowwowmeow.net',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Bark Social',
      address: '11878 Grand Park Ave, North Bethesda, MD 20852',
      lat: 39.05046,
      lng: -77.11742,
      custom: 'Visit the @Bark_Social Pop-Up Shop and receive a free package of Sweet Potato Treats with a purchase of $40 or more! Also check out www.BarkSocial.com and use PackedWeekend15 for a 15% off discount!',
      url: 'https://barksocial.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'The Shops at Columbus Circle - NEW YORK',
      address: '10 Columbus Circle, New York, NY 10019',
      lat: 40.76843,
      lng: -73.98307,
      custom: 'Visit the Guest Services Desk on the Ground Floor of The Shops at Columbus Circle for a special treat!',
      url: 'https://www.theshopsatcolumbuscircle.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'La Contenta Oeste - NEW YORK',
      address: '78 West 11th Street, New York, NY 10011',
      lat: 40.73518,
      lng: -73.99814,
      custom: 'Dine with your canine amigo and get a complimentary beef slider for your dog (outdoor seating only).',
      url: 'https://www.instagram.com/lacontentanyc/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Noble Beast: Natural Market for Pets',
      address: '1005 E Camelback Rd, Phoenix, AZ 85014',
      lat: 33.509139,
      lng: -112.060324,
      custom: 'Noble Beast: Natural Market For Pets will offer 20% Off Any Dog Car Harness or Carrier during Packed Weekend. In addition, the first 25 people each day, who make a purchase for their dog and mention THE PACK (11/21 & 11/22), will receive a FREE bag of Sedona Naturals Liver Chips.',
      url: 'https://www.noblebeastpets.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Doggie Style Pets',
      address: '2000 Hamilton St, Philadelphia, PA 19130',
      lat: 39.962181,
      lng: -75.172188,
      custom: 'Visit any Doggie Style Pets on Packed Weekend and take 10% OFF select Kurgo products. Their premium harnesses, carriers and travel accessories are designed so you and your pup can go further together.',
      url: 'https://www.doggiestylepets.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Doggie Style Pets',
      address: '1434 Frankford Ave, Philadelphia, PA 19125',
      lat: 39.97268,
      lng: -75.13446,
      custom: 'Visit any Doggie Style Pets on Packed Weekend and take 10% OFF select Kurgo products. Their premium harnesses, carriers and travel accessories are designed so you and your pup can go further together.',
      url: 'https://www.doggiestylepets.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Doggie Style Pets',
      address: '315 Market St, Philadelphia, PA 19106',
      lat: 39.950539,
      lng: -75.146179,
      custom: 'Visit any Doggie Style Pets on Packed Weekend and take 10% OFF select Kurgo products. Their premium harnesses, carriers and travel accessories are designed so you and your pup can go further together.',
      url: 'https://www.doggiestylepets.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Doggie Style Pets',
      address: '701 Montgomery Ave, Narberth, PA 19072',
      lat: 40.01176,
      lng: -75.2613,
      custom: 'Visit any Doggie Style Pets on Packed Weekend and take 10% OFF select Kurgo products. Their premium harnesses, carriers and travel accessories are designed so you and your pup can go further together.',
      url: 'https://www.doggiestylepets.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Doggie Style Pets',
      address: '861 N 3rd St, Philadelphia, PA 19123',
      lat: 39.961411,
      lng: -75.14328,
      custom: 'Visit any Doggie Style Pets on Packed Weekend and take 10% OFF select Kurgo products. Their premium harnesses, carriers and travel accessories are designed so you and your pup can go further together.',
      url: 'https://www.doggiestylepets.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Doggie Style Pets',
      address: '1700 E Passyunk Ave, Philadelphia, PA 19148',
      lat: 39.92865,
      lng: -75.165123,
      custom: 'Visit any Doggie Style Pets on Packed Weekend and take 10% OFF select Kurgo products. Their premium harnesses, carriers and travel accessories are designed so you and your pup can go further together.',
      url: 'https://www.doggiestylepets.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Doggie Style Pets',
      address: '1032 Pine St, Philadelphia, PA 19107',
      lat: 39.944599,
      lng: -75.159447,
      custom: 'Visit any Doggie Style Pets on Packed Weekend and take 10% OFF select Kurgo products. Their premium harnesses, carriers and travel accessories are designed so you and your pup can go further together.',
      url: 'https://www.doggiestylepets.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Doggie Style Pets',
      address: '715 S 2nd St, Philadelphia, PA 19147',
      lat: 39.939869,
      lng: -75.145699,
      custom: 'Visit any Doggie Style Pets on Packed Weekend and take 10% OFF select Kurgo products. Their premium harnesses, carriers and travel accessories are designed so you and your pup can go further together.',
      url: 'https://www.doggiestylepets.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Doggie Style Pets',
      address: '2102 South St #102, Philadelphia, PA 19146',
      lat: 39.94495,
      lng: -75.1772,
      custom: 'Visit any Doggie Style Pets on Packed Weekend and take 10% OFF select Kurgo products. Their premium harnesses, carriers and travel accessories are designed so you and your pup can go further together.',
      url: 'https://www.doggiestylepets.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Doggie Style Pets',
      address: '1635 Spruce St, Philadelphia, PA 19103',
      lat: 39.947861,
      lng: -75.169441,
      custom: 'Visit any Doggie Style Pets on Packed Weekend and take 10% OFF select Kurgo products. Their premium harnesses, carriers and travel accessories are designed so you and your pup can go further together.',
      url: 'https://www.doggiestylepets.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Cherry Hill Mall',
      address: '2000 NJ-38, Cherry Hill, NJ 08002',
      lat: 39.941158,
      lng: -75.025414,
      custom: 'Family Pet Photos is every Monday this holiday. Starting on November 16th the first 50 guests to pose with Santa will receive The Pack promo item for your pooch (one per family, while supplies last).',
      url: 'https://cherryhillmall.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Moorestown Mall',
      address: '400 NJ-38, Moorestown, NJ 08057',
      lat: 39.96151,
      lng: -74.930588,
      custom: 'Family Pet Photos is every Monday this holiday. Starting on November 16th the first 50 guests to pose with Santa will receive The Pack promo item for your pooch (one per family, while supplies last).',
      url: 'https://moorestown-mall.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Cumberland Mall',
      address: '3849 S Delsea Dr, Vineland, NJ 08360',
      lat: 39.432461,
      lng: -75.038429,
      custom: 'Family Pet Photos is every Monday this holiday. Starting on November 16th the first 50 guests to pose with Santa will receive The Pack promo item for your pooch (one per family, while supplies last).',
      url: 'https://cumberlandmallnj.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Fashion District',
      address: 'Market St, Philadelphia, PA 19107',
      lat: 39.951721,
      lng: -75.15831,
      custom: 'Fashionistas. Foodies. Fun Seekers. On Nov 20th visit the 9th & Market Concierge Desk at The District in Center City to receive The Pack promo item for your pooch (one p/ family, while supplies last).',
      url: 'https://fashiondistrictphiladelphia.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Willow Grove Park',
      address: '2500 W Moreland Rd, Willow Grove, PA 19090',
      lat: 40.162949,
      lng: -75.116508,
      custom: 'Family Pet Photos is every Monday this holiday. Starting on November 16th the first 50 guests to pose with Santa will receive The Pack promo item for your pooch (one per family, while supplies last).',
      url: 'https://willowgroveparkmall.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Plymouth Meeting',
      address: '500 W Germantown Pike, Plymouth Meeting, PA 19462',
      lat: 40.113899,
      lng: -75.285309,
      custom: 'Family Pet Photos is every Monday this holiday. Starting on November 16th the first 50 guests to pose with Santa will receive The Pack promo item for your pooch (one per family, while supplies last).',
      url: 'https://shopplymouthmeetingmall.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Springfield Mall',
      address: '1250 Baltimore Pike, Springfield, PA 19064',
      lat: 39.914822,
      lng: -75.351883,
      custom: 'Family Pet Photos is every Monday this holiday. Starting on November 16th the first 50 guests to pose with Santa will receive The Pack promo item for your pooch (one per family, while supplies last).',
      url: 'https://shopspringfieldmall.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Exton Square',
      address: '260 Exton Square Pkwy, Exton, PA 19341',
      lat: 40.03231,
      lng: -75.623283,
      custom: 'Family Pet Photos is every Monday this holiday. Starting on November 16th the first 50 guests to pose with Santa will receive The Pack promo item for your pooch (one per family, while supplies last).',
      url: 'https://extonsquare.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Vinnys Pet Shop - NEW YORK',
      address: '451 Bay Ridge Ave, Brooklyn, NY 11220',
      lat: 40.63415,
      lng: -74.02195,
      custom: 'Stop by all weekend and receive 10% off your entire order!',
      url: 'https://www.facebook.com/vinnyspetshop/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'The Shops and Restaurants at Hudson Yards - NEW YORK',
      address: '20 Hudson Yards, New York, NY 10001',
      lat: 40.753873,
      lng: -74.001424,
      custom: 'Visit us to receive giveaways on L2 and find more deals from your favorite pet retailers.',
      url: 'https://www.hudsonyardsnewyork.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Bushwick Bark Knickerbocker - NEW YORK',
      address: '175 Knickerbocker Ave Brooklyn, NY 11237',
      lat: 40.70409,
      lng: -73.92712,
      custom: 'Vist us to receive free a pack of Woof Sticks for anyone who mentions The Pack.',
      url: 'https://www.instagram.com/bushwickbark/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Bushwick Bark Irving - NEW YORK',
      address: '181 Irving Ave Brooklyn, NY 11237',
      lat: 40.70217,
      lng: -73.919418,
      custom: 'Vist us to receive free a pack of Woof Sticks for anyone who mentions The Pack.',
      url: 'https://www.instagram.com/bushwickbark/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'The Big Screen at Hudson Yards Viewing Party – NEW YORK',
      address: '20 Hudson Yards, New York, NY 10001',
      lat: 40.753946,
      lng: -74.002391,
      custom: 'Join us on 11/21 at 1PM for The Pack viewing party on The Big Screen at Hudson Yards.',
      url: 'https://www.hudsonyardsnewyork.com',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'JustFoodForDogs - West Hollywood',
      address: '7870 Santa Monica Blvd, CA 90046',
      lat: 34.090712,
      lng: -118.361278,
      custom: 'Stop by any JustFoodForDogs Kitchen to receive a free box of PantryFresh. Fresh whole-food meals perfect for adventuring with your pup! New customers only, while supplies last.',
      url: 'https://www.justfoodfordogs.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'JustFoodForDogs - Sherman Oaks',
      address: '13900 Ventura Blvd, Sherman Oaks CA 91423',
      lat: 34.148456,
      lng: -118.435144,
      custom: 'Stop by any JustFoodForDogs Kitchen to receive a free box of PantryFresh. Fresh whole-food meals perfect for adventuring with your pup! New customers only, while supplies last.',
      url: 'https://www.justfoodfordogs.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'JustFoodForDogs - Costa Mesa',
      address: '103 E 17th St, Costa Mesa, CA 92626',
      lat: 33.635539,
      lng: -117.923339,
      custom: 'Stop by any JustFoodForDogs Kitchen to receive a free box of PantryFresh. Fresh whole-food meals perfect for adventuring with your pup! New customers only, while supplies last.',
      url: 'https://www.justfoodfordogs.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'JustFoodForDogs - Manhattan Beach',
      address: '1605 N Sepulveda Blvd, Manhattan Beach, CA 90266',
      lat: 33.890228,
      lng: -118.39631,
      custom: 'Stop by any JustFoodForDogs Kitchen to receive a free box of PantryFresh. Fresh whole-food meals perfect for adventuring with your pup! New customers only, while supplies last.',
      url: 'https://www.justfoodfordogs.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'JustFoodForDogs - Del Mar',
      address: '3485 Del Mar Heights Rd, San Diego, CA 92130',
      lat: 32.953162,
      lng: -117.231318,
      custom: 'Stop by any JustFoodForDogs Kitchen to receive a free box of PantryFresh. Fresh whole-food meals perfect for adventuring with your pup! New customers only, while supplies last.',
      url: 'https://www.justfoodfordogs.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'JustFoodForDogs - Corte Madera',
      address: '139 Corte Madera Town Center, Corte Madera, CA 94925',
      lat: 37.927576,
      lng: -122.517861,
      custom: 'Stop by any JustFoodForDogs Kitchen to receive a free box of PantryFresh. Fresh whole-food meals perfect for adventuring with your pup! New customers only, while supplies last.',
      url: 'https://www.justfoodfordogs.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'JustFoodForDogs - South Lake Union',
      address: '513 Westlake Ave N, Seattle, WA 98109',
      lat: 47.624037,
      lng: -122.338705,
      custom: 'Stop by any JustFoodForDogs Kitchen to receive a free box of PantryFresh. Fresh whole-food meals perfect for adventuring with your pup! New customers only, while supplies last.',
      url: 'https://www.justfoodfordogs.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'JustFoodForDogs - Union Square',
      address: '860 Broadway, New York, NY 10003',
      lat: 40.737253,
      lng: -73.989796,
      custom: 'Stop by any JustFoodForDogs Kitchen to receive a free box of PantryFresh. Fresh whole-food meals perfect for adventuring with your pup! New customers only, while supplies last.',
      url: 'https://www.justfoodfordogs.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'JustFoodForDogs - Chicago/Lincoln Park',
      address: '1983 N Clybourn Ave, Chicago, IL 60614',
      lat: 41.917553,
      lng: -87.658443,
      custom: 'Stop by any JustFoodForDogs Kitchen to receive a free box of PantryFresh. Fresh whole-food meals perfect for adventuring with your pup! New customers only, while supplies last.',
      url: 'https://www.justfoodfordogs.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'PetLondon - London\'s Leading Pet Boutique',
      address: '16 Wigmore Street, London W1U 2RF, United Kingdom',
      lat: 51.51681,
      lng: -0.14708,
      custom: 'Visit Pet London online store that delivers worldwide & enter our Packed Weekend social competition to win a gift box of pet goodies!',
      url: 'http://www.petlondon.net',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Pioneer Supermarket UWS - NEW YORK',
      address: '289 Columbus Ave, New York, NY 10023',
      lat: 40.77847,
      lng: -73.9778,
      custom: 'Stop by the store and mention THE PACK 11/20-11/22 to receive a special gift!',
      url: 'https://www.pioneersupermarkets.com',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'PIQ at Hudson Yards - NEW YORK',
      address: '20 Hudson Yards, Level 4 New York, NY 10001',
      lat: 40.753133,
      lng: -74.001338,
      custom: 'Receive 20% off dog accessories during Packed Weekend. Excludes Marc Tetro merchandise.',
      url: 'https://www.hudsonyardsnewyork.com/shop/piq',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'H&M at Hudson Yards - NEW YORK',
      address: '20 Hudson Yards, Level 4 New York, NY 10001',
      lat: 40.752995,
      lng: -74.000795,
      custom: 'Receive 20% off one full price item of choice during Packed Weekend.',
      url: 'https://www.hudsonyardsnewyork.com/shop/hm',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Doggie Style Pets - San Diego',
      address: '1980 Kettner Blvd, San Diego, CA 92101',
      lat: 32.724703,
      lng: -117.169976,
      custom: 'Visit any Doggie Style Pets on Packed Weekend and take 10% OFF select Kurgo products. Their premium harnesses, carriers and travel accessories are designed so you and your pup can go further together.',
      url: 'https://www.doggiestylepets.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'LondonWoof - The Best Doggy Daycare in London',
      address: 'Gunnersbury Sports Club, Park Place, London W38JY, United Kingdom',
      lat: 51.495813,
      lng: -0.280825,
      custom: 'Visit any Doggie Style Pets on Packed Weekend and take 10% OFF select pet travel products like harnesses, carriers and travel accessories are designed so you and your pup can go further together.',
      url: 'https://www.londonwoof.com/',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Barks N\' Rec - Chicago',
      address: '3030 N Lincoln Avenue, Chicago, IL 60657',
      lat: 41.93686,
      lng: -87.66492,
      custom: 'Purchase any treats for 15% + receive a Packed Weekend promo item.',
      url: 'https://www.realdogmomsofchicago.com/events-blog/a-packed-weekend',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Bentley\'s Pet Stuff - Rogers Park (Chicago)',
      address: '1257 W Devon Ave, Chicago, IL 60660',
      lat: 41.99794,
      lng: -87.66266,
      custom: '10 for $10 for participating members for the heavenly hounds calming treats (retail value: $3.99 each).',
      url: 'https://www.realdogmomsofchicago.com/events-blog/a-packed-weekend',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Bentley\'s Pet Stuff - West Loop (Chicago)',
      address: '334 N. Des Plaines St. Chicago, IL 60661',
      lat: 41.88788,
      lng: -87.6449,
      custom: '10 for $10 for participating members for the heavenly hounds calming treats (retail value: $3.99 each).',
      url: 'https://www.realdogmomsofchicago.com/events-blog/a-packed-weekend',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Bentley\'s Pet Stuff - Old Town (Chicago)',
      address: '1201 N. Wells St. Chicago, IL 60610',
      lat: 41.904179,
      lng: -87.634373,
      custom: '10 for $10 for participating members for the heavenly hounds calming treats (retail value: $3.99 each).',
      url: 'https://www.realdogmomsofchicago.com/events-blog/a-packed-weekend',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Bentley\'s Pet Stuff - Lakeview (Chicago)',
      address: '3657 N Southport Ave, Chicago, IL 60613',
      lat: 41.949031,
      lng: -87.663745,
      custom: '10 for $10 for participating members for the heavenly hounds calming treats (retail value: $3.99 each).',
      url: 'https://www.realdogmomsofchicago.com/events-blog/a-packed-weekend',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'Bentley\'s Pet Stuff - Evanston',
      address: '743 Chicago Ave, Evanston, IL 60202',
      lat: 42.031746,
      lng: -87.678661,
      custom: '10 for $10 for participating members for the heavenly hounds calming treats (retail value: $3.99 each).',
      url: 'https://www.realdogmomsofchicago.com/events-blog/a-packed-weekend',
      tags: [
        'tag_shop'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
    },
    {
      title: 'The Neighborhood Vet - NEW YORK',
      address: '1101 Broadway, Brooklyn, NY 11221',
      lat: 40.69435,
      lng: -73.93002,
      custom: 'On Nov 21+22, the first 50 customers each day will receive the discounted rate of $25 Microchips + $10 Rabies Vaccinations.',
      url: 'https://theneighborhoodvet.org',
      tags: [
        'tag_health'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-health-blue.png'
    },
    {
      title: 'Bond Vet UWS - NEW YORK',
      address: '352 Amsterdam Ave, New York, NY 10024',
      lat: 40.78169,
      lng: -73.97962,
      custom: 'Only during Packed Weekend use code PACKED at booking for $50 off your first visit.',
      url: 'https://www.instagram.com/bondvetclinic/',
      tags: [
        'tag_health'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-health-blue.png'
    },
    {
      title: 'Bond Vet Cobble Hill - NEW YORK',
      address: '217 Court St, Brooklyn, NY 11201',
      lat: 40.6866,
      lng: -73.99352,
      custom: 'Only during Packed Weekend use code PACKED at booking for $50 off your first visit.',
      url: 'https://www.instagram.com/bondvetclinic/',
      tags: [
        'tag_health'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-health-blue.png'
    },
    {
      title: 'Bond Vet UES - NEW YORK',
      address: '1049 3rd Ave, NY, NY, 10065',
      lat: 40.7632,
      lng: -73.96507,
      custom: 'Only during Packed Weekend use code PACKED at booking for $50 off your first visit.',
      url: 'https://www.instagram.com/bondvetclinic/',
      tags: [
        'tag_health'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-health-blue.png'
    },
    {
      title: 'Bond Vet Chelsea - NEW YORK',
      address: '555 6th Ave, New York, NY 10011',
      lat: 40.738529,
      lng: -73.996498,
      custom: 'Only during Packed Weekend use code PACKED at booking for $50 off your first visit.',
      url: 'https://www.instagram.com/bondvetclinic/',
      tags: [
        'tag_health'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-health-blue.png'
    },
    {
      title: 'Village West Veterinary - Chicago',
      address: '840 N Western Ave, Chicago, IL 60622',
      lat: 41.89691,
      lng: -87.68719,
      custom: 'Purchase a Heartworm with Tick Exposure testing with your routine dog exam and receive a prize on behalf of The Pack (while supplies last).',
      url: 'https://www.villagewestvet.com/',
      tags: [
        'tag_health'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-health-blue.png'
    },
    {
      title: 'West Loop Veterinary Care - Pets Connect Us - CHICAGO',
      address: '815 W Randolph St, Chicago, IL 60607',
      lat: 41.88408,
      lng: -87.64832,
      custom: 'First time visitors will receive a prize on behalf of The Pack, along with their puppy kits! (while supplies last).',
      url: 'https://westloopvet.com/',
      tags: [
        'tag_health'
      ],
      icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-health-blue.png'
    },
    {
    title: 'Chaparral Veterinary Medical Clinic',
    address: '32100 N. Cave Creek Rd. Cave Creek, AZ 85331',
    lat: 33.7766,
    lng: 111.9787,
    custom: 'Free exam with purchase of vaccinations and 50% off of anal gland expressions and toenail trims.',
    url: 'https://www.cahosp.com/',
    tags: ['tag_health'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-health-blue.png'
  },
  {
    title: 'Mucho Mas Art Studio',
    address: '1736A E. McDowell Road Phoenix, AZ 85006',
    lat: 33.46603,
    lng: -112.04389,
    custom: 'The first 10 people who make a purchase on Saturday, 11/21 and Sunday, 11/22 and say code words: \'THE PACK\' will receive a FREE ceramic dog bowl, hand-crafted & hand-painted by Kathy Cano-Murillo herself!',
    url: 'https://muchomasartstudio.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'My Pet Market',
    address: '20028 N 67th Ave, Glendale, AZ 85308',
    lat: 33.66601,
    lng: -112.2049,
    custom: '50% off all holiday items. The first 10 people who make a dog related purchase and mention THE PACK will also receive a free gift, courtesy of The Pack, on Saturday, Nov. 21st.',
    url: 'https://www.mypetmarket.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'My Pet Market',
    address: '20511 N Hayden Rd #130, Scottsdale, AZ 85255',
    lat: 33.67206,
    lng: -111.90507,
    custom: '50% off all holiday items. The first 10 people who make a dog related purchase and mention THE PACK will also receive a free gift, courtesy of The Pack, on Saturday, Nov. 21st.',
    url: 'https://www.mypetmarket.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'My Pet Market',
    address: '15745 N Hayden Rd #G114, Scottsdale, AZ 85260',
    lat: 33.62851,
    lng: -111.89336,
    custom: '50% off all holiday items. The first 10 people who make a dog related purchase and mention THE PACK will also receive a free gift, courtesy of The Pack, on Saturday, Nov. 21st.',
    url: 'https://www.mypetmarket.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'My Pet Market',
    address: '10677 N Scottsdale Rd Ste 101, Scottsdale, AZ 85254',
    lat: 33.58353,
    lng: -111.92457,
    custom: '50% off all holiday items. The first 10 people who make a dog related purchase and mention THE PACK will also receive a free gift, courtesy of The Pack, on Saturday, Nov. 21st.',
    url: 'https://www.mypetmarket.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'My Pet Market',
    address: '4719 N 20th St Ste A30, Phoenix, AZ 85016',
    lat: 33.44916,
    lng: -112.03945,
    custom: '50% off all holiday items. The first 10 people who make a dog related purchase and mention THE PACK will also receive a free gift, courtesy of The Pack, on Saturday, Nov. 21st.',
    url: 'https://www.mypetmarket.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'My Pet Market',
    address: '2915 W Ray Rd #8, Chandler, AZ 85224',
    lat: 33.318694,
    lng: -111.892025,
    custom: '50% off all holiday items. The first 10 people who make a dog related purchase and mention THE PACK will also receive a free gift, courtesy of The Pack, on Saturday, Nov. 21st.',
    url: 'https://www.mypetmarket.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'My Pet Market',
    address: '4719 N 20th St Ste A30, Phoenix, AZ 85016',
    lat: 33.507132,
    lng: -112.037755,
    custom: '50% off all holiday items. The first 10 people who make a dog related purchase and mention THE PACK will also receive a free gift, courtesy of The Pack, on Saturday, Nov. 21st.',
    url: 'https://www.mypetmarket.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Puppy Luv Animal Rescue Thrift Store',
    address: '7171 E Cave Creek Rd # P, Cave Creek, AZ 85331',
    lat: 33.827978,
    lng: -111.924443,
    custom: '25% off any item in the shop.',
    url: 'http://www.puppyluvar.com/flea-market',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Edelweiss Biergarten',
    address: '2625 E Bell Rd, Phoenix, AZ 85032',
    lat: 33.6401,
    lng: -112.025,
    custom: '10% off your bill, all weekend, for those that bring their dog!',
    url: 'http://www.edelweissphoenix.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'The Creek Patio Grill',
    address: '28244 N Tatum Blvd, Cave Creek, AZ 85331',
    lat: 33.7422,
    lng: -111.9796,
    custom: 'On Saturday, 11/21, you are invited to receive a FREE puppuccino (cup of whipped cream) for your dog, with any purchase, courtesy of The Pack!',
    url: 'https://thecreekpatiogrill.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'The Conservatory at Hudson Yards - NEW YORK',
    address: '20 Hudson Yards, Level 1 New York, NY 10001',
    lat: 40.753154,
    lng: -74.001466,
    custom: 'Receive a complimentary hot chocolate with any Furry Friends purchase.',
    url: 'https://www.hudsonyardsnewyork.com/shop/conservatory',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Los Angeles Animal Services - Los Angeles',
    address: '221 N Figueroa St #600, Los Angeles, CA 90012',
    lat: 34.05927,
    lng: -118.251087,
    custom: 'Packed Weekend is the perfect time to adopt from LA Animal Services! Visit laanimalservices.com to participate in our Happy Furry Giving event between 11/21-11/22 to receive $50 off adoption fees.',
    url: 'https://www.laanimalservices.com/',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Petes Breakfast House - Ventura',
    address: 'PARKING LOT on corner of Catalina and Main- 2055, E Main St, Ventura, CA 93001',
    lat: 34.278085,
    lng: -119.269444,
    custom: 'Stop by Petes Breakfast House over Packed Weekend with your pup to receive a complimentary order from our special Yappy Days Menu with the purchase of two regular adult meals, while supplies last!',
    url: 'https://www.petesbreakfasthouse.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Camp Bow Wow Albany',
    address: '136 Railroad Ave, Albany, New York, 12205',
    lat: 42.70446,
    lng: -73.8285,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/albany',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Albuquerque',
    address: '3228 Los Arboles Ave NE Albuquerque, New Mexico 87107',
    lat: 35.1138,
    lng: -106.609,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/albuquerque',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Allentown',
    address: '470 Business Park Lane, Allentown, Pennsylvania 18109',
    lat: 40.6284,
    lng: -75.4568,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/allentown',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Alpharetta',
    address: '1755 Grassland Pkwy, Alpharetta Georgia 30004',
    lat: 34.143,
    lng: -84.2488,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/alpharetta',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Anaheim',
    address: '1431 N Daly St Anaheim California 92806',
    lat: 33.854457,
    lng: -117.887,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/anaheim',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Ann Arbor',
    address: '552 State Circle Ann Arbor Michigan 48108',
    lat: 42.23458,
    lng: -83.7406,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/ann-arbor',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Aurora',
    address: '1620 S. Abilene St Unit A Aurora Colorado 80012',
    lat: 39.6883,
    lng: -104.826,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/aurora',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Austin',
    address: '13900 IH-35, Austin Texas 78728',
    lat: 30.4278106,
    lng: -97.6712,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/austin',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Austin SW',
    address: '5200 Electric Ave, Spicewood Texas 78669',
    lat: 30.341477,
    lng: -98.041379,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/austin-sw',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Avondale',
    address: '1050 Fairway Drive, #111 Avondale Arizona 85323',
    lat: 33.4534,
    lng: -112.324,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/avondale',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Avondale PA',
    address: '1 London Way, Avondale PA 19311',
    lat: 39.835817,
    lng: -75.79313,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/avondale-pa',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Baton Rouge',
    address: '7195 Pecue Lane, Baton Rouge Louisiana 70817',
    lat: 30.38601,
    lng: -91.0412,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/baton-rouge',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Bedford Heights',
    address: '23380 Aurora Rd, Bedford Heights Ohio 44146',
    lat: 41.4173,
    lng: -81.5155,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/bedford-heights',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Bellingham',
    address: '244 Maple Street, Bellingham Massachusetts 2019',
    lat: 42.104637,
    lng: -71.4479,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/bellingham',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Bentonville',
    address: '1403 SW 14th St, Bentonville Arkansas 72712',
    lat: 36.357205,
    lng: -94.2235,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/bentonville',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Bixby',
    address: '14992 S. Grant St, Bixby Oklahoma 74008',
    lat: 35.94648,
    lng: -95.8903,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/bixby',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Bloomfield',
    address: '122 West Dudley Town Road, Bloomfield Connecticut 6002',
    lat: 41.860804,
    lng: -72.716878,
    custom: 'Opening Soon! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/bloomfield',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Boise',
    address: '3430 South T.K. Ave, Boise Idaho 83705',
    lat: 43.5939,
    lng: -116.199,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/boise',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Boulder',
    address: '3631 Pearl Street, Boulder Colorado 80301',
    lat: 40.024332,
    lng: -105.247,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/boulder',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Brentwood',
    address: '103 Technology Court, Suite F, Brentwood California 94513',
    lat: 37.94546,
    lng: -121.697872,
    custom: 'Opening Soon! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/brentwood',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Bridgewater',
    address: '10 W Chimney Rock Road, Bound Brook New Jersey 8805',
    lat: 40.571153,
    lng: -74.5621,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/bridgewater',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Brighton Township',
    address: '3829 South Old US Highway 23, Brighton Township Michigan 48114',
    lat: 42.5479054,
    lng: -83.7515,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/brighton-township',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Burnsville',
    address: '14305 Ewing Avenue S, Burnsville Minnesota 55306',
    lat: 44.7438,
    lng: -93.3273,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/burnsville',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Byron Center',
    address: '1310 60th St SW, Byron Center Michigan 49315',
    lat: 42.855246,
    lng: -85.695612,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/byron-center',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Carmel',
    address: '489 Gradle Drive, Carmel Indiana 46032-2535',
    lat: 39.964356,
    lng: -86.1334,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/carmel',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Cary',
    address: '107 Woodwinds Industrial Court, Cary North Carolina 27511',
    lat: 35.761978,
    lng: -78.8199,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/cary',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Castle Rock',
    address: '500 1st St, Castle Rock Colorado 80104',
    lat: 39.370292,
    lng: -104.857,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/castle-rock',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Cedar Rapids',
    address: '860 N 20th Ave, Hiawatha Iowa 52233',
    lat: 42.045332,
    lng: -91.6996,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/cedar-rapids',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Centennial',
    address: '7009 S Kenton St, Centennial Colorado 80112',
    lat: 39.589717,
    lng: -104.860377,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/centennial',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Charleston',
    address: '1745 Clements Ferry Rd, Charleston South Carolina 29492',
    lat: 32.9164058,
    lng: -79.8969,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/charleston',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Charlotte Metro',
    address: '4900 Chastain Ave, Charlotte North Carolina 28217',
    lat: 35.17578,
    lng: -80.8828,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/charlotte-metro',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Cherry Hill',
    address: '3 Esterbrook Ln., Suite 250 Cherry Hill New Jersey 8003',
    lat: 40.0692,
    lng: -74.5358,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/cherry-hill',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Cincinnati',
    address: '4955 Creek Rd, Cincinnati Ohio 45242',
    lat: 39.257957,
    lng: -84.3727,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/cincinnati',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Clarkston',
    address: '6374 Sashabaw Rd,Clarkston Michigan 48346',
    lat: 42.7202,
    lng: -83.379,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/clarkston',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Colleyville',
    address: '1840 Norwood Plaza, Hurst Texas 76054',
    lat: 32.849676,
    lng: -97.167525,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/colleyville',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Colorado Springs Central',
    address: '4295 Northpark Drive, Colorado Springs Colorado 80907',
    lat: 38.8937,
    lng: -104.828,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/colorado-springs-central',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Colorado Springs East',
    address: '1020 Ford Street, Unit 120 Colorado Springs Colorado 80915',
    lat: 38.8464,
    lng: -104.712,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/colorado-springs-east',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Columbia, MD',
    address: '7165 Oakland Mills Rd, Columbia Maryland 21046',
    lat: 39.1757,
    lng: -76.829,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/columbia-md',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Columbia, SC',
    address: '655 Superior St, Columbia South Carolina 29205',
    lat: 33.980961,
    lng: -81.014073,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/columbia-sc',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Columbus - Grandview Heights',
    address: '1006 Dublin Rd, Columbus Ohio 43215',
    lat: 39.971475,
    lng: -83.039828,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/columbus-grandview-heights',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Commerce Township',
    address: '4373 Plant Drive, Commerce Township Michigan 48390',
    lat: 42.5529,
    lng: -83.4822,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/commerce-township',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Concord',
    address: '8010 Myint Ln, Ste. 110 Concord North Carolina 28027',
    lat: 35.402484,
    lng: -80.7166,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/concord',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Coppell',
    address: '769 S MacArthur Blvd, Suite 233 Coppell Texas 75101',
    lat: 32.9543,
    lng: -96.9593,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/coppell',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Covington',
    address: '14279 Highway 1085, Covington Louisiana 70433',
    lat: 30.474716,
    lng: -90.1214,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/covington',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Cranberry',
    address: '41 Progress Ave, Cranberry PA 16066',
    lat: 40.708541,
    lng: -80.108709,
    custom: 'Opening soon! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/cranberry',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Cuyahoga Falls',
    address: '1403 Main Street, Cuyahoga Falls Ohio 44221',
    lat: 41.1233,
    lng: -81.4834,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/cuyahoga-falls',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Cypress',
    address: '16641 Telge Road, Cypress Texas 77429',
    lat: 30.016293,
    lng: -95.655426,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/cypress',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Dallas',
    address: '1800 Irving Blvd, Dallas Texas 75207',
    lat: 32.7937,
    lng: -96.8243,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/dallas',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Dallas High Five',
    address: '13730 Floyd Circle, Dallas Texas 75243',
    lat: 32.93315,
    lng: -96.7479,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/dallas-high-five',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Delaware North',
    address: '301 Ruthar Drive, Newark Delaware 19711',
    lat: 39.69048,
    lng: -75.698,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/delaware-north',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Denver Central',
    address: '1221 S. Cherokee St., Denver Colorado 80223',
    lat: 39.694472,
    lng: -104.992,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/denver-central',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Denver LoDo',
    address: '3645 Brighton Blvd, Denver Colorado 80216',
    lat: 40.7597,
    lng: -73.9529,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/denver-lodo',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Denver SE',
    address: '2125 South Jasmine, Denver Colorado 80222',
    lat: 39.6776,
    lng: -104.919,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/denver-southeast',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Diablo Valley',
    address: '1395 Galindo St, Concord California 94520',
    lat: 37.971663,
    lng: -122.033002,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/diablo-valley',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Dobson Ranch Mesa',
    address: '2647 W Baseline Rd, Mesa Arizona 85202',
    lat: 33.378235,
    lng: -111.891726,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/dobson-ranch-mesa',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Duluth',
    address: '1795 Buford Hwy, Duluth Georgia 30097',
    lat: 34.0255,
    lng: -84.1043,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/duluth',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Duncanville',
    address: '519 E Highway 67, Duncanville Texas 75137',
    lat: 28.648,
    lng: -96.8917,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/duncanville',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Durham',
    address: '2612 South Miami Blvd, Durham North Carolina 27703',
    lat: 35.9297,
    lng: -78.8119,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/durham',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Eatontown',
    address: '284 Old Deal Road, Eatontown New Jersey 7724',
    lat: 40.2811,
    lng: -74.0392,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/eatontown',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Eden Prairie',
    address: '10100 Viking Drive, Suite 200, Eden Prairie Minnesota 55344',
    lat: 44.86054,
    lng: -93.404841,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/eden-prairie',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Edmond',
    address: '801 Centennial Blvd, Edmond Oklahoma 73013',
    lat: 35.6287,
    lng: -97.4946,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/edmond',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow El Cajon',
    address: '1677 N. Marshall Avenue, Suite A El Cajon California 92020',
    lat: 32.8178,
    lng: -116.976,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/el-cajon',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Elk Grove',
    address: '9263 Bendel Place, Elk Grove California 95624',
    lat: 38.3997,
    lng: -121.354,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/elk-grove',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Elmhurst',
    address: '641 S IL-83, Elmhurst Illinois 60126',
    lat: 41.877608,
    lng: -87.960553,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/elmhurst',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Elmwood Park',
    address: '53 Midland Ave, Elmwood Park New Jersey 7407',
    lat: 40.8965,
    lng: -74.1034,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/elmwood-park',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Fair Oaks',
    address: '8311 Greenback Ln,Fair Oaks California 95628',
    lat: 38.679051,
    lng: -121.253133,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/fair-oaks',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Flower Mound',
    address: '3434 Long Prairie Road, Suite 200 Flower Mound Texas 75028',
    lat: 33.032866,
    lng: -97.069197,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/flower-mound',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Fort Collins',
    address: '4103 S Mason Street, Fort Collins Colorado 80525',
    lat: 40.5301,
    lng: -105.08,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/fort-collins',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Fort Mill',
    address: '3536 Centre Circle Drive, Fort Mill South Carolina 29715',
    lat: 35.092594,
    lng: -80.924087,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/fort-mill',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Fort Worth East',
    address: '1751 Eastchase Parkway, Fort Worth Texas 76120',
    lat: 32.753604,
    lng: -97.170061,
    custom: 'Opening Soon! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/fort-worth-east',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Forth Worth West',
    address: '6411 Camp Bowie Blvd, Fort Worth Texas 76116',
    lat: 32.724866,
    lng: -97.423155,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/fort-worth-west',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Frederick',
    address: '1341 Hughes Ford Road, Suite 119 E Frederick Maryland 21701',
    lat: 39.416965,
    lng: -77.382373,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/frederick',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Golden',
    address: '13101 West 43rd Dr, Unit 102 Golden Colorado 80403',
    lat: 39.7773,
    lng: -105.147,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/golden',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Grand Prairie',
    address: '117 N Belt Line Road, Grand Prairie Texas 75050',
    lat: 32.746949,
    lng: -96.994902,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/grand-prairie',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Grand Rapids Airport',
    address: '4150 40th Street SE, Kentwood Michigan 49512',
    lat: 42.8916,
    lng: -85.5647,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/grand-rapids-airport',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Grapevine Airport',
    address: '1200 Texan Trail, Suite 300 Grapevine Texas 76051',
    lat: 32.930963,
    lng: -97.061336,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/grapevine-airport',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Greensboro',
    address: '6207 Chimney Center Boulevard, Greensboro North Carolina 27409',
    lat: 36.0618,
    lng: -79.9222,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/greensboro',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Greenville',
    address: '602 Airport Road, Suite A Greenville South Carolina 29607',
    lat: 34.8433,
    lng: -82.3452,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/greenville',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Halifax',
    address: '650 Portland St, Dartmouth Nova Scotia B2W6A3',
    lat: 44.67007,
    lng: -63.5225,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/halifax',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Henderson',
    address: '910 Wigwam, Suite 110 Henderson Nevada 89014',
    lat: 36.03622,
    lng: -115.024,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/henderson',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Hicksville',
    address: '174 Miller Place, Hicksville New York 11801',
    lat: 40.78449,
    lng: -73.5159,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/hicksville',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Highland Heights',
    address: '31 Alpha Park, Highland Heights Ohio 44143',
    lat: 41.547145,
    lng: -81.4514,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/highland-heights',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Hilliard',
    address: '5100 Nike Dr, Hilliard Ohio 43026',
    lat: 39.993849,
    lng: -83.1456,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/hilliard',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Hillsboro',
    address: '2900 SE Cornelius Pass Rd, Suite 2018 Hillsboro Oregon 97123',
    lat: 45.499635,
    lng: -122.901607,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/hillsboro',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Houston Greater Heights',
    address: '7232 Wynnwood Ln, Houston Texas 77008',
    lat: 29.794028,
    lng: -95.445859,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/houston-greater-heights',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Houston Hobby',
    address: '7803 Hansen Rd, Houston Texas 77061',
    lat: 29.65592,
    lng: -95.258157,
    custom: 'Opening Soon! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/houston-hobby',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Hudsonville',
    address: '3625 Quincy St, Hudsonville Michigan 49426',
    lat: 42.840828,
    lng: -85.872106,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/hudsonville',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Hutto',
    address: '600 Lemens Ave, Hutto Texas 78634',
    lat: 30.56461,
    lng: -97.587893,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/hutto',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Jacksonville',
    address: '8505 Baymeadows Rd, Jacksonville Florida 32256',
    lat: 30.2213,
    lng: -81.5817,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/jacksonville',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Kansas City Westport',
    address: '104 Westport Road, Kansas City Missouri 64111',
    lat: 39.054914,
    lng: -94.587871,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/kansas-city-westport',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Katy',
    address: '1515 Vander Wilt Lane, Bldg #5 Katy Texas 77449',
    lat: 29.790916,
    lng: -95.740446,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/katy',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Kemah',
    address: '300 Anders Lane, Kemah Texas 77565',
    lat: 29.525,
    lng: -95.0252,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/kemah',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Lafayette',
    address: '114 Eunice Street, Lafayette Louisiana 70508',
    lat: 30.184995,
    lng: -92.0046,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/lafayette',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Las Vegas',
    address: '5175 S Valley View Blvd, Las Vegas Nevada 89118',
    lat: 36.0958,
    lng: -115.19,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/las-vegas',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Lawrence',
    address: '10830 Pendleton Pike, Indianapolis Indiana 46236',
    lat: 39.86263,
    lng: -85.9756,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/lawrence',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Lawrenceville',
    address: '231 Bakers Basin Road, Lawrenceville New Jersey 8648',
    lat: 40.2734,
    lng: -74.7002,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/lawrenceville-nj',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Lawrencville GA',
    address: '585 Old Norcross Rd, Lawrenceville Georgia 30046',
    lat: 33.96148,
    lng: -84.0089,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/lawrencville-ga',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Lees Summit',
    address: '1010 SE Hamblen Rd, Lees Summit Missouri 64081',
    lat: 38.9007,
    lng: -94.3632,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/lees-summit',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Liberty',
    address: '1071 Brown Street, Liberty Missouri 64068',
    lat: 39.232896,
    lng: -94.432325,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/liberty',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Lil Campers St. Clair Shores',
    address: '23720 Greater Mack Ave, Saint Clair Shores Michigan 48080-4019',
    lat: 42.467779,
    lng: -82.896722,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/lil-campers-st-clair-shores',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Lincoln',
    address: '5930 South 57th Street, Lincoln Nebraska 68516',
    lat: 40.7561,
    lng: -96.6518,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/lincoln',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Littleton',
    address: '8121 S Grant Way, Littleton Colorado 80122',
    lat: 39.5692,
    lng: -104.985,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/littleton',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Live Oak',
    address: '13588 North Interstate 35, San Antonio Texas 78233',
    lat: 29.562722,
    lng: -98.337704,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/live-oak',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Longmont',
    address: '801 South Sherman Street, Longmont Colorado 80501',
    lat: 40.150775,
    lng: -105.116184,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/longmont',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Loveland',
    address: '1227 Des Moines Ave, Loveland Colorado 80537',
    lat: 40.404301,
    lng: -105.043308,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/loveland',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Matthews',
    address: '8635 Crown Crescent Ct, Charlotte North Carolina 28227',
    lat: 35.14221,
    lng: -80.7288,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/matthews',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow McHenry',
    address: '3107 West Route 120, McHenry Illinois 60051',
    lat: 42.34369,
    lng: -88.2586,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/mchenry',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow McKinney',
    address: '448 N Custer Rd, McKinney Texas 75071',
    lat: 33.206151,
    lng: -96.730221,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/mckinney',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Memphis Balmoral',
    address: '6108 Quince Road, Memphis Tennessee 38119',
    lat: 35.087159,
    lng: -89.859502,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/memphis-balmoral',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Memphis East',
    address: '2121 Whitten Rd, Memphis Tennessee 38133',
    lat: 36.311,
    lng: -82.3703,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/memphis-east',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Meridian',
    address: '2134 E. Franklin Road, Meridian Idaho 83642-9024',
    lat: 43.60606,
    lng: -116.36757,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/meridian',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Mid-City New Orleans',
    address: '3301 Conti Street, New Orleans Louisiana 70119',
    lat: 29.972382,
    lng: -90.09092,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/mid-city',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Middlesex',
    address: '288 Lincoln Blvd, Middlesex New Jersey 8846',
    lat: 40.565217,
    lng: -74.505,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/middlesex',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Midland Park',
    address: '95 Greenwood Ave, Midland Park New Jersey 7432',
    lat: 40.99487,
    lng: -74.1424,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/midland-park',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Monroe',
    address: '16642 146th St SE, Monroe Washington 98272',
    lat: 47.864356,
    lng: -122.007712,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/monroe',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Montgomery',
    address: '3712 Malcolm Drive, Montgomery Alabama 36116',
    lat: 32.32775,
    lng: -86.180752,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/montgomery',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Monument',
    address: '18985 Base Camp Road, Monument Colorado 80132',
    lat: 39.1074,
    lng: -104.863,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/monument',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Morris',
    address: '73 E Hanover Ave, Morristown New Jersey 7960',
    lat: 40.79601,
    lng: -74.4602,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/morris',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Mt Juliet',
    address: '3085 N. Mt Juliet Rd, Juliet Tennessee 37122',
    lat: 36.21294,
    lng: -86.515409,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/mt-juliet',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Myrtle Beach',
    address: '305 Bush Dr, Myrtle Beach South Carolina 29579',
    lat: 33.71823,
    lng: -78.9372,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/myrtle-beach',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Naples',
    address: '3382 Mercantile Ave, Naples Florida 34104',
    lat: 26.2117,
    lng: -81.7741,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/naples',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Nashville - Downtown',
    address: '470 Craighead Street, Nashville Tennessee 37204',
    lat: 36.126,
    lng: -86.769,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/nashville-downtown',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Near The Woodlands Area',
    address: '27616 Commerce Oaks Drive, Oak Ridge North Texas 77385',
    lat: 30.157856,
    lng: -95.4346,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/near-the-woodlands-area',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow New Lenox',
    address: '22032 Howell Drive, New Lenox Illinois 60451',
    lat: 41.487714,
    lng: -87.929406,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/new-lenox',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow New Orleans',
    address: '2731 Tchoupitoulas St, New Orleans Louisiana 70130',
    lat: 29.9208,
    lng: -90.0777,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/new-orleans-downtown',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow North Durham',
    address: '4310 Bennett Memorial Road, Durham North Carolina 27705',
    lat: 36.0305,
    lng: -78.9711,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/north-durham',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Oak Creek',
    address: '8411 S. Liberty Lane, Oak Creek Wisconsin 53154',
    lat: 42.891781,
    lng: -87.920174,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/oak-creek',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Oak Park',
    address: '6046 Roosevelt Road, Oak Park Illinois 60304',
    lat: 41.8657,
    lng: -87.7762,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/oak-park',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Olathe',
    address: '1150 W. 151st Street, Suite D Olathe Kansas 66061',
    lat: 38.855649,
    lng: -94.8357,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/olathe',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Parker',
    address: '10325 S Progress Way, Parker Colorado 80134',
    lat: 39.5303,
    lng: -104.769,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/parker',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Pearland',
    address: '2849 Old Chocolate Bayou Rd, Pearland Texas 77584',
    lat: 29.558332,
    lng: -95.347362,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/pearland',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Pensacola',
    address: '2410 Langley Avenue, Pensacola Florida 32504',
    lat: 30.488807,
    lng: -87.195119,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/pensacola',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Peoria AZ',
    address: '8550 N 91st Ave, Ste 55 Peoria Arizona 85345',
    lat: 33.5595,
    lng: -112.255,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/peoria',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Peoria IL',
    address: '1623 W Pioneer Pkwy, Peoria Illinois 61615',
    lat: 40.784138,
    lng: -89.618214,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/peoria-il',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Petroplex',
    address: '11310 WCR 100, Odessa Texas 79765',
    lat: 31.953961,
    lng: -102.401964,
    custom: 'Opening Soon! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/petroplex',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Philadelphia Northeast',
    address: '2850 Comly Road, Philadelphia Pennsylvania 19154',
    lat: 40.100768,
    lng: -74.9972,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/philadelphia-northeast',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Phoenix',
    address: '2136 East Indian School Road, Phoenix Arizona 85016',
    lat: 33.495354,
    lng: -112.035141,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/Phoenix',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Pittsburgh East',
    address: '1610 McClure Road, Monroevillle Pennsylvania 15146',
    lat: 40.47045,
    lng: -79.9057,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/pittsburgh-east',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Pittsburgh Highland Park',
    address: '1325 Washington Blvd, Pittsburgh Pennsylvania 15206',
    lat: 40.468115,
    lng: -79.9089,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/pittsburgh-highland-park',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Pittsburgh North',
    address: '2327 Babcock Blvd, Pittsburgh Pennsylvania 15237',
    lat: 40.5135,
    lng: -80.0026,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/pittsburgh-north',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Pittsburgh South',
    address: '971 Killarney Dr, Pittsburgh Pennsylvania 15234',
    lat: 40.3743,
    lng: -80.0072,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/pittsburgh-south',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Pittsburgh SW',
    address: '710 Trumbull Dr, Pittsburgh Pennsylvania 15205',
    lat: 40.4142,
    lng: -80.064,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/pittsburgh-southwest',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Plano',
    address: '2060 West Spring Creek Parkway, Suite 404 Plano Texas 75023',
    lat: 33.057603,
    lng: -96.731522,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/plano',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Plymouth',
    address: '2067 East Center Circle, Plymouth Minnesota 55441',
    lat: 45.005931,
    lng: -93.4302,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/plymouth',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Port Charlotte',
    address: '17266 Toledo Blade Blvd., Port Charlotte        Florida        33954',
    lat: 27.01955,
    lng: -82.16,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/port-charlotte',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Portland',
    address: '49 Blueberry Road, Portland Maine 4102',
    lat: 43.6528,
    lng: -70.3331,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/portland',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Powdersville',
    address: '110 Cooper Lane, Powdersville South Carolina 29642',
    lat: 34.784769,
    lng: -82.485695,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/powdersville',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Prairieville',
    address: '17545 Old Jefferson Hwy, Prairieville Louisiana 70769',
    lat: 30.323285,
    lng: -90.977876,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/prairieville',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Reno South',
    address: '7111 S. Virginia Street, Suites A1-A4 Reno Nevada 98511',
    lat: 39.461868,
    lng: -119.782987,
    custom: 'Opening Soon! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/reno-south',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Ridgefield',
    address: '5810 S 11th St, Ridgefield Washington 98606',
    lat: 45.807932,
    lng: -122.687432,
    custom: 'Opening Soon! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/ridgefield',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Ridgeland',
    address: '381 Highway 51, Ridgeland Mississippi 39157',
    lat: 32.420279,
    lng: -90.135401,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/ridgeland',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Rochester',
    address: '85 Mushroom Blvd, Rochester New York 14623',
    lat: 43.09,
    lng: -77.6178,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/rochester',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Rockaway',
    address: '428 Route 46, Rockaway New Jersey 7866',
    lat: 40.897925,
    lng: -74.4973,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/rockaway',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Rockland',
    address: '101 Route 304, Nanuet        New York        10954',
    lat: 40.723,
    lng: -73.9886,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/rockland-county',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Rowlett',
    address: '4604 Industrial St, Rowlett Texas 75088',
    lat: 32.906481,
    lng: -96.55926,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/rowlett',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow San Antonio Airport',
    address: '11931 Jones Maltsberger Rd, San Antonio Texas 78216',
    lat: 29.5507,
    lng: -98.4706,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/san-antonio-airport',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow San Antonio Northwest',
    address: '5811 Rocky Point, San Antonio Texas 78249',
    lat: 29.55858,
    lng: -98.6003,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/san-antonio-northwest',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow San Clemente',
    address: '220 Calle Pintoresco, San Clemente California 92672',
    lat: 33.4493,
    lng: -117.591,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/san-clemente',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Sandy',
    address: '9495 South 700 East, #2A Sandy Utah 84090',
    lat: 40.578834,
    lng: -111.870646,
    custom: 'Opening Soon! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/sandy',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Sarasota',
    address: '2101 17th Street, Sarasota Florida 34234',
    lat: 27.3522,
    lng: -82.5283,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/sarasota',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Scottsdale North',
    address: '7000 E. Mayo Blvd, Suite E04 Phoenix Arizona 85054',
    lat: 33.656731,
    lng: -111.932264,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/scottsdale-north',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Shelby Township',
    address: '50600 Central Industrial Drive, Shelby Township Michigan 48315',
    lat: 42.667259,
    lng: -83.000579,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/shelby-township',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Sherwood',
    address: '21655 SW Pacific Hwy, Suite 110 Sherwood Oregon 97140',
    lat: 45.365193,
    lng: -122.852307,
    custom: 'Opening Soon! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/sherwood',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Shreveport',
    address: '701 E Kings Hwy, Shreveport Louisiana 71105',
    lat: 32.479332,
    lng: -93.718753,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/shreveport',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Silverdale',
    address: '11762 Clear Creek Road, NW, Silverdale Washington 98383',
    lat: 47.670844,
    lng: -122.690626,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/silverdale',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Smyrna',
    address: '200 Weakley Lane, Smyrna Tennessee 37167',
    lat: 36.001929,
    lng: -86.495653,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/smyrna',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow South Asheville',
    address: '5 Airport Rd, Arden North Carolina 28704',
    lat: 35.458451,
    lng: -82.513954,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/south-asheville',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow South Salt Lake',
    address: '475 W 3600 South, Salt Lake City Utah 84115',
    lat: 40.693834,
    lng: -111.905,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/salt-lake-city',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow South Windsor',
    address: '1145 John Fitch Blvd, South Windsor Connecticut 6074',
    lat: 41.8363,
    lng: -72.6035,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/south-windsor',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Southport',
    address: '5311 Commerce Circle, Indianapolis Indiana 46327',
    lat: 39.654835,
    lng: -86.077658,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/southport',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Springfield East',
    address: '2814 S Freemont Ave, Ste 104 Springfield Missouri 65810',
    lat: 37.163872,
    lng: -93.270787,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/springfield-east',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Springfield West',
    address: '1900 W Sunset St, Springfield Missouri 65807',
    lat: 37.1667,
    lng: -93.3186,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/springfield-west',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow St. Clair Shores',
    address: '19795 E. 9 Mile Rd, St. Clair Shores Michigan 48080',
    lat: 42.4661,
    lng: -82.9182,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/st-clair-shores',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Stamford',
    address: '581 Hope St, Stamford Connecticut 6907',
    lat: 41.0794,
    lng: -73.5217,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/stamford',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Stone Oak',
    address: '20750 Stone Oak Parkway, San Antonio Texas 78258',
    lat: 29.649899,
    lng: -98.45795,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/stone-oak',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Strongsville',
    address: '14411 Foltz Parkway, Strongsville Ohio 44149',
    lat: 41.3096,
    lng: -81.8697,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/strongsville',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Stuart',
    address: '3483 SE Lionel Terrace, Stuart Florida 34997',
    lat: 27.148552,
    lng: -80.206168,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/stuart',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Sugar Land',
    address: '744 Crab River Rd, Sugar Land Texas 77469',
    lat: 29.545246,
    lng: -95.698065,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/sugar-land',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Summerlin',
    address: '210 S Rainbow Blvd, Las Vegas Nevada 89145',
    lat: 36.171802,
    lng: -115.245814,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/summerlin',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Swansea',
    address: 'Street Number TBD Grand Army of the Republic Hwy, Swansea Massachusetts 2777',
    lat: 41.743408,
    lng: -71.195345,
    custom: 'Opening Soon! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/swansea-ma',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Tampa Airport',
    address: '4624 N Grady Ave, Tampa Florida 33614',
    lat: 27.9859,
    lng: -82.5095,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/tampa',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Tampa South Shore',
    address: '12218 Balm Riverview Rd, Riverview Florida 33579',
    lat: 27.8195,
    lng: -82.2964,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/tampa-south-shore',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Temecula',
    address: '42192 Sarah Way, Temecula California 92590',
    lat: 33.5098,
    lng: -117.166,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/temecula',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Tonawanda',
    address: '231 Grand Island Blvd, Tonawanda New York 14150',
    lat: 42.9812,
    lng: -78.9111,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/tonawanda',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Tri Valley',
    address: '6430 Preston Ave, Suite F Livermore California 94550',
    lat: 37.7094,
    lng: -121.717,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/tri-valley',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Troy',
    address: '801 Stephenson Hwy, Troy Michigan 48083',
    lat: 42.5453,
    lng: -83.1287,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/troy',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Tucson',
    address: '16725 N Oracle Blvd., Tucson Arizona 85739',
    lat: 32.50987,
    lng: -110.926,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/tucson',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Tulsa',
    address: '142 S 147th East Ave, Tulsa Oklahoma 74116',
    lat: 36.1722,
    lng: -95.8123,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/tulsa',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Waco',
    address: '207 Colonnade Parkway, Woodway Texas 76712',
    lat: 31.503623,
    lng: -97.199834,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/waco',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Warner Robins',
    address: '925 Lake Joy Road, Warner Robins Georgia 31088',
    lat: 32.572872,
    lng: -83.691358,
    custom: 'Opening Soon! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/warner-robins',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Waukesha',
    address: '1707 Paramount Ct, Waukesha Wisconsin 53186',
    lat: 43.02365,
    lng: -88.1976,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/waukesha',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow West Mobile',
    address: '65 E Border Circle, Mobile Alabama 36695',
    lat: 30.689394,
    lng: -88.213413,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/west-mobile',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow West Seneca',
    address: '31 North America Drive, West Seneca New York 14224',
    lat: 42.81728,
    lng: -78.8395,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/west-seneca',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow West Warwick',
    address: '3 Keyes Way, West Warwick Rhode Island 2893',
    lat: 41.671296,
    lng: -71.507695,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/west-warwick',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Westlake',
    address: '863 Bradley Rd, Westlake Ohio 44145',
    lat: 41.4748,
    lng: -81.9603,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/westlake',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Westminster',
    address: '7577 W 103rd Ave, Suite 200 Westminster Colorado 80021',
    lat: 39.884572,
    lng: -105.078004,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/westminster',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Camp Bow Wow Woodstock',
    address: '12916 Hwy 92, Woodstock Georgia 30188',
    lat: 34.08715,
    lng: -84.472,
    custom: 'Seize the Play at Camp! Whether your pup is here for day care or overnight boarding, they\'ll have a blast playing with furry friends while cared for by our loving staff. Get your first day FREE!',
    url: 'https://www.campbowwow.com/woodstock',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Farm : Table',
    address: '754 Post St, San Francisco, CA 94109',
    lat: 37.78783,
    lng: -122.41433,
    custom: 'Stop by on November 21st or 22nd from 10AM-12PM with your furry friend for live music, a special promo item and a treat! (While supplies last)',
    url: 'https://www.farmtablesf.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Seattle Barkery',
    address: '2225 8th AVE Seattle, WA 98121',
    lat: 47.617774,
    lng: -122.340327,
    custom: 'Visit Seattle Barkerys Treat Shop during The Packed Weekend for free THE PACK swag and a complimentary treat when you mention the show!',
    url: 'https://www.theseattlebarkery.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Crown Hill Pet Supply',
    address: '9053 Holman Rd NW, Seattle, WA 98117',
    lat: 47.695656,
    lng: -122.374742,
    custom: 'Stop by during Packed Weekend to receive 10% off your purchase when you mention THE PACK.',
    url: 'https://www.crownhillpet.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Growlerz Seattle',
    address: '5269 Rainier Ave. S Seattle WA, 98118',
    lat: 47.554077,
    lng: -122.281333,
    custom: 'Stop by during Packed Weekend for half price entry and free gift!',
    url: 'https://www.growlerzseattle.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'AZ Mobile Spaws',
    address: '4545 N 36th St. Phoenix, AZ 85018',
    lat: 33.50326,
    lng: -112.0038,
    custom: 'New customers will receive a 15% discount off their first appointment booking with code PACKED15. Try our pet waste removal service & get a free first visit when mentioning Packed Weekend.',
    url: 'https://www.azspaws.com/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'The Muddy Mutt',
    address: '2603 S Oxford St,  Arlington, VA 22206',
    lat: 38.84489,
    lng: -77.09227,
    custom: 'Get your pup looking squeaky clean at The Muddy Mutt! Receive a prize pack from The Pack with the first 150 washes over Packed Weekend! Also head to @TheMuddyMutt to see how you can win a free wash!',
    url: 'https://www.themuddymutt.com/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'MSPCA Angell Animal Medical Center',
    address: '350 S Huntington Ave, Boston, MA 02130',
    lat: 42.322913,
    lng: -71.110354,
    custom: 'Through Nov. 20-23, MSPCA-Angell Medical Center visitors and patients checking in with their pets will receive a gift at check-in, while supplies last.',
    url: 'https://www.mspca.org/medical-centers/',
    tags: ['tag_health'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-health-blue.png'
  },
  {
    title: 'Night Shift Brewing',
    address: '87 Santilli Highway, Everett, MA 02149',
    lat: 42.406278,
    lng: -71.067927,
    custom: 'Join our Pack on Instagram @nightshiftbrewing for contest info and your chance to win Gift Cards and Night Shift swag!',
    url: 'https://nightshiftbrewing.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Night Shift Brewing',
    address: '1 Lovejoy Wharf, Boston, MA 02114',
    lat: 42.366717,
    lng: -71.059935,
    custom: 'Join our Pack on Instagram @nightshiftbrewing for contest info and your chance to win Gift Cards and Night Shift swag!',
    url: 'https://nightshiftbrewing.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '611 Assembly Row, Somerville MA 02145',
    lat: 42.395559,
    lng: -71.079462,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '1106 Boylston St., Boston MA 02115',
    lat: 42.347003,
    lng: -71.088588,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '150 Charles St. Boston MA 02114',
    lat: 42.360201,
    lng: -71.070953,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '311 Harvard St., Brookline MA 02445',
    lat: 42.343401,
    lng: -71.122912,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '4A College Ave., Somerville MA 02144',
    lat: 42.396947,
    lng: -71.122435,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '1313 Massachusetts Ave., Cambridge MA 02138',
    lat: 42.372822,
    lng: -71.117526,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '659 Centre St., Jamaica Plain MA 02130',
    lat: 42.312855,
    lng: -71.114331,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '704 Legacy Place, Dedham MA 02026',
    lat: 42.231196,
    lng: -71.177078,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '1618 Tremont St.  One Brigham Circle Boston MA 02120',
    lat: 42.333754,
    lng: -71.104162,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '173 Newbury St. Boston MA 02116',
    lat: 42.350707,
    lng: -71.079239,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '46 Langley Rd. Newton Centre, MA 02459',
    lat: 42.330732,
    lng: -71.192657,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '24 District Ave. Dorchester MA 02125',
    lat: 42.325261,
    lng: -71.062656,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '63 Central St., Wellesley MA 02482',
    lat: 42.296209,
    lng: -71.296306,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '397 West Broadway St., South Boston MA 02127',
    lat: 42.337186,
    lng: -71.048524,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'J.P. Licks',
    address: '661 VFW Parkway Chestnut Hill, MA 02467',
    lat: 42.296477,
    lng: -71.156875,
    custom: 'Stop by J.P. Licks and purchase their signature dog-friendly treat Cow Paws, a dairy free peanut butter dog treat topped with a kosher bone renamed \'Packed Paws,\' to receive promotional swag!',
    url: 'https://jplicks.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Polkadog Bakery',
    address: '33 Boylston St., Chestnut Hill MA 02467',
    lat: 42.322818,
    lng: -71.168708,
    custom: 'Stop by Polkadog Bakery for discounted \'3 Pack\' treats! Plus, all dogs & owners participating in The Pack Walk Challenge receive complimentary treats!',
    url: 'https://www.polkadog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Polkadog Bakery',
    address: '100 Derby St., Hingham MA 02043',
    lat: 42.178663,
    lng: -71.909097,
    custom: 'Stop by Polkadog Bakery for discounted \'3 Pack\' treats! Plus, all dogs & owners participating in The Pack Walk Challenge receive complimentary treats!',
    url: 'https://www.polkadog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Polkadog Bakery',
    address: '42 South St., Jamaica Plain MA 02130',
    lat: 42.308244,
    lng: -71.115218,
    custom: 'Stop by Polkadog Bakery for discounted \'3 Pack\' treats! Plus, all dogs & owners participating in The Pack Walk Challenge receive complimentary treats!',
    url: 'https://www.polkadog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Polkadog Bakery',
    address: '240 Market St., Lynnfield MA 01940',
    lat: 42.515258,
    lng: -71.032885,
    custom: 'Stop by Polkadog Bakery for discounted \'3 Pack\' treats! Plus, all dogs & owners participating in The Pack Walk Challenge receive complimentary treats!',
    url: 'https://www.polkadog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Polkadog Bakery',
    address: '57 Salem St., Boston MA 02113',
    lat: 42.363168,
    lng: -71.056041,
    custom: 'Stop by Polkadog Bakery for discounted \'3 Pack\' treats! Plus, all dogs & owners participating in The Pack Walk Challenge receive complimentary treats!',
    url: 'https://www.polkadog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Polkadog Bakery',
    address: '199 Seaport Blvd, Suite A, Boston MA 02110',
    lat: 42.351004,
    lng: -71.044737,
    custom: 'Stop by Polkadog Bakery for discounted \'3 Pack\' treats! Plus, all dogs & owners participating in The Pack Walk Challenge receive complimentary treats!',
    url: 'https://www.polkadog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Polkadog Bakery',
    address: '256 Shawmut Ave., Boston MA 02118',
    lat: 42.34326,
    lng: -71.068411,
    custom: 'Stop by Polkadog Bakery for discounted \'3 Pack\' treats! Plus, all dogs & owners participating in The Pack Walk Challenge receive complimentary treats!',
    url: 'https://www.polkadog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Emerald City Mobile Pet Grooming',
    address: '1230 SW 118th St, Burien, WA 98146',
    lat: 47.49767,
    lng: -122.35124,
    custom: 'The first 15 customers to book a future appointment with Emerald City Mobile Pet Grooming will receive a 20% discount on their service and free THE PACK swag when you mention the show!',
    url: 'https://burienpetgroomer.com/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'Seven Seas Roasting Co.',
    address: '1947 Fern St, San Diego, CA 92102',
    lat: 32.726276,
    lng: -117.129101,
    custom: 'Offering limited-edition dog-friendly drink, the Puppy Spiced Latte, & giving away free promotional items! Promotion only from Friday, November 20 - Sunday, November 22 while supplies last.',
    url: 'https://sevenseasroasting.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'FIDUS Pet Concierge',
    address: '10675 Calle Mar De Mariposa Suite 104, San Diego CA 92126',
    lat: 32.9131842,
    lng: -117.2285596,
    custom: 'Free Self Serve Dog Wash for first 10 customers! Call/Text to reserve, walk-ins OK 858-925-6152 * Nov 20-22, 2020 Only. First time clients. Not valid with any other offers. Cannot be redeemed for cash',
    url: 'https://fiduspet.com/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'Muttropolis',
    address: '227 South Cedros, Solana Beach, CA. 92075',
    lat: 32.989975,
    lng: -117.2725381,
    custom: 'A free gift with purchase over $40! Choose from Festive Holiday Paw Print Scarf or bag of Mutt Munchers. Mention Packed Weekend to receive. Solana Beach only. While supplies last. Offer valid Nov 20-22',
    url: 'https://muttropolis.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Top Doggy Day Care',
    address: 'Wandsworth Park SW18 2SX',
    lat: 51.456627,
    lng: -0.177365,
    custom: 'We know your dog is a top dog and deserves the very best! Book a walk, daycare or boarding with us during Packed Weekend and receive a pack of treats or bandana. Check out our bespoke services.',
    url: 'http://londontopdoggydaycare.co.uk/',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Dapper Dachshund Designs',
    address: 'London',
    lat: 51.35289,
    lng: -0.157797,
    custom: 'Treat your pooch this weekend and save 30% on the whole Dapper Collective range. We also have 15% off on all our other products, including our Christmas Collection and dog owner tote bags.',
    url: 'https://www.dapperdachshunddesigns.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Buddy & Bone',
    address: 'London',
    lat: 51.47965,
    lng: -0.14828,
    custom: 'Buddy&Bone are offering 20% OFF Sitewide with Code PACKEDWEEKEND20',
    url: 'http://www.buddyandbone.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'FrameYourPet - Customised Dog Portraits',
    address: 'London',
    lat: 51.597228,
    lng: -0.204934,
    custom: '10% off during Packed Weekend using our code : LOCKDOWN From framed wall prints to phone cases, we work with you, to ensure your portrait brings to life your pets personality.',
    url: 'https://www.frameyourpet.co.uk/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Taily - Organic Hemp Oil for Dogs',
    address: 'Online',
    lat: 51.512812,
    lng: -0.124219,
    custom: '20% discount on all our Hemp Oils that ease hip & joint stiffness caused by routine activity while helping keep your pet calm from normal levels of pet anxiety.',
    url: 'https://www.taily.co.uk/discount/PACKED20',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Big Pawfection',
    address: 'Woking',
    lat: 51.316772,
    lng: -0.560035,
    custom: 'Looking for Funky, Comfortable, Lightweight Dog Attire? Shop NOW using our Packed Weekend discount code to receive 25% off - PACKED25 for a look that is sure to get tails wagging!',
    url: 'https://big-pawfection.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Sassy Paws Collection',
    address: 'London',
    lat: 51.534608,
    lng: -0.046179,
    custom: 'Sassy Paws specialises in handmade dog accessories for pups across the world! we\'re so happy to be showcasing our products and are offering a 20% discount with the code THEPACK20',
    url: 'http://www.sassypawscollection.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Sassy Paws Collection',
    address: 'Surrey',
    lat: 51.2716099,
    lng: 0.6755469,
    custom: 'Sassy Paws specialises in handmade dog accessories for pups across the world! we\'re so happy to be showcasing our products and are offering a 20% discount with the code THEPACK20',
    url: 'http://www.sassypawscollection.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Blaze & Co',
    address: 'Essex',
    lat: 51.561351,
    lng: 0.58046,
    custom: 'Blaze&co is owned and ran by Selena, a veterinary nurse who produces natural grain free dog treats free from nasties',
    url: 'https://Www.blazeandcotreats.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Cuddle Club',
    address: 'London',
    lat: 51.560829,
    lng: -0.162942,
    custom: 'The Cuddle Club is offering 25% off on Dog Therapy Walks for the packed weekend and during the Packed challenge.',
    url: 'https://thecuddleclubuk.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Dandie Dog Cafe',
    address: '104 Heath Street, London, NW3 1DR',
    lat: 51.558809,
    lng: 0.178326,
    custom: 'Dandie Dog Cafe is offering 20% off our doggie and human retail selection on our website. Onesies, dog robes, bow ties...so many adorable yet practical goodies! Just use the code PACKED20.',
    url: 'https://www.dandie.co.uk/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Fur Experience',
    address: 'London',
    lat: 51.31429,
    lng: 0.0859,
    custom: 'Fur Experience is offering 25% off all pet parent experiences.',
    url: 'https://furexperience.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'South Suburban Humane Society - Homewood Adoption Center',
    address: '2207 183rd St. Homewood, IL 60430',
    lat: 41.557047,
    lng: -87.670294,
    custom: 'Visit the South Suburban Humane Societys website to see how the businesses of Homewood are celebrating Packed Weekend.',
    url: 'https://www.southsuburbanhumane.org/',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'La Voute/La Banque',
    address: '2034 Ridge Rd, Homewood, IL 60430',
    lat: 41.562715,
    lng: -87.666533,
    custom: 'Complimentary dog biscuit for guests (while supplies last).',
    url: 'https://www.lavoutebistro.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Vickies Fashion Jewelry LLC',
    address: '2025 Ridge Rd, Homewood, IL 60430',
    lat: 41.562214,
    lng: -87.666335,
    custom: '10% discount and complimentary dog treat (while supplies last).',
    url: 'https://www.vickiesfashionjewelry.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Suzies Hallmark Shop',
    address: '18065 Harwood Ave Ste 1, Homewood, IL 60430',
    lat: 41.561851,
    lng: -87.668197,
    custom: '10% discount on dog/cat items.',
    url: 'https://stores.hallmark.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Van Sipma Jewelers',
    address: '2011 Ridge Rd, Homewood, IL 60430',
    lat: 41.562241,
    lng: -87.665875,
    custom: 'Offering chance to win a $50 gift card for future jewelry purchase or repair and complimentary dog treat (while supplies last).',
    url: 'http://since1900.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Bottle & Bottega Homewood',
    address: '2009 Ridge Rd, Homewood, IL 60430',
    lat: 41.562035,
    lng: -87.665714,
    custom: '$5 off coupon and complimentary dog treat (while supplies last).',
    url: 'https://www.paintingwithatwist.com/studio/homewood',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Fedele and Milanec Accountants',
    address: '18110 Dixie Hwy #1s, Homewood, IL 60430',
    lat: 41.561294,
    lng: -87.665638,
    custom: 'Coupon for free accounting consultation and complimentary dog treat (while supplies last).',
    url: 'https://www.fedeleandmilanec.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Aurelios Pizza Homewood',
    address: '18162 Harwood Ave, Homewood, IL 60430',
    lat: 41.560094,
    lng: -87.668809,
    custom: 'Offering pizza swag and dog treat with orders (while supplies last).',
    url: 'https://www.aureliospizza.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Culture',
    address: '18031 Dixie Hwy, Homewood, IL 60430',
    lat: 41.562567,
    lng: -87.664986,
    custom: '15% discount and complimentary dog biscuit (while supplies last).',
    url: 'https://www.thatstheculture.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Homewood Science Center',
    address: '18022 Dixie Hwy, Homewood, IL 60430',
    lat: 41.563127,
    lng: -87.665881,
    custom: 'Offering at-home science kit and complimentary dog treats (while supplies last).',
    url: 'https://www.homewoodsciencecenter.org/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Jonathan Kane Salon & Spa',
    address: '18065 Harwood Ave, Homewood, IL 60430',
    lat: 41.561633,
    lng: -87.667998,
    custom: 'Offering complimentary Aveda samples and dog treats.',
    url: 'http://jonathankanesalonspa.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Nail Savvy',
    address: '18104 Martin Ave, Homewood, IL 60430',
    lat: 41.561789,
    lng: -87.667391,
    custom: 'Complimentary dog biscuit and dog watering station (while supplies last).',
    url: 'https://mynailsavvy.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Melody Mart',
    address: '18062 Dixie Hwy, Homewood, IL 60430',
    lat: 41.561837,
    lng: -87.665588,
    custom: '15% discount and complimentary dog treat (while supplies last).',
    url: 'https://www.melodymartusa.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'UpsaDaisy Boutique',
    address: '18100 Martin Ave, Homewood, IL 60430',
    lat: 41.561894,
    lng: -87.667099,
    custom: '15% off purchase and free dog biscuit (while supplies last).',
    url: 'https://upsadaisyboutique.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Vida Tacos',
    address: '18102 Martin Ave, Homewood, IL 60430',
    lat: 41.561754,
    lng: -87.666936,
    custom: '25% off all orders.',
    url: 'https://vidatacosrestaurant.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Art 4 Soul',
    address: '18135 Harwood Ave # 1, Homewood, IL 60430',
    lat: 41.560303,
    lng: -87.668106,
    custom: 'Free dog biscuit and dog watering station (while supplies last).',
    url: 'https://art4soul.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog Dockside at Wrentham Village Premium Outlets',
    address: '1 Premium Outlet Blvd. Suite 330 Wrentham, Massachusetts 02093',
    lat: 42.03926,
    lng: -71.353328,
    custom: 'Take a photo with your dog in front of your local Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog General Store at Faneuil Hall',
    address: '1 Faneuil Hall Market Place South Market Bldg., #4 Boston, Massachusetts 02109',
    lat: 42.359893,
    lng: -71.054135,
    custom: 'Take a photo with your dog in front of your local Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog Chatham General Store',
    address: '628 Main St. Chatham, Massachusetts 02633',
    lat: 41.682688,
    lng: -69.960309,
    custom: 'Take a photo with your dog in front of your local Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog Nantucket General Store',
    address: '32 Main Street Nantucket, Massachusetts 02554',
    lat: 41.283328,
    lng: -70.09828,
    custom: 'Take a photo with your dog in front of your local Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog Edgartown Main Street General Store',
    address: '11 Main St. Edgartown, Massachusetts 02539',
    lat: 41.389268,
    lng: -70.512476,
    custom: 'Take a photo with your dog in front of your local Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog Newbury Port General Store',
    address: '37 State St. Newburyport, Massachusetts 01950',
    lat: 42.810222,
    lng: -70.86986,
    custom: 'Take a photo with your dog in front of your local Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog Circuit Ave Oak Bluffs General Store',
    address: '37 Circuit Ave. Oak Bluffs, Massachusetts 02557',
    lat: 41.455663,
    lng: -70.558478,
    custom: 'Take a photo with your dog in front of your local Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog Mashpee Commons General Store',
    address: '20 Steeple St. Mashpee, Massachusetts 02649',
    lat: 41.616625,
    lng: -70.490903,
    custom: 'Take a photo with your dog in front of your local Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog Rockport General Store',
    address: '25 Bearskin Neck Rd. Rockport, Massachusetts 01966',
    lat: 42.659493,
    lng: -70.616018,
    custom: 'Take a photo with your dog in front of your local Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog Vineyard Haven General Store',
    address: '5 Water St. Vineyard Haven, Massachusetts 02568',
    lat: 41.454387,
    lng: -70.600805,
    custom: 'Take a photo with your dog in front of your local Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog Falmouth General Store',
    address: '214 Main St. Falmouth, Massachusetts 02540',
    lat: 41.552347,
    lng: -70.616134,
    custom: 'Take a photo with your dog in front of your local Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog Provincetown General Store',
    address: '293 Commercial St. Provincetown, Massachusetts 02657',
    lat: 42.051383,
    lng: -70.186284,
    custom: 'Take a photo with your dog in front of your local Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog BD Gear',
    address: '11B Water St. Vineyard Haven, Massachusetts 02568',
    lat: 41.454184,
    lng: -70.600811,
    custom: 'Take a photo with your dog in front of your local Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog Whitefoot for Kids General Store',
    address: '20A Beach St. Vineyard Haven, Massachusetts 02568',
    lat: 41.454491,
    lng: -70.600206,
    custom: 'Take a photo with your dog in front of your local Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Black Dog Outlet in Wareham Crossing',
    address: '2421 Cranberry Highway Suite 406 Wareham, Massachusetts 02571',
    lat: 41.77624,
    lng: -70.743627,
    custom: 'Take a photo with your dog in front of your local MA Black Dog store, and post it to social media with the hashtag #BlackDogPack during Packed Weekend to enter-to-win our Black Dog Pack Prize Pack!',
    url: 'https://www.theblackdog.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'New York Therapy Animals - NEW YORK',
    address: '233 Broadway, NY, NY 10279',
    lat: 41.500069,
    lng: -74.01783,
    custom: 'On 11/22 at 1PM, join us virtually with your furry friends for an afternoon of tricks, games, giveaways + more!',
    url: 'https://www.facebook.com/events/2838773386358394?active_tab=about',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Lazy Sundaes LES - NEW YORK',
    address: '23 Clinton Street, New York, NY, 10002',
    lat: 40.72067,
    lng: -73.98454,
    custom: 'Bring your dog in & get $5 off your order of $15+.',
    url: 'https://www.instagram.com/lazysundaes/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Lazy Sundaes Greenwich Village - NEW YORK',
    address: '11 Waverly Place, New York, NY, 10003',
    lat: 40.73028,
    lng: -73.99404,
    custom: 'Bring your dog in & get $5 off your order of $15+.',
    url: 'https://www.instagram.com/lazysundaes/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Lazy Sundaes Canal Street Market - NEW YORK',
    address: '265 Canal Street, New York, NY, 10013',
    lat: 40.71902,
    lng: -74.00099,
    custom: 'Bring your dog in & get $5 off your order of $15+.',
    url: 'https://www.instagram.com/lazysundaes/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'London Dog Week',
    address: 'London',
    lat: 51.511245,
    lng: -0.180894,
    custom: 'London Dog Week will celebrate Packed Weekend with giveaways, interviews and lots of cool content across our channels!',
    url: 'https://londondogweek.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Create & Engrave Gifts',
    address: 'London',
    lat: 51.483218,
    lng: -0.084033,
    custom: 'Use discount code PACKEDWEEKEND for big discounts and a free gift with every order on personalised doggy toy/ treat boxes, plaques, serveware and so much more! All exclusively designed by us.',
    url: 'https://www.createandengrave.co.uk/petshop',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Create & Engrave Gifts',
    address: 'Melton Mowbray',
    lat: 52.754314,
    lng: -0.888106,
    custom: 'Use discount code PACKEDWEEKEND for big discounts and a free gift with every order on personalised doggy toy/ treat boxes, plaques, serveware and so much more! All exclusively designed by us.',
    url: 'https://www.createandengrave.co.uk/petshop',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Amy Balch Artist',
    address: 'London',
    lat: 51.510096,
    lng: -0.127661,
    custom: 'Get your pet immortalised with 20% discount on stylish, hand painted portraits of your dogs in pen, ink and acrylic by contemporary artist Amy Balch. Coupon applies to large commissions of 50x70cm/60x60cm on paper.',
    url: 'https://www.amybalch.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Amy Balch Artist',
    address: 'Crewkerne',
    lat: 50.883099,
    lng: -2.79582,
    custom: 'Get your pet immortalised with 20% discount on stylish, hand painted portraits of your dogs in pen, ink and acrylic by contemporary artist Amy Balch. Coupon applies to large commissions of 50x70cm/60x60cm on paper.',
    url: 'https://www.amybalch.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Macy & Hugo\'s Dog Grooming',
    address: 'Leeds',
    lat: 53.79923,
    lng: -1.543635,
    custom: 'Luxury grooming & wellness packages including vegan banana facials, pawdicures and ultrasound teeth cleaning! We also offer fine dog clothing and accessories with a dog photo wall & red carpet.',
    url: 'https://www.macyandhugos.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Macy & Hugo\'s Dog Grooming',
    address: '-',
    lat: 51.518348,
    lng: -0.15009,
    custom: 'Luxury grooming & wellness packages including vegan banana facials, pawdicures and ultrasound teeth cleaning! We also offer fine dog clothing and accessories with a dog photo wall & red carpet.',
    url: 'https://www.macyandhugos.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Bijou and Co.',
    address: 'London',
    lat: 51.523667,
    lng: 0.145611,
    custom: '20% Discount on the entire Bijou & Co website with the code : PACKEDWEEKEND',
    url: 'https://bijouandco.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Bijou and Co.',
    address: 'Online',
    lat: 22.23316,
    lng: 114.308198,
    custom: '20% Discount on the entire Bijou & Co website with the code : PACKEDWEEKEND',
    url: 'https://bijouandco.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },  
  {
    title: 'Hercabella',
    address: 'Huddersfield',
    lat: 53.5939648,
    lng: -1.6987966,
    custom: 'Hercabella is a British born brand specialising in Luxury Tailor Lined Apparel for Dogs. Fabrics are sourced from England\'s textile mills who supply fabric to some of the worlds top fashion houses.',
    url: 'https://www.hercabella.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Hercabella',
    address: 'London',
    lat: 51.525905,
    lng: -0.122571,
    custom: 'Hercabella is a British born brand specialising in Luxury Tailor Lined Apparel for Dogs. Fabrics are sourced from England\'s textile mills who supply fabric to some of the worlds top fashion houses.',
    url: 'https://www.hercabella.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'DIRTY DOG',
    address: 'Preston',
    lat: 53.764452,
    lng: -2.709341,
    custom: 'DIRTY DOG are offering 20% off sitewide using code: PACKED\nVegan, Cruelty Free, Dog Shampoo Bars, Grooming Products & Accessories.',
    url: 'https://www.dirtydog.uk/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'DIRTY DOG',
    address: 'London',
    lat: 51.515357,
    lng: -0.132168,
    custom: 'DIRTY DOG are offering 20% off sitewide using code: PACKED\nVegan, Cruelty Free, Dog Shampoo Bars, Grooming Products & Accessories.',
    url: 'https://www.dirtydog.uk/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Sud Woofers',
    address: '3501 Albion Pl N, Seattle, WA 98103',
    lat: 47.65001,
    lng: -122.3449,
    custom: 'The first 10 customers that book a future appointment during the Packed Weekend will get a 10% discount and promotional items. Just mention THE PACK!',
    url: 'https://www.sudwoofersgrooming.com/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'Aspen Grove Shopping Center',
    address: '7301 S Santa Fe Dr, Littleton, CO 80120',
    lat: 39.586542,
    lng: -105.023733,
    custom: 'Visit Aspen Grove and shop with your pup! Various dog-friendly stores will be offering treats, discounts and giveaways over Packed Weekend.',
    url: 'https://aspengrovecenter.com/event-listings/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Chick-fil-A',
    address: '7301 S Santa Fe Dr, Suite 900, Littleton, CO 80120',
    lat: 39.585255,
    lng: -105.024078,
    custom: 'Chick-fil-A will give out free dog treats to any pups who ride through the drive-thru.',
    url: 'https://aspengrovecenter.com/retailer/chick-fil-a/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'CJ Banks',
    address: '7301 S Santa Fe Dr, Suite 528, Littleton, CO 80120',
    lat: 39.584481,
    lng: -105.026622,
    custom: 'Enter to win a prize PACK, which includes dog socks and a set of dog masks from CJ Banks, when you post a photo of your pup at Aspen Grove on IG with the hashtags #AspenGroveLovesDogs and #ThePack.',
    url: 'https://aspengrovecenter.com/retailer/cj-banks/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Claires',
    address: '7301 S Santa Fe Dr, Suite 150, Littleton, CO 80120',
    lat: 39.586317,
    lng: -105.023886,
    custom: 'Stop by Claires to receive a free dog treat bag (while supplies last), plus 10% off when you shop with your pup.',
    url: 'https://aspengrovecenter.com/retailer/claires/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Gifts from Colorado',
    address: '7301 S Santa Fe Dr, Suite 728, Littleton, CO 80120',
    lat: 39.582413,
    lng: -105.026108,
    custom: 'Stop by Gifts from Colorado with your pup to receive a free dog treat.',
    url: 'https://aspengrovecenter.com/event-listings/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'GoodTurn Cycles',
    address: '7301 S Santa Fe Dr, Suite 342, Littleton, CO 80120',
    lat: 39.586166,
    lng: -105.026077,
    custom: 'Stop by GoodTurn Cycles with your pup to receive a free dog treat.',
    url: 'https://aspengrovecenter.com/retailer/goodturn-electric-cycles/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Holiday Expressions',
    address: '7301 S Santa Fe Dr, Suite 616, Littleton, CO 80120',
    lat: 39.582306,
    lng: -105.025512,
    custom: 'Shop with your pup at Holiday Expressions and get 5% off your purchase.',
    url: 'https://aspengrovecenter.com/retailer/holiday-expressions/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'J.Jill',
    address: '7301 S Santa Fe Dr, Suite 512, Littleton, CO 80120',
    lat: 39.583749,
    lng: -105.026557,
    custom: 'Stop by J.Jill with your pup to receive a free dog treat.',
    url: 'https://aspengrovecenter.com/retailer/j-jill/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Lane Bryant',
    address: '7301 S Santa Fe Dr, Suite 230, Littleton, CO 80120',
    lat: 39.586427,
    lng: -105.025464,
    custom: 'Stop by Lane Bryant with your pup to receive a free dog treat.',
    url: 'https://aspengrovecenter.com/retailer/lane-bryant/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'My Favorite Things',
    address: '7301 S Santa Fe Dr, Suite 630, Littleton, CO 80120',
    lat: 39.586439,
    lng: -105.024919,
    custom: 'Stop by My Favorite Things for your chance to receive a free KONG giveaway.',
    url: 'https://aspengrovecenter.com/retailer/my-favorite-things/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'ROX Arts Gallery',
    address: '7301 S Santa Fe Dr, Suite 514, Littleton, CO 80120',
    lat: 39.586041,
    lng: -105.026098,
    custom: 'Stop by ROX Arts Gallery with your pup to receive a free dog treat.',
    url: 'https://aspengrovecenter.com/retailer/rox-arts-gallery/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Taspens Organics',
    address: '7301 S Santa Fe Dr, Suite 514, Littleton, CO 80120',
    lat: 39.584177,
    lng: -105.026791,
    custom: 'Stop by Taspens Organics to receive 50% off on all pet CBD products and free dog treats.',
    url: 'https://aspengrovecenter.com/retailer/taspens-organics/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Timbuk Toys',
    address: '7301 S Santa Fe Dr, Suite 345, Littleton, CO 80120',
    lat: 39.586229,
    lng: -105.026169,
    custom: 'Stop by Timbuk Toys to receive 20% off on all plush dogs.',
    url: 'https://aspengrovecenter.com/retailer/timbuk-toys/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: '303 Bakes',
    address: '7301 S Santa Fe Dr, Suite 625B, Littleton, CO 80120',
    lat: 39.583062,
    lng: -105.026528,
    custom: '303 Bakes will give the first 50 guests who come in with their pup a free mini pupcake.',
    url: 'https://aspengrovecenter.com/retailer/303bakes/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'New Balance',
    address: '7301 S Santa Fe Dr, Suite 520, Littleton, CO 80120',
    lat: 39.58407,
    lng: -105.02665,
    custom: 'Stop by New Balance with your pup to receive a free dog treat.',
    url: 'https://aspengrovecenter.com/retailer/new-balance/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Banana Republic',
    address: '7301 S Santa Fe Dr, Suite 430, Littleton, CO 80120',
    lat: 39.58504,
    lng: -105.026364,
    custom: 'Stop by Banana Republic with your pup to receive a free dog treat.',
    url: 'https://aspengrovecenter.com/event-listings/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Watering Bowl',
    address: '5411 Leetsdale Dr, Denver, CO 80246',
    lat: 39.708247,
    lng: -104.924242,
    custom: 'Bring your pup to The Pack Yappy Hour event at The Watering Bowl on 11/20 from 3pm-5pm! There will be dog-friendly vendors, giveaways & photo opps. They will also feature $5 Rescue Brews all weekend.',
    url: 'http://www.denverwateringbowl.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Lilys Baths & Biscuits',
    address: '4051 Tejon St, Denver, CO 80211',
    lat: 39.772663,
    lng: -105.011353,
    custom: 'Lilys Baths & Biscuits will give away goodie bags to the first 20 shoppers who mention The Pack.',
    url: 'https://www.lilysbathsandbiscuits.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Mobile Pet Shine',
    address: '6830 S Jordan Rd Unit 102, Centennial, CO 80112',
    lat: 39.59268,
    lng: -104.819151,
    custom: 'Mobile Pet Shine will give a 25% discount to anyone who schedules a service for their pup between Nov. 20-22. Call 720-815-6157 to schedule!',
    url: 'https://mobilepetshine.com/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'Carboy Winery Denver',
    address: '400 E 7th Ave, Denver, CO 80203',
    lat: 39.727159,
    lng: -104.982131,
    custom: 'Bring your pup to Carboy on 11/21 from 1-3pm! There will be to-go specials, giveaways & free nail trims for dogs. They will also feature $5 glasses of house wine & homemade dog treats all weekend.',
    url: 'https://www.carboywinery.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Three Dog Bakery',
    address: '1503 Boulder St, Denver, CO 80211',
    lat: 39.758574,
    lng: -105.011613,
    custom: 'Three Dog Bakery will give away a free Pack Pupcake to anyone who comes in with their pup and mentions \'The Pack!\' While supplies last.',
    url: 'https://threedogbakerydenver.com/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'Unexpected Palette / Artist Lisa DeBell',
    address: 'Denver, CO (No physical address)',
    lat: 39.723205,
    lng: -104.950566,
    custom: 'Unexpected Palette will offer a 15% discount on all their face masks that feature original doggy artwork by artist Lisa DeBell. Visit www.unexpectedpalette.com or email Lisamdebell@gmail.com to order!',
    url: 'https://www.unexpectedpalette.com/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'Canine Wellness Colorado',
    address: 'Denver, CO (No physical address)',
    lat: 39.766364,
    lng: -105.020665,
    custom: 'Canine Wellness Colorado will offer a 20% discount off an initial consultation & massage to anyone who books through Nov. 20-22 and mentions The Pack. Call 303-710-1294 to book your appointment!',
    url: 'http://www.caninewellnesscolorado.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Pup Tub',
    address: '3424 Bengal Blvd, Cottonwood Heights, UT 84121',
    lat: 40.6085,
    lng: -111.798017,
    custom: 'Pup Tub will offer 20% off tail tips, a $5 discount for self-serve baths & 15% off grooming to anyone who schedules a service between Nov. 20-22 and mentions The Pack. Call 801-943-3702 to schedule!',
    url: 'https://www.puptub.com/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'Hound & Cat',
    address: '129 E. 13800 S., B4, Draper, UT 84020',
    lat: 40.502906,
    lng: -111.88757,
    custom: 'Stop by Hound & Cat to receive 2-4-1 NuloChallenger Large Breed Dog Food and 3-4-2 Stews. Schedule a retail & self-serve grooming service & mention The Pack between Nov. 20-22 to receive 15% off!',
    url: 'https://houndandcat.com/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'Big Dog Pawn & Jewelry',
    address: '9361 South Redwood Road, West Jordan UT 84088',
    lat: 40.581457,
    lng: -111.938349,
    custom: 'Big Dog Pawn & Jewelry will offer a 20% discount on select items to anyone who comes and mentions \'The Pack\' They will also give away free dog treats!',
    url: 'https://www.bigdogpawn.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Big Dog Pawn & Jewelry',
    address: '6610 S. State St. Murray, UT 84107',
    lat: 40.628935,
    lng: -111.890437,
    custom: 'Big Dog Pawn & Jewelry will offer a 20% discount on select items to anyone who comes and mentions \'The Pack\' They will also give away free dog treats!',
    url: 'https://www.bigdogpawn.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Woody Dental',
    address: '5989 E Colfax Ave, Denver, CO 80220',
    lat: 39.740358,
    lng: -104.919074,
    custom: 'Woody Dental will provide $100 off Zoom Whitening, a free Invisalign consultation, OR $25 off a Sonicare toothbrush to anyone who calls on 11/20 and mentions \'The Pack!\' Call 303-388-9000 to schedule.',
    url: 'https://woodydentaldenver.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Peace on Earth Coffee',
    address: '35 N 300 W #200, Provo, UT 84601',
    lat: 40.234018,
    lng: -111.66418,
    custom: 'Peace on Earth loves doggos! They will give away free Puppuccinos and dog treats to anyone who comes in and mentions The Pack!',
    url: 'https://peaceonearthcoffee.squarespace.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Training Wheels Dog Behavior Consulting',
    address: '10234 W Dillon Rd, Broomfield, CO 80020',
    lat: 39.957787,
    lng: -105.113074,
    custom: 'Training Wheels Dog Behavior Consulting will offer new clients 20% off Initial Consults, which are one-hour sessions conducted via Zoom. Call 720-418-0550 to schedule or for more info.',
    url: 'https://www.trainingwheels.dog/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Wamiz',
    address: '10 Rue du Rendez-Vous, 75012 Paris',
    lat: 48.84524,
    lng: 2.40465,
    custom: 'Wamiz.com est le site numro 1 pour les amoureux des chiens en France. Participez au jeu-concours pour gagner 2 cartes cadeaux pour des abonnements Prime Amazon et regardez La Meute sur Prime Video.',
    url: 'https://wamiz.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'DirtyMutt',
    address: 'Cambridge',
    lat: 52.245111,
    lng: 0.106046,
    custom: 'Visit DirtyMutt for 20% off your orders during Packed Weekend, Code: THEPACK20 and enter our Packed Weekend product giveaway competition on instagram @dirtymutts',
    url: 'https://www.dirtymutt.co.uk',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'DirtyMutt',
    address: 'London',
    lat: 51.512861,
    lng: 0.085417,
    custom: 'Visit DirtyMutt for 20% off your orders during Packed Weekend, Code: THEPACK20 and enter our Packed Weekend product giveaway competition on instagram @dirtymutts',
    url: 'https://www.dirtymutt.co.uk',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Dogsnug',
    address: 'London',
    lat: 51.562222,
    lng: -0.07622,
    custom: '£5 off any size/shape of STARS Water Repellent Jumper by DOGSNUG, hand-made in East London. Discount Code: THEPACKSTARS5',
    url: 'https://www.dogsnug.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'évident',
    address: '25 RUE EMILE VANDAME, 59350 SAINT ANDRE LEZ LILLE',
    lat: 48.868931,
    lng: 2.31034,
    custom: 'Avec évident (friandises naturelles pour chiens), gagnez 150 Euros de prix sur la boutique en ligne lors du jeu-concours organisé sur le compte Instagram.',
    url: 'https://evidentboutique.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'La Fine Gamelle',
    address: '62 rue de la Rochefoucauld 75009 Paris',
    lat: 48.87887,
    lng: 2.33462,
    custom: 'Gagnez 1 mois de repas gourmets pour chiens avec le jeu-concours de La Fine Gamelle. Rendez-vous sur les réseaux sociaux!',
    url: 'https://www.lafinegamelle.fr/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'PetSoChic',
    address: '16 rue Dauphine, 75006 Paris',
    lat: 48.85553,
    lng: 2.33993,
    custom: 'Petsochic est la marque de mode Française de référence pour chiens. Nous offrons également un service de promenade pour chiens sur mesure. Rdv sur nos réseaux sociaux pour gagner des prix d\'exception!',
    url: 'https://petsochic.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Le Waf Caf',
    address: '57 Rue de la Barre, 59800 Lille',
    lat: 48.85248,
    lng: 2.39134,
    custom: 'Le Waf est situé dans le vieux Lille et non à Paris. Retrouvez nous en ligne pour le moment. Rdv sur Insta pour le jeu-concours.',
    url: 'https://lewaf.wordpress.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Alerte SOS',
    address: '30 Rue Du Poteau 75018 Paris',
    lat: 48.89395,
    lng: 2.34199,
    custom: 'Alerte SOS recueille les chiens à l’abandon en France et à l’étranger. Ils sont soignés, sociabilisés dans des familles d’accueil, et ensuite mis à l’adoption. Soutenez cette association importante!',
    url: 'https://alertesos.com/',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'PetSoChic Le Spa',
    address: '16 rue Dauphine, 75006 Paris',
    lat: 48.87121,
    lng: 2.28224,
    custom: 'Nouveauté, le salon de toilettage Le Spa Petsochic propose des soins cosmétologiques adaptés au poil et à la peau de votre chien. Woof!',
    url: 'https://petsochic.com/pages/le-spa-petsochic',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'Arizona Hotdogs',
    address: '33 Rue Galile, 75016 Paris',
    lat: 48.86933,
    lng: 2.2951,
    custom: 'Votre chien ou chat est unique ? Offrez lui le meilleur! Gagnez sur Instagram des accessoires de notre marque 100% Française lors du Packed Weekend.',
    url: 'https://www.arizona-hotdogs.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Delas Doggy Desserts',
    address: '1538 w 7800 s West Jordan, UT 84088',
    lat: 40.609908,
    lng: -111.934972,
    custom: 'Stop by Delas Doggy Desserts with your pup, and the first 25 people who mention \'The Pack\' will receive a free mini doggy doughnut!',
    url: 'https://delasdoggydesserts.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Amazon@Maryland',
    address: 'Amazon@CollegePark in Terrapin Row, 4200 Guilford Drive, B1, College Park, MD  20740',
    lat: 38.98013,
    lng: -76.94277,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Berkeley',
    address: '2495 Bancroft Way, MLK Student Union Room 235, Berkeley, CA 94720',
    lat: 37.86873,
    lng: -122.25941,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Boston',
    address: '870 Commonwealth Ave, Boston, MA 2215',
    lat: 42.34008,
    lng: -71.16654,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@UCLA',
    address: '923 Westwood Blvd, Los Angeles, CA 90024',
    lat: 34.056179,
    lng: -118.442291,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Akron',
    address: '290 E Exchange Street, Akron, OH 44304',
    lat: 41.07268,
    lng: -81.51275,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@UCF',
    address: '4225 East Plaza Drive, Suite E, Orlando, FL 32816',
    lat: 28.606917,
    lng: -81.196612,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@UIC',
    address: '750 S. Halsted St, #214, Chicago, IL  60607',
    lat: 41.871793,
    lng: -87.647887,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Clark & Lake',
    address: '203 N LaSalle, Suite 125, Chicago, IL 60601',
    lat: 41.886076,
    lng: -87.63169,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Clark & Diversey',
    address: '2728 N. Clark Street, Chicago, IL 60614',
    lat: 41.932048,
    lng: -87.645096,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Cincinnati',
    address: '241 Calhoun St, Cincinnati OH 45219',
    lat: 39.1281,
    lng: -84.517116,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Cleveland State',
    address: '2020 Euclid Ave, Cleveland, OH, 44115',
    lat: 41.501322,
    lng: -81.67622,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Illinois',
    address: '809 S Wright St., Champaign, IL, 61820',
    lat: 40.108156,
    lng: -88.229191,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@UC San Diego',
    address: '9500 Gilman Drive, #0102, La Jolla, CA, 92093',
    lat: 32.87859,
    lng: -117.235567,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@UC Davis',
    address: 'Davis Memorial Union, One Shields Ave, Rm 182, Davis, CA, 95616',
    lat: 38.545122,
    lng: -121.79638,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Sheffield & Webster',
    address: '1001 W Webster Ave, Chicago, IL, 60614',
    lat: 41.921483,
    lng: -87.653702,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Georgia Tech',
    address: '86 5th St NW, Atlanta GA 30308',
    lat: 33.776603,
    lng: -84.390018,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Irvine',
    address: '4141 Campus Drive, Irvine CA 92612',
    lat: 33.650096,
    lng: -117.839276,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Texas Tech',
    address: '2407 9th Street, Suite 400, Lubbock, TX, 79401',
    lat: 33.586781,
    lng: -101.86899,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@San Diego',
    address: '2727 Kurtz St, San Diego CA 92110',
    lat: 32.749941,
    lng: -117.201284,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Long Beach',
    address: '6049 E 7th St, Long Beach CA 90840',
    lat: 33.778448,
    lng: -118.113915,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Houston',
    address: '4221 Way Out West Drive, Houston TX 77092',
    lat: 29.833789,
    lng: -95.500203,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon Hub locker+ (San Antonio)',
    address: '4825 Eisenhauer Road, Suite 730 San Antonio TX 78218',
    lat: 29.497093,
    lng: -98.397075,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon Hub Locker+(Austin - NorthTech)',
    address: '4616 W. Howard Lane, Suite 750 Austin TX 78728',
    lat: 30.446892,
    lng: -97.709805,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Central Square',
    address: '1 Central Square, Cambridge MA 2139',
    lat: 42.365188,
    lng: -71.10424,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Columbus',
    address: '2114 N. High Street, Columbus OH 43201',
    lat: 40.005475,
    lng: -83.00885,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Penn',
    address: 'Class of 1920 Commons, 3800 Locust Walk Philadelphia PA 19104',
    lat: 39.952275,
    lng: -75.19956,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon Pickup - Amazon Books',
    address: '4752 Admiralty Way, Marina del Rey CA 90292',
    lat: 33.978375,
    lng: -118.437172,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@DT Portland',
    address: '1131 SW Jefferson, Portland OR 97201',
    lat: 45.516514,
    lng: -122.685669,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon - Graduate Hospital',
    address: '2306 South Street, Philadelphia PA 19146',
    lat: 39.94525,
    lng: -75.180048,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Pitt',
    address: '209 Oakland Ave, Pittsburgh PA 15260',
    lat: 40.441402,
    lng: -79.9566,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Purdue 1',
    address: '1198 Third Street, Krach Leadership Center Room 169 West Lafayette IN 47907',
    lat: 40.427557,
    lng: -86.921236,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Purdue 2',
    address: '101 N. Grant St., West Lafayette, IN 47906',
    lat: 40.424927,
    lng: -86.910695,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@UCSB',
    address: '6533 Trigo Rd, Suite C. Isla Vista, CA 93117',
    lat: 34.410899,
    lng: -119.855402,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Stony Brook',
    address: '100 NICOLLS RD, FRANK MELVILLE LIBRARY ROOM E0319 TOLL DRIVE N Stony Brook, NY 11794',
    lat: 40.909202,
    lng: -73.115648,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@USC',
    address: '3096 McClintock Ave, Suite 1415, Los Angeles, CA, 90007',
    lat: 34.025698,
    lng: -118.285629,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Penn State',
    address: '134 South Allen St, State College, PA 16801',
    lat: 40.793447,
    lng: -77.86097,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@DT San Jose',
    address: '96 E San Fernando St, San Jose, CA 95113',
    lat: 37.335067,
    lng: -121.887239,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Texas',
    address: 'Gregory Gymnasium, 2101 Speedway, Austin TX 78712',
    lat: 30.284234,
    lng: -97.736387,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@UW Madison',
    address: '821 W. Johnson St, Madison, WI 53706',
    lat: 43.07157,
    lng: -89.400328,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Bitter lake',
    address: '14333 Aurora Ave N, Seattle, WA 98133',
    lat: 47.73355,
    lng: -122.345549,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Amazon@Bellevue',
    address: '15350 SE 37th St, Bellevue, WA 98006',
    lat: 47.578015,
    lng: -122.136451,
    custom: 'Stop by this Amazon Hub Locker+ location over Packed Weekend to snag a free dog bandana, while supplies last.',
    url: 'https://www.amazon.com/ulp',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Shake Shack Hudson Yards - NEW YORK',
    address: '20 Hudson Yards, Level 4, New York, NY 10001',
    lat: 40.753154,
    lng: -74.001466,
    custom: 'Receive free fries with any $10 purchase and treat your pup to a Pooch-ini or Bag\'O Bones at Shake Shack Hudson Yards!',
    url: 'https://www.hudsonyardsnewyork.com/food-drink/shake-shack',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Sailor & Friends Pet Supply',
    address: '2070 E Main St, Ventura, CA 93001',
    lat: 34.277551,
    lng: -119.269077,
    custom: 'Sailor & Friends Pet Supply are offering 25% off on all Bark Appeal items over Packed Weekend. Now is the perfect time to stop by and pick-up toys, collars, harnesses and more for your furry friend!',
    url: 'https://www.sailorandfriendspetsupply.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Caniprof',
    address: 'Paris, France',
    lat: 48.856613,
    lng: 2.352222,
    custom: 'Caniprof, c\'est votre magazine canin. Santé, éducation, loisirs...Rendez-nous visite sur notre site internet et sur les réseaux sociaux pour notre jeu-concours avec le Packed Weekend et La Meute.',
    url: 'https://www.caniprof.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Woofpak Pet Kitchen',
    address: '771 Spectrum Center Dr, Irvine CA 92618',
    lat: 33.65003,
    lng: -117.743723,
    custom: 'Stop by Woofpak Pet Kitchen at the Irvine Spectrum Center between 11/20-11/22 to receive 50% off Meal Toppers when you use the code #PACKEDWEEKEND. While supplies last. Valid for new customers only.',
    url: 'https://woofpakfresh.com/discount/%2523PACKEDWEEKEND',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Santa Cruz Market',
    address: '1947 E Main St, Ventura, CA 93001',
    lat: 34.278711,
    lng: -119.270909,
    custom: 'Stop by Santa Cruz Market on November 22 between 12-3PM for your chance to receive The Pack Swag for your furry friend!',
    url: 'https://www.vcsantacruzmarket.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Desert Raw Holistic Pet',
    address: '1330 S Foothill Drive, Salt Lake City, UT 84108',
    lat: 40.740594,
    lng: -111.827386,
    custom: 'Come to Desert Raw Holistic Pet & the first 20 people who mention \'The Pack\' will receive a free gift bag! Also, if you spend $50 you will receive $10 off your purchase. Curbside Available.',
    url: 'https://www.desertraw.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'City Doggo',
    address: 'Hoxton, London N1 7ED',
    lat: 51.32035,
    lng: -0.092746,
    custom: 'City Doggo is offering 50% off your first Oui Oui Patch (our REAL grass pet toilet for balconies and puppy toilet training). ',
    url: 'https://www.citydoggo.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Litos Banditos Dog Walking',
    address: 'St Johns Road, Battersea, SW11 1PR',
    lat: 51.46397,
    lng: -0.167868,
    custom: '¬£5 off your first walk!',
    url: 'https://www.litosbanditosdogwalking.co.uk',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Miller & Chalk',
    address: 'London',
    lat: 51.510376,
    lng: -0.130107,
    custom: 'Miller & Chalk are offering 15% off our whole Dog Bed Collection during Packed Weekend. Simply use the code PACKED15 at the checkout. Happy Shopping!',
    url: 'https://www..millerandchalk.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Rover France',
    address: 'Paris, 75004',
    lat: 48.85689,
    lng: 2.35085,
    custom: 'Fini les chenils avec Rover France, le plus large réseau de pet sitters et de promeneurs de chien au monde.',
    url: 'https://www.rover.com/fr/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Pawshake France',
    address: 'Paris, 75005',
    lat: 48.8454,
    lng: 2.3449,
    custom: 'Pawshake met en relation les propriétaires avec des gardiens et des promeneurs de chiens en France. Pour le PackedWeekend, gagnez 2 bons d\'achat de 50 € chez Botanic pour gâter votre toutou.',
    url: 'https://www.pawshake.fr/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Booboo Pet Grooming Services',
    address: '2469 Lakeshore Blvd West, Etobicokee, M8V 1C5ON, Canada',
    lat: 43.613576,
    lng: -79.488984,
    custom: 'A FREE bath, blow-dry, or brush, plus a hair dye treatment, for the first 10 customers between November 20 to 22. Call or include The Pack anywhere in the appointment form when booking online.',
    url: 'https://www.booboopetgroomingservices.ca/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'Dirty Pawz Dog Wash',
    address: '804 Queen St East, Toronto ON, M4M 1H7, Canada',
    lat: 43.66589072,
    lng: -79.34639689,
    custom: '$5 dog wash (reg. price $15) + FREE swag bag. Visit us @dirtypawzto for full details!',
    url: 'https://www.dirtypawzdogwash.com/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'The Fitness Firm',
    address: '15 Plains Rd W, Burlington, ON L7T 1E8, Canada',
    lat: 43.39278871,
    lng: -79.83574636,
    custom: 'FREE Pawlates and Yoga all weekend + 15% OFF short term memberships OR get your first month FREE on 1-year memberships! Visit us for details.',
    url: 'https://www.thefitnessfirm.ca/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ambers Barkery',
    address: '1534 Lancaster Dr Unit 47, Oakville, ON L6H 2Z3',
    lat: 43.482962,
    lng: -79.692105,
    custom: 'A giveaway of all-natural, dog-friendly cakes and The Pack merchandise to three lucky contest winners. To enter, visit @AmbersBarkery on Instagram and Facebook.',
    url: 'https://www.ambersbarkery.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Tokyo Hot Fried Chicken',
    address: '928 College St, Toronto, ON M6H 1A4',
    lat: 43.662399,
    lng: -79.42584,
    custom: 'Introducing \'Chicken & Woofles\' available from November 20-22! The special comes with home-baked dog treats and the first 20 customers to order will also receive a pet-themed gift from The Pack!',
    url: 'https://tokyohotfriedchicken.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Pet Food Platters',
    address: '188A Spadina Ave Unit #17, Toronto, ON M5T 3A4',
    lat: 43.657431,
    lng: -79.398192,
    custom: 'Receive a complimentary bag of Pet Food Platters dog treats, plus a gift from The Pack, for any purchases made online and in-store between November 20-22, while supplies last!',
    url: 'https://petfoodplatters.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Toronto Animal Health Partners',
    address: '1 Scarsdale Road, Toronto, ON M3B 2R2',
    lat: 43.745426,
    lng: -79.353256,
    custom: 'All visitors with an appointment booking will receive a FREE The Pack gift while supplies last!',
    url: 'https://animalhealthpartners.com/',
    tags: ['tag_health'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-health-blue.png'
  },
  {
    title: 'Doggie Playland',
    address: '365 Olivewood Rd, Etobicoke, ON M8Z 2Z8',
    lat: 43.635802,
    lng: -79.53041,
    custom: 'The first 25 customers to book a free trial between Nov 20-27 will receive 30% off the purchase of a 10 day daycare pass (full day or half day). New clients only.',
    url: 'https://doggieplayland.ca/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ripley\'s Aquarium of Canada',
    address: '288 Bremner Blvd, Toronto, ON M5V 3L9',
    lat: 43.642407,
    lng: -79.385972,
    custom: 'The first 30 people to say \'this is our PACK\' while booking onsite will get a FREE Youth or Child ticket! (valid on day of entry only; cannot be combined with another offer; one free ticket per group).',
    url: 'https://www.ripleyaquariums.com/canada/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Dixie Outlet Mall',
    address: '1250 S Service Rd, Mississauga, ON L5E 1V4',
    lat: 43.593532,
    lng: -79.56844,
    custom: 'Stop by the Dixie Outlet Mall for complimentary gift wrapping (with purchase).',
    url: 'https://www.dixieoutletmall.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Hub Climbing',
    address: '3636 Hawkestone Rd unit 1, Mississauga, ON L5C 2V2',
    lat: 43.574118,
    lng: -79.653642,
    custom: 'Save $130 on our Introductory Climbing Package. Perfect for new climbers! Visit us for more details.',
    url: 'https://hubclimbing.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Naturalizer Outlet',
    address: '1250 S Service Rd, Mississauga, ON L5E 1V4',
    lat: 43.593532,
    lng: -79.56844,
    custom: 'Get Black Friday prices at Naturalizer Outlet: 50% off original prices until Nov 30th.',
    url: 'https://www.naturalizer.ca',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'La Patte De Chien',
    address: 'Paris, 75010',
    lat: 48.87193,
    lng: 2.35648,
    custom: 'Boutique en ligne d\'accessoires pour chiens et chiots, colliers, harnais, manteaux pour chiens faits à la main en France.',
    url: 'https://www.lapattedechien.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Dogwood Play Park',
    address: '12568 33rd Ave NE Seattle, WA 98125',
    lat: 47.721171,
    lng: -122.291919,
    custom: 'Reserve your playtime during Packed Weekend (November 20-22) and receive a free gift.',
    url: 'https://www.dogwoodseattle.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'DOGLDN',
    address: 'London',
    lat: 51.5155,
    lng: -0.088138,
    custom: 'Use the code: PACKEDWEEKEND for a special 30% off DOGLDN accessories',
    url: 'https://www.dogldn.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Colados Coffee & Crepes',
    address: '10685 W Indian School Rd Suite G, Avondale, AZ 85392',
    lat: 33.49238,
    lng: -112.28958,
    custom: 'Colados Avondale and Goodyear locations will offer a free puppucino for your dog, with any coffee purchase. A puppucino is a cup of whipped cream, just for your dog! While supplies last.',
    url: 'https://colados.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Colados Coffee & Crepes',
    address: '15479 W McDowell Rd Suite #109, Goodyear, AZ 85338',
    lat: 33.46409,
    lng: -112.39206,
    custom: 'Colados Avondale and Goodyear locations will offer a free puppucino for your dog, with any coffee purchase. A puppucino is a cup of whipped cream, just for your dog! While supplies last.',
    url: 'https://colados.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'The Yorkshire Dog Photographer',
    address: 'Yorkshire',
    lat: 54.248459,
    lng: -2.12064,
    custom: 'Authentic professional dog photography capturing  special moments with your dog and you.  Packed Weekend offer of ¬£100 off a photo shoot plus a complimentary fine art print.',
    url: 'https://theyorkshiredogphotographer.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'The Yorkshire Dog Photographer',
    address: 'Yorkshire',
    lat: 51.514795,
    lng: -0.11957,
    custom: 'Authentic professional dog photography capturing  special moments with your dog and you.  Packed Weekend offer of ¬£100 off a photo shoot plus a complimentary fine art print.',
    url: 'https://theyorkshiredogphotographer.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Joint Animal Services',
    address: '3120 Martin Way E  Olympia, WA 98506',
    lat: 47.04794,
    lng: -122.85553,
    custom: 'All adoptions will receive a 25% discount and promotional items from THE PACK!',
    url: 'https://jointanimalservices.org/',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Red & Ginger',
    address: 'London',
    lat: 51.526112,
    lng: -0.081487,
    custom: '10% off all purchases over the weekend including Christmas gift boxes.',
    url: 'https://redandginger.co.uk',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Red & Ginger',
    address: 'Devon',
    lat: 50.781717,
    lng: -3.000378,
    custom: '10% off all purchases over the weekend including Christmas gift boxes.',
    url: 'https://redandginger.co.uk',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Taylor & Wild',
    address: 'London',
    lat: 51.519834,
    lng: -0.105385,
    custom: '15% off sitewide all Packed Weekend with code : THEPACK. Also, check out of Packed Weekend competition on social media @taylor.and.wild',
    url: 'http://www.taylorandwild.co.uk',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Taylor & Wild',
    address: 'Southampton ',
    lat: 50.88357,
    lng: -1.499205,
    custom: '15% off sitewide all Packed Weekend with code : THEPACK. Also, check out of Packed Weekend competition on social media @taylor.and.wild',
    url: 'http://www.taylorandwild.co.uk',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Wren & Rye',
    address: 'Salford ',
    lat: 51.511925,
    lng: -0.1226132,
    custom: 'We are offering 15% OFF orders over ¬£25 this weekend only with the promo: THEPACK. On-trend fashion accessories for dogs, big or small, dainty or rough and tumble.',
    url: 'https://wrenandrye.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Wren & Rye',
    address: 'London',
    lat: 51.503151,
    lng: -0.107547,
    custom: 'We are offering 15% OFF orders over ¬£25 this weekend only with the promo: THEPACK. On-trend fashion accessories for dogs, big or small, dainty or rough and tumble.',
    url: 'https://wrenandrye.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Angelika Film Center',
    address: '11620 Carmel Mountain Rd, San Diego, CA 92128',
    lat: 32.9812181,
    lng: -117.0842077,
    custom: 'Join our Pack on Instagram, Facebook, and Twitter @angelikafilmsd for contest info and your chance to win Angelika Film Center Gift Cards to visit our patio when it reopens and have a bite with your dog.',
    url: 'https://www.angelikafilmcenter.com/sandiego',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Rancho Coastal Humane Society',
    address: '389 Requeza St, Encinitas, CA 92024',
    lat: 33.0433195,
    lng: -117.2866127,
    custom: 'For the first 10 dogs/puppies adopted at Rancho Coastal Humane Society during Nov. 20-22, $100 for each dog will be donated to RCHS on behalf of The Pack. Due to COVID-19, adoptions are by appointment only, visit www.sdpets.org for details.',
    url: 'https://www.sdpets.org',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'San Diego Humane Society - San Diego Campus',
    address: '5500 Gaines St, San Diego, CA 92110',
    lat: 32.9873621,
    lng: -117.4444637,
    custom: 'San Diego Humane Society is waiving adoption fees for adult dogs on Saturday, Nov. 21 and Sunday, Nov. 22, 2020. Visit sdhumane.org for details.',
    url: 'https://sdhumane.org',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'San Diego Humane Society - El Cajon Campus',
    address: '1373 N Marshall Ave, El Cajon, CA 92020',
    lat: 32.8143996,
    lng: -116.9775419,
    custom: 'San Diego Humane Society is waiving adoption fees for adult dogs on Saturday, Nov. 21 and Sunday, Nov. 22, 2020. Visit sdhumane.org for details.',
    url: 'https://sdhumane.org',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'San Diego Humane Society - Escondido Campus',
    address: '3500 Burnet Dr, Escondido, CA 92027',
    lat: 32.9878884,
    lng: -117.4444655,
    custom: 'San Diego Humane Society is waiving adoption fees for adult dogs on Saturday, Nov. 21 and Sunday, Nov. 22, 2020. Visit sdhumane.org for details.',
    url: 'https://sdhumane.org',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'San Diego Humane Society - Oceanside Campus',
    address: '2905 San Luis Rey Rd, Oceanside, CA 92058',
    lat: 32.9884147,
    lng: -117.4444674,
    custom: 'San Diego Humane Society is waiving adoption fees for adult dogs on Saturday, Nov. 21 and Sunday, Nov. 22, 2020. Visit sdhumane.org for details.',
    url: 'https://sdhumane.org',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'The Pet Spa at Barkley Square',
    address: '105 N Virginia Ave #101, Falls Church, VA 22046',
    lat: 38.88565,
    lng: -77.17544,
    custom: 'The Pet Spa at Barkley Square has your chance to win a month of free washes! Head over to our Facebook and Instagram to find out how! Free gift from The Pack for all grooming over Packed Weekend.',
    url: 'https://www.barkleysquare.com/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'Paww UK',
    address: 'Leicester',
    lat: 52.633764,
    lng: -1.133849,
    custom: '15% off all products online using code "Packedweekend15" on Fri 20th & Sat 21st during Packed Weekend & Free delivery using code "Packedweekend" on Sun 22nd',
    url: 'https://paww.co.uk/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Paww UK',
    address: 'London',
    lat: 51.519174,
    lng: -0.091418,
    custom: '15% off all products online using code "Packedweekend15" on Fri 20th & Sat 21st during Packed Weekend & Free delivery using code "Packedweekend" on Sun 22nd',
    url: 'https://paww.co.uk/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'TwoTails',
    address: '199 Rue de Grenelle, 75007 Paris',
    lat: 48.85632,
    lng: 2.30288,
    custom: 'Gagnez 150 Euro de bon d\'achat sur toute la boutique online ou offline en partenariat avec La Meute pour le Packed Weekend! Rendez-vous sur Instagram pour participer.',
    url: '',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Manor at Silo Falls',
    address: '19501 Georgia Ave, Brookeville, MD 20833',
    lat: 39.17618,
    lng: -77.05591,
    custom: 'The Manor at Silo Falls is hosting Yappy Hour all Packed Weekend long! Join us on our beautiful outside patio for Yappy Hour pricing, and a complimentary treat for your dog. Special giveaways too!',
    url: 'https://themanoratsilofalls.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Tabandeh',
    address: '5330 Western Ave NW Suite F, Chevy Chase, MD 20815',
    lat: 38.96317,
    lng: -77.08269,
    custom: 'Tabandeh showcases the talents of singular, visionary designers worldwide. Receive a free pair of winter gloves with a purchase of any pair of boots or shoes purchased November 20-22!',
    url: 'https://shoptabandeh.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Cole Haan',
    address: '5320C Western Ave Space B-102, Chevy Chase, MD 20815',
    lat: 38.97821,
    lng: -77.08973,
    custom: 'Cole Haan is turning nearly a century of iconic footwear inside out. Over Packed Weekend, receive a 10% off discount if you sign up for emails or a free membership to receive free shipping on orders!',
    url: 'https://stores.colehaan.com/us/md/chevy-chase/5320c-western-avenue.html?utm_source=google&utm_medium=organic&utm_campaign=Yext+website+url&utm_content=124&y_source=1_MTgzMTExOC03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'J. Jill',
    address: '5310 Western Ave, Chevy Chase, MD 20815',
    lat: 38.97821,
    lng: -77.08973,
    custom: 'J.Jill gives you the perfect blend of style, ease and inspiration. Over Packed Weekend, receive 10% off all purchases, plus an additional $5 off for first time email subscribers!',
    url: 'https://locations.jjill.com/md/chevy-chase/700/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Nina McLemore',
    address: '5310 Western Ave NW, Chevy Chase, MD 20815',
    lat: 38.97821,
    lng: -77.08973,
    custom: 'Nina Mclemore is a line of clothing by a woman with fashion and business expertise for smart, confident women on the go. Come to the Chevy Chase shop over the weekend and enjoy 20% off all purchases!',
    url: 'http://ninamclemore.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Westin Washington National Harbor',
    address: '171 Waterfront Street, National Harbor, MD 20745',
    lat: 38.78364,
    lng: -77.01714,
    custom: 'The Westin Washington Hotel is dog-friendly hotel located on the waterfront in National Harbor. Join us for Yappy Hour from 1-3pm Friday through Sunday for a specialty cocktail and a free puppaccino!',
    url: '',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Flouf',
    address: '67 rue de Perpignan 94700 Maisons-Alfort',
    lat: 48.8148613,
    lng: 2.440727472,
    custom: 'Flouf: de supers compléments alimentaires pour le bien-être des chiens sous forme de bouchées. Formulés par un vétérinaire, fabriqués en France, naturels et pratiques.',
    url: 'https://flouf.co/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Cynotopia',
    address: '17 rue de la Chevalerie, 59650 VILLENEVEUVE D\'ASCQ',
    lat: 48.86239,
    lng: 2.35745,
    custom: 'L\'éducateur canin Cynotopia vous donne la chance de gagner un programme Mission Rappel de 6 mois pour votre chien! Vérifiez les lieux disponibles pour le programme directement. Rendez-vous sur les réseaux sociaux pour participer.',
    url: 'https://www.cynotopia.fr/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Rockstar Rescue',
    address: '530 E. McDowell Rd # 107-269 Phoenix, AZ 85004',
    lat: 33.4664,
    lng: -112.06568,
    custom: 'Visit Rockstar Rescue on Facebook @RockstarRescueAZ during Packed Weekend to learn how can you enter for a chance to receive waived adoption fees for one of their Rockstar dogs!',
    url: 'https://www.facebook.com/RockstarRescueAz',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'MUTTS Canine Cantina Dallas',
    address: '2889 Cityplace W Blvd, Dallas, TX 75204',
    lat: 32.8056,
    lng: -96.79514,
    custom: 'First 100 guests to complete The Pack Walk receive a gift bag.',
    url: 'http://muttscaninecantina',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'MUTTS Canine Cantina Fort Worth',
    address: '5317 Clearfork Main St, Fort Worth, TX 76109',
    lat: 32.70632,
    lng: -97.400421,
    custom: 'On Friday, November 20th starting at 6 PM MUTTS in Fort Worth is hosting a watch party for THE PACK and offering the first 100 guests one free day pass, Pupsicle, and Pupcorn.',
    url: 'http://muttscaninecantina',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Nasdaq MarketSite',
    address: '4 Times Square, New York, NY 10036',
    lat: 40.75491,
    lng: -73.994102,
    custom: 'Stop by over Packed Weekend to see The Pack take over Times Square, courtesy of Nasdaq!',
    url: '',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Esplanade at National Harbor',
    address: '250 American Way, National Harbor, MD 20745',
    lat: 38.78371,
    lng: -77.01413,
    custom: 'Find your new home at The Esplanade at National Harbor! Come by for a tour in-person or ask for a virtual tour! Sign a lease between Friday 11/20 - Sunday 11/22 and enjoy 3 months of pet fees waived!',
    url: 'https://www.esplanadenationalharbor.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Morris Animal Refuge',
    address: '1242 Lombard Street, Philadelphia, PA 19147',
    lat: 39.94431,
    lng: -75.16274,
    custom: 'Adopt an extra special pup! 3 pups (Coco, Bells and one surprise pup) have been overlooked for a little while. Their adoption fees will be waived! Email us adoptions@morrisanimalrefuge.org for more!',
    url: 'https://www.MorrisAnimalRefuge.org',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Hard Rock Cafe Miami',
    address: '401 Biscayne Blvd, Miami, FL 33132',
    lat: 25.77804,
    lng: -80.186295,
    custom: 'Hard Rock Caf is pleased to offer a free Puppy Patty for dogs that come to dine on their patio, and a 15% discount on a meal for pet owners that come to dine with their dogs.',
    url: 'https://www.hardrockcafe.com/location/miami/#utm_source=Google&utm_medium=Yext&utm_campaign=Listings',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Le Pain Quotidien',
    address: '5310 Western Ave NW, Chevy Chase, MD 20815',
    lat: 38.97821,
    lng: -77.08973,
    custom: 'Le Pain Quotidien is pleased to offer a 10% discount off all items, plus free organic dog treats to all customers that stop by with their furry companion!',
    url: 'https://www.shopwisconsinplace.com/store/Le-Pain-Quotidien/2138975375/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Animal Welfare League of Arlington',
    address: '2650 S Arlington Mill Dr, Arlington, VA, 22206',
    lat: 38.84356,
    lng: -77.09312,
    custom: 'Find your new best friend with the Animal Welfare League of Arlington! During Packed Weekend receive 50% off all dog adoption fees! View the dogs available at: https://www.awla.org/adopt/adopt-a-dog',
    url: 'https://www.awla.org',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '12276 Rockville Pike, Rockville, MD 20852',
    lat: 39.05762,
    lng: -77.12152,
    custom: 'Silver Diner has your chance to win a family feast and a prize pack from The Pack! Take a selfie while dining with us and tag @Siver_Diner, @EatatSilver, and use #ThePackTV for your chance to win!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '14375 Smoketown Road, Woodbridge, VA 22192',
    lat: 38.62403,
    lng: -77.28914,
    custom: 'Silver Diner has your chance to win a family feast and a prize pack from The Pack! Take a selfie while dining with us and tag @Siver_Diner, @EatatSilver, and use #ThePackTV for your chance to win!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '12250 Fair Lakes Parkway, Fairfax, VA 22033',
    lat: 38.85951,
    lng: -77.36969,
    custom: 'Silver Diner has your chance to win a family feast and a prize pack from The Pack! Take a selfie while dining with us and tag @Siver_Diner, @EatatSilver, and use #ThePackTV for your chance to win!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '8101 Fletcher Avenue, McLean, VA 22102',
    lat: 38.92582,
    lng: -77.19701,
    custom: 'Silver Diner has your chance to win a family feast and a prize pack from The Pack! Take a selfie while dining with us and tag @Siver_Diner, @EatatSilver, and use #ThePackTV for your chance to win!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '6592 Springfield Mall, Springfield, VA 22150',
    lat: 38.77742,
    lng: -77.17355,
    custom: 'Silver Diner has your chance to win a family feast and a prize pack from The Pack! Take a selfie while dining with us and tag @Siver_Diner, @EatatSilver, and use #ThePackTV for your chance to win!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '8150 Porter Road, Falls Church, VA 22042',
    lat: 38.87288,
    lng: -77.22588,
    custom: 'Silver Diner has your chance to win a family feast and a prize pack from The Pack! Take a selfie while dining with us and tag @Siver_Diner, @EatatSilver, and use #ThePackTV for your chance to win!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '3200 Wilson Boulevard, Arlington, VA 22201',
    lat: 38.88552,
    lng: -77.09724,
    custom: 'Silver Diner has your chance to win a family feast and a prize pack from The Pack! Take a selfie while dining with us and tag @Siver_Diner, @EatatSilver, and use #ThePackTV for your chance to win!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '11951 Killingsworth Ave., Reston, VA 20194',
    lat: 38.96666,
    lng: -77.35863,
    custom: 'Silver Diner has your chance to win a family feast and a prize pack from The Pack! Take a selfie while dining with us and tag @Siver_Diner, @EatatSilver, and use #ThePackTV for your chance to win!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '2131 Rt. 38 Kaighn Blvd., Cherry Hill, NJ 08002',
    lat: 39.93818,
    lng: -75.02539,
    custom: 'Silver Diner has your chance to win a family feast and a prize pack from The Pack! Take a selfie while dining with us and tag @Siver_Diner, @EatatSilver, and use #ThePackTV for your chance to win!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '6040 Greenbelt Road, Greenbelt, MD 20770',
    lat: 38.99816,
    lng: -76.91045,
    custom: 'Silver Diner has your chance to win a family feast and a prize pack from The Pack! Take a selfie while dining with us and tag @Siver_Diner, @EatatSilver, and use #ThePackTV for your chance to win!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '10890 West Broad Street, Glen Allen, VA 23060',
    lat: 37.66399,
    lng: -77.47311,
    custom: 'Silver Diner has your chance to win a family feast and a prize pack from The Pack! Take a selfie while dining with us and tag @Siver_Diner, @EatatSilver, and use #ThePackTV for your chance to win!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '3081 Festival Way, Waldorf, MD 20601',
    lat: 38.62727,
    lng: -76.91139,
    custom: 'Join Silver Diner for a special Pups on the Patio from 3-7pm. Enjoy Titos cocktails with your pup & receive a prize pack including a puppy pop! Part of the proceeds will go to a local dog charity!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '5120 Buckeystown Pike, Frederick, MD 21704',
    lat: 39.37093,
    lng: -77.41182,
    custom: 'Join Silver Diner for a special Pups on the Patio from 3-7pm. Enjoy Titos cocktails with your pup & receive a prize pack including a puppy pop! Part of the proceeds will go to a local dog charity!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '8250 Gateway Overlook Dr, Elkridge, MD 21075',
    lat: 39.18559,
    lng: -76.79566,
    custom: 'Join Silver Diner for a special Pups on the Patio from 3-7pm. Enjoy Titos cocktails with your pup & receive a prize pack including a puppy pop! Part of the proceeds will go to a local dog charity!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '4630 King Street, Alexandria, VA 22302',
    lat: 38.84126,
    lng: -77.10778,
    custom: 'Join Silver Diner for a special Pups on the Patio from 3-7pm. Enjoy Titos cocktails with your pup & receive a prize pack including a puppy pop! Part of the proceeds will go to a local dog charity!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '9151 Ruby Lockhart Boulevard, Lanham, MD 20706',
    lat: 38.91827,
    lng: -76.84284,
    custom: 'Silver Diner has your chance to win a family feast and a prize pack from The Pack! Take a selfie while dining with us and tag @Siver_Diner, @EatatSilver, and use #ThePackTV for your chance to win!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver Diner',
    address: '9811 Washingtonian Blvd, Gaithersburg, MD 20878',
    lat: 39.115452,
    lng: -77.198029,
    custom: 'Join Silver Diner for a special Pups on the Patio from 3-7pm. Enjoy Titos cocktails with your pup & receive a prize pack including a puppy pop! Part of the proceeds will go to a local dog charity!',
    url: 'https://www.silverdiner.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver',
    address: '7150 Woodmont Ave, Bethesda, MD 20815',
    lat: 38.980091,
    lng: -77.093773,
    custom: 'Join Silver for a special Pups on the Patio from 3-7pm. Enjoy Titos cocktails with your pup & receive a prize pack including a puppy pop! Part of the proceeds will go to a local dog charity!',
    url: 'https://www.eatatsilver.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Silver',
    address: '3404 Wisconsin Avenue NW, Washington, DC 20016',
    lat: 38.93491,
    lng: -77.0729,
    custom: 'Join Silver for a special Pups on the Patio from 3-7pm. Enjoy Titos cocktails with your pup & receive a prize pack including a puppy pop! Part of the proceeds will go to a local dog charity!',
    url: 'https://www.eatatsilver.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Pets in Need Redwood City',
    address: '871 Fifth Ave, Redwood City, CA 94063',
    lat: 37.481369,
    lng: -122.199341,
    custom: 'Adopt a dog for a special Packed Weekend price November 20th-22nd (limit of 30)',
    url: '',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Pets in Need Palo Alto',
    address: '3281 E Bayshore Rd, Palo Alto, CA 94303',
    lat: 37.436501,
    lng: -122.109482,
    custom: 'Adopt a dog for a special Packed Weekend price November 20th-22nd (limit of 30).',
    url: '',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'The Milo Foundation',
    address: '220 S Garrard Blvd, Richmond, CA 94801',
    lat: 37.92843,
    lng: -122.38063,
    custom: 'Get complimentary The Pack promo items with any adoption November 20th-22nd (while supplies last).',
    url: '',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'National Harbor',
    address: '165 Waterfront Street, National Harbor, MD 20745',
    lat: 38.879978,
    lng: -77.025909,
    custom: 'Join us at the National Harbor for a socially distant viewing party of the first two episodes of The Pack on Saturday, November 21st at 1pm. Enjoy special treats and giveaways! RSVP info @VisitNationalHarbor',
    url: 'https://www.facebook.com/visitnationalharbor/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Toronto Animal Mobility Services',
    address: '1 Scarsdale Road, Toronto, ON M3B 2R2',
    lat: 43.745364,
    lng: -79.353288,
    custom: 'Offering FREE one-way or return transports to veterinary appointments or animal hospitals on November 20th while availabilities last!',
    url: 'https://www.torontoams.com/',
    tags: ['tag_health'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-health-blue.png'
  },
  {
    title: 'Toronto Humane Society',
    address: '11 River Street, Toronto, Ontario, M5A 4C2',
    lat: 43.657667,
    lng: -79.356344,
    custom: 'Free micro-chipping to clients with surgeries booked between November 20 and 21, while supplies last!',
    url: 'https://www.torontohumanesociety.com/',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'stackt market',
    address: '28 Bathurst St. Toronto, ON M5V 0R4',
    lat: 43.6411,
    lng: -79.4017,
    custom: 'Join us on 11/20 from 5-9pm for a dog-friendly, outdoor viewing of The Pack. Stop by for giveaways, happy hour drink specials from Belgian Moon & discounted dog treats from Barker and Snouts.',
    url: 'https://stacktmarket.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Ren\'s Pets - OAKVILLE',
    address: '4002 Trafalgar Road, Oakville ON L6H 7B8',
    lat: 43.5016,
    lng: -79.7391,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - ABERFOYLE',
    address: '20 Brock Road, North Puslinch ON N0B 2J0',
    lat: 43.475579,
    lng: -80.155964,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - KITCHENER',
    address: '1525 Victoria St N., Kitchener ON N2B 3E4',
    lat: 43.472,
    lng: -80.4389,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - WATERDOWN',
    address: '94 Dundas St E., Waterdown ON L0R 2H2',
    lat: 43.3176,
    lng: -79.9092,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - BURLINGTON',
    address: '2424 Queensway Drive, Burlington ON L7R 3T3',
    lat: 43.3497,
    lng: -79.804,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - WOODBRIDE',
    address: '3900 Highway 7 Unit 6, Woodbridge ON L4L 9C3',
    lat: 43.7898,
    lng: -79.5538,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - WATERLOO',
    address: '400 The Boardwalk, Waterloo ON N2T 0A6',
    lat: 43.4391,
    lng: -80.5637,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - WHITBY',
    address: '980 Taunton Road E, Whitby ON L1R 3L8',
    lat: 43.9256,
    lng: -78.9142,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - CAMBRIDGE',
    address: '34 Pinebush Rd., Cambridge ON N1R 8K5',
    lat: 43.4106,
    lng: -80.3244,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - LONDON NORTH',
    address: '1979 Hyde Park, London ON N6H 0A3',
    lat: 43.009497,
    lng: -81.334279,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - AURORA',
    address: '239 Earl Stewart Drive Unit 52-9, Aurora ON L4G 7Y3',
    lat: 44.0199,
    lng: -79.4478,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - ANCASTER',
    address: '821 Golf Links Rd Unit 10 Ancaster ON L9K 1L5',
    lat: 43.227571,
    lng: -79.950035,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - SCARBOROUGH',
    address: '8 Lebovic Ave., Scarborough ON M1L 4V9',
    lat: 43.7256,
    lng: -79.2916,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - KANATA',
    address: '155 Roland Michener Drive, Kanata ON K2T 1G7',
    lat: 45.3085,
    lng: -75.9111,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - DOWNSVIEW',
    address: '81 Billy Bishop Way, North York ON M3K 2C8',
    lat: 43.7325,
    lng: -79.4518,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - BARRHAVEN',
    address: '4325 Strandherd Dr Unit 5, Nepean ON K2J 6E5',
    lat: 45.271402,
    lng: -75.783886,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - BASELINE',
    address: '1385 Baseline Rd Unit 3, Ottawa ON K2C 3G1',
    lat: 45.363167,
    lng: -75.738093,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - BARRIE',
    address: '110 Concert Way Unit 2, Barrie ON L4N 6N5',
    lat: 44.3374,
    lng: -79.6836,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - BRANTFORD',
    address: '218 Henry Street Unit F1, Brantford ON N3S 7R4',
    lat: 43.155,
    lng: -80.2386,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - ORLEANS',
    address: '4130 Innes Road Unit M-1, Orleans ON K4A 3W9',
    lat: 45.456787,
    lng: -75.502057,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - SOUTH LONDON',
    address: '3409 Wonderland Road South Unit 10, London ON N6L 1A9',
    lat: 42.924788,
    lng: -81.278048,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - AJAX',
    address: '280 Kingston Road E Unit E003, Ajax ON L1Z 1G1',
    lat: 43.865445,
    lng: -79.011701,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - DARTMOUTH',
    address: '185 Hector Gate Unit 3M1-F001, Dartmouth NS B3B 0C7',
    lat: 44.70604,
    lng: -44.70604,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - HALIFAX',
    address: '212 Chain Lake Drive, Unit 2, Halifax NS B3S 1C5',
    lat: 44.652463,
    lng: -63.675188,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - KINGSTON',
    address: '628 Gardiners Road Unit F5 Kingston ON K7M 3X9',
    lat: 44.2444,
    lng: -76.5644,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - DIEPPE',
    address: '40 Champlain Street Unit 12, Dieppe NB E1A 1N3',
    lat: 46.092877,
    lng: -64.757516,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - HEARTLAND',
    address: '5985 Rodeo Drive Unit 2, Mississauga ON L5R 3X8',
    lat: 43.614842,
    lng: -79.690833,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - ST. CATHARINES',
    address: '121 Fourth Ave, St. Catharines ON L2S 3P6',
    lat: 43.156185,
    lng: -79.264124,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - HAMILTON',
    address: '2120 Rymal Road East Unit K1, Hannon ON L0R 1P0',
    lat: 43.176487,
    lng: -79.791232,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - WINDSOR',
    address: '4315 Walker Road, Windsor ON N8W 3T6',
    lat: 42.258169,
    lng: -82.966895,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Ren\'s Pets - BELLEVILLE',
    address: '366 North Front St. Belleville ON K8P 5E6 CA',
    lat: 44.1874,
    lng: -77.3966,
    custom: 'The first 10 customers to make a purchase at each Ren\'s Pets store on Saturday, November 21st will receive a FREE gift, courtesy of The Pack.',
    url: 'https://www.renspets.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Fresh City Farms - BAY & GERRARD',
    address: '695 Bay Street, Toronto, ON, M5G 1Z4',
    lat: 43.658493,
    lng: -79.384747,
    custom: 'On November 21st, only at Fresh City Bay & Gerrard, the first 100 customers to mention \'The Pack\' will receive one FREE Mabels butter croissant & and one FREE certified organic drip coffee.',
    url: 'https://www.freshcityfarms.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Organic Garage - JUNCTION',
    address: '43 Junction Road, Toronto, ON M6N 1B5',
    lat: 43.670477,
    lng: -79.464347,
    custom: 'From 11/20-11/22, visit any Organic Garage & buy 1 300g bag of Cookiepal dog treats & get another 50% off. Cookiepal dog treats are made from organic, simple ingredients & are available in 4 flavours.',
    url: 'https://www.organicgarage.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Organic Garage - LIBERTY VILLAGE',
    address: '42 Hanna Avenue, Toronto, ON M6K 1X1',
    lat: 43.640103,
    lng: -79.419847,
    custom: 'From 11/20-11/22, visit any Organic Garage & buy 1 300g bag of Cookiepal dog treats & get another 50% off. Cookiepal dog treats are made from organic, simple ingredients & are available in 4 flavours.',
    url: 'https://www.organicgarage.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Organic Garage - OAKVILLE',
    address: '579 Kerr St, Oakville, ON Canada L6K 3E1',
    lat: 43.449752,
    lng: -79.688159,
    custom: 'From 11/20-11/22, visit any Organic Garage & buy 1 300g bag of Cookiepal dog treats & get another 50% off. Cookiepal dog treats are made from organic, simple ingredients & are available in 4 flavours.',
    url: 'https://www.organicgarage.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Organic Garage - THORNHILL',
    address: '8020 Bathurst Street, Thornhill, ON Canada L4J 0B8',
    lat: 43.82485,
    lng: -79.453031,
    custom: 'From 11/20-11/22, visit any Organic Garage & buy 1 300g bag of Cookiepal dog treats & get another 50% off. Cookiepal dog treats are made from organic, simple ingredients & are available in 4 flavours.',
    url: 'https://www.organicgarage.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Flash and Hound Pet Photography',
    address: '1776 N Scottsdale Rd Unit 101, Scottsdale, AZ 85252',
    lat: 33.46699,
    lng: -111.92715,
    custom: 'Visit Flash and Hound Pet Photography on Facebook @FlashandHound during Packed Weekend (11-/20-11/22)  to enter for a chance to win a 45-minute pet photography session giveaway, courtesy of The Pack!',
    url: 'https://www.facebook.com/flashandhound',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Carhartt',
    address: '142 Waterfront St, Oxon Hill, MD 20745',
    lat: 38.80256,
    lng: -76.99543,
    custom: 'Stop by Carhartt to receive a complimentary dog treat for your pup! Also join us at the viewing party at 1pm at the National Harbor jumbo screen where we will be raffling off a free winter dog coat!',
    url: 'https://stores.carhartt.com/md/oxon-hill/142-waterfront-street.html',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'From Head to Tail Spa',
    address: '430 Hume Avenue, Alexandria, VA 22301',
    lat: 38.8317,
    lng: -77.05137,
    custom: 'Giveaway Alert! Go to @HeadtoTailSpa on Instagram and Facebook to see how you can win a free puppy couch and a free spa day for your furry best friend!',
    url: 'https://www.headtotailspa.com/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'District Wharf',
    address: '760 Maine Avenue SW, Washington, DC 20024',
    lat: 38.87989,
    lng: -77.026543,
    custom: 'Join us at District Wharf for a socially distant viewing party of the first two episodes of The Pack on Sunday, November 22nd at 2pm. Enjoy special treats and giveaways! RSVP: https://bit.ly/3f6hS8L',
    url: 'https://www.facebook.com/events/403702987450357/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Big Bad Woof',
    address: '6960 MAPLE ST NW, WASHINGTON, DC, 20012',
    lat: 38.9746,
    lng: -77.01534,
    custom: 'Join the Big Bad Woof at the District Wharfs viewing party of The Packs first two episodes on Sunday, November 22nd at 2pm! We will be handing out special treats in your \'pupcorn\' bags!',
    url: 'https://www.thebigbadwoof.com/products/shop/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Whiskey Charlie',
    address: '975 7th St SW, Washington, DC 20024',
    lat: 38.87854,
    lng: -77.02343,
    custom: 'Whiskey Charlie is offering a paw-some themed cocktail menu for Packed Weekend! Enjoy a Maltipoo Mule, Goldies G&T, Bullys Bourbon, and a Mastiff Margarita! Available 11/20 - 11/22.',
    url: 'https://whiskeycharliewharf.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Woofbowl',
    address: 'Washington, DC',
    lat: 38.90634,
    lng: -77.0414,
    custom: 'Woofbowl will be joining in on the fun at the District Wharfs viewing party of The Pack on Sunday, November 22nd at 2pm! Stop by to see what pup-perks we are offering for your furry best friend!',
    url: 'https://www.mywoofbowl.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Metro Mutts',
    address: 'Washington, DC',
    lat: 38.89876,
    lng: -77.03645,
    custom: 'Metro Mutts will be joining in on the fun at the District Wharfs viewing party of The Pack on Sunday, November 22nd at 2pm! Stop by to see what pup-perks we are offering for your furry best friend!',
    url: 'https://www.metromuttsdc.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Fur-Get Me Not',
    address: '4140 S Four Mile Run Dr, Arlington, VA 22206',
    lat: 38.84877,
    lng: -77.098633,
    custom: 'Fur-Get Me Not will be joining in on the fun at the District Wharfs viewing party of The Pack on Sunday, November 22nd at 2pm! Stop by to see what pup-perks we are offering for your furry best friend',
    url: 'http://www.furgetmenot.com/dogDaycare.htm',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Cordial at the Wharf Craft Wine & Spirits',
    address: '35 Sutton Square SW, Washington, DC 20024',
    lat: 38.87925,
    lng: -77.02464,
    custom: 'Bring your furry friends over Packed Weekend to Cordial at the Wharf Craft Wine & Spirits, and pick up a special dog treat! Shop our selection for a special treat for pet parents too!',
    url: 'https://www.cordialwharf.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'The Brighton',
    address: '949 Wharf St SW, Washington, DC 20024',
    lat: 38.88013,
    lng: -77.02607,
    custom: 'Check out the beautiful patio at The Brighton at the Wharf with your pup over Packed Weekend! We will be offering some fun pup-perks! Head to our Instagram page at @BrightonWharf to learn more.',
    url: 'https://www.brighton-dc.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Cantina Bambina',
    address: '960 Wharf St SW, Washington, DC 20024',
    lat: 38.87989,
    lng: -77.026543,
    custom: 'Cantina Bambina is happy to welcome all furry guests over Packed Weekend! Be sure to reserve a spot for the viewing party of The Pack on Sunday, November 22nd at 2pm! RSVP: https://bit.ly/3f6hS8L',
    url: 'https://www.cantinabambina.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Diament Jewelry and Gifts',
    address: '51 District Square SW, Washington, DC 20024',
    lat: 38.87971,
    lng: -77.02518,
    custom: 'Diament Jewelry and Gifts is offering a 25% off discount on all dog items on Sunday, November 22nd. Stop by to check out the bowls, bandanas, and treats and pick up an early Holiday gift for your pup!',
    url: 'https://www.diamentjewelry.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Martha Spak Gallery at the Wharf',
    address: '60 District Square SW, Washington, DC 20024',
    lat: 38.88011,
    lng: -77.02549,
    custom: 'Bring your furry best friend by Martha Spak Gallery at the Wharf over Packed Weekend to pick up a complimentary dog treat!',
    url: 'https://www.marthaspak.com',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Praline Bakery',
    address: '965 7th St SW, Washington, DC 20024',
    lat: 38.87814,
    lng: -77.02302,
    custom: 'The Praline Bakery at the Wharf will feature homemade dog treats for your pup. Stop by for something delicious for both of you!',
    url: 'https://www.praline-bakery.com',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Shake Shack at The Wharf',
    address: '975 Wharf St SW, Washington, DC 20024',
    lat: 38.88028,
    lng: -77.02632,
    custom: 'Shake Shack at the Wharf is excited for you to bring your furry best friend over on Sunday, November 22nd to receive a complimentary dog-friendly Poochini!',
    url: 'https://www.shakeshack.com/location/wharf-washington-d-c/?utm_source=G&utm_medium=local&utm_campaign=google-local',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'Hello Birdie Nail + Lash Lab',
    address: '3032 University Ave, San Diego, CA 92104',
    lat: 32.748772,
    lng: -117.129303,
    custom: 'Offering personalized dog-portrait nail designs and social media contest to give away four gift cards and one dog portrait nail design + gift card combo! Follow on Instagram @hellobirdielab for more!',
    url: 'https://www.hellobirdielab.com/',
    tags: ['tag_pet'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png'
  },
  {
    title: 'Long Beach Animcal Care Services',
    address: '2086 N Bellflower Blvd, Long Beach, CA 90815',
    lat: 33.794716,
    lng: -118.123526,
    custom: 'Stop by Pet Supplies Plus on 11/21 between 10AM-2PM for our free adoption event! Additionally, we will be offering $10 adoptions out of our shelter over Packed Weekend!',
    url: 'http://www.longbeach.gov/acs/',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Hillsdale Shopping Center',
    address: '60 31st Ave, San Mateo, CA 94403',
    lat: 37.537037,
    lng: -122.298882,
    custom: 'Visit Hillsdale Shopping Centers Facebook page for a chance to win special The Pack promo items!',
    url: '',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Magnolias on King',
    address: '703 King St, Alexandria, VA 22314',
    lat: 38.8052,
    lng: -77.04725,
    custom: 'Magnolias on King is offering $8 Doggie & Human Snack Bowls - Chicken & Brown Rice for pups / Smoked Gouda Grit & Red Gravy Bowls for humans. Proceeds benefiting Project Second Chance Animal Rescue.',
    url: 'http://www.magnoliasonking.com/',
    tags: ['tag_food'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png'
  },
  {
    title: 'PawsCo',
    address: 'Denver, CO',
    lat: 39.729542,
    lng: -104.977002,
    custom: 'PawsCo will sponsor the adoption fees of two lucky pups on behalf of The Pack! Email adopt@pawscoadoptions.org between Nov. 20-22 with “The Pack Adoption” in the subject for more info.',
    url: 'https://pawsco.org/',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'Barking Cat',
    address: '1708 Uinta Way, Ste F-3, Park City, UT 84098',
    lat: 40.72323,
    lng: -111.541975,
    custom: 'Stop by the Barking Cat and if you purchase four pounds of Love Your Pet Organics frozen food products, you will receive a free bag of 5oz jerky!',
    url: 'https://www.thebarkingcatparkcity.com/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png'
  },
  {
    title: 'Utah Pet Partners',
    address: 'Provo, UT',
    lat: 40.237033,
    lng: -111.702287,
    custom: 'The Pack is sponsoring Utah Pet Partners\' Pause for Paws virtual pet therapy visits at the University of Utah College of Social Work on Friday to help de-stress professors and students.',
    url: 'https://www.therapyanimalsutah.org/',
    tags: ['tag_shop'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-star-blue.png'
  },
  {
    title: 'Muttville',
    address: '255 Alabama St, San Francisco, CA 94103',
    lat: 37.76582,
    lng: -122.41196,
    custom: 'Muttville is giving away a few free adoptions and promo items over Packed Weekend!',
    url: '',
    tags: ['tag_shelter'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png'
  },
  {
    title: 'The Country Dog Hotel',
    address: 'London',
    lat: 51.49884,
    lng: -0.162026,
    custom: 'We are a hotel for dogs.We look after dogs from celebrities,royals & clients who want the best holiday for their dog.We are offering 20% off our VIP package from 1st-18th Dec 2020 & 6th- 31st Jan 2021',
    url: 'https://www.countrydoghotel.co.uk',
    tags: ['tag_hotel'],
    icon: 'https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-h-blue.png'
  },
  {
    title: "Chaparral Veterinary Medical Clinic",
    address: "32100 N. Cave Creek Rd. Cave Creek, AZ 85331",
    lat: 33.7766,
    lng: -111.9787,
    custom: "Free exam with purchase of vaccinations and 50% off of anal gland expressions and toenail trims.",
    url: "https://www.cahosp.com/",
    tags: ["tag_health"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-health-blue.png"
  },
  {
    title: "Salt Lake County Animal Services",
    address: "511 West 3900 South Salt Lake City, Utah 84123",
    lat: 40.686443,
    lng: -111.905951,
    custom: "Salt Lake County Animal Services is offering discounted adoption fees for our senior pets. Contact AdoptUtahPets.org to find out more!",
    url: "https://slco.org/animal-services/unleashed/adopt-a-senior-pet-month/",
    tags: ["tag_shelter"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png"
  },
  {
    title: "Elliot\'s House",
    address: "230 Somerville Ave Somerville, MA 02143",
    lat: 42.378018,
    lng: -71.092112,
    custom: "The first 10 new customers that sign up for any Elliot’s House services over Packed Weekend receive a complimentary temperament test for their pup!",
    url: "https://www.elliotshouse.com/",
    tags: ["tag_pet"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-market-blue.png"
  },
  {
    title: "Northeast Animal Shelter",
    address: "347 Highland Ave, Salem, MA 01970",
    lat: 42.498916,
    lng: -70.928595,
    custom: "6 lucky winners who become pet parents over Packed Weekend will receive a $100 Amazon gift card for them and their fur baby.",
    url: "",
    tags: ["tag_shelter"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-hotel-blue.png"
  },
  {
    title: "Clairemont Town Square",
    address: "4821 Clairemont Dr, San Diego, CA 92117",
    lat: 32.82902458,
    lng: -117.2029977,
    custom: "We are hosting a table giving away goodies on behalf of THE PACK! We\'ll also be doing a raffle that will include gift certificates to Lifetime Care Animal Center and Petco, both of which are in our shopping center.",
    url: "https://www.clairemonttownsquare.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Lifetime Animal Care Center",
    address: "4250-C, Clairemont Mesa Blvd, San Diego, CA 92117",
    lat: 32.832153,
    lng: -117.202182,
    custom: "We are doing a social media contest during Packed Weekend to give away a Lifetime Animal Care Center gift certificate on behalf of THE PACK! Follow on Facebook @lifetimeanimalcare for more details.",
    url: "https://www.lifetimeanimalcare.com/",
    tags: ["tag_health"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-health-blue.png"
  },
  {
    title: "Romero\'s K9 Club & Tap House",
    address: "985 S Public Rd, Lafayette, CO 80026",
    lat: 39.989568,
    lng: -105.090974,
    custom: "Romero\'s will feature select beers for $4 and Prosciutto rolls for pups for $1. Also, enter their on-site raffle to win a goodie basket! 18+ and registration is required.",
    url: "http://www.romerosk9club.com/",
    tags: ["tag_food"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png"
  },
  {
    title: "PET PROS - BELLEVUE",
    address: "1100 Bellevue Way NE, Suite 8, Bellevue, WA, 98004",
    lat: 47.620403,
    lng: -122.20062,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - BONNEY LAKE",
    address: "21201 State Route 410, #A9, Bonney Lake, WA, 98391",
    lat: 47.166453,
    lng: -122.145811,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - BOTHELL-LAKE PLEASANT",
    address: "24024 Bothell Everett Hwy, Bothell, WA, 98021",
    lat: 47.780126,
    lng: -122.21953,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - KLAHANIE",
    address: "4574 Klahanie Dr SE, Issaquah, WA, 98029",
    lat: 47.565501,
    lng: -122.003187,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - LAKE CITY",
    address: "10304 Lake City Way NE, Seattle, WA, 98125",
    lat: 47.703407,
    lng: -122.301247,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - LAKELAND TOWN CENTER",
    address: "1404 Lake Tapps Pkwy E, Auburn, WA, 98092",
    lat: 47.243107,
    lng: -122.210487,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - LAKE STEVENS",
    address: "701 State Route 9 NE, Suite B, Lake Stevens, WA 98258",
    lat: 48.002949,
    lng: -122.10371,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - MAGNOLIA",
    address: "2236 32nd Avenue West, Suite B, Seattle, WA, 98199",
    lat: 47.681635,
    lng: -122.387717,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - MAPLE VALLEY",
    address: "26520 Maple Valley Black Diamond Rd SE, Suite 104, Maple Valley, WA, 98038",
    lat: 47.363427,
    lng: -122.019268,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - WESTWOOD VILLAGE",
    address: "9033 25th Ave SW, Seattle, WA, 98106",
    lat: 47.522593,
    lng: -122.365575,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - TACOMA",
    address: "2665 N Pearl St, Tacoma, WA, 98407",
    lat: 47.27359,
    lng: -122.513878,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - RENTON HIGHLANDS",
    address: "4700 NE 4th St, Renton, WA, 98059",
    lat: 47.490155,
    lng: -122.1555751,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - RENTON - BENSON PLAZA",
    address: "10583 SE Carr Rd, Renton, WA, 98055",
    lat: 47.443837,
    lng: -122.199553,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - PUYALLUP",
    address: "5614 176th St East, #B-104, Puyallup, WA, 98375",
    lat: 47.096278,
    lng: -122.353927,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - NEWCASTLE",
    address: "6927 Coal Creek Pkwy SE, Newcastle, WA, 98059",
    lat: 47.539169,
    lng: -122.167505,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - MONROE",
    address: "19575  State Route 2, Monroe, WA 98272",
    lat: 47.860142,
    lng: -121.967938,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "PET PROS - MILTON",
    address: "900 Meridian Ave E, Milton, WA, 98354",
    lat: 47.248207,
    lng: -122.295244,
    custom: "10% off any purchase for your best friend when you shop online and pickup in store. Use promo code AMZ10 for 10% off your online order. Valid on order online/pickup in store orders only.  One coupon per customer. Customer information required. Valid on stock on hand, no rainchecks. May not be combined with other offers or other discounts. Valid 11/20/20 – 11/22/20 only. Thank you for shopping local!",
    url: "https://shop.petpros.net/products/shop/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Puddles Barkery",
    address: "5345 Ballard Ave NW, Seattle, WA 98107",
    lat: 47.667559,
    lng: -122.384548,
    custom: "The first 50 clients who mention THE PACK will receive a complimentary promotional item!",
    url: "https://www.puddlesbarkery.com/",
    tags: ["tag_food"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-food-blue.png"
  },
  {
    title: "Woofpak Pet Kitchen",
    address: "The Union Market, 2493 Park Ave #29, Tustin, CA 92782",
    lat: 33.697547,
    lng: -117.827517,
    custom: "Stop by Woofpak Pet Kitchen in Tustin between 11/20-11/ 22 to receive 50% off Meal Toppers when you use the code #PACKEDWEEKEND. While supplies last. Valid for new customers only.",
    url: "https://woofpakfresh.com/discount/%2523PACKEDWEEKEND",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "2800 Concord Pike Wilmington, DE 19803",
    lat: 39.79795,
    lng: -75.54807,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "1450 Kirkwood Highway Newark, DE 19711",
    lat: 39.69794,
    lng: -75.70758,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "2818 Pulaski Highway Newark, DE 19702",
    lat: 39.6039,
    lng: -75.76816,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "697 Yorklyn Road Hockessin, DE 19707",
    lat: 39.79017,
    lng: -75.69347,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "312 Suburban Drive Newark, DE 19711",
    lat: 39.66853,
    lng: -75.77757,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "1722 Marsh Road Wilmington, DE 19810",
    lat: 39.80172,
    lng: -75.50615,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "1720 Faulkland Road Wilmington, DE 19805",
    lat: 39.74717,
    lng: -75.61201,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "340 Main Street Middletown, DE 19709",
    lat: 39.4496,
    lng: -75.70485,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "287 Christiana Road # 2 New Castle, DE 19720",
    lat: 39.66255,
    lng: -75.64061,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "4940 Pennell Road Aston, Pa 19014",
    lat: 39.86362,
    lng: -75.42768,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "15 S. Dupont Highway Dover, DE 19901",
    lat: 39.16316,
    lng: -75.51486,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "804 E. Market Street West Chester, PA 19382",
    lat: 39.96535,
    lng: -75.59085,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "19287 Miller Road Rehoboth, De 19971",
    lat: 38.72226,
    lng: -75.12454,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "326 Fox Hunt Drive Bear, DE 19701",
    lat: 39.6066,
    lng: -75.7105,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "135 Aerenson Drive Milford, DE 19963",
    lat: 38.92906,
    lng: -75.43069,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "2062 Newark Rd West Grove, Pa 19390",
    lat: 39.78345,
    lng: -75.87647,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "10136 Old Ocean City Blvd, Suite 2, Berlin, Md 21811",
    lat: 38.33474,
    lng: -75.21167,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "599 Jimmy Drive Smyrna, De 19977",
    lat: 39.28167,
    lng: -75.59612,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "22836 Sussex Highway Seaford, De 19973",
    lat: 38.66449,
    lng: -75.59555,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "318 Village Center Logan Township, NJ 08085",
    lat: 39.75809,
    lng: -75.35456,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "642 Lancaster Ave Frazer, Pa 19355",
    lat: 40.0338,
    lng: -75.57681,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "43 Paoli Plaza Paoli, Pa 19301",
    lat: 40.04239,
    lng: -75.485241,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "County Line Road & Route 202 Chalfont, Pa 18914",
    lat: 40.3164,
    lng: -75.22969,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "301 North Harrison Street Princeton, NJ 08540",
    lat: 40.36428,
    lng: -74.65293,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "1080 Nixon Drive Mount Laurel, NJ 08054",
    lat: 39.940188,
    lng: -74.962008,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "Route 70 East Cherry Hill, NJ 08034",
    lat: 39.91363,
    lng: -75.00859,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "26209 John J Williams Highway,Millsboro, DE 19966",
    lat: 38.62587,
    lng: -75.19668,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "1518 South Salisbury Blvd Salisbury, MD 21801",
    lat: 38.337321,
    lng: -75.60792,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "925-NJ 73 Marlton, NJ 08053",
    lat: 39.91284,
    lng: -74.942321,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "851 E. Baltimore Pike, Kennett Square, Pa 19348",
    lat: 39.86166,
    lng: -75.68354,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Concord Pet Foods & Supplies",
    address: "826 North Easton Road, Doylestown, PA. 18902",
    lat: 40.33365,
    lng: -75.13013,
    custom: "Visit any Concord Pet Foods & Supplies during Packed Weekend and receive $5 off any purchase of $50 or more!",
    url: "https://concordpetfoods.com/",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Tip Top Last Stop",
    address: "1250 S Service Rd, Mississauga, ON L5E 1V4",
    lat: 43.593532,
    lng: -79.56844,
    custom: "Visit us for 70-80% off select items!",
    url: "https://www.dixieoutletmall.com/stores/dixieoutlet-tip-top-tailors",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Dixie Outlet Mall",
    address: "1250 S Service Rd, Mississauga, ON L5E 1V4",
    lat: 43.593532,
    lng: -79.56844,
    custom: "Spend $50 or more in the mall for the chance to win great prizes! You can start shopping on Nov. 20 and enter starting the 27th. Visit dixieoutletmall.com for more details.",
    url: "https://www.dixieoutletmall.com",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  },
  {
    title: "Cavaillino",
    address: "1250 S Service Rd, Mississauga, ON L5E 1V4",
    lat: 43.593532,
    lng: -79.56844,
    custom: "Visit us for 60% off Baggalini items, and free gift with any purchase!",
    url: "https://www.dixieoutletmall.com",
    tags: ["tag_shop"],
    icon: "https://d3h3vhzjf0dtlz.cloudfront.net/Rodeo-Prod/PackedWeekend-42c289b3/3/images/icons/marker-bag-blue.png"
  }
  ]
