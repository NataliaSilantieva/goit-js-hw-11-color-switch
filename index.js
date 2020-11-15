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
   
   
  const startBtn = document.querySelector('[data-action="start"]');
  const stopBtn = document.querySelector('[data-action="stop"]');
  stopBtn.disabled = true;
  startBtn.addEventListener('click', changeBodyColor); 
  stopBtn.addEventListener('click', stopChangeBodyColor);
  const randomIntegerFromInterval = (min, max) => {
    
    return   Math.floor(Math.random() * (max - min + 1) + min);
    
  };

 
  
  function changeBodyColor  ()  { 
    
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(min,max)];
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
  };
  
  let intervalId = setInterval(changeBodyColor, 1000);

  function stopChangeBodyColor  ()  {
    clearInterval(intervalId); 
    startBtn.disabled = false;
    stopBtn.disabled = true;
  };
  
  