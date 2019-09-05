/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name): x
           https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/aaamg')
//   .then(res => {
//     console.log('API data ->', res.data);
//     res.data.avatar_url.forEach(item => {
//       const newCard = GitCard(item);
//       entryPoint.appendChild(newCard);
//     });
//   })
//   .catch(error => {
//     console.log("The data was not returned", error);
//   });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function  x

   Skip to Step 3. x
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards x
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

followersArray.forEach( user => {
  axios.get(`https://api.github.com/users/${user}`)
    .then(res => {
    const info = res.data;
    const newCard = GitCard(info.avatar_url, info.name, info.login, info.location, info.html_url, info.followers, info.following);
    const entryPoint = document.querySelector('.cards');
    entryPoint.appendChild(newCard);

    })
})


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element: x

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>


*/

axios.get('https://api.github.com/users/aaamg')
  .then(res => {
    console.log('API data ->', res.data);
    const info = res.data;
    const newCard = GitCard(info.avatar_url, info.name, info.login, info.location, info.html_url, info.followers, info.following);
    const entryPoint = document.querySelector('.cards');
    entryPoint.appendChild(newCard);

  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

const entryPoint = document.querySelector('.cards');

function GitCard(para1, para2, para3, para4, para5, para6, para7){
  const card = document.createElement('div'),
        img = document.createElement('img'),
        cardInfo = document.createElement('div'),
        name = document.createElement('h3'),
        username = document.createElement('p'),
        location = document.createElement('p'),
        profile = document.createElement('p'),
        address = document.createElement('a'),
        followers = document.createElement('p'),
        following = document.createElement('p'),
        bio = document.createElement('p');

  //structure appends
  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  
  //classList
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');

  //text content
  img.src = para1;
  name.textContent = para2;
  username.textContent = para3;
  location.textContent = para4;
  address.textContent = para5;
  followers.textContent = `Followers: ${para6}`;
  following.textContent = `Following: ${para7}`;

  return card
  
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
