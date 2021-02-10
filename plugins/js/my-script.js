function pageShow(obj){
    var btn_id=obj.id;
    // console.log(btn_id);
    if(btn_id==="about"){
      // remove css classes
      $("#home").removeClass("d-block");
      $("#login").removeClass("d-block");
      $("#c_account").removeClass("d-block");
      $("#contact").removeClass("d-block");
      $("#cs_account").removeClass("d-block");
      $("#ct_account").removeClass("d-block"); 
      // add css classes
      $("#home").addClass("d-none");
      $("#menu-tabs").addClass("my-tab");
      $("#about").addClass("d-block");
    }
    else if(btn_id==="c_account"){
    //   console.log('ok');
      // remove css classes
      $("#home").removeClass("d-block");
      $("#login").removeClass("d-block");
      $("#about").removeClass("d-block");
      $("#contact").removeClass("d-block");  
      $("#cs_account").removeClass("d-block");
      $("#ct_account").removeClass("d-block");     
      // add css classes
      $("#home").addClass("d-none");
      $("#c_account").addClass("d-block");
      $("#menu-tabs").addClass("my-tab");
    }
    else if(btn_id==="login"){
       // remove css classes
       $("#home").removeClass("d-block");
      $("#c_account").removeClass("d-block");
      $("#about").removeClass("d-block");
      $("#contact").removeClass("d-block"); 
      $("#cs_account").removeClass("d-block");
      $("#ct_account").removeClass("d-block");      
      // add css classes
      $("#home").addClass("d-none");
      $("#login").addClass("d-block");
      $("#menu-tabs").addClass("my-tab");
    }
    else if(btn_id==="contact"){
       // remove css classes
       $("#home").removeClass("d-block");
      $("#c_account").removeClass("d-block");
      $("#about").removeClass("d-block");
      $("#login").removeClass("d-block"); 
      $("#cs_account").removeClass("d-block");
      $("#ct_account").removeClass("d-block");     
      // add css classes
      $("#home").addClass("d-none");
      $("#contact").addClass("d-block");
      $("#menu-tabs").addClass("my-tab");
    }
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