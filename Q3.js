//Creating the database

const records = [{
    user_id: 1,
    device: "Windows 10",
    action: "start",
    data_actions: 100
  },
  {
    user_id: 2,
    device: "OSX 15.4",
    action: "start",
    data_actions: 200
  },
  {
    user_id: 1,
    device: "iPhone 8s",
    action: "start",
    data_actions: 250
  },
  {
    user_id: 1,
    device: "Window 10",
    action: "stop",
    data_actions: 370
  },
  {
    user_id: 1,
    device: "iPhone 8s",
    action: "stop",
    data_actions: 410
  },
  {
    user_id: 2,
    device: "OSX 15.4",
    action: "stop",
    data_actions: 490
  }, {
    user_id: 3,
    device: "Android 9.1",
    action: "start",
    data_actions: 700
  }
];


const getUsers = (records, action, start_time, end_time) => {
  if (!records)
    return [];

	// Filter record by action, start time and end time
  // Map results and return array of user ids

  let users = records.filter(record => {
    return record.action === action &&
      record.data_actions >= start_time &&
      record.data_actions <= end_time;
  }).map(user => user.user_id);

  return users;
};

const getUserPlayback = (user_id, records) => {
  if (!records && !user_id)
    return 0;


	// Filter records by user id
  let user_records = records.filter(user => {
    return user.user_id === user_id;
  });

  const start_time = user_records[0].data_actions;
  const end_time = user_records[user_records.length - 1].data_actions;

  return end_time - start_time;
};

console.log("Get Users", getUsers(records, "start", 700, 900));
console.log("Total Playback Time", getUserPlayback(1, records));