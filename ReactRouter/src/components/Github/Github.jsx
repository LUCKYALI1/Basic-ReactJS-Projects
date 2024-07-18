import React, { useEffect, useState } from 'react'

function Github() {
    const [data , setData] = useState([])
    useEffect( ()=> {
        fetch('https://api.github.com/users/LUCKYALI1')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    })
  return (
    <>
    {/* <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    <img class="w-full" src="/mountain.jpg" alt="Mountain"/>
      User Name : {data.login}
      <br />
      Followers: {data.followers}
    </div> */}
    <div class="p-10">  
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" src={data.avatar_url} alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{data.login}</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Followers: {data.followers}</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Repositories: {data.public_repos}</span>
        
        <a  href={data.URL} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Github</a>

      </div>
    </div>
  </div>

     
    
    </>
    

  )
}

export default Github
