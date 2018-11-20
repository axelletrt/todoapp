// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

//= require jquery3
//= require popper
//= require bootstrap-sprockets

$(document).ready(function(){
    $("#tab>li").next().hide(); 

    $("#tab>li:first").next().show();

    $("#tab>li").click(function(){
        $("#tab>li").next().hide(); 
        $(this).next().show(); 

    }) 

    $("#avatar").click(function(){
        $(".js-dropdown").toggleClass("hide")

    })

    function showModal(type){
        $(".modals").removeClass("hide")

        if (type=="login"){
            $(".js-signup").addClass("hide"); 
            $(".js-login").removeClass("hide")
        } else if (type=="signup"){
            $(".js-login").addClass("hide"); 
            $(".js-signup").removeClass("hide"); 
        }
    }

    function hideModal(){
        $(".modals").addClass("hide")
    }

    $(".login").click(function(e){
        e.preventDefault()
        showModal("login")
    })

    $(".signup").click(function(e){
        e.preventDefault()
        showModal("signup")
    })

    $(".modals").click(function(e){

        if (!$(e.target).closest("#modal-content").length){
            hideModal()
        }
    })
    

    let i = 0;
    
    $("#carousel img").hide();
    $("#carousel img").first().show();
  

    function next() {
      i++;
      if (i > $("#carousel img").length-1) {
        i = 0;
      };
      $("#carousel img").hide();
      $("#carousel img").eq(i).show();

    };
  
    function prev() {
      i--;
      if (i < 0) {
        i = $("#carousel img").length-1;
      };
      $("#carousel img").hide();
      $("#carousel img").eq(i).show();
      
    };
  
    function goTo(int) {
      i = int;
      $("#carousel img").hide();
      $("#carousel img").eq(i).show();
      

    };
    
    $("#prev").click(function () {
      prev();
    });
    
    $("#next").click(function () {
      next();
    });
    

    
    setInterval(function(){
          next();
      },2000);


}) 

