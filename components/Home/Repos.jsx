import Link from "next/link";
import {FaCodeBranch, FaStar} from "react-icons/fa"
export default function GithubRepos({repos, theme}) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 h-full gap-2   mt-6'>
      {repos ? <>{repos.map((repo, index) => (
    <div key={index + 1} className={(theme === "dark" ? "bg-gray-700" : "bg-gray-200")+ ' p-3 rounded-lg hover:scale-110 duration-500'}>
    <Link href={repo.html_url}>
      <a target='_blank'>
     <div class="flex flex-row">
     <p className="font-bold text-sm">
     <span className='text-lg text-purple-500'>{repo.owner.login}</span>/{repo.name}
      </p>
</div>
<div class="grid grid-cols-3 items-center space-x-1 mt-2">
<p class="flex items-center justify-start">
  <FaStar className='text-purple-500/70'/>
  <span class="text-base font-semibold"> {repo.stargazers_count}</span>
</p>
<div class="text-sm text-center px-2 py-1 rounded-md mr-1">{repo.language ? repo.language : repo.fork ? "Fork":"undefined"}</div>
 <p class="flex items-center  justify-end">
  <span class="text-base font-semibold">{repo.forks_count}</span>
  <FaCodeBranch className='text-purple-500/70'/>
  </p>
</div>
</a>
</Link>
      </div>
      ))}</> : <p className='font-quicksand font-bold text-base-content'>Loading...</p>}
    </div>
    );
}