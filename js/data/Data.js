//Singleton
const Data = {
  data: Array(),

  create(d) {
    this.data.push(d);
  },

  deleteAll() {
    this.data = null;
  },
};

export { Data };
