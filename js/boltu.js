function enablePaypalButtons(plan_id, container_id, onApprove, style) {
    if (!style) {
      style = {
            shape: 'pill',
            color: 'silver',
            layout: 'vertical',
            label: 'subscribe',          
        };
    }

    paypal.Buttons({
        style: style,
        createSubscription: function(data, actions) {
          return actions.subscription.create({
            'plan_id': plan_id
          });
        },
        onApprove: onApprove
    }).render('#' + container_id);
  }

  function display(id, state) {
    var item = document.getElementById(id);
    item.style.display = state;
  }

  function onSignIn(googleUser) {    
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
    var profileString = "";

    profileString += '<div><img src="'+profile.getImageUrl() + '" /></div>'
    profileString += '<p>ID: ' + profile.getId(); // Do not send to your backend! Use an ID token instead.
    profileString += '<br />Name: ' + profile.getName();    
    profileString += '<br />Email: ' + profile.getEmail(); // This is null if the 'email' scope is not present.
    profileString += '<br /> Token: ' + id_token;
    profileString += "</p>";
  
    console.log(profileString);
    document.getElementById("profile").innerHTML = profileString;

    display("usercontent", "block");
    display("signinbutton", "none");
    display("programdetails", "none");
    var onApprove = function(data, actions) {
      console.log(data.subscriptionID);
    };

    enablePaypalButtons('P-09L75832VD5437626L5KRH4A', "paypal-button-container", onApprove);
  }