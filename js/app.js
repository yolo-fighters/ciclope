function onLoadFunction() {
    gapi.client.setApiKey('AIzaSyBf5-7vDMDd_ERMwdj-Kc7Cs2z5pG-sG68');
    gapi.client.load('plus','v1', function(){})
}

 window.fbAsyncInit = function() {
    FB.init({
        appId      : '1801231243537923',
        xfbml      : true,
        version    : 'v2.8',
        status: true
    });
    
    FB.getLoginStatus(function(response){
        if(response.status === 'connected'){
            //we are connected
        } else if(response.status === 'not_authorized'){
            //not auth
        } else{
            //we are not logged in to facebook.
        }

    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));