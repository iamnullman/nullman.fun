const fetch = require("isomorphic-unfetch");
export default async function handler(req, res) {
  let __ = await (
    await fetch("https://api.github.com/users/iamnullman/repos")
  ).json();
    __ = __.sort((a, b) => b.stargazers_count - a.stargazers_count);
  let ___ = await (
    await fetch("https://api.github.com/users/animeswatch/repos")
  ).json();
  ___ = ___.filter(a => !a.name.match(".github")).sort((a, b) => b.stargazers_count - a.stargazers_count);

  try {
    res.send([...__, ...___]);
  } catch (e) {
    res.send([]);
  }
}