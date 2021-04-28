import { Typography, Toolbar } from "@material-ui/core"

export default function FooterBar(){
    return (
        <Toolbar>
            <Typography variant="caption" diplay="black">
                &copy; 2021 by <a href="mailto:airlene.antonelli@yahoo.com.br">Airlene 
                Antonelli</a> 
            </Typography>
        </Toolbar>
    )
}