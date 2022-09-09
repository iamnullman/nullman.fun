import { FaDiscord, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
<footer className="footer footer-center mt-16 text-base-content">
  <div>
    <div className="grid grid-flow-col gap-3">
    <a target={"_blank"} href="https://discord.com/channels/@me/725520758117498881"><FaDiscord className="w-6 h-6 text-purple-500"/></a>
    <a target={"_blank"} href="https://twitter.com/iamnullman"><FaTwitter className="w-6 h-6 text-purple-500"/></a>
      <a target={"_blank"} href="https://www.instagram.com/iamnullman/"><FaInstagram className="w-6 h-6 text-purple-500"/></a>
      <a target={"_blank"} href="https://github.com/iamnullman"><FaGithub className="w-6 h-6 text-purple-500"/></a>
      </div>
    <p>nullman.fun © 2022 - All right reserved</p>
  </div> 
</footer>
    )
}
