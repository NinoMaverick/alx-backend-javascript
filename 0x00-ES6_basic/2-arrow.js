export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    // Arrow function here binds `this` lexically, so it refers to the instance of getNeighborhoodsList
    this.addNeighborhood = (newNeighborhood) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };
  }