var express = require('express');
var router = express.Router();







/* GET home page. */
router.get('/', function(req, res, next) {

  res.json(dat);


});


router.get('/:id/:name', function(req, res, next) {
  console.log(req.params);
  res.render('index', { title: 'Id' });
});
module.exports = router;


var dat = {
  time: 1468105463,
  days: [
    {
      day: "2016/07/09",
      matches: [
        {
          type: "MLS",
          teamA: "Seatlle Sounders",
          teamB: "LA Galaxy",
          channels: [
            "Eurosport 2"
          ],
          time: "2016/07/09 21:00:00"
        },
        {
          type: "Liga Brasileña",
          teamA: "Chapecoense",
          teamB: "Corinthians",
          channels: [
            "Canal + Fútbol"
          ],
          time: "2016/07/09 21:30:00"
        }
      ]
    },
    {
      day: "2016/07/10",
      matches: [
        {
          type: "Liga Brasileña",
          teamA: "Sao Paulo",
          teamB: "América",
          channels: [
            "Canal + Fútbol"
          ],
          time: "2016/07/10 21:00:00"
        },
        {
          type: "Eurocopa 2016",
          teamA: "Francia",
          teamB: "Portugal",
          channels: [
            "Telecinco",
            "mitele"
          ],
          time: "2016/07/10 21:00:00"
        }
      ]
    },
    {
      day: "2016/07/11",
      matches: [
        {
          type: "MLS",
          teamA: "New York Red Bulls",
          teamB: "Portland Timbers",
          channels: [
            "Eurosport 2"
          ],
          time: "2016/07/11 00:00:00"
        },
        {
          type: "Euro Sub-19",
          teamA: "Alemania",
          teamB: "Italia",
          channels: [
            "Eurosport"
          ],
          time: "2016/07/11 12:00:00"
        }
      ]
    },
    {
      day: "2016/07/12",
      matches: [
        {
          type: "Euro Sub-19",
          teamA: "Francia",
          teamB: "Inglaterra",
          channels: [
            "Eurosport"
          ],
          time: "2016/07/12 19:30:00"
        }
      ]
    },
    {
      day: "2016/07/14",
      matches: [
        {
          type: "Copa Libertadores",
          teamA: "Atlético Nacional",
          teamB: "Sao Paulo",
          channels: [
            "beIN Sports"
          ],
          time: "2016/07/14 02:45:00"
        },
        {
          type: "Euro Sub-19",
          teamA: "Alemania",
          teamB: "Portugal",
          channels: [
            "Eurosport"
          ],
          time: "2016/07/14 19:30:00"
        }
      ]
    },
    {
      day: "2016/07/15",
      matches: [
        {
          type: "Copa Libertadores",
          teamA: "Boca Juniors",
          teamB: "Independiente",
          channels: [
            "beIN Sports"
          ],
          time: "2016/07/15 02:45:00"
        },
        {
          type: "Euro Sub-19",
          teamA: "Croacia",
          teamB: "Francia",
          channels: [
            "Eurosport"
          ],
          time: "2016/07/15 19:30:00"
        }
      ]
    },
    {
      day: "2016/07/17",
      matches: [
        {
          type: "LaLiga World",
          teamA: "River Plate",
          teamB: "Sevilla",
          channels: [
            "beIN Sports"
          ],
          time: "2016/07/17 02:00:00"
        },
        {
          type: "Euro Sub-19",
          teamA: "Austria",
          teamB: "Alemania",
          channels: [
            "Eurosport"
          ],
          time: "2016/07/17 19:30:00"
        },
        {
          type: "MLS",
          teamA: "Montreal Impact",
          teamB: "New York City",
          channels: [
            "Eurosport"
          ],
          time: "2016/07/17 23:00:00"
        }
      ]
    },
    {
      day: "2016/07/18",
      matches: [
        {
          type: "Euro Sub-19",
          teamA: "Holanda",
          teamB: "Francia",
          channels: [
            "Eurosport"
          ],
          time: "2016/07/18 12:00:00"
        }
      ]
    }
  ],
  tz: "Europe/Madrid",
  tzh: 2
}