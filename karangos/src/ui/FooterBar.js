import { Typography, Toolbar } from "@material-ui/core"

export default function FooterBar(){
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <Toolbar>
            <Typography variant="caption" diplay="black">
                &copy; 2021 by <a href="mailto:airlene.antonelli@yahoo.com.br">Airlene</a> 

            </Typography>
        </Toolbar>
    )
}