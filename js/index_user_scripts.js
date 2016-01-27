/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Press me! */
    $(document).on("click", ".uib_w_2", function(evt)
    {
        /* your code goes here */ 
        var myHeading = document.querySelector('h1');
         myHeading.textContent = 'Hello world!';
        alert("Just testing");
        
        /* var tempDir = getTempDirectory() ;
        var fileWriter = new FileWriter(tempDir + "/readme.txt") ;
        fileWriter.open() ; 
        fileWriter.writeLine("File written at : "+new Date()) ; 
        fileWriter.writeLine("Another line") ; 
        fileWriter.close() ;
        */
        

        
    });

    
        /* button  #Button2 */
    $(document).on("click", "#Button2", function(evt)
    {
        /* your code goes here */ 
        alert("Testing button #2");
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
