const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
   const min = 0;
   const max = colors.length -1;
   let intervalId = ''; 
   
  const startBtn = document.querySelector('[data-action="start"]');
  const stopBtn = document.querySelector('[data-action="stop"]');
  stopBtn.disabled = true;
  startBtn.addEventListener('click', start); 
  stopBtn.addEventListener('click', stop);
  
  const randomIntegerFromInterval = (min, max) => {
    return   Math.floor(Math.random() * (max - min + 1) + min); 
  };


  function changeBodyColor() {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(min,max)];
  };
  

  function start  ()  { 
    startBtn.disabled = true;
    stopBtn.disabled = false;
     intervalId = setInterval(changeBodyColor, 1000);
    
  };
  
  
  function stop  ()  {
    clearInterval(intervalId); 
    startBtn.disabled = false;
    stopBtn.disabled = true;
  };
  
  