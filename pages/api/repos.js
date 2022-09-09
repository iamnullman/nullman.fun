const fetch = require("isomorphic-unfetch");

export default async function handler(req, res) {
  let __ = await (
    await fetch("http://api.allorigins.win/raw?url=https://api.github.com/users/iamnullman/repos")
  ).json();

  let ___ = await (
    await fetch("http://api.allorigins.win/raw?url=https://api.github.com/users/animeswatch/repos")
  ).json();
  try {
    res.send([...__, ...___]);
  } catch (e) {
    res.send([]);
  }
}