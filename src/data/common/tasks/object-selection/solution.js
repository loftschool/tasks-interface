export const workers = [
  {
    name: "John",
    salary: 500,
  },
  {
    name: "Mike",
    salary: 1300,
  },
  {
    name: "Linda",
    salary: 1500,
  },
];

export const getWorthyWorkers = (workersArr) => {
  const worthyWorkers = [];
  workers.forEach((worker) => {
    if (worker.salary > 1000) {
      worthyWorkers.push(worker.name);
    }
  });

  return worthyWorkers;
};

export const result = getWorthyWorkers(workers);
