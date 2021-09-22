import inquirer from "inquirer";

// prompt & get config
export async function promptUser() {
  return inquirer.prompt([
    { type: "input", name: "packageName", message: "Package name? " },
    {
      type: "number",
      name: "port",
      message: "Port number? ",
      default: () => 8080,
    },
    {
      type: "checkbox",
      name: "middleware",
      choices: [
        {
          name: "koaStatic",
        },
        {
          name: "koaRouter",
        },
      ],
    },
  ]);
}

export async function getConfig(answer) {
  const haveMiddleware = (name) => {
    return answer.middleware.indexOf(name) !== -1;
  };
  return {
    packageName: answer.packageName,
    port: answer.port,
    middleware: {
      router: haveMiddleware("koaRouter"),
      static: haveMiddleware("koaStatic"),
    },
  };
}
