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

/* setting each DASHBOARD MENU ITEM */
for (var i = 0; i < elemMenuDashboardItems.length; i++) {
  elemMenuDashboardItems[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('menu-dashboard-item active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';

    setDashboardValues(this.innerText.toLowerCase());
  })
}

/* set inicial values for each DASHBOARD card */
setDashboardValues(elemMenuDashboardItems[0].innerText.toLowerCase());

/* setting each ELLIPSIS ICON */
for (var j = 0; j < elemGridItems.length; j++) {

  /* add class onHover for each 'gri-item-content', so we can find it with 'item-icon-menu' */
  elemGridItems[j].addEventListener('mouseenter', function() {
    this.classList.add('onHover');
  })
  elemGridItems[j].addEventListener('mouseleave', function() {
    this.classList.remove('onHover');
  })

  // select menu icon element
  let elemIconMenu = elemGridItems[j].getElementsByClassName('item-icon-menu');
  elemIconMenu[0].addEventListener('mouseenter', function() {
      let elemItemContentOnHover = document.getElementsByClassName('grid-item-content onHover');
      disableHover(elemItemContentOnHover[0]);
    }
  );

  elemIconMenu[0].addEventListener('mouseleave', function() {
      let elemItemContentOnHover = document.getElementsByClassName('grid-item-content onHover no-hover');
      enableHover(elemItemContentOnHover[0]);
    }
  );
}


/**************************************************************************************************/
// hover effect
function disableHover(elemItemContentOnHover) {
  elemItemContentOnHover.classList.add('no-hover');
}
function enableHover(elemItemContentOnHover) {
  elemItemContentOnHover.classList.remove('no-hover');
}

/** update each item in the dashboard with corresponding info */
function setDashboardValues(timeframe) {
  if (timeframe.trim() == '' || timeframe == null) {
    return false;
  }

  for (var j = 0; j < elemGridItems.length; j++) {
    let activity = elemGridItems[j].getElementsByClassName('item-activity')[0].innerText;
    let [currentHour, previousHour] = getActivityHours(activity, timeframe);
    
    elemGridItems[j].getElementsByClassName('item-current-hour')[0].innerText = ''.concat(currentHour, 'hrs');
    elemGridItems[j].getElementsByClassName('item-previous-hour')[0].innerText = ''.concat(getTimeframeText(timeframe), previousHour, 'hrs');
  }

  return true;
}

function getActivityHours (title, timeframe) {
  const dataFilter = array_data.filter( function(obj) {
    return obj.title == title;
  });

  return [dataFilter[0].timeframes[timeframe].current, dataFilter[0].timeframes[timeframe].previous]
}

function getTimeframeText(timeframe) {
  let text;
  if (timeframe == 'daily') { text = 'Last day - '};
  if (timeframe == 'weekly') { text = 'Last week - '};
  if (timeframe == 'monthly') { text = 'Last month - '};

  return text;
}
