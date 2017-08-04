document.title = "client Technology Radar";

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
            { name: 'Git', pc: { r: 40, t: 160 }, movement: 'c' },
            {"name":"Jira", "pc":{"r":40,"t":120},"movement":"c"},    
            {"name":"Cloud Foundry", "pc":{"r":90,"t":120},"movement":"c"},
            {"name":"Adobe Experience Manager", "pc":{"r":80,"t":170},"movement":"c"}, 
            {"name":"Jenkins", "pc":{"r":60,"t":150},"movement":"c"},    
            {"name":"Docker in Swarm mode", "pc":{"r":250,"t":130},"movement":"c"},
            {"name":"Kubernetes", "pc":{"r":250,"t":135},"movement":"c"}, 
            {"name":"AWS API Gateway", "pc":{"r":250,"t":140},"movement":"c"},    
            {"name":"ForgeRock", "pc":{"r":150,"t":105},"movement":"c"},
            {"name":"Transmit", "pc":{"r":170,"t":150},"movement":"c"}, 
        ]
    },
    { "quadrant": "Techniques",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
  { name: 'Paired programming',    pc: { r: 250, t: 10 },    movement: 'c' },
  ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"AWS", "pc":{"r":250,"t":260},"movement":"c"},
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            { name: 'React.js', pc: { r: 60, t: 290 },  movement: 'c' },
        ]
    }
];
