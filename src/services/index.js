export const getUsers = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
    });
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
