function graph(json, json_ignore){

    $.getJSON("js/contexto2.json", function(json) {
        console.log(json); // this will show the info it in firebug console
    });

    if (!json_ignore) {
        var edges = json.edges;
        var nodes = json.nodes;

        var newNodes = [];
        var newEdges = [];

        for (var i = 0; i < nodes.length; i++) {

            var eventId = nodes[i].source.id+'>>'+nodes[i].target.id;
            var eventLabel = nodes[i].source.id;
            var eventContent = nodes[i].target.id;

            var jsonStringEvent = '{"label":"'+ eventLabel +'","content":"'+ eventContent +'","id":"'+ eventId +'","group":1}';
            // console.log("NODE "+jsonStringEvent);
            newNodes.push(JSON.parse(jsonStringEvent));

            var jsonStringContent = '{"label":"'+ eventContent +'", "id":"'+ eventContent +'", "group":2}';
            // console.log("NODE "+jsonStringContent);
            newNodes.push(JSON.parse(jsonStringContent));

            var jsonString = '{"source":"'+ eventId +'", "target":"'+ eventContent +'", "type":"content", "weight":'+ (nodes[i].weight * 10) +'}';
            // console.log(jsonString);
            var edge = JSON.parse(jsonString);
            newEdges.push(edge);
        }

        var graph = {
            "nodes" : newNodes,
            "links": newEdges
        };
        console.log(graph);
    }

    var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; }))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));

    var link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line")
        .attr("stroke-width", function(d) { return Math.sqrt(d.weight); });

    var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("r", 5)
        .attr("fill", function(d) {
            return color(d.group);
        })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    node.append("title")
        .text(function(d) { return d.id; });

    simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(graph.links);

    function ticked() {
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    }

    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

}

var context1 = {
    "nodes": [
        {
            "source": {
                "id": "FCE1/PW DRV RSV",
                "content": "FCE1/PW DRV RSV",
                "weight": 0
            },
            "target": {
                "id": "FCE REPLACED",
                "content": "FCE REPLACED",
                "weight": 0
            },
            "weight": 0.142,
            "occurrence": {
                "id": "FCE REPLACED",
                "content": "FCE REPLACED",
                "weight": 0
            },
            "name": {
                "id": "FCE1/PW DRV RSV",
                "content": "FCE1/PW DRV RSV",
                "weight": 0
            },
            "id": "FCE1/PW DRV RSV"
        },
        {
            "source": {
                "id": "FCE1/PW DRV RSV",
                "content": "FCE1/PW DRV RSV",
                "weight": 0
            },
            "target": {
                "id": "FLAP ACTUATOR REPLACED",
                "content": "FLAP ACTUATOR REPLACED",
                "weight": 0
            },
            "weight": 0.142,
            "occurrence": {
                "id": "FLAP ACTUATOR REPLACED",
                "content": "FLAP ACTUATOR REPLACED",
                "weight": 0
            },
            "name": {
                "id": "FCE1/PW DRV RSV",
                "content": "FCE1/PW DRV RSV",
                "weight": 0
            },
            "id": "FCE1/PW DRV RSV"
        },
        {
            "source": {
                "id": "FCE1/PW DRV RSV",
                "content": "FCE1/PW DRV RSV",
                "weight": 0
            },
            "target": {
                "id": "FLAP PDU REPLACED",
                "content": "FLAP PDU REPLACED",
                "weight": 0
            },
            "weight": 0.142,
            "occurrence": {
                "id": "FLAP PDU REPLACED",
                "content": "FLAP PDU REPLACED",
                "weight": 0
            },
            "name": {
                "id": "FCE1/PW DRV RSV",
                "content": "FCE1/PW DRV RSV",
                "weight": 0
            },
            "id": "FCE1/PW DRV RSV"
        },
        {
            "source": {
                "id": "FCE1/PW DRV RSV",
                "content": "FCE1/PW DRV RSV",
                "weight": 0
            },
            "target": {
                "id": "SYSTEM RESET / UNABLE TO REPRODUCE REPORTED SCENARIO",
                "content": "SYSTEM RESET / UNABLE TO REPRODUCE REPORTED SCENARIO",
                "weight": 0
            },
            "weight": 0.142,
            "occurrence": {
                "id": "SYSTEM RESET / UNABLE TO REPRODUCE REPORTED SCENARIO",
                "content": "SYSTEM RESET / UNABLE TO REPRODUCE REPORTED SCENARIO",
                "weight": 0
            },
            "name": {
                "id": "FCE1/PW DRV RSV",
                "content": "FCE1/PW DRV RSV",
                "weight": 0
            },
            "id": "FCE1/PW DRV RSV"
        },
        {
            "source": {
                "id": "FCE1/PW DRV RSV",
                "content": "FCE1/PW DRV RSV",
                "weight": 0
            },
            "target": {
                "id": "FCE SWAP PERFORMED",
                "content": "FCE SWAP PERFORMED",
                "weight": 0
            },
            "weight": 0.142,
            "occurrence": {
                "id": "FCE SWAP PERFORMED",
                "content": "FCE SWAP PERFORMED",
                "weight": 0
            },
            "name": {
                "id": "FCE1/PW DRV RSV",
                "content": "FCE1/PW DRV RSV",
                "weight": 0
            },
            "id": "FCE1/PW DRV RSV"
        },
        {
            "source": {
                "id": "FCE1/PW DRV RSV",
                "content": "FCE1/PW DRV RSV",
                "weight": 0
            },
            "target": {
                "id": "FCS RIGGING PROCEDURE PERFORMED",
                "content": "FCS RIGGING PROCEDURE PERFORMED",
                "weight": 0
            },
            "weight": 0.142,
            "occurrence": {
                "id": "FCS RIGGING PROCEDURE PERFORMED",
                "content": "FCS RIGGING PROCEDURE PERFORMED",
                "weight": 0
            },
            "name": {
                "id": "FCE1/PW DRV RSV",
                "content": "FCE1/PW DRV RSV",
                "weight": 0
            },
            "id": "FCE1/PW DRV RSV"
        },
        {
            "source": {
                "id": "FCE1/PW DRV RSV",
                "content": "FCE1/PW DRV RSV",
                "weight": 0
            },
            "target": {
                "id": "NA",
                "content": "NA",
                "weight": 0
            },
            "weight": 0.142,
            "occurrence": {
                "id": "NA",
                "content": "NA",
                "weight": 0
            },
            "name": {
                "id": "FCE1/PW DRV RSV",
                "content": "FCE1/PW DRV RSV",
                "weight": 0
            },
            "id": "FCE1/PW DRV RSV"
        }
    ],
    "edges": [
        {
            "source": {
                "source": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "target": {
                    "id": "FCE REPLACED",
                    "content": "FCE REPLACED",
                    "weight": 0
                },
                "weight": 0.142,
                "occurrence": {
                    "id": "FCE REPLACED",
                    "content": "FCE REPLACED",
                    "weight": 0
                },
                "name": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "id": "FCE1/PW DRV RSV"
            },
            "target": {
                "source": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "target": {
                    "id": "FCE REPLACED",
                    "content": "FCE REPLACED",
                    "weight": 0
                },
                "weight": 0.142,
                "occurrence": {
                    "id": "FCE REPLACED",
                    "content": "FCE REPLACED",
                    "weight": 0
                },
                "name": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "id": "FCE1/PW DRV RSV"
            },
            "weight": 1,
            "id": "(FCE1/PW DRV RSV->FCE1/PW DRV RSV)"
        },
        {
            "source": {
                "source": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "target": {
                    "id": "FLAP ACTUATOR REPLACED",
                    "content": "FLAP ACTUATOR REPLACED",
                    "weight": 0
                },
                "weight": 0.142,
                "occurrence": {
                    "id": "FLAP ACTUATOR REPLACED",
                    "content": "FLAP ACTUATOR REPLACED",
                    "weight": 0
                },
                "name": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "id": "FCE1/PW DRV RSV"
            },
            "target": {
                "source": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "target": {
                    "id": "FLAP ACTUATOR REPLACED",
                    "content": "FLAP ACTUATOR REPLACED",
                    "weight": 0
                },
                "weight": 0.142,
                "occurrence": {
                    "id": "FLAP ACTUATOR REPLACED",
                    "content": "FLAP ACTUATOR REPLACED",
                    "weight": 0
                },
                "name": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "id": "FCE1/PW DRV RSV"
            },
            "weight": 1,
            "id": "(FCE1/PW DRV RSV->FCE1/PW DRV RSV)"
        },
        {
            "source": {
                "source": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "target": {
                    "id": "FLAP PDU REPLACED",
                    "content": "FLAP PDU REPLACED",
                    "weight": 0
                },
                "weight": 0.142,
                "occurrence": {
                    "id": "FLAP PDU REPLACED",
                    "content": "FLAP PDU REPLACED",
                    "weight": 0
                },
                "name": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "id": "FCE1/PW DRV RSV"
            },
            "target": {
                "source": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "target": {
                    "id": "FLAP PDU REPLACED",
                    "content": "FLAP PDU REPLACED",
                    "weight": 0
                },
                "weight": 0.142,
                "occurrence": {
                    "id": "FLAP PDU REPLACED",
                    "content": "FLAP PDU REPLACED",
                    "weight": 0
                },
                "name": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "id": "FCE1/PW DRV RSV"
            },
            "weight": 1,
            "id": "(FCE1/PW DRV RSV->FCE1/PW DRV RSV)"
        },
        {
            "source": {
                "source": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "target": {
                    "id": "SYSTEM RESET / UNABLE TO REPRODUCE REPORTED SCENARIO",
                    "content": "SYSTEM RESET / UNABLE TO REPRODUCE REPORTED SCENARIO",
                    "weight": 0
                },
                "weight": 0.142,
                "occurrence": {
                    "id": "SYSTEM RESET / UNABLE TO REPRODUCE REPORTED SCENARIO",
                    "content": "SYSTEM RESET / UNABLE TO REPRODUCE REPORTED SCENARIO",
                    "weight": 0
                },
                "name": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "id": "FCE1/PW DRV RSV"
            },
            "target": {
                "source": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "target": {
                    "id": "SYSTEM RESET / UNABLE TO REPRODUCE REPORTED SCENARIO",
                    "content": "SYSTEM RESET / UNABLE TO REPRODUCE REPORTED SCENARIO",
                    "weight": 0
                },
                "weight": 0.142,
                "occurrence": {
                    "id": "SYSTEM RESET / UNABLE TO REPRODUCE REPORTED SCENARIO",
                    "content": "SYSTEM RESET / UNABLE TO REPRODUCE REPORTED SCENARIO",
                    "weight": 0
                },
                "name": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "id": "FCE1/PW DRV RSV"
            },
            "weight": 1,
            "id": "(FCE1/PW DRV RSV->FCE1/PW DRV RSV)"
        },
        {
            "source": {
                "source": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "target": {
                    "id": "FCE SWAP PERFORMED",
                    "content": "FCE SWAP PERFORMED",
                    "weight": 0
                },
                "weight": 0.142,
                "occurrence": {
                    "id": "FCE SWAP PERFORMED",
                    "content": "FCE SWAP PERFORMED",
                    "weight": 0
                },
                "name": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "id": "FCE1/PW DRV RSV"
            },
            "target": {
                "source": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "target": {
                    "id": "FCE SWAP PERFORMED",
                    "content": "FCE SWAP PERFORMED",
                    "weight": 0
                },
                "weight": 0.142,
                "occurrence": {
                    "id": "FCE SWAP PERFORMED",
                    "content": "FCE SWAP PERFORMED",
                    "weight": 0
                },
                "name": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "id": "FCE1/PW DRV RSV"
            },
            "weight": 1,
            "id": "(FCE1/PW DRV RSV->FCE1/PW DRV RSV)"
        },
        {
            "source": {
                "source": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "target": {
                    "id": "FCS RIGGING PROCEDURE PERFORMED",
                    "content": "FCS RIGGING PROCEDURE PERFORMED",
                    "weight": 0
                },
                "weight": 0.142,
                "occurrence": {
                    "id": "FCS RIGGING PROCEDURE PERFORMED",
                    "content": "FCS RIGGING PROCEDURE PERFORMED",
                    "weight": 0
                },
                "name": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "id": "FCE1/PW DRV RSV"
            },
            "target": {
                "source": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "target": {
                    "id": "FCS RIGGING PROCEDURE PERFORMED",
                    "content": "FCS RIGGING PROCEDURE PERFORMED",
                    "weight": 0
                },
                "weight": 0.142,
                "occurrence": {
                    "id": "FCS RIGGING PROCEDURE PERFORMED",
                    "content": "FCS RIGGING PROCEDURE PERFORMED",
                    "weight": 0
                },
                "name": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "id": "FCE1/PW DRV RSV"
            },
            "weight": 1,
            "id": "(FCE1/PW DRV RSV->FCE1/PW DRV RSV)"
        },
        {
            "source": {
                "source": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "target": {
                    "id": "NA",
                    "content": "NA",
                    "weight": 0
                },
                "weight": 0.142,
                "occurrence": {
                    "id": "NA",
                    "content": "NA",
                    "weight": 0
                },
                "name": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "id": "FCE1/PW DRV RSV"
            },
            "target": {
                "source": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "target": {
                    "id": "NA",
                    "content": "NA",
                    "weight": 0
                },
                "weight": 0.142,
                "occurrence": {
                    "id": "NA",
                    "content": "NA",
                    "weight": 0
                },
                "name": {
                    "id": "FCE1/PW DRV RSV",
                    "content": "FCE1/PW DRV RSV",
                    "weight": 0
                },
                "id": "FCE1/PW DRV RSV"
            },
            "weight": 1,
            "id": "(FCE1/PW DRV RSV->FCE1/PW DRV RSV)"
        }
    ],
    "decayFactor": 0.7,
    "precision": 1000,
    "defaultPassTimeNodeWeight": 0,
    "minimumNodeWeight": 0.015,
    "minimumEdgeWeight": 0,
    "size": 7,
    "defaultNodeWeight": 1,
    "defaultEdgeWeight": 1
};

graph(context1);

