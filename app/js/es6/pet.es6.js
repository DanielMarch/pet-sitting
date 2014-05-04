/* exported Pet */
/* global _, pets */

class Pet{
  constructor(gender, speciesImg, species, name='Unknown', age='Unknown'){
    this.gender = gender;
    this.species = species;
    this.speciesImg = `../media/${speciesImg}`;
    this.name = name;
    this.age = age;

    this.health = _.random(10, 100);
    this.full = _.random(5, 50);
    this.mood = _.random(1, 10);
  }

  static find(name){
    return _(pets).find(p=>p.name === name);
  }

  update(){
    $(`div[data-name=${this.name}]`).children('.full').text(`Hunger: ${this.full}`);
    $(`div[data-name=${this.name}]`).children('.mood').text(`Mood: ${this.mood}`);
    $(`div[data-name=${this.name}]`).children('.health').text(`Health: ${this.health}`);
  }

  feed(){
    this.full += _.random(1,3);
    if(this.full >= 50){this.full = 50;}
  }

  play(){
    this.mood += _.random(0,1);
    if(this.mood >= 10){
      this.mood = 10;
      alert('Actionable Intelligence Provided');
    }
    this.full -= _.random(1,3);
    if(this.full <= 0){this.full = 0;}
    this.health -= _.random(1,3);
    if(this.health <= 0){
      $(`div[data-name=${this.name}]`).remove('.pet');
      alert('Detainee deceased due to soccer accident.');
    }
  }

  sleep(){
    this.health += _.random(1,5);
    if(this.health >= 100){this.health = 100;}
  }

  beat(){
    this.health -= _.random(1,10);
    if(this.health <= 0){
      $(`div[data-name=${this.name}]`).remove('.pet');
      alert('Detainee deceased due to intensity of interogation.');
    }
    this.mood -= _.random(1,2);
    if(this.mood <= 0){this.mood = 0;}
  }

  render(){
    $('#pets').append(`<div data-name=${this.name} class=pet>
                        <img src=${this.speciesImg}></img>
                        <div class=name>${this.name}</div>
                        <div class=gender>Gender: Male</div>
                        <div class=age>Age: ${this.age}</div>
                        <div class=species>Status: ${this.species}</div>
                        <div class=health>Health: ${this.health}</div>
                        <div class=full>Hunger: ${this.full}</div>
                        <div class=mood>Mood: ${this.mood}</div>
                        <button class=feed>Feed</button>
                        <button class=play>Recreate</button>
                        <button class=sleep>Sedate</button>
                        <button class=beat>Interogate</button>
                        </div>`);
  }
}
