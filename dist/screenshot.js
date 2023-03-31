var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);
var script2 = document.createElement('script');
script2.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);
init();
function init () {
            const screenshotTarget = document.body;
            html2canvas(screenshotTarget).then(canvas => {
            	// to image as png use below line
                // const base64image = canvas.toDataURL("image/png");
            	// show the image in window use below line
                // window.location.href = base64image;
            	
            	// screenshot appended to the body as canvas
                document.body.appendChild(canvas);  
                dataURL = canvas.toDataURL();  
                // to print the screenshot in console use below line
                // console.log(dataURL);
                
                // following line is optional and it is to save the screenshot
                // on the server side. It initiates an ajax call
                //pushScreenshotToServer(dataURL); 
            });  
        }