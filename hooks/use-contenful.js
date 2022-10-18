import {useState, useEffect} from "react";

export default function useContentful(query) {
    let [data, setData] = useState(null); 

    useEffect(() => {
        window
        .fetch(`https://graphql.contentful.com/content/v1/spaces/vpe0m1tts7x2/`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: "Bearer -qnkhZAtm88ji09_T5MW1nRRuA6DWJ4n8Uet86mOHxs",
            },
            // send the GraphQL query
            body: JSON.stringify({ query }),
        })
        .then((response) => response.json())
        .then((json => setData(json.data)))
    }, [query]);

    console.log(data)
    return {data}
}