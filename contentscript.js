console.log("Load WebComponent");

class MyElement extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    var doc = document.createElement('div');
    doc.innerHTML = "Hello from Custom Element!";

    var input = document.createElement('input');
    var button = document.createElement('button');



    var image = document.createElement('img');
    image.src = "https://d9np3dj86nsu2.cloudfront.net/image/36125d06520a2f6acdae39d1221e5ca8"
    image.width = "100";
    image.height = "100";


    // Add the element to the shadow root.
    shadow.appendChild(doc);
    shadow.appendChild(image);
    //shadow.appendChild(input);
    //shadow.appendChild(button);
    console.log("Added WebComponent");
    

  }
}

console.log("testing this out")
// Define the new element
customElements.define('my-element', MyElement);


var myElement = document.createElement('my-element');

myElement.style.position = "fixed";
myElement.style.zIndex = "200000";
myElement.style.width = "400px";
myElement.style.height = "100px";
myElement.style.top = "0px";
myElement.style.background = "white";

// Append the new element in the context of the host page.
document.body.appendChild(myElement);
