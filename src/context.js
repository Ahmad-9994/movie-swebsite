
import React, { useEffect, useState } from "react"
import { useContext } from "react";


const AppContext = React.createContext();

 const api_url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=`


const AppProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const [isError, setIsError] = useState({ show: "false", msg: "" })
    const[query ,setQuery]=useState("titanic")


// ...........................................fetching data..............................


    const getMovies = async (api) => {
        setIsLoading(true);
        try{
            const res = await fetch(api);
            const data = await res.json();
            console.log(data)
    
    
            if(data.Response==="True"){ 
                setIsLoading(false)
                setMovie(data.Search)}
            else{setIsError({
                show:true,
                msg:data.Error
            })}

                      console.log(movie)
        }catch(error)
        {console.log(error)}

       
       
    }


    useEffect(() => {

       const timer= setTimeout(() => {
            getMovies(`${api_url}${query}`)
        }, 800);
        return ()=> clearTimeout(timer)
    }, [query])

// ...........................................fetching data   end..............................


    return <AppContext.Provider value={{isError ,isLoading ,movie ,query,setQuery }}>
        {children}
    </AppContext.Provider>
}

//global custom hook


const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext }












