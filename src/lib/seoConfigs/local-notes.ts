/**
 * local-notes.ts
 * Hand-researched local notes for the highest-traffic written locality pages.
 * Facts (stations, markets, housing types) come from public sources: Wikipedia, Square Yards and Housing.com area guides.
 * Keyed by page slug. Rendered by LocalNotesBlock inside seo-page-template.tsx.
 */
export type LocalNotes = { heading: string; paragraphs: string[] };

export const LOCAL_NOTES: Readonly<Record<string, LocalNotes>> = {
  "sofa-repair-indirapuram-ghaziabad": {
    heading: "Sofa repair in Indirapuram: what to know locally",
    paragraphs: [
      "Indirapuram, in Ghaziabad, is laid out in numbered khands such as Niti Khand, Vaibhav Khand and Shakti Khand. Most homes are flats in group-housing societies, with builder floors in the quieter lanes, and the area is reached from Delhi and Noida along NH-24.",
      "Society living shapes how sofa repair works here. Many Indirapuram societies ask service staff to register at the gate, so we ask for your society, tower and flat number when you book. In a flat the sofa cannot easily be moved, which is why our technicians repair on site instead of taking pieces to a workshop.",
    ],
  },
  "furniture-repair-indirapuram": {
    heading: "Furniture repair in Indirapuram: what to know locally",
    paragraphs: [
      "Indirapuram, in Ghaziabad, is laid out in numbered khands such as Niti Khand, Vaibhav Khand and Shakti Khand. Most homes are flats in group-housing societies, with builder floors in the quieter lanes, and the area is reached from Delhi and Noida along NH-24.",
      "Society living shapes how furniture repair works here. Many Indirapuram societies ask service staff to register at the gate, so we ask for your society, tower and flat number when you book. In a flat the furniture cannot easily be moved, which is why our technicians repair on site instead of taking pieces to a workshop.",
    ],
  },
  "recliner-repair-indirapuram": {
    heading: "Recliner repair in Indirapuram: what to know locally",
    paragraphs: [
      "Indirapuram, in Ghaziabad, is laid out in numbered khands such as Niti Khand, Vaibhav Khand and Shakti Khand. Most homes are flats in group-housing societies, with builder floors in the quieter lanes, and the area is reached from Delhi and Noida along NH-24.",
      "Society living shapes how recliner repair works here. Many Indirapuram societies ask service staff to register at the gate, so we ask for your society, tower and flat number when you book. In a flat the recliner cannot easily be moved, which is why our technicians repair on site instead of taking pieces to a workshop.",
    ],
  },
  "sofa-repair-rohini": {
    heading: "Sofa repair in Rohini: what to know locally",
    paragraphs: [
      "Rohini is a planned north-west Delhi suburb built mainly as DDA housing across numbered sectors. It is served by the Red Line stations Rithala, Rohini West and Rohini East, and by Rohini Sector 18-19 on the Yellow Line, and it has large hospitals such as Dr. Baba Saheb Ambedkar Hospital and Rajiv Gandhi Cancer Hospital.",
      "DDA flats in Rohini are often on upper floors, and many have no lift, so carrying a large sofa down the stairs is a real effort. That is why most sofa repair here is done at home. Give us your sector, pocket and floor when you book, and the technician arrives with the right tools and materials.",
    ],
  },
  "furniture-repair-rohini": {
    heading: "Furniture repair in Rohini: what to know locally",
    paragraphs: [
      "Rohini is a planned north-west Delhi suburb built mainly as DDA housing across numbered sectors. It is served by the Red Line stations Rithala, Rohini West and Rohini East, and by Rohini Sector 18-19 on the Yellow Line, and it has large hospitals such as Dr. Baba Saheb Ambedkar Hospital and Rajiv Gandhi Cancer Hospital.",
      "DDA flats in Rohini are often on upper floors, and many have no lift, so carrying a large furniture down the stairs is a real effort. That is why most furniture repair here is done at home. Give us your sector, pocket and floor when you book, and the technician arrives with the right tools and materials.",
    ],
  },
  "recliner-repair-rohini": {
    heading: "Recliner repair in Rohini: what to know locally",
    paragraphs: [
      "Rohini is a planned north-west Delhi suburb built mainly as DDA housing across numbered sectors. It is served by the Red Line stations Rithala, Rohini West and Rohini East, and by Rohini Sector 18-19 on the Yellow Line, and it has large hospitals such as Dr. Baba Saheb Ambedkar Hospital and Rajiv Gandhi Cancer Hospital.",
      "DDA flats in Rohini are often on upper floors, and many have no lift, so carrying a large recliner down the stairs is a real effort. That is why most recliner repair here is done at home. Give us your sector, pocket and floor when you book, and the technician arrives with the right tools and materials.",
    ],
  },
  "sofa-repair-dwarka": {
    heading: "Sofa repair in Dwarka: what to know locally",
    paragraphs: [
      "Dwarka is one of Delhi's largest planned sub-cities, with sectors numbered 1 to 29. Homes are mostly DDA flats and apartments in cooperative group-housing societies. The Blue Line runs through it, with stations including Dwarka Mor, Sector 14 and Sector 21, the Airport Express line starts from Sector 21, and Vegas Mall is a well-known landmark.",
      "With so many society and DDA flats, a typical Dwarka job is a large family sofa that has simply outgrown its foam, finish or cover. Because the sectors are spread out, give us your sector number, pocket and society name when you book so the technician can plan the route. The work is completed at your home.",
    ],
  },
  "furniture-repair-dwarka": {
    heading: "Furniture repair in Dwarka: what to know locally",
    paragraphs: [
      "Dwarka is one of Delhi's largest planned sub-cities, with sectors numbered 1 to 29. Homes are mostly DDA flats and apartments in cooperative group-housing societies. The Blue Line runs through it, with stations including Dwarka Mor, Sector 14 and Sector 21, the Airport Express line starts from Sector 21, and Vegas Mall is a well-known landmark.",
      "With so many society and DDA flats, a typical Dwarka job is a large family furniture that has simply outgrown its foam, finish or cover. Because the sectors are spread out, give us your sector number, pocket and society name when you book so the technician can plan the route. The work is completed at your home.",
    ],
  },
  "recliner-repair-dwarka": {
    heading: "Recliner repair in Dwarka: what to know locally",
    paragraphs: [
      "Dwarka is one of Delhi's largest planned sub-cities, with sectors numbered 1 to 29. Homes are mostly DDA flats and apartments in cooperative group-housing societies. The Blue Line runs through it, with stations including Dwarka Mor, Sector 14 and Sector 21, the Airport Express line starts from Sector 21, and Vegas Mall is a well-known landmark.",
      "With so many society and DDA flats, a typical Dwarka job is a large family recliner that has simply outgrown its foam, finish or cover. Because the sectors are spread out, give us your sector number, pocket and society name when you book so the technician can plan the route. The work is completed at your home.",
    ],
  },
  "sofa-repair-malviya-nagar": {
    heading: "Sofa repair in Malviya Nagar: what to know locally",
    paragraphs: [
      "Malviya Nagar in South Delhi has its own Yellow Line station, a busy Main Market, and neighbouring pockets such as Shivalik Colony, Geetanjali Enclave, Sarvodaya Enclave and Khirki Extension. Housing is a mix of DDA flats, builder floors and independent houses, and Select Citywalk at Saket is a short ride away.",
      "Builder floors usually mean stairs and a compact entrance, so a large sofa is hard to carry out. We do sofa repair on site instead. In older homes the frames are often solid and worth keeping, and it is the foam, finish, joints or cover that need attention. Tell us your block or colony and floor when you book.",
    ],
  },
  "furniture-repair-malviya-nagar": {
    heading: "Furniture repair in Malviya Nagar: what to know locally",
    paragraphs: [
      "Malviya Nagar in South Delhi has its own Yellow Line station, a busy Main Market, and neighbouring pockets such as Shivalik Colony, Geetanjali Enclave, Sarvodaya Enclave and Khirki Extension. Housing is a mix of DDA flats, builder floors and independent houses, and Select Citywalk at Saket is a short ride away.",
      "Builder floors usually mean stairs and a compact entrance, so a large furniture is hard to carry out. We do furniture repair on site instead. In older homes the frames are often solid and worth keeping, and it is the foam, finish, joints or cover that need attention. Tell us your block or colony and floor when you book.",
    ],
  },
  "recliner-repair-malviya-nagar": {
    heading: "Recliner repair in Malviya Nagar: what to know locally",
    paragraphs: [
      "Malviya Nagar in South Delhi has its own Yellow Line station, a busy Main Market, and neighbouring pockets such as Shivalik Colony, Geetanjali Enclave, Sarvodaya Enclave and Khirki Extension. Housing is a mix of DDA flats, builder floors and independent houses, and Select Citywalk at Saket is a short ride away.",
      "Builder floors usually mean stairs and a compact entrance, so a large recliner is hard to carry out. We do recliner repair on site instead. In older homes the frames are often solid and worth keeping, and it is the foam, finish, joints or cover that need attention. Tell us your block or colony and floor when you book.",
    ],
  },
  "sofa-repair-gurgaon-sector-56": {
    heading: "Sofa repair in Gurgaon Sector 56: what to know locally",
    paragraphs: [
      "Sector 56 sits along Golf Course Extension Road in Gurgaon, with the Rapid Metro station Sector 55-56 about a ten-minute walk away. Homes are a mix of cooperative group-housing societies, independent builder floors and apartment projects, with the HUDA Market nearby for daily needs.",
      "Apartment and builder-floor homes here usually have one main living-room sofa in daily use, so wear tends to show up early. Societies have gate entry procedures, and we handle the formalities when you share your society, tower and flat number. The repair is done at your home, with no pickup.",
    ],
  },
  "furniture-repair-kirti-nagar": {
    heading: "Furniture repair in Kirti Nagar: what to know locally",
    paragraphs: [
      "Kirti Nagar in West Delhi is best known for its large furniture market. It is served by the Blue Line Kirti Nagar station, with Moti Nagar and Mayapuri stations also nearby, and the market is surrounded by residential colonies.",
      "Living next to a furniture market means many residents compare the price of a new piece with repair. As a rule, a sound frame is worth keeping and only the foam, cover or polish needs work. Our technicians come to your home in Kirti Nagar and the nearby colonies, inspect first, and explain what is practical before any work starts.",
    ],
  },
  "sofa-repair-kirti-nagar": {
    heading: "Sofa repair in Kirti Nagar: what to know locally",
    paragraphs: [
      "Kirti Nagar in West Delhi is best known for its large furniture market. It is served by the Blue Line Kirti Nagar station, with Moti Nagar and Mayapuri stations also nearby, and the market is surrounded by residential colonies.",
      "Living next to a furniture market means many residents compare the price of a new piece with repair. As a rule, a sound frame is worth keeping and only the foam, cover or polish needs work. Our technicians come to your home in Kirti Nagar and the nearby colonies, inspect first, and explain what is practical before any work starts.",
    ],
  },
  "furniture-repair-pitampura": {
    heading: "Furniture repair in Pitampura: what to know locally",
    paragraphs: [
      "Pitampura in north-west Delhi is known for the Pitampura TV Tower and is served by Madhuban Chowk (Red and Magenta lines), Kohat Enclave (Red Line) and Netaji Subhash Place (Red and Pink lines, beside Pacific Mall NSP). Housing is mostly mid-rise apartments and independent houses.",
      "Independent houses and mid-rise flats here often hold older, well-built furniture, so the frame is usually fine and the work is on foam, springs, covers or polish. We come to your home across Pitampura's blocks and enclaves. Share your block and a nearby landmark, such as the TV Tower or Kohat Enclave, and the technician will find you.",
    ],
  },
  "sofa-repair-pitampura": {
    heading: "Sofa repair in Pitampura: what to know locally",
    paragraphs: [
      "Pitampura in north-west Delhi is known for the Pitampura TV Tower and is served by Madhuban Chowk (Red and Magenta lines), Kohat Enclave (Red Line) and Netaji Subhash Place (Red and Pink lines, beside Pacific Mall NSP). Housing is mostly mid-rise apartments and independent houses.",
      "Independent houses and mid-rise flats here often hold older, well-built furniture, so the frame is usually fine and the work is on foam, springs, covers or polish. We come to your home across Pitampura's blocks and enclaves. Share your block and a nearby landmark, such as the TV Tower or Kohat Enclave, and the technician will find you.",
    ],
  },
  "recliner-repair-pitampura": {
    heading: "Recliner repair in Pitampura: what to know locally",
    paragraphs: [
      "Pitampura in north-west Delhi is known for the Pitampura TV Tower and is served by Madhuban Chowk (Red and Magenta lines), Kohat Enclave (Red Line) and Netaji Subhash Place (Red and Pink lines, beside Pacific Mall NSP). Housing is mostly mid-rise apartments and independent houses.",
      "Independent houses and mid-rise flats here often hold older, well-built furniture, so the frame is usually fine and the work is on foam, springs, covers or polish. We come to your home across Pitampura's blocks and enclaves. Share your block and a nearby landmark, such as the TV Tower or Kohat Enclave, and the technician will find you.",
    ],
  },
  "sofa-repair-noida-sector-137": {
    heading: "Sofa repair in Noida Sector 137: what to know locally",
    paragraphs: [
      "Sector 137 in Noida sits on Shahid Bhagat Singh Marg and has its own Aqua Line station, Sector 137. The sector is a mix of residential societies such as Logix Blossom County, Gulshan Vivante, Paras Tierra, Ajnara Daffodil and Paramount Floraville, with offices and Felix Hospital close by.",
      "In gated high-rise societies like these, entry procedures and lifts are part of every visit. Share your society, tower and flat number when you book and we handle the gate formalities in advance. The sofa stays in your flat, so sofa repair is done on site and nothing has to be carried out.",
    ],
  },
  "sofa-repair-rajouri-garden": {
    heading: "Sofa repair in Rajouri Garden: what to know locally",
    paragraphs: [
      "Rajouri Garden in West Delhi is a mature, fully built-up locality with a busy Blue and Pink Line interchange station, Nehru Market and malls such as West Gate Mall. It borders Moti Nagar, Tilak Nagar, Punjabi Bagh and Tagore Garden.",
      "In established colonies like this, homes are often older and furniture has been in use for years, so the common jobs are tired foam, loose joints and worn covers. We repair at your home across Rajouri Garden and the neighbouring colonies. Tell us your block and a nearby landmark, such as Nehru Market or the metro station.",
    ],
  },
  "furniture-repair-rajouri-garden": {
    heading: "Furniture repair in Rajouri Garden: what to know locally",
    paragraphs: [
      "Rajouri Garden in West Delhi is a mature, fully built-up locality with a busy Blue and Pink Line interchange station, Nehru Market and malls such as West Gate Mall. It borders Moti Nagar, Tilak Nagar, Punjabi Bagh and Tagore Garden.",
      "In established colonies like this, homes are often older and furniture has been in use for years, so the common jobs are tired foam, loose joints and worn covers. We repair at your home across Rajouri Garden and the neighbouring colonies. Tell us your block and a nearby landmark, such as Nehru Market or the metro station.",
    ],
  },
  "recliner-repair-rajouri-garden": {
    heading: "Recliner repair in Rajouri Garden: what to know locally",
    paragraphs: [
      "Rajouri Garden in West Delhi is a mature, fully built-up locality with a busy Blue and Pink Line interchange station, Nehru Market and malls such as West Gate Mall. It borders Moti Nagar, Tilak Nagar, Punjabi Bagh and Tagore Garden.",
      "In established colonies like this, homes are often older and furniture has been in use for years, so the common jobs are tired foam, loose joints and worn covers. We repair at your home across Rajouri Garden and the neighbouring colonies. Tell us your block and a nearby landmark, such as Nehru Market or the metro station.",
    ],
  },
  "sofa-repair-noida-sector-62": {
    heading: "Sofa repair in Noida Sector 62: what to know locally",
    paragraphs: [
      "Sector 62 in Noida has its own Blue Line station, Noida Sector 62, with Noida Electronic City as the next stop. Fortis Hospital and the Electronic City office towers are close by, and the residential pockets in neighbouring sectors such as 59, 61 and 63 are mainly 2 and 3 BHK apartments in societies.",
      "Many households here are working professionals in apartments, so the main sofa is used daily after long office days and wear builds up steadily. We repair at your home. Share your society and flat number when you book, and we handle the gate entry.",
    ],
  },
  "sofa-repair-saket": {
    heading: "Sofa repair in Saket: what to know locally",
    paragraphs: [
      "Saket in South Delhi is served by the Saket station on the Yellow Line, with Malviya Nagar station closer for some blocks. Select Citywalk, DLF Place and MGF Metropolitan malls are all nearby. Housing is mainly builder floors, apartments and independent houses.",
      "Builder floors usually have stairs and compact entrances, which makes moving a large sofa difficult, so sofa repair in Saket is done at home. Tell us your block and floor when you book, and the technician brings the materials and tools to complete most jobs in one visit.",
    ],
  },
  "furniture-repair-saket": {
    heading: "Furniture repair in Saket: what to know locally",
    paragraphs: [
      "Saket in South Delhi is served by the Saket station on the Yellow Line, with Malviya Nagar station closer for some blocks. Select Citywalk, DLF Place and MGF Metropolitan malls are all nearby. Housing is mainly builder floors, apartments and independent houses.",
      "Builder floors usually have stairs and compact entrances, which makes moving a large furniture difficult, so furniture repair in Saket is done at home. Tell us your block and floor when you book, and the technician brings the materials and tools to complete most jobs in one visit.",
    ],
  },
  "recliner-repair-saket": {
    heading: "Recliner repair in Saket: what to know locally",
    paragraphs: [
      "Saket in South Delhi is served by the Saket station on the Yellow Line, with Malviya Nagar station closer for some blocks. Select Citywalk, DLF Place and MGF Metropolitan malls are all nearby. Housing is mainly builder floors, apartments and independent houses.",
      "Builder floors usually have stairs and compact entrances, which makes moving a large recliner difficult, so recliner repair in Saket is done at home. Tell us your block and floor when you book, and the technician brings the materials and tools to complete most jobs in one visit.",
    ],
  },
  "furniture-repair-janakpuri": {
    heading: "Furniture repair in Janakpuri: what to know locally",
    paragraphs: [
      "Janakpuri in West Delhi is a planned colony laid out in lettered blocks, with Janakpuri West (Blue and Magenta line interchange) and Janakpuri East stations. District Centre shopping and Unity One Mall are beside Janakpuri West, and housing is a mix of independent houses and apartments.",
      "Janakpuri's independent houses often have larger living rooms and older, solid furniture, while apartments have more compact layouts. Either way, furniture repair is done at your home. Share your block and a landmark such as District Centre, and we will plan the visit.",
    ],
  },
  "sofa-repair-janakpuri": {
    heading: "Sofa repair in Janakpuri: what to know locally",
    paragraphs: [
      "Janakpuri in West Delhi is a planned colony laid out in lettered blocks, with Janakpuri West (Blue and Magenta line interchange) and Janakpuri East stations. District Centre shopping and Unity One Mall are beside Janakpuri West, and housing is a mix of independent houses and apartments.",
      "Janakpuri's independent houses often have larger living rooms and older, solid furniture, while apartments have more compact layouts. Either way, sofa repair is done at your home. Share your block and a landmark such as District Centre, and we will plan the visit.",
    ],
  },
  "recliner-repair-janakpuri": {
    heading: "Recliner repair in Janakpuri: what to know locally",
    paragraphs: [
      "Janakpuri in West Delhi is a planned colony laid out in lettered blocks, with Janakpuri West (Blue and Magenta line interchange) and Janakpuri East stations. District Centre shopping and Unity One Mall are beside Janakpuri West, and housing is a mix of independent houses and apartments.",
      "Janakpuri's independent houses often have larger living rooms and older, solid furniture, while apartments have more compact layouts. Either way, recliner repair is done at your home. Share your block and a landmark such as District Centre, and we will plan the visit.",
    ],
  },
  "sofa-repair-crossing-republik-ghaziabad": {
    heading: "Sofa repair in Crossings Republik: what to know locally",
    paragraphs: [
      "Crossings Republik is a large integrated township of about 360 acres on NH-24 in Ghaziabad, developed by several builders and planned for roughly 200,000 residents. Homes are mainly apartments in builder-developed societies.",
      "Because the township is spread across many separate societies, gate entry rules can differ from one to the next. Share your society name, tower and flat number when you book and we handle the formalities. The sofa repair is completed inside your home, so nothing has to be moved.",
    ],
  },
  "furniture-repair-crossing-republik-ghaziabad": {
    heading: "Furniture repair in Crossings Republik: what to know locally",
    paragraphs: [
      "Crossings Republik is a large integrated township of about 360 acres on NH-24 in Ghaziabad, developed by several builders and planned for roughly 200,000 residents. Homes are mainly apartments in builder-developed societies.",
      "Because the township is spread across many separate societies, gate entry rules can differ from one to the next. Share your society name, tower and flat number when you book and we handle the formalities. The furniture repair is completed inside your home, so nothing has to be moved.",
    ],
  },
  "furniture-repair-lajpat-nagar": {
    heading: "Furniture repair in Lajpat Nagar: what to know locally",
    paragraphs: [
      "Lajpat Nagar in South Delhi is a busy mixed residential and commercial area built around Central Market, with the Lajpat Nagar station on the Violet and Pink lines right beside it. Nearby colonies include Defence Colony, South Extension, Kailash Colony and Greater Kailash, and many homes are builder floors.",
      "Builder floors and flats above shops usually have narrow stairs, so a large furniture cannot easily go down. That is why we do furniture repair on site. Tell us the lane, block and floor, plus a landmark such as Central Market, and the technician comes to your door.",
    ],
  },
  "sofa-repair-lajpat-nagar": {
    heading: "Sofa repair in Lajpat Nagar: what to know locally",
    paragraphs: [
      "Lajpat Nagar in South Delhi is a busy mixed residential and commercial area built around Central Market, with the Lajpat Nagar station on the Violet and Pink lines right beside it. Nearby colonies include Defence Colony, South Extension, Kailash Colony and Greater Kailash, and many homes are builder floors.",
      "Builder floors and flats above shops usually have narrow stairs, so a large sofa cannot easily go down. That is why we do sofa repair on site. Tell us the lane, block and floor, plus a landmark such as Central Market, and the technician comes to your door.",
    ],
  },
  "recliner-repair-lajpat-nagar": {
    heading: "Recliner repair in Lajpat Nagar: what to know locally",
    paragraphs: [
      "Lajpat Nagar in South Delhi is a busy mixed residential and commercial area built around Central Market, with the Lajpat Nagar station on the Violet and Pink lines right beside it. Nearby colonies include Defence Colony, South Extension, Kailash Colony and Greater Kailash, and many homes are builder floors.",
      "Builder floors and flats above shops usually have narrow stairs, so a large recliner cannot easily go down. That is why we do recliner repair on site. Tell us the lane, block and floor, plus a landmark such as Central Market, and the technician comes to your door.",
    ],
  },
  "furniture-repair-gurgaon-sector-45": {
    heading: "Furniture repair in Gurgaon Sector 45: what to know locally",
    paragraphs: [
      "Sector 45 in Gurgaon is reached from Mehrauli Road, with HUDA City Centre metro about 3.4 km away. Housing ranges from builder-developed apartments such as Unitech Greenwood City to HUDA colony homes, and Gold Souk Mall is nearby.",
      "Whether you live in an apartment complex or a HUDA colony house, we do furniture repair at your home. Complexes have gate procedures, which we handle when you share your society and flat number. In colony houses, a nearby landmark is enough for the technician to find you.",
    ],
  },
  "sofa-repair-gurgaon-sector-45": {
    heading: "Sofa repair in Gurgaon Sector 45: what to know locally",
    paragraphs: [
      "Sector 45 in Gurgaon is reached from Mehrauli Road, with HUDA City Centre metro about 3.4 km away. Housing ranges from builder-developed apartments such as Unitech Greenwood City to HUDA colony homes, and Gold Souk Mall is nearby.",
      "Whether you live in an apartment complex or a HUDA colony house, we do sofa repair at your home. Complexes have gate procedures, which we handle when you share your society and flat number. In colony houses, a nearby landmark is enough for the technician to find you.",
    ],
  },
  "sofa-repair-noida-sector-150": {
    heading: "Sofa repair in Noida Sector 150: what to know locally",
    paragraphs: [
      "Sector 150 is a low-density, green residential sector along the Noida-Greater Noida Expressway, with open surroundings and landscaped, multistorey apartment communities. The Sports City scheme in the sector is the area's main landmark.",
      "There is no metro station inside Sector 150; the expressway corridor is served by the Aqua Line. For sofa work in large apartments we come to your home, so tell us your tower and floor when you book and we plan the visit around society entry rules.",
    ],
  },
  "furniture-repair-noida-sector-150": {
    heading: "Furniture repair in Noida Sector 150: what to know locally",
    paragraphs: [
      "Sector 150 is a low-density, green residential sector along the Noida-Greater Noida Expressway, with open surroundings and landscaped, multistorey apartment communities. The Sports City scheme in the sector is the area's main landmark.",
      "There is no metro station inside Sector 150; the expressway corridor is served by the Aqua Line. For sofa work in large apartments we come to your home, so tell us your tower and floor when you book and we plan the visit around society entry rules.",
    ],
  },
  "recliner-repair-noida-sector-150": {
    heading: "Recliner repair in Noida Sector 150: what to know locally",
    paragraphs: [
      "Sector 150 is a low-density, green residential sector along the Noida-Greater Noida Expressway, with open surroundings and landscaped, multistorey apartment communities. The Sports City scheme in the sector is the area's main landmark.",
      "There is no metro station inside Sector 150; the expressway corridor is served by the Aqua Line. For sofa work in large apartments we come to your home, so tell us your tower and floor when you book and we plan the visit around society entry rules.",
    ],
  },
  "sofa-repair-dlf-gurgaon": {
    heading: "Sofa repair in DLF City, Gurgaon: what to know locally",
    paragraphs: [
      "DLF City is a private township developed in phases since the 1980s, sitting between MG Road, Golf Course Road and the Cyber City belt. Phases 1 to 4 are mostly plots and independent builder floors with some group housing; Phase 5 has luxury condominiums on Golf Course Road.",
      "Sikanderpur, on the Yellow Line and Rapid Metro, is the key interchange near Phase 2. Whichever phase you are in, we repair sofas, recliners and furniture at your home; share your phase and house or tower number when booking.",
    ],
  },
  "furniture-repair-dlf-gurgaon": {
    heading: "Furniture repair in DLF City, Gurgaon: what to know locally",
    paragraphs: [
      "DLF City is a private township developed in phases since the 1980s, sitting between MG Road, Golf Course Road and the Cyber City belt. Phases 1 to 4 are mostly plots and independent builder floors with some group housing; Phase 5 has luxury condominiums on Golf Course Road.",
      "Sikanderpur, on the Yellow Line and Rapid Metro, is the key interchange near Phase 2. Whichever phase you are in, we repair sofas, recliners and furniture at your home; share your phase and house or tower number when booking.",
    ],
  },
  "recliner-repair-dlf-gurgaon": {
    heading: "Recliner repair in DLF City, Gurgaon: what to know locally",
    paragraphs: [
      "DLF City is a private township developed in phases since the 1980s, sitting between MG Road, Golf Course Road and the Cyber City belt. Phases 1 to 4 are mostly plots and independent builder floors with some group housing; Phase 5 has luxury condominiums on Golf Course Road.",
      "Sikanderpur, on the Yellow Line and Rapid Metro, is the key interchange near Phase 2. Whichever phase you are in, we repair sofas, recliners and furniture at your home; share your phase and house or tower number when booking.",
    ],
  },
  "sofa-repair-vasant-kunj": {
    heading: "Sofa repair in Vasant Kunj: what to know locally",
    paragraphs: [
      "Vasant Kunj in South Delhi is divided into five residential sectors, A to E, split into pockets. Housing includes general residential areas, farmhouses and military-linked colonies such as Ruchi Vihar and Tarapore Enclave.",
      "Malls nearby include DLF Emporio, DLF Promenade, Ambience Mall and Vasant Square Mall, and the area borders JNU and Sanjay Van. Give us your sector and pocket when you book so our technician finds you quickly.",
    ],
  },
  "furniture-repair-vasant-kunj": {
    heading: "Furniture repair in Vasant Kunj: what to know locally",
    paragraphs: [
      "Vasant Kunj in South Delhi is divided into five residential sectors, A to E, split into pockets. Housing includes general residential areas, farmhouses and military-linked colonies such as Ruchi Vihar and Tarapore Enclave.",
      "Malls nearby include DLF Emporio, DLF Promenade, Ambience Mall and Vasant Square Mall, and the area borders JNU and Sanjay Van. Give us your sector and pocket when you book so our technician finds you quickly.",
    ],
  },
  "recliner-repair-vasant-kunj": {
    heading: "Recliner repair in Vasant Kunj: what to know locally",
    paragraphs: [
      "Vasant Kunj in South Delhi is divided into five residential sectors, A to E, split into pockets. Housing includes general residential areas, farmhouses and military-linked colonies such as Ruchi Vihar and Tarapore Enclave.",
      "Malls nearby include DLF Emporio, DLF Promenade, Ambience Mall and Vasant Square Mall, and the area borders JNU and Sanjay Van. Give us your sector and pocket when you book so our technician finds you quickly.",
    ],
  },
  "sofa-repair-gurgaon-sector-14": {
    heading: "Sofa repair in Gurgaon Sector 14: what to know locally",
    paragraphs: [
      "Sector 14 is a mixed-use neighbourhood in DLF Colony, known for HUDA Market with its clothing, home and kitchenware shops, cafes and salons.",
      "It is a busy residential and market area, so visits are easiest when you share a landmark near HUDA Market. We repair sofas, recliners and furniture at home.",
    ],
  },
  "furniture-repair-gurgaon-sector-14": {
    heading: "Furniture repair in Gurgaon Sector 14: what to know locally",
    paragraphs: [
      "Sector 14 is a mixed-use neighbourhood in DLF Colony, known for HUDA Market with its clothing, home and kitchenware shops, cafes and salons.",
      "It is a busy residential and market area, so visits are easiest when you share a landmark near HUDA Market. We repair sofas, recliners and furniture at home.",
    ],
  },
  "recliner-repair-gurgaon-sector-14": {
    heading: "Recliner repair in Gurgaon Sector 14: what to know locally",
    paragraphs: [
      "Sector 14 is a mixed-use neighbourhood in DLF Colony, known for HUDA Market with its clothing, home and kitchenware shops, cafes and salons.",
      "It is a busy residential and market area, so visits are easiest when you share a landmark near HUDA Market. We repair sofas, recliners and furniture at home.",
    ],
  },
  "sofa-repair-noida-sector-18": {
    heading: "Sofa repair in Noida Sector 18: what to know locally",
    paragraphs: [
      "Sector 18 is a busy commercial and residential sector in Noida with a large market area and shopping centres; Omaxe India Trade Center is among its named attractions. The Wave Noida Sector 18 metro station is in the area.",
      "Because the market area is crowded, tell us a nearby landmark and any parking or entry details when you book, and we will plan the visit accordingly.",
    ],
  },
  "furniture-repair-noida-sector-18": {
    heading: "Furniture repair in Noida Sector 18: what to know locally",
    paragraphs: [
      "Sector 18 is a busy commercial and residential sector in Noida with a large market area and shopping centres; Omaxe India Trade Center is among its named attractions. The Wave Noida Sector 18 metro station is in the area.",
      "Because the market area is crowded, tell us a nearby landmark and any parking or entry details when you book, and we will plan the visit accordingly.",
    ],
  },
  "recliner-repair-noida-sector-18": {
    heading: "Recliner repair in Noida Sector 18: what to know locally",
    paragraphs: [
      "Sector 18 is a busy commercial and residential sector in Noida with a large market area and shopping centres; Omaxe India Trade Center is among its named attractions. The Wave Noida Sector 18 metro station is in the area.",
      "Because the market area is crowded, tell us a nearby landmark and any parking or entry details when you book, and we will plan the visit accordingly.",
    ],
  },
  "sofa-repair-vasant-vihar": {
    heading: "Sofa repair in Vasant Vihar: what to know locally",
    paragraphs: [
      "Vasant Vihar is a diplomatic and residential neighbourhood of South West Delhi near Chanakyapuri. Plots were mostly 400 to 2,000 sq yd with bungalows built on them, and the area has more than 50 diplomatic missions.",
      "Four main roads, Munirka Marg, Vasant Marg, Poorvi Marg and Paschimi Marg, form a rough triangle around it. For bungalows we repair furniture on site; send us your block (A to F) when booking.",
    ],
  },
  "recliner-repair-vasant-vihar": {
    heading: "Recliner repair in Vasant Vihar: what to know locally",
    paragraphs: [
      "Vasant Vihar is a diplomatic and residential neighbourhood of South West Delhi near Chanakyapuri. Plots were mostly 400 to 2,000 sq yd with bungalows built on them, and the area has more than 50 diplomatic missions.",
      "Four main roads, Munirka Marg, Vasant Marg, Poorvi Marg and Paschimi Marg, form a rough triangle around it. For bungalows we repair furniture on site; send us your block (A to F) when booking.",
    ],
  },
  "sofa-repair-neharpar-faridabad": {
    heading: "Sofa repair in Neharpar, Faridabad: what to know locally",
    paragraphs: [
      "Neharpar, also called Greater Faridabad, covers Faridabad sectors 66 to 89; sectors 75 to 89 are residential. Local institutions include Amrita Hospital, Modern DPS and Shiv Nadar School, and Omaxe World Street is the main shopping complex.",
      "Tell us your sector and society when booking, and we will come to your home for sofa, recliner and furniture repair.",
    ],
  },
  "furniture-repair-neharpar-faridabad": {
    heading: "Furniture repair in Neharpar, Faridabad: what to know locally",
    paragraphs: [
      "Neharpar, also called Greater Faridabad, covers Faridabad sectors 66 to 89; sectors 75 to 89 are residential. Local institutions include Amrita Hospital, Modern DPS and Shiv Nadar School, and Omaxe World Street is the main shopping complex.",
      "Tell us your sector and society when booking, and we will come to your home for sofa, recliner and furniture repair.",
    ],
  },
  "recliner-repair-neharpar-faridabad": {
    heading: "Recliner repair in Neharpar, Faridabad: what to know locally",
    paragraphs: [
      "Neharpar, also called Greater Faridabad, covers Faridabad sectors 66 to 89; sectors 75 to 89 are residential. Local institutions include Amrita Hospital, Modern DPS and Shiv Nadar School, and Omaxe World Street is the main shopping complex.",
      "Tell us your sector and society when booking, and we will come to your home for sofa, recliner and furniture repair.",
    ],
  },
  "sofa-repair-golf-course-road-gurgaon": {
    heading: "Sofa repair in Golf Course Road, Gurgaon: what to know locally",
    paragraphs: [
      "Golf Course Road runs from the Sikanderpur and MG Road metro end in the north to Sector 55-56 in the south, with Rapid Metro stations at Sector 42-43, 53-54, 54 Chowk and 55-56. It is lined with premium residential towers and corporate offices.",
      "In high-rise towers, share your tower, floor and any service lift rules when booking so we can bring tools and fabric without delay.",
    ],
  },
  "furniture-repair-golf-course-road-gurgaon": {
    heading: "Furniture repair in Golf Course Road, Gurgaon: what to know locally",
    paragraphs: [
      "Golf Course Road runs from the Sikanderpur and MG Road metro end in the north to Sector 55-56 in the south, with Rapid Metro stations at Sector 42-43, 53-54, 54 Chowk and 55-56. It is lined with premium residential towers and corporate offices.",
      "In high-rise towers, share your tower, floor and any service lift rules when booking so we can bring tools and fabric without delay.",
    ],
  },
  "recliner-repair-golf-course-road-gurgaon": {
    heading: "Recliner repair in Golf Course Road, Gurgaon: what to know locally",
    paragraphs: [
      "Golf Course Road runs from the Sikanderpur and MG Road metro end in the north to Sector 55-56 in the south, with Rapid Metro stations at Sector 42-43, 53-54, 54 Chowk and 55-56. It is lined with premium residential towers and corporate offices.",
      "In high-rise towers, share your tower, floor and any service lift rules when booking so we can bring tools and fabric without delay.",
    ],
  },
  "sofa-repair-palam-vihar-gurgaon": {
    heading: "Sofa repair in Palam Vihar, Gurgaon: what to know locally",
    paragraphs: [
      "Palam Vihar is an established residential locality of Gurgaon with local markets such as Ansal Plaza, Palam Triangle and Palam Vyapar Kendra, and nearby schools and hospitals.",
      "Give us your block or society and a nearby landmark when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "furniture-repair-palam-vihar-gurgaon": {
    heading: "Furniture repair in Palam Vihar, Gurgaon: what to know locally",
    paragraphs: [
      "Palam Vihar is an established residential locality of Gurgaon with local markets such as Ansal Plaza, Palam Triangle and Palam Vyapar Kendra, and nearby schools and hospitals.",
      "Give us your block or society and a nearby landmark when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "recliner-repair-palam-vihar-gurgaon": {
    heading: "Recliner repair in Palam Vihar, Gurgaon: what to know locally",
    paragraphs: [
      "Palam Vihar is an established residential locality of Gurgaon with local markets such as Ansal Plaza, Palam Triangle and Palam Vyapar Kendra, and nearby schools and hospitals.",
      "Give us your block or society and a nearby landmark when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "sofa-repair-mayur-vihar": {
    heading: "Sofa repair in Mayur Vihar: what to know locally",
    paragraphs: [
      "Mayur Vihar is a residential area of East Delhi near the Noida border, developed from 1979-80 in three phases. Housing includes DDA flats, cooperative society apartments, and LIG, MIG and SFS housing, with Janta housing in Phase III.",
      "Mayur Vihar-I and Mayur Vihar Pocket-1 metro stations serve the area, and Star City Mall and Sanjay Lake are landmarks. Tell us your phase and pocket when booking.",
    ],
  },
  "recliner-repair-mayur-vihar": {
    heading: "Recliner repair in Mayur Vihar: what to know locally",
    paragraphs: [
      "Mayur Vihar is a residential area of East Delhi near the Noida border, developed from 1979-80 in three phases. Housing includes DDA flats, cooperative society apartments, and LIG, MIG and SFS housing, with Janta housing in Phase III.",
      "Mayur Vihar-I and Mayur Vihar Pocket-1 metro stations serve the area, and Star City Mall and Sanjay Lake are landmarks. Tell us your phase and pocket when booking.",
    ],
  },
  "sofa-repair-kalkaji": {
    heading: "Sofa repair in Kalkaji: what to know locally",
    paragraphs: [
      "Kalkaji in South Delhi takes its name from Kalkaji Mandir, the Kali temple. Nehru Place lies opposite the temple and Okhla railway station is nearby.",
      "Share your block and a nearby landmark when booking and we will come to your home for sofa, recliner and furniture repair.",
    ],
  },
  "furniture-repair-kalkaji": {
    heading: "Furniture repair in Kalkaji: what to know locally",
    paragraphs: [
      "Kalkaji in South Delhi takes its name from Kalkaji Mandir, the Kali temple. Nehru Place lies opposite the temple and Okhla railway station is nearby.",
      "Share your block and a nearby landmark when booking and we will come to your home for sofa, recliner and furniture repair.",
    ],
  },
  "recliner-repair-kalkaji": {
    heading: "Recliner repair in Kalkaji: what to know locally",
    paragraphs: [
      "Kalkaji in South Delhi takes its name from Kalkaji Mandir, the Kali temple. Nehru Place lies opposite the temple and Okhla railway station is nearby.",
      "Share your block and a nearby landmark when booking and we will come to your home for sofa, recliner and furniture repair.",
    ],
  },
  "sofa-repair-south-extension": {
    heading: "Sofa repair in South Extension: what to know locally",
    paragraphs: [
      "South Extension, in South Delhi on the Ring Road just east of AIIMS, is split into Part I and Part II. It is a premier high street and one of Delhi's most expensive residential areas. A Delhi Metro station opened there in 2018.",
      "Tell us your part and house number when booking, and we will repair your sofa or furniture at home.",
    ],
  },
  "furniture-repair-south-extension": {
    heading: "Furniture repair in South Extension: what to know locally",
    paragraphs: [
      "South Extension, in South Delhi on the Ring Road just east of AIIMS, is split into Part I and Part II. It is a premier high street and one of Delhi's most expensive residential areas. A Delhi Metro station opened there in 2018.",
      "Tell us your part and house number when booking, and we will repair your sofa or furniture at home.",
    ],
  },
  "recliner-repair-south-extension": {
    heading: "Recliner repair in South Extension: what to know locally",
    paragraphs: [
      "South Extension, in South Delhi on the Ring Road just east of AIIMS, is split into Part I and Part II. It is a premier high street and one of Delhi's most expensive residential areas. A Delhi Metro station opened there in 2018.",
      "Tell us your part and house number when booking, and we will repair your sofa or furniture at home.",
    ],
  },
  "sofa-repair-greater-kailash": {
    heading: "Sofa repair in Greater Kailash: what to know locally",
    paragraphs: [
      "Greater Kailash I was built on land acquired from the villages of Zamrudpur and Devli Gaon in 1955, and its M and N Block markets draw shoppers and diners. Housing is builder floors and independent villas.",
      "Greater Kailash is served by metro stations on the Violet and Magenta lines. Send us your block when booking so we can plan the visit.",
    ],
  },
  "furniture-repair-greater-kailash": {
    heading: "Furniture repair in Greater Kailash: what to know locally",
    paragraphs: [
      "Greater Kailash I was built on land acquired from the villages of Zamrudpur and Devli Gaon in 1955, and its M and N Block markets draw shoppers and diners. Housing is builder floors and independent villas.",
      "Greater Kailash is served by metro stations on the Violet and Magenta lines. Send us your block when booking so we can plan the visit.",
    ],
  },
  "recliner-repair-greater-kailash": {
    heading: "Recliner repair in Greater Kailash: what to know locally",
    paragraphs: [
      "Greater Kailash I was built on land acquired from the villages of Zamrudpur and Devli Gaon in 1955, and its M and N Block markets draw shoppers and diners. Housing is builder floors and independent villas.",
      "Greater Kailash is served by metro stations on the Violet and Magenta lines. Send us your block when booking so we can plan the visit.",
    ],
  },
  "sofa-repair-hauz-khas": {
    heading: "Sofa repair in Hauz Khas: what to know locally",
    paragraphs: [
      "Hauz Khas centres on the historic Hauz Khas Complex and its lake, the Royal Tank built under Alauddin Khalji. Hauz Khas Enclave was developed in the 1960s by DLF in lettered blocks, with E block as the main market. Deer Park is nearby.",
      "Hauz Khas metro station is served by the Yellow and Magenta lines. Give us your block when booking and we will come to your home.",
    ],
  },
  "furniture-repair-hauz-khas": {
    heading: "Furniture repair in Hauz Khas: what to know locally",
    paragraphs: [
      "Hauz Khas centres on the historic Hauz Khas Complex and its lake, the Royal Tank built under Alauddin Khalji. Hauz Khas Enclave was developed in the 1960s by DLF in lettered blocks, with E block as the main market. Deer Park is nearby.",
      "Hauz Khas metro station is served by the Yellow and Magenta lines. Give us your block when booking and we will come to your home.",
    ],
  },
  "recliner-repair-hauz-khas": {
    heading: "Recliner repair in Hauz Khas: what to know locally",
    paragraphs: [
      "Hauz Khas centres on the historic Hauz Khas Complex and its lake, the Royal Tank built under Alauddin Khalji. Hauz Khas Enclave was developed in the 1960s by DLF in lettered blocks, with E block as the main market. Deer Park is nearby.",
      "Hauz Khas metro station is served by the Yellow and Magenta lines. Give us your block when booking and we will come to your home.",
    ],
  },
  "sofa-repair-uttam-nagar": {
    heading: "Sofa repair in Uttam Nagar: what to know locally",
    paragraphs: [
      "Uttam Nagar in West Delhi is a heavily urbanised group of sub-towns, with Hastsal Village's Mini Qutub Minar and Arya Samaj Road among its landmarks. Metro stations include Dwarka Mor, Nawada, Uttam Nagar East and Uttam Nagar West.",
      "Tell us your gali or block number and a nearby landmark when booking, since lanes can be narrow, and we will come to your home.",
    ],
  },
  "furniture-repair-uttam-nagar": {
    heading: "Furniture repair in Uttam Nagar: what to know locally",
    paragraphs: [
      "Uttam Nagar in West Delhi is a heavily urbanised group of sub-towns, with Hastsal Village's Mini Qutub Minar and Arya Samaj Road among its landmarks. Metro stations include Dwarka Mor, Nawada, Uttam Nagar East and Uttam Nagar West.",
      "Tell us your gali or block number and a nearby landmark when booking, since lanes can be narrow, and we will come to your home.",
    ],
  },
  "recliner-repair-uttam-nagar": {
    heading: "Recliner repair in Uttam Nagar: what to know locally",
    paragraphs: [
      "Uttam Nagar in West Delhi is a heavily urbanised group of sub-towns, with Hastsal Village's Mini Qutub Minar and Arya Samaj Road among its landmarks. Metro stations include Dwarka Mor, Nawada, Uttam Nagar East and Uttam Nagar West.",
      "Tell us your gali or block number and a nearby landmark when booking, since lanes can be narrow, and we will come to your home.",
    ],
  },
  "sofa-repair-green-park": {
    heading: "Sofa repair in Green Park: what to know locally",
    paragraphs: [
      "Green Park in South Delhi is split into Green Park Main and Green Park Extension, with builder floors and independent villas as the main property types. The Main area has a medium-sized market, and Green Park metro station serves it.",
      "Deer Park, Rose Garden, AIIMS and Safdarjung Hospital are close by. Share your block and house number when booking.",
    ],
  },
  "furniture-repair-green-park": {
    heading: "Furniture repair in Green Park: what to know locally",
    paragraphs: [
      "Green Park in South Delhi is split into Green Park Main and Green Park Extension, with builder floors and independent villas as the main property types. The Main area has a medium-sized market, and Green Park metro station serves it.",
      "Deer Park, Rose Garden, AIIMS and Safdarjung Hospital are close by. Share your block and house number when booking.",
    ],
  },
  "recliner-repair-green-park": {
    heading: "Recliner repair in Green Park: what to know locally",
    paragraphs: [
      "Green Park in South Delhi is split into Green Park Main and Green Park Extension, with builder floors and independent villas as the main property types. The Main area has a medium-sized market, and Green Park metro station serves it.",
      "Deer Park, Rose Garden, AIIMS and Safdarjung Hospital are close by. Share your block and house number when booking.",
    ],
  },
  "sofa-repair-krishna-nagar": {
    heading: "Sofa repair in Krishna Nagar: what to know locally",
    paragraphs: [
      "Krishna Nagar is an urban ward in East Delhi's Trans-Yamuna area, surrounded by Vishwas Nagar, Gandhi Nagar, Preet Vihar and Geeta Colony. Lal Quarter market is its main attraction, and Krishna Nagar metro station is on the Pink Line.",
      "Tell us your gali and a nearby landmark when booking and we will come to your home for sofa and furniture repair.",
    ],
  },
  "furniture-repair-krishna-nagar": {
    heading: "Furniture repair in Krishna Nagar: what to know locally",
    paragraphs: [
      "Krishna Nagar is an urban ward in East Delhi's Trans-Yamuna area, surrounded by Vishwas Nagar, Gandhi Nagar, Preet Vihar and Geeta Colony. Lal Quarter market is its main attraction, and Krishna Nagar metro station is on the Pink Line.",
      "Tell us your gali and a nearby landmark when booking and we will come to your home for sofa and furniture repair.",
    ],
  },
  "recliner-repair-krishna-nagar": {
    heading: "Recliner repair in Krishna Nagar: what to know locally",
    paragraphs: [
      "Krishna Nagar is an urban ward in East Delhi's Trans-Yamuna area, surrounded by Vishwas Nagar, Gandhi Nagar, Preet Vihar and Geeta Colony. Lal Quarter market is its main attraction, and Krishna Nagar metro station is on the Pink Line.",
      "Tell us your gali and a nearby landmark when booking and we will come to your home for sofa and furniture repair.",
    ],
  },
  "sofa-repair-indirapuram-extension": {
    heading: "Sofa repair in Indirapuram Extension: what to know locally",
    paragraphs: [
      "Indirapuram in Ghaziabad is an established residential locality with khands such as Ahinsa Khand and Shakti Khand. The nearest metro stations are Vaishali and Noida Electronic City on the Blue Line, each about 5 km away.",
      "Share your khand, society and floor when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "furniture-repair-indirapuram-extension": {
    heading: "Furniture repair in Indirapuram Extension: what to know locally",
    paragraphs: [
      "Indirapuram in Ghaziabad is an established residential locality with khands such as Ahinsa Khand and Shakti Khand. The nearest metro stations are Vaishali and Noida Electronic City on the Blue Line, each about 5 km away.",
      "Share your khand, society and floor when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "recliner-repair-indirapuram-extension": {
    heading: "Recliner repair in Indirapuram Extension: what to know locally",
    paragraphs: [
      "Indirapuram in Ghaziabad is an established residential locality with khands such as Ahinsa Khand and Shakti Khand. The nearest metro stations are Vaishali and Noida Electronic City on the Blue Line, each about 5 km away.",
      "Share your khand, society and floor when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "sofa-repair-gurgaon-sector-27": {
    heading: "Sofa repair in Gurgaon Sector 27: what to know locally",
    paragraphs: [
      "Sector 27 is a residential locality on Golf Course Road, Gurgaon, with 1 to 4 BHK flats in gated societies. HUDA City Centre metro station (Yellow Line) is the closest station, with IFFCO Chowk and MG Road stations a short drive away.",
      "In gated societies, share your tower and flat number when booking so we can arrange guard-gate entry before the technician arrives.",
    ],
  },
  "furniture-repair-gurgaon-sector-27": {
    heading: "Furniture repair in Gurgaon Sector 27: what to know locally",
    paragraphs: [
      "Sector 27 is a residential locality on Golf Course Road, Gurgaon, with 1 to 4 BHK flats in gated societies. HUDA City Centre metro station (Yellow Line) is the closest station, with IFFCO Chowk and MG Road stations a short drive away.",
      "In gated societies, share your tower and flat number when booking so we can arrange guard-gate entry before the technician arrives.",
    ],
  },
  "recliner-repair-gurgaon-sector-27": {
    heading: "Recliner repair in Gurgaon Sector 27: what to know locally",
    paragraphs: [
      "Sector 27 is a residential locality on Golf Course Road, Gurgaon, with 1 to 4 BHK flats in gated societies. HUDA City Centre metro station (Yellow Line) is the closest station, with IFFCO Chowk and MG Road stations a short drive away.",
      "In gated societies, share your tower and flat number when booking so we can arrange guard-gate entry before the technician arrives.",
    ],
  },
  "sofa-repair-sector-52-gurgaon": {
    heading: "Sofa repair in Gurgaon Sector 52: what to know locally",
    paragraphs: [
      "Sector 52 is a residential locality in Gurgaon with 1 to 4 BHK flats and builder-floor projects such as Ansal Sushant Estate and Palm Ardee City. The nearest metro stations are Millennium City Centre and Sector 54 Chowk.",
      "Tell us your society or floor when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "furniture-repair-gurgaon-sector-52": {
    heading: "Furniture repair in Gurgaon Sector 52: what to know locally",
    paragraphs: [
      "Sector 52 is a residential locality in Gurgaon with 1 to 4 BHK flats and builder-floor projects such as Ansal Sushant Estate and Palm Ardee City. The nearest metro stations are Millennium City Centre and Sector 54 Chowk.",
      "Tell us your society or floor when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "recliner-repair-gurgaon-sector-52": {
    heading: "Recliner repair in Gurgaon Sector 52: what to know locally",
    paragraphs: [
      "Sector 52 is a residential locality in Gurgaon with 1 to 4 BHK flats and builder-floor projects such as Ansal Sushant Estate and Palm Ardee City. The nearest metro stations are Millennium City Centre and Sector 54 Chowk.",
      "Tell us your society or floor when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "sofa-repair-sector-46-gurgaon": {
    heading: "Sofa repair in Gurgaon Sector 46: what to know locally",
    paragraphs: [
      "Sector 46 is a residential sector of Gurgaon whose nearest metro station is HUDA City Centre on the Yellow Line, about 10 minutes away; the Sector 54 Rapid Metro station is also within reach.",
      "Send your society name and tower or house number when booking so the technician can reach you quickly.",
    ],
  },
  "furniture-repair-sector-46-gurgaon": {
    heading: "Furniture repair in Gurgaon Sector 46: what to know locally",
    paragraphs: [
      "Sector 46 is a residential sector of Gurgaon whose nearest metro station is HUDA City Centre on the Yellow Line, about 10 minutes away; the Sector 54 Rapid Metro station is also within reach.",
      "Send your society name and tower or house number when booking so the technician can reach you quickly.",
    ],
  },
  "recliner-repair-gurgaon-sector-46": {
    heading: "Recliner repair in Gurgaon Sector 46: what to know locally",
    paragraphs: [
      "Sector 46 is a residential sector of Gurgaon whose nearest metro station is HUDA City Centre on the Yellow Line, about 10 minutes away; the Sector 54 Rapid Metro station is also within reach.",
      "Send your society name and tower or house number when booking so the technician can reach you quickly.",
    ],
  },
  "sofa-repair-gurgaon-sector-48": {
    heading: "Sofa repair in Gurgaon Sector 48: what to know locally",
    paragraphs: [
      "Sector 48 is a developed residential and commercial locality along Sohna Road, close to Sectors 47 and 49.",
      "Share your society and tower when booking, and we will come to your home for sofa, recliner and furniture repair.",
    ],
  },
  "furniture-repair-gurgaon-sector-48": {
    heading: "Furniture repair in Gurgaon Sector 48: what to know locally",
    paragraphs: [
      "Sector 48 is a developed residential and commercial locality along Sohna Road, close to Sectors 47 and 49.",
      "Share your society and tower when booking, and we will come to your home for sofa, recliner and furniture repair.",
    ],
  },
  "recliner-repair-gurgaon-sector-48": {
    heading: "Recliner repair in Gurgaon Sector 48: what to know locally",
    paragraphs: [
      "Sector 48 is a developed residential and commercial locality along Sohna Road, close to Sectors 47 and 49.",
      "Share your society and tower when booking, and we will come to your home for sofa, recliner and furniture repair.",
    ],
  },
  "sofa-repair-sohna-road-gurgaon": {
    heading: "Sofa repair in Sohna Road, Gurgaon: what to know locally",
    paragraphs: [
      "Sohna Road in Gurgaon has grown from a quiet stretch into a mixed area of apartments, villas, plotted developments and duplexes, with Sectors 47, 48 and 49 among its better-known residential localities.",
      "Because societies along Sohna Road vary from low-rise floors to high-rise towers, tell us your sector and tower when booking.",
    ],
  },
  "recliner-repair-sohna-road-gurgaon": {
    heading: "Recliner repair in Sohna Road, Gurgaon: what to know locally",
    paragraphs: [
      "Sohna Road in Gurgaon has grown from a quiet stretch into a mixed area of apartments, villas, plotted developments and duplexes, with Sectors 47, 48 and 49 among its better-known residential localities.",
      "Because societies along Sohna Road vary from low-rise floors to high-rise towers, tell us your sector and tower when booking.",
    ],
  },
  "sofa-repair-noida-sector-75": {
    heading: "Sofa repair in Noida Sector 75: what to know locally",
    paragraphs: [
      "Sector 75 is a residential sector in Central Noida, mostly 3 BHK apartments in societies such as Golf City, Ivy County, Gardenia Gateway and Panchsheel Pratishtha. Noida Sector 50 is the nearest metro station, and Spectrum Metro Mall is in the sector.",
      "Share your society name and tower when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "furniture-repair-noida-sector-75": {
    heading: "Furniture repair in Noida Sector 75: what to know locally",
    paragraphs: [
      "Sector 75 is a residential sector in Central Noida, mostly 3 BHK apartments in societies such as Golf City, Ivy County, Gardenia Gateway and Panchsheel Pratishtha. Noida Sector 50 is the nearest metro station, and Spectrum Metro Mall is in the sector.",
      "Share your society name and tower when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "recliner-repair-noida-sector-75": {
    heading: "Recliner repair in Noida Sector 75: what to know locally",
    paragraphs: [
      "Sector 75 is a residential sector in Central Noida, mostly 3 BHK apartments in societies such as Golf City, Ivy County, Gardenia Gateway and Panchsheel Pratishtha. Noida Sector 50 is the nearest metro station, and Spectrum Metro Mall is in the sector.",
      "Share your society name and tower when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "sofa-repair-greater-noida-pari-chowk": {
    heading: "Sofa repair in Pari Chowk, Greater Noida: what to know locally",
    paragraphs: [
      "Pari Chowk is a well-known junction in Greater Noida where the Noida-Greater Noida Expressway meets Surajpur-Kasna Road, close to Omega, Alpha and Knowledge Park. Housing nearby ranges from apartments to villas and plotted developments, and Godrej Golf Links is a landmark.",
      "Tell us your sector or society when booking, since addresses around the junction can be hard to find.",
    ],
  },
  "furniture-repair-greater-noida-pari-chowk": {
    heading: "Furniture repair in Pari Chowk, Greater Noida: what to know locally",
    paragraphs: [
      "Pari Chowk is a well-known junction in Greater Noida where the Noida-Greater Noida Expressway meets Surajpur-Kasna Road, close to Omega, Alpha and Knowledge Park. Housing nearby ranges from apartments to villas and plotted developments, and Godrej Golf Links is a landmark.",
      "Tell us your sector or society when booking, since addresses around the junction can be hard to find.",
    ],
  },
  "recliner-repair-greater-noida-pari-chowk": {
    heading: "Recliner repair in Pari Chowk, Greater Noida: what to know locally",
    paragraphs: [
      "Pari Chowk is a well-known junction in Greater Noida where the Noida-Greater Noida Expressway meets Surajpur-Kasna Road, close to Omega, Alpha and Knowledge Park. Housing nearby ranges from apartments to villas and plotted developments, and Godrej Golf Links is a landmark.",
      "Tell us your sector or society when booking, since addresses around the junction can be hard to find.",
    ],
  },
  "sofa-repair-dwarka-sector-12": {
    heading: "Sofa repair in Dwarka Sector 12: what to know locally",
    paragraphs: [
      "Dwarka Sector 12 metro station on the Blue Line opened on 1 April 2006 and is among the busiest in Dwarka, with City Centre directly in front of it. The sector has schools, banks and offices close by.",
      "Give us your pocket and flat number when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "furniture-repair-dwarka-sector-12": {
    heading: "Furniture repair in Dwarka Sector 12: what to know locally",
    paragraphs: [
      "Dwarka Sector 12 metro station on the Blue Line opened on 1 April 2006 and is among the busiest in Dwarka, with City Centre directly in front of it. The sector has schools, banks and offices close by.",
      "Give us your pocket and flat number when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "recliner-repair-dwarka-sector-12": {
    heading: "Recliner repair in Dwarka Sector 12: what to know locally",
    paragraphs: [
      "Dwarka Sector 12 metro station on the Blue Line opened on 1 April 2006 and is among the busiest in Dwarka, with City Centre directly in front of it. The sector has schools, banks and offices close by.",
      "Give us your pocket and flat number when booking, and we will come to your home for sofa and furniture repair.",
    ],
  },
  "sofa-repair-maharani-bagh": {
    heading: "Sofa repair in Maharani Bagh: what to know locally",
    paragraphs: [
      "Maharani Bagh is an upscale residential locality of South East Delhi with spacious houses and gated societies. The nearest metro station is Ashram, with Vinobapuri nearby.",
      "Send your block and house number when booking, and we will come to your home.",
    ],
  },
  "furniture-repair-maharani-bagh": {
    heading: "Furniture repair in Maharani Bagh: what to know locally",
    paragraphs: [
      "Maharani Bagh is an upscale residential locality of South East Delhi with spacious houses and gated societies. The nearest metro station is Ashram, with Vinobapuri nearby.",
      "Send your block and house number when booking, and we will come to your home.",
    ],
  },
  "recliner-repair-maharani-bagh": {
    heading: "Recliner repair in Maharani Bagh: what to know locally",
    paragraphs: [
      "Maharani Bagh is an upscale residential locality of South East Delhi with spacious houses and gated societies. The nearest metro station is Ashram, with Vinobapuri nearby.",
      "Send your block and house number when booking, and we will come to your home.",
    ],
  },
};
