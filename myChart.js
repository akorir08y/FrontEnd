const ctx = document.getElementById('myChart');
const ctx1 = document.getElementById('myChart1');

  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Cash', 'USSD',],
      datasets: [{
        label: 'Kshs',
        data: [33097, 186304],
		backgroundColor:[
		'rgba(255, 99, 132, 1)',
		'rgba(54, 162, 235, 1)'],
      }]
    },
    options: {
        responsive: true,
		maintainAspectRatio: false,
		events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
		plugins: {
		  legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'USSD and Cash Distribution'
		},
		tooltip: {
			mode: 'index',
			intersect: false
		}
		}
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
        label: 'Kshs',
        data: [5200, -1000, 3000, 21500, 280000, 30000, 18000, 4700, 3000, 50000, 70000, 90000],
		backgroundColor:[
		'rgba(255, 99, 132, 1)',
		'rgba(54, 162, 235, 1)',
		'rgba(255, 206, 86, 1)',
		'rgba(254, 09, 132, 1)',
		'rgba(53, 152, 235, 1)',
		'rgba(253, 196, 86, 1)',
		'rgba(252, 90, 132, 1)',
		'rgba(51, 142, 235, 1)',
		'rgba(250, 186, 86, 1)',
		'rgba(246, 69, 132, 1)',
		'rgba(49, 132, 235, 1)',
		'rgba(248, 126, 86, 1)'],
      }]
    },
    options: {
		maintainAspectRatio: false,
        responsive: true,
		plugins: {		  
		  tooltip: {
			mode: 'index',
			intersect: false
		  },
		  title: {
			display: true,
			text: 'Total Funds Distribution'
		  }
		},
		hover: {
		  mode: 'index',
		  intersec: false
		},
		scales: {
		  x: {
			title: {
			  display: true,
			  text: 'Month'
			}
		  },
		  y: {
			title: {
			  display: true,
			  text: 'Kshs'
			},
			// the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
			suggestedMin: 1000,

			// the data maximum used for determining the ticks is Math.max(dataMax, suggestedMax)
			suggestedMax: 1000,
		  }
		}
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