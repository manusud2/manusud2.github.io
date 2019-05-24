const hikeList = 
[
    {
        name:       'Bechler Falls',
        imgSrc:     'BechlerFalls.jpg',
        imgAlt:     'Image of Bechler Falls',
        distance:   '3 miles',
        difficulty: 'Easy',
        description:'Beautiful short hike along the Bechler river to Bechler Falls',
        directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
    },

    {
        name:       'Teton Canyon',
        imgSrc:     'TetonCanyon.jpg',
        imgAlt:     'Image of Teton Canyon',
        distance:   '6 miles',
        difficulty: 'Medium',
        description:'Beautiful short hike along the Bechler river to Bechler Falls',
        directions: 'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
    },

    {
        name:       'Olympic National Park',
        imgSrc:     'Olimpic.jpg',
        imgAlt:     'Image of Olympic National Park',
        distance:   '8 miles',
        difficulty: 'Hard',
        description:'Beautiful short hike along the Bechler river to Bechler Falls',
        directions: 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
    },

    {
      name:       'Cataratas do Iguacu Park',
      imgSrc:     'Cataratas.jpg',
      imgAlt:     'Image of Cataratas do Iguacu',
      distance:   '12 miles',
      difficulty: 'Very Hard',
      description:'Beautiful place to hike in Brazil',
      directions: 'Very beautiful place to walk alongside the waterfalls which was once one of the 7 wonders of the world. At the end of the city the park is located the course lasts for about 3 hours. Very long walk, for experienced people.'
  }

  ];

// Hike Model
export default class HikeModel 
{
  constructor(){}
  
  getAllHikes() 
  {
    return hikeList;
  }

  getHikeByName(hikeName) 
  {
    return hikeList.find(hike => hike.name === name);  
  }
}