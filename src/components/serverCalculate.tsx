"use server";

export default async function serverCalculate(a: string | null) {
  if (a === "1") {
    const err = new Error(
      "An error occurred in server-side function 'serverCalculate'"
    );
    console.log(`Server-side error being logged: ${err}`);
    throw err;
  }
  return `serverCalculate received, at time ${Date.now().toString()} the string '${a}'`;
}
