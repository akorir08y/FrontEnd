const ctx = document.getElementById('myChart');
const ctx1 = document.getElementById('myChart1');

  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Facebook', 'Google', 'Youtube'],
      datasets: [{
        label: 'Traffic Source',
        data: [1200, 1900, 3000],
		backgroundColor:[
		'rgba(255, 99, 132, 1)',
		'rgba(54, 162, 235, 1)',
		'rgba(255, 206, 86, 1)'],
      }]
    },
    options: {
        responsive: true,
		events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']
    }
	,animations: {
      tension: {
        duration: 1000,
        easing: 'easeInOutBounce',
        from: 1,
        to: 0,
        loop: true
      }
    }
	
  });
  
  
   new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March','April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Earning',
        data: [120, 190, 300, 215, 280, 300, 180, 470, 300, 500, 700, 900],
		backgroundColor:[
		'rgba(255, 99, 132, 1)',
		'rgba(54, 162, 235, 1)',
		'rgba(255, 206, 86, 1)',
		'rgba(255, 99, 132, 1)',
		'rgba(54, 162, 235, 1)',
		'rgba(255, 206, 86, 1)',
		'rgba(255, 99, 132, 1)',
		'rgba(54, 162, 235, 1)',
		'rgba(255, 206, 86, 1)',
		'rgba(255, 99, 132, 1)',
		'rgba(54, 162, 235, 1)',
		'rgba(255, 206, 86, 1)'],
      }]
    },
    options: {
        responsive: true,
    }
	,animations: {
      tension: {
        duration: 1000,
        easing: 'easeInOutBounce',
        from: 1,
        to: 0,
        loop: true
      }
    },
	events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
  });