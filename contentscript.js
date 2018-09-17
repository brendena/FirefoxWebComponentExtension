//modify a tag by appending element 

var modifyElement =  function(parentDiv){
  var doc = document.createElement('div');
  doc.innerHTML = "Hello from Custom Element!";


  var input = document.createElement('input');
  var button = document.createElement('button');
  button.innerHTML = "press me"

  button.addEventListener("click", function(event){
    console.log("Got the event click");
  });


  var image = document.createElement('img');
  image.src = "https://d9np3dj86nsu2.cloudfront.net/image/36125d06520a2f6acdae39d1221e5ca8"
  image.width = "100";
  image.height = "100";

  parentDiv.appendChild(doc);
  parentDiv.appendChild(image);
  parentDiv.appendChild(input);
  parentDiv.appendChild(button);


  return parentDiv;
}

class MyElement extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root and a slot
    var shadow = this.attachShadow({mode: 'open'});
    var slot = document.createElement('slot');
    shadow.appendChild(slot);
    
    //// Add the element to the shadow root.
    modifyElement(shadow)
    ////try and put it into a slot
    //modifyElement(slot)
    

  }
}

// Define the new element
customElements.define('my-element', MyElement);

var myElement = document.createElement('my-element');

//// force the object to be on the top of the screen
myElement.style.position = "fixed";
myElement.style.zIndex = "200000";
myElement.style.width = "400px";
myElement.style.height = "100px";
myElement.style.top = "0px";
myElement.style.background = "white";

// Append the Custom element to the host page.
document.body.appendChild(myElement);


/*
//Test the same object not in a web component.
myElement = document.createElement('div');
myElement.style.position = "fixed";
myElement.style.zIndex = "200000";
myElement.style.width = "400px";
myElement.style.height = "100px";
myElement.style.top = "0px";
myElement.style.background = "white";

document.body.appendChild(modifyElement(myElement));
 //*/
