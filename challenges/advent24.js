function canExit(maze) {
  let start;
  let end;

  //Calculate the distance from a point to the end
  const calculateDistance = (node, end) =>
    Math.sqrt((node.x - end.x) ** 2 + (node.y - end.y) ** 2);

  //Search neighbors of a node
  let steps = [
    [-1, 0], //up
    [1, 0], //down
    [0, -1], //left
    [0, 1], //right
  ];

  //Parse array to graph
  const graphMaze = maze.map((row, y) => {
    return row.map((value, x) => {
      let node = {
        x,
        y,
        value,
        neighbors: [],
        gScore: 0,
        fScore: Infinity,
      };
      if (value === "S") {
        start = node;
      } else if (value === "E") {
        end = node;
      }
      return node;
    });
  });
  graphMaze.map((row, _, maze) => {
    row.map((node) => {
      steps.map((point) => {
        if (
          node.y + point[0] >= 0 &&
          node.y + point[0] <= maze.length - 1 &&
          node.x + point[1] >= 0 &&
          node.x + point[1] <= maze[0].length - 1
        ) {
          let neighbor = maze[node.y + point[0]][node.x + point[1]];
          if (neighbor) node.neighbors.push(neighbor);
        }
      });
    });
  });

  //priority queue
  let open = [start];

  //travel through the nodes
  while (open.length) {
    //sort by fScore
    let next = open.sort((x, y) => y.fScore - x.fScore).pop();
    //go through the neighbors
    next.neighbors.forEach((neighbor) => {
      if (neighbor.value !== "W") {
        let newGScore = next.gScore + 1;
        //if is less than the previous gScore, update it
        if (newGScore < neighbor.gScore || neighbor.gScore === 0) {
          //gScore is the steps we took to get there
          neighbor.gScore = newGScore;
          //fScore is the steps we took plus how much cost to get to the end if there wasnt walls
          //So fScore is an approximation of how fare we are from the end
          neighbor.fScore = newGScore + calculateDistance(next, end);

          //since is lower, we push it to the priority queue (if its not there already)
          // because now we found a shorter parth
          if (!open.includes(neighbor)) {
            console.log(neighbor);
            open.push(neighbor);
          }
        }
      }
    });
  }

  return !!end.gScore;
}

canExit([
  [" ", " ", "W", " ", "S"],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", "W", " "],
  ["W", "W", " ", "W", "W"],
  [" ", " ", " ", " ", "E"],
]);
