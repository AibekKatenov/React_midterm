'use client'

import { useState } from "react"
import Post from "../post"
import Link from "next/link"

export default function Home() {

    let dataOrigin = [
        {
            name: "Emma Watson",
            username: "Emma02",
            message: "I am Germiona from Harry Potter",
            likes: "121211",
            retweets: "11222",
            tweets: "11111"
        },
        {
            name: "Daniel Radklif",
            username: "Dany20202",
            message: "I am Harry from Harry Potter",
            likes: "1457541",
            retweets: "123922",
            tweets: "8234924"
        },
        {
            name: "Ron Wisley",
            username: "Ronaldo013",
            message: "I am Ron from Harry Potter",
            likes: "4567457",
            retweets: "346934",
            tweets: "09457"
        },
    ]

    const [data, setData] = useState(dataOrigin)
    const [creator, setCreator] = useState("")

    const search = (e) => {
        let message = e.target.value
        let newArray = []
        dataOrigin.map(item => {
            if(item.message.includes(message)){
                newArray.push(item)
            }
        })
        setData(newArray)
    }

    const createPost = () => {
        setData([...data, {
            name: "your name",
            username: "yourUsername",
            message: creator,
            likes: "0",
            retweets: "0",
            tweets: "0"
        }])
        console.log('lol', data)
    }

    return (
        <div className="home">
            <div className="ll">
            <input onChange={(e) => setCreator(e.target.value)} id="message" placeholder="Добавьте сообщение" required/>
            <button onClick={() => createPost()}>Создать новый пост</button>
            </div>  

            <input onChange={(e) => search(e)} id="search"></input>
            <label htmlFor="search">Поиск по сообщению</label>
            {data.map((item, index) => {
                return(
               <Link href="post" key={index}><Post key={index} name={item.name} username={item.username} likes={item.likes} tweets={item.tweets} retweets={item.retweets} message={item.message}/></Link>
                ) 
            })} 
        </div>
    )
}