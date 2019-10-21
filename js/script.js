var pinCounter = 0;

function addMapPointer(){
    // Increment counter when addMapPointer function is called
    pinCounter++;
    document.getElementById("pin_counter").innerHTML = pinCounter;

    // Create a new div with class draggable
    var mappoint = document.createElement('div');
    mappoint.className = "draggable";


    // Get location input 
    var x = document.getElementById("inputLocation").value;
    mappoint.innerHTML = "<img src='../images/pin.png'><span class='locationName'>" + x + "</span>";

    // Append map point
    document.getElementById("map").appendChild(mappoint);

    // Obtain a node list of all elements that have class="draggable":
    var draggable = document.getElementsByClassName('draggable'),
        draggableCount = draggable.length, // cache the length
        i; // iterator placeholder
    
    // This function initializes the drag of an element where an
    // event ("mousedown") has occurred:
    function startDrag(evt) {
        
        // The element's position is based on its top left corner,
        // but the mouse coordinates are inside of it, so we need
        // to calculate the positioning difference:
        var diffX = evt.clientX - this.offsetLeft,
            diffY = evt.clientY - this.offsetTop,
            that = this; // "this" refers to the current element,
                         // let's keep it in cache for later use.
        
        // moveAlong places the current element (referenced by "that")
        // according to the current cursor position:
        function moveAlong(evt) {
            that.style.left = (evt.clientX - diffX) + 'px';
            that.style.top = (evt.clientY - diffY) + 'px';
        }
        
        // stopDrag removes event listeners from the element,
        // thus stopping the drag:
        function stopDrag() {
            document.removeEventListener('mousemove', moveAlong);
            document.removeEventListener('mouseup', stopDrag);
        }
        
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('mousemove', moveAlong);
    }
    
    // Now that all the variables and functions are created,
    // we can go on and make the elements draggable by assigning
    // a "startDrag" function to a "mousedown" event that occurs
    // on those elements:
    for (i = 0; i < draggableCount; i += 1) {
        draggable[i].addEventListener('mousedown', startDrag);
    }
}
