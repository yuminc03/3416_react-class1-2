import React from 'react';
// import Potato from './Potato';

// const foodILike = [];
const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb',
    rating: 5,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
    rating: 5,
  },
];

function Food({name, picture}){
  // return <h3>저는 {props.fav} 을(를) 좋아합니다 😀</h3>
  return (
    <div>
      <h3>저는 {name} 을(를) 좋아합니다 😀</h3>
      <img src={picture} width="50%" alt={name}/>
    </div>//alt 태그를 꼭 이용해야 한다!
  )
    
}
function App() {
  return (
    <div>
      <h1>Food</h1>
        {foodILike.map(dish => (
          <Food name = {dish.name} picture = {dish.image}/>
          )
        )}
        {/* <Food fav = "🍘김치볶음밥"/>
        <Food fav = "🍪쿠키"/>
        <Food fav = "🍩도넛"/>
        <Food fav = "🍸블루 레몬 에이드"/>
        <Food fav = "🍦바닐라 아이스크림"/> */}
    </div>
  );
}

export default App;
