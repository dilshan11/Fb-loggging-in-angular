import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
declare var window: any;
declare var FB: any;
@Injectable({
  providedIn: 'root'
})
export class FacebookService {
   
  ngOnInit() {
    
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

   
  window.fbAsyncInit = () => {
       

      FB.init({
          appId            : '408993489747313',
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v4.0'
      });
      FB.AppEvents.logPageView();
      
  }
  
  
}
constructor(){

}
getimage(){
  FB.api('/me?fields=albums.limit(5){name,count,cover_photo{picture}}', response => {
    console.log(response);
  });
}

 details(){
  FB.api('/me', function(response) {
    console.log(JSON.stringify(response));
});
 }
 submitLoginout(){
   FB.logout(function(response){
     console.log('log out');
   })
 }
submitLogin(){
  
FB.login(function(response) {
  if (response.authResponse) {
    console.log(response);
   console.log('Welcome!  Fetching your information.... ');
   FB.api('/me', function(response) {
     console.log('Good to see you, ' + response.name + '.');
   });
  } else {
   console.log('User cancelled login or did not fully authorize.');
  }
},{scope: 'public_profile,email,user_photos'});
  // FB.login(function(response){
  //   if(response.status=='connected'){
  //     console.log('connectes');
  //   }else if(response=='not authorized'){
  //     console.log('we are not logged in');
  //   }
       
  //   });
  
  

  }
  // FB.ui({
  //   method: 'share',
  //   href: 'https://developers.facebook.com/docs/'
  // }, function(response){});
  // console.log("submit login to facebook");
  // // FB.login();
  // FB.login((response)=>
  //     {
  //       console.log('submitLogin',response);
  //       if (response.authResponse)
  //       {
  //         //login success
  //         //login success code here
  //         //redirect to home page
  //        }
  //        else
  //        {
  //        console.log('User login failed');
  //      }
  //   });

}


