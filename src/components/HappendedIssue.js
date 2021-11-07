import React from 'react'
import './HappendedIssue.css'
import ButtonWht from './ButtonWht'
import Brand from './Brand'
import { Grid } from '@mui/material'
function HappendedIssue() {
    return (
        <div className="happended-issue-container">
            <img src="/img/dice-1.png" alt="img" className="dice-1-img" />
            <img src="/img/dice-2.png" alt="img" className="dice-2-img" />
            <h3 className="title">Happened’s issue</h3>
            <p className="description">Lorem ipsum dolor sabc eddaaff <br />
                minus, cum consectetur minima, saepe cumque delectus neque illo ab.</p>
            <div className="button-container">
                <ButtonWht>see more</ButtonWht>
            </div>
            <div className="brand-container">
                <Grid container spacing={0} columns={10}>
                    <Grid item xs={10} lg={2}>
                        <div className="whpn-issue">
                            <h3 className="title">whpn<br/> issue</h3>
                            <img src="/icon/icon-arrow-square.png" alt="icon" className="icon" />
                            <img src="/img/whpn-issue-bottom-icon.png" alt="icon" className="icon-bottom" />
                        </div>
                    </Grid>
                    <Grid item xs={5} lg={2}>
                        <Brand
                            img="/img/brand-img-1.png"
                            name="a brand"
                            nameBackgroundColor="#110e03" 
                            isHot={true} 
                        />
                    </Grid>
                    <Grid item xs={5} lg={2}>
                        <Brand
                            img="/img/brand-img-2.png"
                            name="b brand"
                            nameBackgroundColor="#110e03"
                        />
                    </Grid>
                    <Grid item xs={5} lg={2}>
                        <Brand
                            img="/img/brand-img-3.png"
                            name="c brand" 
                            nameBackgroundColor="#ff5500" 
                        />
                    </Grid>
                    <Grid item xs={5} lg={2}>
                        <Brand
                            img="/img/brand-img-4.png"
                            name="d brand" 
                            nameBackgroundColor="#110e03"
                            isLol={true} 
                        />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default HappendedIssue
