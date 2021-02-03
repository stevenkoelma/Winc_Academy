const url = `http://127.0.0.1:3000/`
const sortOnCreatedOn = `?sort=-__createdOn`;

const getData = async () => {
  try {
    const result = await fetch(`${url}${sortOnCreatedOn}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const postData = async (task) => {
  try {
    const result = await fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify({ description: task.description, done: false }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const editData = async (task) => {
  try {
    let result = await fetch(`${url}${task._id}`, {
      method: `PUT`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description: task.description,
        done: task.done,
      }),
    });
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const deleteData = async (task) => {
  try {
    await fetch(`${url}${task._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
      } catch (error) {
    console.log(error);
  }
};

const deleteAllData = async () => {
  try {
    const result = await fetch(`${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    data.forEach((task) => deleteData(task));
  } catch (error) {
    console.log(error);
  }
};