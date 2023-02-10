function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  
  function mDown(obj) {
    obj.innerHTML = "L";
  }
  
  function mUp(obj) {
    obj.innerHTML = " Welcome the Council, we decide who is allowed into li kirby"
  }
  
  function fun() {
  document.getElementById("maple1").innerHTML = "New text!";
  }
  
  
  
  
  
  
  
  
  
  
  var w;
  
  function startWorker() {
    if(typeof(Worker) !== "undefined") {
      if(typeof(w) == "undefined") {
        w = new Worker("demo_workers.js");
      }
      w.onmessage = function(event) {
        document.getElementById("result").innerHTML = event.data;
      };
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
  }
  
  function stopWorker() { 
    w.terminate();
    w = undefined;
  }