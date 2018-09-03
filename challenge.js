console.log('in challenge');


let elizabethSanger = {
    congressionalDistrict: 5,
    statements: [
      {statement: "pie for everyone", category: "Jobs"},
      {statement: "no taxes on pie", category: "Taxes"},
      {statement: "No working on friday", category: "Jobs"}
    ],
    donationFormUrl: 'www.google.com',
    events: [
      {date: '08/27/2018', title:"Zoe's birthday", description:"eat all the pie at the party"},
      {date: '08/28/2018', title:"Arrays", description:"all the looping"},
      {date: '09/4/2018', title:"Some important event", description:"SUPER important"},
      {date: '09/4/2018', title:"Running", description:"from the police"},
      {date: '03/14/2019', title:"Pi Day", description:"Eat it all???"}
    ],
    volunteers: [
      {
        name: 'Callan',
        address: '500 interstate blvd S',
        email: 'callan@yomamma.com',
        phone: '1234567890',
        availability: '9-5',
        activities: 'phone calls only'
      },
      {
        name: 'Lauren',
        address: '1 main street',
        email: 'lauren@comcast.net',
        phone: '1134567890',
        availability: 'never',
        activities: 'collecting money'
      },
      {
        name: 'Bernard',
        address: '1 Bernard Way',
        email: 'Bernard@thebear.net',
        phone: '1134567890',
        availability: 'all day',
        activities: 'everything'
      }
    ],
    biography: "I'm so cool!  please elect me",
    images: [
      {
        imageUrl: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
        description: "The Crew",
        type: "constituents"
      },
      {
        imageUrl: "https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
        description: "Elizabeth at the fair",
        type: "headshot"
      },
      {
        imageUrl: "http://los40cl00.epimg.net/los40/imagenes/2018/08/13/actualidad/1534185434_207658_1534185597_noticia_normal.jpg",
        description: "Elizabeth and her homies",
        type: "constituents"
      },
      {
        imageUrl: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3658031.jpg",
        description: "All the people of district 5",
        type: "constituents"
      },
    ],
    missionStatement: "Do good stuff",
    voterRegistrationUrl: 'www.google.com'
  };

  
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
    };

const imagesStringBuilder = () => {
  let newString = '';
  for(let i=0; i<elizabethSanger.images.length;i++){
    newString += `<div class="images">`;
    newString +=  `<img src=${elizabethSanger.images[i].imageUrl}></img>`;
    newString +=  `<h3>${elizabethSanger.images[i].description}</h3>`;
    newString +=  `<h4>${elizabethSanger.images[i].type}</h4>`;
    newString += `</div>`;
  }
  printToDom(newString, 'images');
};

const voterRegistrationStringBuilder = () => {
 const newString = `<a href="https://${elizabethSanger.voterRegistrationUrl}" target="_blank">Register to Vote Here</a>`;
 printToDom(newString, 'voterRegistration');
};

const donationFormStringBuilder = () => {
    const newString = `<a href="https://${elizabethSanger.donationFormUrl}" target="_blank">Click Here to Donate</a>`;
    printToDom(newString, 'donationForm');
};

const statementsStringBuilder = () => {
    let newString = '';
    for(let i=0; i<elizabethSanger.statements.length;i++){
        newString += `<div class="statement">`;
        newString +=    `<h3>${elizabethSanger.statements[i].statement}</h3>`;
        newString +=    `<h5>${elizabethSanger.statements[i].category}</h5>`;
        newString += `</div>`;
    }
    printToDom(newString, 'statements');
};

const congdistStringBuilder = () => {
  let newString = `<p>This is congressional district number ${elizabethSanger.congressionalDistrict}.</p>`
  printToDom(newString,'congressionalDistrict');
};

const eventsStringBuilder = () => {
  let newString = '';
  for(let i=0; i<elizabethSanger.events.length;i++){
    newString += `<div class="events">`;
    newString +=  `<h5>${elizabethSanger.events[i].date}</h5>`;
    newString +=  `<h3>${elizabethSanger.events[i].title}</h3>`;
    newString +=  `<h4>${elizabethSanger.events[i].description}</h4>`;
    newString += `</div>`;
  }
  printToDom(newString, 'events');
};

const volunteersStringBuilder = () => {
  let newString = '';
  for(let i=0; i<elizabethSanger.volunteers.length;i++){
    newString += `<div class="volunteers">`;
    newString +=  `<h4>${elizabethSanger.volunteers[i].name}</h4>`;
    newString +=  `<h4>${elizabethSanger.volunteers[i].address}</h4>`;
    newString +=  `<h4>${elizabethSanger.volunteers[i].email}</h4>`;
    newString +=  `<h4>${elizabethSanger.volunteers[i].phone}</h4>`;
    newString +=  `<h4>${elizabethSanger.volunteers[i].availability}</h4>`;
    newString +=  `<h4>${elizabethSanger.volunteers[i].activities}</h4>`;
    newString += `</div>`;
  }
  printToDom(newString, 'volunteers');
};

const bioStringBuilder = () => {
  let newString = `<h3>${elizabethSanger.biography}</h3>`
  printToDom(newString,'biography');
};

const missionStringBuilder = () => {
  let newString = `<h3>${elizabethSanger.missionStatement}</h3>`
  printToDom(newString,'missionStatement');
};

imagesStringBuilder();
missionStringBuilder();
bioStringBuilder();
eventsStringBuilder();
congdistStringBuilder();
voterRegistrationStringBuilder();
donationFormStringBuilder();
statementsStringBuilder();
volunteersStringBuilder();

// part 3
const updateVoterRegistration = (newUrl) => {
    elizabethSanger.voterRegistrationUrl = newUrl;
    voterRegistrationStringBuilder();
};

const updateDonationForm = (newUrl) => {
  elizabethSanger.donationFormUrl = newUrl;
  donationFormStringBuilder();
};

const updateCongDist = (newDist) => {
  elizabethSanger.congressionalDistrict = newDist;
  congdistStringBuilder();
};

const updateBio = (newBio) => {
  elizabethSanger.biography = newBio;
  bioStringBuilder();
};

const updateMission = (newMission) => {
  elizabethSanger.missionStatement = newMission;
  missionStringBuilder();
};

const updateStatements = ({statement,category}) => {
  
  elizabethSanger.statements.push({statement,category});
  statementsStringBuilder();
};

const updateEvents = ({date,title,description}) => {
  
  elizabethSanger.events.push({date,title,description});
  eventsStringBuilder();
};

const updateVols = ({name,address,email,phone,availability,activities}) => {
  
  elizabethSanger.volunteers.push({name,address,email,phone,availability,activities});
  volunteersStringBuilder();
};

const updateImages = ({imageUrl,description,type}) => {
  
  elizabethSanger.images.push({imageUrl,description,type});
  imagesStringBuilder();
};

updateVoterRegistration('classtracker.zoeames.com');
updateDonationForm('classtracker.zoeames.com');
updateCongDist(4);
updateBio('This is my newest biography.');
updateMission('This is my newest mission statement.');
updateStatements({statement:'I love lamp', category:'Furniture'});
updateEvents({date:'09/03/2018', title:'Best Title Ever',description:'Best description ever'});
updateVols({name:'Rodrigo Chavez',address:'999 Humbert Court',email:'Ilovelamps@gmail.com',phone:'865-972-8301',availability:'All day every day',activities:'Running around'});
updateImages({imageUrl:'https://media.mnn.com/assets/images/2015/08/google%20cat.jpg.653x0_q80_crop-smart.jpg',description:'A fun cat', type:'Cat'})