/*grafica de radiacion-capitulo1*/ 
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('graficaRadiacion').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [0, 10, 20, 30, 50, 70, 100, 130],
      datasets: [
        {
          label: 'Zona del reactor',
          data: [300, 180, 120, 80, 50, 30, 20, 10],
          borderColor: 'white',
          backgroundColor: 'transparent',
          pointBackgroundColor: 'white',
          tension: 0.4,
          fill: false
        },
        {
          label: 'Ciudad (Prípiat)',
          data: [50, 45, 40, 35, 30, 25, 20, 15],
          borderColor: 'orange',
          backgroundColor: 'transparent',
          pointBackgroundColor: 'orange',
          tension: 0.4,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: 'white',
            font: { size: 14 }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Días desde el accidente',
            color: 'white',
            font: { size: 16 }
          },
          ticks: { color: 'white' },
          grid: { color: 'rgba(255,255,255,0.1)' }
        },
        y: {
          title: {
            display: true,
            text: 'Radiación (mSv)',
            color: 'white',
            font: { size: 16 }
          },
          beginAtZero: true,
          ticks: { color: 'white' },
          grid: { color: 'rgba(255,255,255,0.1)' }
        }
      }
    }
  });
});



/*grafica rvacuacionnnnnn-capitulo2*/ 
document.addEventListener("DOMContentLoaded", () => {
  const ctxEvacuacionMini = document.getElementById('graficaEvacuacion').getContext('2d');

  new Chart(ctxEvacuacionMini, {
    type: 'line',
    data: {
      labels: [0, 1, 2, 3, 4, 5, 6, 7],
      datasets: [
        {
          label: 'Evacuadas',
          data: [0, 5000, 15000, 25000, 35000, 40000, 45000, 49000],
          borderColor: 'white',
          backgroundColor: 'transparent',
          pointBackgroundColor: 'white',
          tension: 0.4,
          fill: false
        },
        {
          label: 'Se quedaron',
          data: [49000, 44000, 34000, 24000, 14000, 9000, 4000, 0],
          borderColor: '#3f0f0fff',
          backgroundColor: 'transparent',
          pointBackgroundColor: '#581515ff',
          tension: 0.4,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          labels: {
            color: 'white',
            font: { size: 20 } // más pequeño
          }
        },
        title: {
          display: true,
          text: 'Evacuación tras el accidente',
          color: 'white',
          font: { size: 12 } // más pequeño
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Días',
            color: 'white',
            font: { size: 10 }
          },
          ticks: { color: 'white', font: { size: 9 } },
          grid: { color: 'rgba(255,255,255,0.1)' }
        },
        y: {
          title: {
            display: true,
            text: 'Personas',
            color: 'white',
            font: { size: 10 }
          },
          beginAtZero: true,
          max: 50000,
          ticks: {
            stepSize: 10000,
            color: 'white',
            font: { size: 9 },
            callback: value => value.toLocaleString()
          },
          grid: { color: 'rgba(255,255,255,0.1)' }
        }
      }
    }
  });
});



/* gráfica de liquidadores moridos-capitulo2*/
document.addEventListener("DOMContentLoaded", () => {
  const ctxLiquidadores = document.getElementById('graficaLiquidadores').getContext('2d');

  new Chart(ctxLiquidadores, {
    type: 'line',
    data: {
      labels: [1985, 1990, 1995, 2000, 2010],
      datasets: [{
        label: 'Liquidadores fallecidos (estimación acumulada)',
        data: [100, 500, 1000, 2000, 3000],
        borderColor: 'white',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'white',
        tension: 0.4,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          labels: {
            color: 'white',
            font: { size: 10 }
          }
        },
        title: {
          display: true,
          text: 'Estimación acumulada de liquidadores fallecidos tras Chernóbil',
          color: 'white',
          font: { size: 12 }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Año',
            color: 'white',
            font: { size: 10 }
          },
          ticks: { color: 'white', font: { size: 9 } },
          grid: { color: 'rgba(255,255,255,0.1)' }
        },
        y: {
          title: {
            display: true,
            text: 'Liquidadores fallecidos (estimación acumulada)',
            color: 'white',
            font: { size: 10 }
          },
          beginAtZero: true,
          max: 3000,
          ticks: {
            stepSize: 500,
            color: 'white',
            font: { size: 9 },
            callback: value => value.toLocaleString()
          },
          grid: { color: 'rgba(255,255,255,0.1)' }
        }
      }
    }
  });
});



/* gráfica de pacientes -capitulop3*/
document.addEventListener("DOMContentLoaded", () => {
  const ctxPacientes = document.getElementById('graficaPacientesRadiacion').getContext('2d');

  new Chart(ctxPacientes, {
    type: 'line',
    data: {
      labels: ['26 abril', '27 abril', '28 abril', '29 abril', '30 abril'],
      datasets: [{
        label: 'Pacientes hospitalizados por irradiación',
        data: [40, 120, 180, 130, 90],
        borderColor: 'white',
        backgroundColor: 'transparent',
        pointBackgroundColor: 'white',
        tension: 0.4,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          labels: {
            color: 'white',
            font: { size: 10 }
          }
        },
        title: {
          display: true,
          text: 'Número de pacientes con síntomas de irradiación',
          color: 'white',
          font: { size: 12 }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Días después del accidente',
            color: 'white',
            font: { size: 10 }
          },
          ticks: { color: 'white', font: { size: 9 } },
          grid: { color: 'rgba(255,255,255,0.1)' }
        },
        y: {
          title: {
            display: true,
            text: 'Número de pacientes',
            color: 'white',
            font: { size: 10 }
          },
          beginAtZero: true,
          max: 200,
          ticks: {
            stepSize: 20,
            color: 'white',
            font: { size: 9 },
            callback: value => value.toLocaleString()
          },
          grid: { color: 'rgba(255,255,255,0.1)' }
        }
      }
    }
  });
});
