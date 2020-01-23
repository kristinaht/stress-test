$(document).ready(function(){
  $("form#stress_test").submit(function(event){
    event.preventDefault();
    var warningSignsResponses=[];
    $("input:checkbox[name=warning-signs]:checked").each(function(){
      warningSignsResponses=$(this).val();
    });
    var healthSymptomsResponses=[];
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
      healthSymptomsResponses=$(this).val();
    });
    var selfCareResponses=[];
    $("input:checkbox[name=self-care]:checked").each(function(){
      selfCareResponses=$(this).val();
    })
   if(warningSignsResponses.length =3 && healthSymptomsResponses.length >=2){
     $("#resources").show();
   }else if(selfCareResponses.length >=2){
     $("#nostress").show();
   }else {
     $("#ok").show();
   }
  });
});
