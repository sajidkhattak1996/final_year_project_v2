
//function for about button are press & his page show 
function aboutPageShow(){
  // remove css classes
  // $("#home").removeClass("d-block");
  $("#login").removeClass("d-block");
  $("#c_account").removeClass("d-block");
  // $("#contact").removeClass("d-block");
  $("#cs_account").removeClass("d-block");
  $("#ct_account").removeClass("d-block"); 
  // add css classes
  $("#more_details").addClass("d-block");
  $("#menu-tabs").addClass("my-tab");
  $("#about").addClass("d-block");
  $("#carouselExampleControls").addClass("d-none");
}

//function for create account button are press and his data are load 
function createAccountPage(){
    // remove css classes
    // $("#home").removeClass("d-block");
    $("#login").removeClass("d-block");
    $("#about").removeClass("d-block");
    $("#cs_account").removeClass("d-block");
    $("#ct_account").removeClass("d-block");     
    $("#more_details").removeClass("d-block");     
    // add css classes
    // $("#home").addClass("d-none");
    $("#c_account").addClass("d-block");
    $("#menu-tabs").addClass("my-tab");
    $("#carouselExampleControls").addClass("d-none");
    $("#more_details").addClass("d-none");
}

//function for the login button and login page are displayed 
function loginPageShow(){
    // remove css classes
    $("#c_account").removeClass("d-block");
    $("#about").removeClass("d-block");
    $("#cs_account").removeClass("d-block");
    $("#ct_account").removeClass("d-block");
    $("#more_details").removeClass("d-block");     

    // add css classes
    $("#carouselExampleControls").addClass("d-none");
    $("#more_details").addClass("d-none");
    $("#login").addClass("d-block");
    $("#menu-tabs").addClass("my-tab");
}



//function tragger when click on student account 
function createStudentAccount(){
     // remove css classes
     $("#home").removeClass("d-block");
    $("#c_account").removeClass("d-block");
    $("#about").removeClass("d-block");
    $("#login").removeClass("d-block"); 
    $("#ct_account").removeClass("d-block");     
    // add css classes
    $("#home").addClass("d-none");
    $("#c_account").addClass("d-none");
    $("#menu-tabs").addClass("my-tab");
    $("#cs_account").addClass("d-block");
}

  //function tragger when click on Teacher  account 
  function createTeacherAccount(){
       // remove css classes
       $("#home").removeClass("d-block");
      $("#c_account").removeClass("d-block");
      $("#about").removeClass("d-block");
      $("#login").removeClass("d-block"); 
      $("#ct_account").removeClass("d-block");     
      $("#cs_account").removeClass("d-block");     
      // add css classes
      $("#home").addClass("d-none");
      $("#c_account").addClass("d-none");
      $("#menu-tabs").addClass("my-tab");
      $("#ct_account").addClass("d-block");
  }

  // function for click for the login for the account 
  function Login(){
       // remove css classes
       $("#home").removeClass("d-block");
      $("#c_account").removeClass("d-block");
      $("#about").removeClass("d-block");
      $("#ct_account").removeClass("d-block");     
      $("#cs_account").removeClass("d-block");     
      // add css classes
      $("#home").addClass("d-none");
      $("#c_account").addClass("d-none");
      $("#menu-tabs").addClass("my-tab");
      $("#login").addClass("d-block");
  }

  // function for create account 
  function CreateAccount(){
       // remove css classes
       $("#home").removeClass("d-block");
      $("#login").removeClass("d-block");
      $("#about").removeClass("d-block");
      $("#ct_account").removeClass("d-block");     
      $("#cs_account").removeClass("d-block");     
      // add css classes
      $("#home").addClass("d-none");
      $("#menu-tabs").addClass("my-tab");
      $("#c_account").addClass("d-block");
  }




    //below tabs button for the different informtation 

    function ShowTab1(obj){
      $(obj).addClass('active1');
      $("#tab1_info").addClass('d-block');

      //color reset of tabs
      $("#t2").removeClass("active2");
      $("#t3").removeClass("active3");
      $("#t4").removeClass("active4");

      //hide show information
      $("#tab2_info").removeClass('d-block');
      $("#tab3_info").removeClass('d-block');
      $("#tab4_info").removeClass('d-block');
      
      //hide information
      $("#tab2_info").addClass('d-none');
      $("#tab3_info").addClass('d-none');
      $("#tab4_info").addClass('d-none');

    }

    function ShowTab2(obj){
      $(obj).addClass('active2');
      $("#tab2_info").addClass('d-block');


      //color reset of tabs
      $("#t1").removeClass("active1");
      $("#t3").removeClass("active3");
      $("#t4").removeClass("active4");
      
      //hide show information
      $("#tab1_info").removeClass('d-block');
      $("#tab3_info").removeClass('d-block');
      $("#tab4_info").removeClass('d-block');
      
      //hide information
      $("#tab1_info").addClass('d-none');
      $("#tab3_info").addClass('d-none');
      $("#tab4_info").addClass('d-none');

    }

    function ShowTab3(obj){
      $(obj).addClass('active3');
      $("#tab3_info").addClass('d-block');

      //color reset of tabs
      $("#t1").removeClass("active1");
      $("#t2").removeClass("active2");
      $("#t4").removeClass("active4");

      //hide  show information
      $("#tab1_info").removeClass('d-block');
      $("#tab2_info").removeClass('d-block');
      $("#tab4_info").removeClass('d-block');

       //hide information
       $("#tab1_info").addClass('d-none');
       $("#tab2_info").addClass('d-none');
       $("#tab4_info").addClass('d-none');
    }

    function ShowTab4(obj){
      $(obj).addClass('active4');
      $("#tab4_info").addClass('d-block');

      //color reset of tabs
      $("#t1").removeClass("active1");
      $("#t3").removeClass("active3");
      $("#t2").removeClass("active2");

      //hide show information
      $("#tab1_info").removeClass('d-block');
      $("#tab3_info").removeClass('d-block');
      $("#tab2_info").removeClass('d-block');

      //hide information
      $("#tab1_info").addClass('d-none');
      $("#tab3_info").addClass('d-none');
      $("#tab2_info").addClass('d-none');
    }