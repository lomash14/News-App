import React, { useEffect,useState } from 'react'
import { Card, Grid ,CardContent, CardHeader, IconButton, Avatar, Button, CardMedia} from '@mui/material'
import axios from "axios";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import imageError from "../images/error.png.png"

const FetchData = ({cat}) => {

    
    const [Data, setData] = useState("")

   const fetchData= async()=>{
    await axios.get( cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=ed843ecc4ea84bdcbff46eb169b54d4e`
    : "https://newsapi.org/v2/top-headlines?country=in&apiKey=ed843ecc4ea84bdcbff46eb169b54d4e").then((res)=>{
        console.log(res.data,"response")
        setData(res.data.articles)
    })
   }

   useEffect(() => {
    fetchData()
   }, [cat])
   
//    const timeCurrent = new Date();
//    console.log(timeCurrent.toDateString());



  return (
<div style={{ padding: 30 }}>

        <Grid container spacing={10} justify="center" display="flex">

{
    Data ? Data.map((currElem,index)=>{
        // console.log(currElem,"elementsmapped");
        return <>
            
            <Grid item xs={12} md={6} lg={4}>
                <Card>
                <CardHeader
                sx={{color: 'green',}}
        avatar={
          <Avatar sx={{ bgColor: "pink" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={currElem.title}
        subheader={currElem.publishedAt.slice(0, 10)}
      />          
        <CardMedia
        component="img"
        height="194"
        image={currElem.urlToImage ? currElem.urlToImage : imageError }
        alt="Paella dish"
      />
      
            <CardContent>
                      {currElem.description ? currElem.description :"Unknown"}
                      <Button sx={{mx:3,my:2}} variant="outlined" target="_blank" color="error" href={currElem.url}> Read More</Button>
                    </CardContent>
                    <CardContent>
                      {currElem.author ? currElem.author :"Unknown"}
                    </CardContent>
                </Card>
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4}>
                <Card>
                    <CardContent>
                       hello
                    </CardContent>
                </Card>
            </Grid>
             <Grid item xs={12} md={6} lg={4}>
                <Card>
                    <CardContent>
                        ...
                    </CardContent>
                </Card>
            </Grid> */}
            </>
    })  :"Loading"
}

        </Grid>
    </div>  )
}

export default FetchData;