/* global Pet, pets */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
    $('#pets').on('click', '.feed', feed);
    $('#pets').on('click', '.play', play);
    $('#pets').on('click', '.sleep', sleep);
    $('#pets').on('click', '.beat', beat);
  }

  function feed(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.feed();
    pet.update();
  }

  function play(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.play();
    pet.update();
  }

  function sleep(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.sleep();
    pet.update();
  }

  function beat(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.beat();
    pet.update();
  }

  function add(){
    let gender = $('#gender').val();
    let speciesImg = $('#species').val();
    let name = $('#name').val() || undefined;
    let age = $('#age').val() || undefined;
    let species = $('#species option:selected').text();

    let pet = new Pet(gender, speciesImg, species, name, age);
    pets.push(pet);
    pet.render();
  }

})();
