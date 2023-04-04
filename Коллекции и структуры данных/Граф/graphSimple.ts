class Graph {
  public vertices: object;

  constructor() {
    this.vertices = {};
  }

  addVertex(value: number | string): void {
    if (!this.vertices[value]) {
      this.vertices[value] = [];
    }
  }

  addEdge(vertex1: number | string, vertex2: number | string, weight: number): void {
    if (!(vertex1 in this.vertices) || !(vertex2 in this.vertices)) {
      throw new Error("В графе нет таких вершин");
    }

    if (!this.vertices[vertex1].includes(vertex2)) {
      this.vertices[vertex1].push({ node: vertex2, weight: weight });
    }
    if (!this.vertices[vertex2].includes(vertex1)) {
      // this.vertices[vertex2].push({ node: vertex1, weight: weight });
    }
  }

  print() {
    console.log(this.vertices);
  }
}

const graph = new Graph();

graph.addVertex("Харьков");

graph.addVertex("Николаев");

graph.addVertex("Днепр");

graph.addVertex("Киев");

graph.addVertex("Винница");

graph.addVertex("Одесса");

graph.addEdge("Харьков", "Николаев", 612);

graph.addEdge("Харьков", "Днепр", 216);

graph.addEdge("Харьков", "Киев", 510);

graph.addEdge("Киев", "Винница", 270);

graph.addEdge("Николаев", "Одесса", 132);

graph.addEdge("Днепр", "Одесса", 670);

graph.addEdge("Винница", "Одесса", 424);

graph.print();

const graphMatrix = [
  [0, 1, 1, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 0],
];
