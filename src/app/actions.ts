import "use server";

export async function getTodos() {
  return [{ title: "laundry" }, { title: "dishes" }];
}
