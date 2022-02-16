const elemMenuDashboard = document.getElementById('idMenuDashboard');
const elemMenuDashboardItems = document.getElementsByClassName('menu-dashboard-item');
const elemGridContainer = document.getElementById('idGridContainer');
const elemGridItems = elemGridContainer.getElementsByClassName('grid-item-content');

const array_data = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
];

for (var i = 0; i < elemMenuDashboardItems.length; i++) {
  elemMenuDashboardItems[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('menu-dashboard-item active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';

    for (var j = 0; j < elemGridItems.length; j++) {
      let timeframe = this.innerText.toLowerCase();
      let activity = elemGridItems[j].getElementsByClassName('item-activity')[0].innerText;
      let [currentHour, previousHour] = getActivityHours(activity, timeframe);
      
      elemGridItems[j].getElementsByClassName('item-current-hour')[0].innerText = ''.concat(currentHour, 'hrs');
      elemGridItems[j].getElementsByClassName('item-previous-hour')[0].innerText = ''.concat(previousHour, 'hrs');
    }
  })
}

function getActivityHours (title, timeframe) {
  const dataFilter = array_data.filter( function(obj) {
    return obj.title == title;
  });

  return [dataFilter[0].timeframes[timeframe].current, dataFilter[0].timeframes[timeframe].previous]
}