"use client";

import serverCalculate from "@/components/serverCalculate";

// async function serverAdd(a: number, b: number): Promise<number> {
//   "use server";
//   if ((a = 2)) return 0;
//   else throw Error("divide by zero");
// }

// async function add(a: number, b: number): Promise<string> {
//   "use client";
//   return (await serverAdd(a, b)) + Date.now().toString();
// }

/* export default function Page() {
  //"use client";
  //let p = "nothing";
  function changeParagraph() {
    //"use client";
    alert("jhkhkj");
    //  p = await add(2, 3);
  }
  return (
    <>
      <h1>Hello Next.js!</h1>
      <button onClick={changeParagraph}>change paragraph</button>
      <p></p>
    </>
  );
}
 */

export default function Page() {
  async function clientCalculate(v: any) {
    if (v === "0") {
      const err = Error(
        "An occurred occurred in client-side function 'clientCalculate'"
      );
      console.log(`Eror in clientCalculate being logged: ${err}`);
      throw err;
    }
    return serverCalculate(v);
  }
  return (
    <button
      onClick={async () => {
        const i = prompt(
          "enter a value. '0' would return an error from the client-side function, '1' would return an error from the server-side function and any other value would return a value from the server-side function."
        );

        try {
          alert(await clientCalculate(i));
        } catch (ex: any) {
          alert(`Error occurred: ${ex.stack}`);
          alert(`Server-side call digest: ${ex.digest}`);
          throw ex;
        }
      }}
    >
      Click me
    </button>
  );
}
