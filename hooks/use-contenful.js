import * as React from 'react';
import {useState, useEffect} from "react";

export default function useContentful(query) {
    let [data, setData] = useState(null); 
    let [errors, setErrors] = useState(null); 

    useEffect(() => {
        window
        .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CDA_TOKEN}`,
            },
            // send the GraphQL query
            body: JSON.stringify({ query }),
        })
        .then((response) => response.json())
        .then(({data, errors}) => {
            if (errors) setErrors(errors)
            if (data)setData(data); 
        })
        .catch(error => setErrors([error])); 
    }, [query]);

    return {data, errors}
}