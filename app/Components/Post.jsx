import PostNavButton from "./PostNavButton";

export default function POST({title, body, id}){
    return(
        <div style={{border: '1px solid white', padding: '50px', margin: '50px' }}>
            <h3>{title}</h3>
            <p>{body}</p>
            <PostNavButton id={id} />
        </div>
    )
}