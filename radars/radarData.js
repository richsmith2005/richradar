document.title = "first direct technology radar";

var radar_arcs = [
                   {'r':100,'name':'Industrialise'}
                  ,{'r':200,'name':'Adopt'}
                  ,{'r':300,'name':'Experiment'}
                  ,{'r':400,'name':'Demise'}
                 // ,{'r':500,'name':'Optional extra'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize:
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Tools",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [
            {"name": 'Git', pc: { r: 40, t: 160 }, movement: 'c' },
            {"name":"Jira", "pc":{"r":40,"t":120},"movement":"c"},
            {"name":"Jenkins", "pc":{"r":60,"t":150},"movement":"c"},
            {"name":"Docker", "pc":{"r":250,"t":130},"movement":"c"},
        ]
    },
    { "quadrant": "Techniques",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [
           { name: 'TDD',    pc: { r: 50, t: 20 },    movement: 'c' },
           { name: 'Pair programming',    pc: { r: 240, t: 55 },    movement: 'c' },
           { name: 'GitFlow',    pc: { r: 160, t: 60 },    movement: 'c' },
           { name: 'Developer Community',    pc: { r: 260, t: 30 },    movement: 'c' },
  ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"Cloud Foundry", "pc":{"r":320,"t":220},"movement":"c"},
            {"name":"AWS", "pc":{"r":250,"t":260},"movement":"c"},
            {"name":"Docker Swarm", "pc":{"r":250,"t":200},"movement":"c"},
            {"name":"Adobe Experience Manager", "pc":{"r":240,"t":225},"movement":"c"},
            {"name":"ForgeRock", "pc":{"r":250,"t":205},"movement":"c"},
            {"name":"Transmit", "pc":{"r":270,"t":250},"movement":"c"},
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [
            { name: 'java', pc: { r: 60, t: 290 },  movement: 'c' },
            { name: 'spring-boot', pc: { r: 60, t: 310 },  movement: 'c' },
            { name: 'javascript (ES6+)', pc: { r: 160, t: 290 },  movement: 'c' },
            { name: 'nodejs', pc: { r: 260, t: 290 },  movement: 'c' },
            { name: 'React.js', pc: { r: 160, t: 310 },  movement: 'c' },
        ]
    }
];
