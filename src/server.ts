import creatApp from "./app";

const app = creatApp();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server runnin at port http://localhost:${port}`);
});
