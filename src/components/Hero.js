import { Card, Grid ,CardContent} from '@mui/material'
import React from 'react'

const Hero = () => {
  return (

<div style={{ padding: 30 }}>
        <Grid container spacing={10} justify="center" display="flex">
            <Grid item xs={12} md={6} lg={4}>
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
            </Grid>
             <Grid item xs={12} md={6} lg={4}>
                <Card>
                    <CardContent>
                        ...
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
     )
}

export default Hero

