const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://images.dinosaurpictures.org/Majungasaurus-_Phil-Brownlow_a382.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://static.scientificamerican.com/dam/m/1f562bfed9aecd81/original/sa0924Bala01b.jpg?m=1722458302.515&crop=4%3A3%2Csmart&w=1200"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://i.abcnewsfe.com/a/ff9ddf87-2afd-4649-a288-dc75f9fe064b/dino-1-ht-er-240110_1704903903782_hpMain_2_16x9.jpeg?w=992"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://townsquare.media/site/812/files/2019/05/valee-dog.jpg?w=1200"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "https://bestfriends.org/sites/default/files/resource_article_images/17_Desmond_LF_794A6656_video.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://www.shutterstock.com/image-illustration/diplodocus-dinosaur-scene-jurassic-era-600nw-1670342758.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://www.thesprucepets.com/thmb/whvFIY9Epn7ITmGk1pfYMuHCRO0=/1471x0/filters:no_upscale():strip_icc()/GettyImages-1288261359-4016b054680e41d28451f081babd0c45.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.lookandlearn.com/history-images/preview/A/A010/A010160-02.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://image.petmd.com/files/inline-images/bombay-cat-breed.jpg?VersionId=Qz_cZGLn1bPgxzUXCY5No4UwZLwtClwU"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://i.ytimg.com/vi/D6EsfIj8B18/maxresdefault.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNPSI-kJvr6isISlYay-hzHGLiJFfiyMdpA&s"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://www.thesprucepets.com/thmb/ABbhh5c_07VoS_tuIXO-1bFKP4g=/2121x0/filters:no_upscale():strip_icc()/GettyImages-592212973-b36055f7029c44cb90cd337f4705a8b0.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAK5ECid91Y34rgrhgtV4rEUPFAQaas329hQ&s"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://i.fbcd.co/products/resized/resized-750-500/l013e-5-e08-mainpreview-310adaf671bbd3fcdc1d7b850074d0b09d01ec4458b72271bd9da2189aebdfb2.jpg"
    }
  ];

  //a variable with a function that passes in a a div to render to, and html string to render to that div
  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

  // a function nested in a variable  that passes in an array. 
   const cardsOnDom = (array) => {
    //set dom string to an empty string to add to in our for loop
    let domString = "";
    //loop through the pets (could be called anything) array using the array argument on line 251 and create a card passing in all the pets object keys
    for (const pets of array){
      domString += `<div class="card">
        <div class="card-header ${pets.type}"><h3>${pets.name}</h3></div>
        <img src="${pets.imageUrl}" alt="A ${pets.type} named ${pets.name}">
        <h5 class="pet-color">Color: ${pets.color}</h5>
        <p class="pet-skill">Fun Fact: ${pets.specialSkill}</p>
        <div class="pet-type ${pets.type}"><p>${pets.type}</p>
        <button class="delete-btn" id="delete-${pets.id}">DELETE</button>
        </div>
        </div>`;
    }
    //using the render to dom function to pass in the domString HTML onto the #container div
    renderToDom('#container', domString);
  };



  //a function nested in a variable (filter) that passes in an array (to which we will pass in pets later) and an argument called animalString
  const filter = (array, animalString) => {
    //let animalArray = to an empty array
    let animalArray = [];
    // loop through the an array and set the animal tpye to equal to the animalString listed above (we will pass in the pets array and animal type when calling the function filter)
    for (const animal of array){
      if (animal.type === animalString) {
        animalArray.push(animal);
      }
    };
    
    //returns an array of the selected animal
    return animalArray;
  };


  


    //buttons which we will add event listeners onto below
    const showAll = document.querySelector("#show-all");
    const showCats = document.querySelector("#cat-btn");
    const showDogs = document.querySelector("#dog-btn");
    const showDinos = document.querySelector("#dino-btn");
    //this was added to keep the current animals on the set filter when deleting animals, it was set to null to change when each button is clicked
    let currentPetFilter = null;

    //to show all animals, we just call the cardsOnDom function and pass in the entire pets array
    showAll.addEventListener("click", () => {
      cardsOnDom(pets);
      //pet page filter set to all pets
      currentPetFilter = "all";
    })

    //to show cats only, we call our filter function (passing in the pets array and "cat" and the pet.type) and creating a variable called cat to save it in
    showCats.addEventListener("click", () => {
      const cat = filter(pets, "cat");
      //cardsOnDom function renders the cat variable which filtered the pets into a new array
      cardsOnDom(cat);
      //pet page filter set to cats
      currentPetFilter = "cats";
    });

    //to show dogs only, we call our filter function (passing in the pets array and "dog" and the pet.type) and creating a variable called cat to save it in
    showDogs.addEventListener("click", () => {
      const dog = filter(pets, "dog");
      //cardsOnDom function renders the dog variable which filtered the pets into a new array
      cardsOnDom(dog);
      //pet page filter set to dogs
      currentPetFilter = "dogs";
    });

    //to show dinos only, we call our filter function (passing in the pets array and "dino" and the pet.type) and creating a variable called cat to save it in
    showDinos.addEventListener("click", () => {
      const dino = filter(pets, "dino");
      //cardsOnDom function renders the dino variable which filtered the pets into a new array
      cardsOnDom(dino);
      //pet page filter set to dinos
      currentPetFilter = "dinos";
    });

            // add/remove form field 
    const addPet = document.querySelector('#add-new-btn');
    const myForm = document.querySelector('#myForm');
    //an event listener was put on the addPet button that toggles a css class called 'pop-up-form-click' which makes the form appear/disappear
    addPet.addEventListener('click', () => {
      myForm.classList.toggle('pop-up-form-click');
    });


              // add pets          
    const createPet = (e) => {
      //preventDefault renders the page without having to refresh because there is no local storage set up to save changes
      e.preventDefault();

      //a variable called new pet takes in all the ids and values of the form inputs an sets it into an object
      const newPet = {
        id: pets.length + 1,
        name: document.querySelector('#name').value,
        color: document.querySelector('#color').value,
        specialSkill: document.querySelector('#specialSkill').value,
        type: document.querySelector('#type').value.toLowerCase(),
        imageUrl: document.querySelector('#image').value,
      }
      //pushes newPet object into the pets array
      pets.push(newPet);
      //renders newPet to the Dom
      cardsOnDom(pets);
      //clears and resets the form
      myForm.reset();
    };
    // nothing happens until the submit button is pressed, then the createPet function executes
    myForm.addEventListener("submit", createPet);



    // DELETE FUNCTIONALITY
    
    //the div where everything is rendered to. 
    const container = document.querySelector("#container");
    
    // if anywhere in the container is clicked, grab the target of the click passing in the event paramater
    container.addEventListener('click', (e) => {
      //if the target id includes the content "delete"
      if (e.target.id.includes("delete")){
        //use destructuring to target the id property in the pet object (the comma lets any of the pet objects be selected)
        // use split method to insert a hyphen between the delete button id and pet id(number in pet object)
        const [, id] = e.target.id.split("-");
        // a function nested inside a variable, index that finds the index on the pet object by passing in the event listener id
        //converts the id from a string to a number
        const index = pets.findIndex(e => e.id === Number(id));
        //the spice method removes the found index and the delete number is set to 1 (which will delete the selected card and id)
        pets.splice(index, 1);
        //the dom is refreshed
        cardsOnDom(pets);
      }

      //this functionality was added to the delete function so that if an animal was deleted from a filtered page, it would stay on the filtered page0
      if (currentPetFilter === "cats"){
        const cat = filter(pets, "cat");
        cardsOnDom(cat);
      } else if (currentPetFilter === "dogs"){
        const dog = filter(pets, "dog");
        cardsOnDom(dog);
      } else if (currentPetFilter === "dinos"){
        const dino = filter(pets, "dino");
        cardsOnDom(dino);
      } else {
        cardsOnDom(pets);
      }
    });
    



  
  
