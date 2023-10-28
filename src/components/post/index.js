

export default function Post({name, username, message, likes, tweets, retweets}) {


    return (
        <div className="post_post">
            <div className="post_names">{name}</div>
            <div>@{username}</div>
            <div className="post_tweet">{message}</div>
            <div className="post_info">
                <div>12:41 PM</div>
                <div>7 Jul, 2022</div>
                <div>Twitter for browser</div>
            </div>
            <div className="post_like">
                <div onClick={() => incr()}> <span>{likes}</span> Retweets</div>
                <div> <span>{tweets}</span> Quote Tweets</div>
                <div> <span>{retweets}</span> Likes</div>
            </div>
        </div>
    )
}